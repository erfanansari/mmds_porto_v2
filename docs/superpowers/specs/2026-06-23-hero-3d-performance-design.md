# Hero 3D Performance Redesign — Design Spec

**Date:** 2026-06-23
**Status:** Approved (design)
**Scope:** Replace the heavy client-side 3D in the hero with a light, universal, code-only animated 3D background.

## Problem

The hero runs two simultaneous WebGL contexts:

1. `src/components/ui/shader-background.tsx` — a raw WebGL fragment shader (animated grid/lines).
2. `src/components/ui/splite.tsx` — the Spline 3D scene (`@splinetool/react-spline` + `@splinetool/runtime`).

Symptoms reported by the owner: the site is slow and **does not work on some devices**.

Root cause, confirmed from the production build (`dist/assets/`):

- The Spline runtime is a **4.4 MB** JS chunk (`spline-*.js`) — by far the largest asset in the app. It is lazy-loaded into its own chunk (good), but on desktop it downloads 4.4 MB and spins up a full WebGL engine.
- **Two concurrent WebGL contexts** strain weak/integrated GPUs — the likely cause of the "not working on some devices" failures.
- Both effects animate **every frame forever**, so the cost is sustained CPU/GPU/battery drain, not just a one-time load.

## Goals (non-negotiable)

1. **Genuinely lighter** — remove the multi-megabyte Spline payload and the dual-WebGL-context strain.
2. **Faster** — hero paints quickly; no large JS dependency on the critical path.
3. **Compatible with all platforms** — works on every device, including the weak/old ones that currently fail.
4. **Keep a real 3D feel** — preserve a sense of depth and dimension.
5. **Subtle mouse interactivity** — the background subtly responds to the cursor.
6. **Fully self-contained** — implementable in a single session with **no asset the owner must produce** (no video render, no external file).

## Decision

**Replace both WebGL effects with a single, code-only CSS + SVG 3D scene**, driven by mouse parallax, with motion tiers that adapt to reduced-motion and low-power devices.

### Why not the alternatives

- **Keep live Spline, capability-gated:** does not actually get lighter — it only narrows *who* pays the 4.4 MB + WebGL cost. Rejected.
- **Custom WebGL/Three.js shader:** still WebGL → reintroduces the "fails on some devices" surface that is the owner's primary complaint. Rejected.
- **Pre-rendered 3D video loop + parallax:** would satisfy the goals, but requires the owner to render their Spline scene to a seamless looping video — violates goal #6 (fully self-contained). Rejected for this session.

Pure CSS 3D transforms are GPU-accelerated yet run on every browser, so they eliminate the WebGL failure class entirely while delivering credible depth and parallax for an abstract, low-opacity backdrop.

## Architecture

### New component: `src/components/ui/hero-3d-scene.tsx`

A self-contained animated hero background. Responsibilities:

- Render a `perspective` container with `transform-style: preserve-3d`.
- Several depth layers (`transform: translateZ(...)`) holding on-brand glowing geometric forms (built around the existing `GeometricBg` aesthetic and the `brand-purple` palette), rendered as CSS + SVG.
- **Ambient motion** via CSS keyframes (reuse/extend the existing `float`, `geo-pulse`, `geo-spin-slow` keyframes already in `src/index.css`).
- **Mouse parallax** — cursor position drives a small `rotateX/rotateY` on the whole scene, producing real parallax depth. Throttled with `requestAnimationFrame`. Only active for fine-pointer (mouse) devices via `useMediaQuery('(pointer: fine)')`; touch devices get ambient motion only.
- `pointer-events-none`; positioned behind hero content (z-0/z-1); opacity tuned to match today's subtle look.
- **No WebGL, no external asset, no large dependency.**

### Optional small hook: `src/hooks/useHeroSceneFlags.ts`

Returns `{ reducedMotion, lowPower, finePointer }` computed once at mount:

- `reducedMotion` — `useMediaQuery('(prefers-reduced-motion: reduce)')`.
- `lowPower` — `true` if `navigator.connection?.saveData`, slow `effectiveType` (`2g`/`slow-2g`), `navigator.hardwareConcurrency < 4`, or `navigator.deviceMemory < 4` (each feature-detected; absent APIs are ignored).
- `finePointer` — `useMediaQuery('(pointer: fine)')`.

(If this stays a single consumer, the logic may be inlined in `hero-3d-scene.tsx` instead — YAGNI. Decide at implementation time based on readability.)

### Changes to `src/components/Hero.tsx`

- Remove the lazy `ShaderBackground` import and usage.
- Remove the lazy `SplineSceneLazy` import, the `splineDeferred` state + its `useEffect`, and the `isDesktop` gating that fed Spline.
- Replace the desktop/mobile background branches with a single `<Hero3DScene />`.
- `Hero.tsx` becomes purely layout + the scene. The `useMediaQuery` and `useIsVisible` imports are kept only if still used elsewhere in the file; otherwise removed.

The new scene reuses the **aesthetic and the existing CSS keyframes** (`float`, `geo-pulse`, `geo-spin-slow` already in `src/index.css`) from `GeometricBg`, but is self-contained and does **not** import `GeometricBg`. Since `GeometricBg` is only used by `Hero.tsx`'s mobile branch (which this change removes), it becomes unused and is deleted in cleanup.

## Motion tiers (fallback / power management)

A single renderer adapts by motion tier (simpler than the rejected media-based tiers):

| Condition | Behavior |
|---|---|
| `prefers-reduced-motion: reduce` | Scene renders static — shapes present, **no animation, no parallax**. (The global reduced-motion rule already in `src/index.css` disables transitions/animations; the component additionally skips mounting the parallax effect.) |
| Low-power signals (`saveData`, slow effective type, low cores/memory) | Scene renders with ambient motion, **parallax and heavy blur disabled**. |
| Everything else (desktop + capable mobile, fine pointer) | Full 3D scene + mouse parallax. |

**Power management (runtime):**

- Pause ambient work when the hero leaves the viewport (`IntersectionObserver` on the hero `<section>`): set `animation-play-state: paused` on the layers and stop the parallax rAF loop.
- Pause when the tab is hidden (`visibilitychange`).
- Resume on re-entry / refocus.

## Cleanup (where the 4.4 MB leaves the build)

- Delete `src/components/ui/splite.tsx`.
- Delete `src/components/ui/shader-background.tsx`.
- Delete `src/components/ui/geometric-bg.tsx` (now unused — its aesthetic/keyframes are absorbed into `hero-3d-scene.tsx`).
- Remove `@splinetool/react-spline` and `@splinetool/runtime` from `package.json` dependencies.
- Remove the now-dead Spline manual chunk from `vite.config.ts` (`manualChunks` branch for `@splinetool`). Keep the `framer-motion` chunk.
- Remove any now-unused imports/state from `Hero.tsx`.

## Verification

- `npm run lint` (`tsc --noEmit`) passes with no errors.
- `npm run build` succeeds; confirm:
  - No `spline-*.js` chunk in `dist/assets/`.
  - No `shader-background` chunk.
  - Total `dist/assets` JS drops from ~4.7 MB (spline 4.4 MB + index 207 KB + framer-motion 144 KB) toward ~350 KB.
- Runtime checks:
  - Zero WebGL contexts on the page (DevTools → no canvas/WebGL contexts from the hero).
  - Hero paints quickly; no large JS fetched on the critical path.
  - Reduced-motion: scene is static.
  - Low-power simulation: parallax disabled.
  - Scrolling the hero out of view frees the frame work (animations paused).

## Out of scope (YAGNI)

- Replacing the existing project-gallery / skills / footer animations.
- Re-introducing any WebGL, Three.js, or shader.
- A pre-rendered video asset (explicitly deferred — requires owner-produced media).
- Changes to routing, theming tokens, or content data.
- Any backend / deployment changes beyond the lighter static build.

## Risks

- **"Real 3D feel" fidelity:** pure CSS 3D may read as "floating layered shapes" rather than solid 3D objects. Mitigation: the original Spline scene was already abstract and viewed at ~0.25 opacity behind content, so layered CSS 3D with depth + parallax is expected to match the perceived aesthetic. If the result looks flat, add more depth layers / stronger parallax range before considering any heavier technique.
- **Low-power detection is heuristic:** the signals (`hardwareConcurrency`, `deviceMemory`, `connection`) are not universally available or precise. Mitigation: degrade gracefully (treat missing APIs as "not low-power"); CSS 3D is already cheap, so a false negative just runs a light effect.
