# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio for **Mohammad Baghersad** (robotics / embedded / mechatronics engineer). Built with **Vite + React 19 + TypeScript + Tailwind CSS v4**. Deployed to Netlify as a static SPA.

## Commands

```bash
npm run dev        # Vite dev server on http://localhost:3000 (bound to 0.0.0.0)
npm run build      # Production build → dist/
npm run preview    # Preview the production build
npm run lint       # Type-check only: tsc --noEmit  (there is NO ESLint/Prettier setup)
npm run clean      # rm -rf dist
```

There is **no test framework** in this project. "Lint" means `tsc --noEmit` — always run it before considering work done.

## Git workflow — REQUIRES APPROVAL (project rule)

A Cursor rule (`.cursor/rules/git-approval.mdc`, `alwaysApply: true`) mandates: **never `git commit` or `git push` without explicit per-action user approval.** Before each, summarize the changes (or the target branch) and ask for confirmation. A general earlier "commit/push" instruction does not carry over — ask again at the moment of each action.

## Architecture

### Top-level state & routing (no router library)
There is no `react-router`. `src/App.tsx` holds all top-level state:

- **Theme** (`'dark' | 'light'`): initialized from `localStorage` / `prefers-color-scheme`, persisted and mirrored to `document.documentElement.dataset.theme`. Toggled in `Header`. This drives the CSS variable theming below.
- **Project detail view** is hash-based: `#project-{slug}` opens `ProjectDetail`; `#projects` (or no hash) shows the gallery. `App` listens to `hashchange`/`popstate` and renders `ProjectDetail` **instead of** `ProjectGallery`/`Hero`/`Skills`/`Footer` when a project is selected. Opening a project saves `scrollY` (`savedScroll`) and scrolls to top; closing restores it. When adding a section, remember it is conditionally unmounted while a project detail is open.

### Section → component → anchor map (drives `Header` scroll-spy)
`Header` (src/components/Header.tsx) animates an active nav underline by measuring scroll position against these anchors — keep these IDs stable:

| Nav label | ID      | Component (file)                          |
|-----------|---------|-------------------------------------------|
| ABOUT     | `about` | `Hero` (src/components/Hero.tsx)          |
| PROJECTS  | `projects` | `ProjectGallery` (src/components/ProjectGallery.tsx) |
| SKILLS    | `skills`   | `SkillsResearch` (src/components/SkillsResearch.tsx) |
| EDUCATION | `education` | `<div>` inside `SkillsResearch` (line ~95) |
| CONTACT   | `contact`  | `Footer` (src/components/Footer.tsx)      |

`Hero` has a scroll-spy **override** mechanism: clicking a nav link calls `holdActiveOverride()`, which pins the active section for ~900ms so smooth-scroll doesn't fight the active-highlight logic.

### Content sources (edit content here, not in components)
- **`src/config/site.ts`** — single source of truth for name, title, email, phone, social links, CV path, OG image. `Header`, `Hero`, `Footer` all import from here.
- **`src/data/projects.ts`** — `ProjectData[]` (typed interface in the same file). Add/edit projects here.
- **`src/data/projectImages.ts`** — imports the actual image files and groups them into arrays. **Images live at the repo root in `project image/` (and `project image webp/`), not under `src/`**, imported via relative `../../project image/...` paths. Vite processes these at build time. When adding images, drop them in those folders and reference them here.

### Theming (Tailwind v4 `@theme` + CSS-variable dark/light)
`src/index.css` defines brand tokens in `@theme`: `brand-purple`, `brand-purple-light`, `brand-purple-deep`, `brand-black`, `brand-slate`, `brand-silver`. Use these (`bg-brand-black`, `text-brand-silver`, …) instead of raw hex.

- Dark is default; **light mode is achieved purely by overriding these CSS variables under `html[data-theme='light']`** (no Tailwind `dark:` variants are used).
- Because light mode flips the background light, `index.css` contains many targeted overrides for utility classes like `.text-white`, `.bg-white/5`, `.bg-white/10`, `.border-white/10`. **If you add a new component that uses `text-white`/`bg-white/*` and must stay light in light mode, you may need to add an override there.** Use the `.force-white` class to opt out and keep text white in both themes.
- Reusable component classes live in `@layer components` (`glass-card`, `project-card-frame`, `project-cover`, `btn-primary`, `glow-purple`, `text-accent`, `text-muted`). Prefer these for consistency.

### Performance patterns (deliberate — preserve them)
- **Code-splitting:** every section except `Header` is `React.lazy` + `Suspense` in `App.tsx`. New heavy sections should follow the same pattern with a `SectionFallback`.
- **No WebGL / no heavy 3D libraries.** The hero background is a single static, optimized image — `src/assets/hero-robot.jpg` (a dark, moody humanoid-robot photo, ~98 kB, full-bleed `object-cover` in `Hero.tsx`) with brand-black gradient overlays for text contrast. It replaced an earlier pure-CSS depth/parallax scene (`src/components/ui/hero-3d-scene.tsx`, now **removed**), which itself replaced a Spline/WebGL setup that shipped a 4.4 MB JS chunk and ran two GPU contexts (which broke the site on weak devices). Static = fast, GPU-free, works on every device. Image source: Pexels (free for commercial use, no attribution required).
- `vite.config.ts` splits `framer-motion` into its own manual chunk.

### Conventions & helpers
- Path alias **`@/` → `src/`** (configured in both `tsconfig.json` and `vite.config.ts`). Both `@/...` and relative imports appear in the codebase.
- `src/lib/utils.ts` → `cn()` (clsx + tailwind-merge). Use it when composing conditional Tailwind classes.
- `src/hooks/`: `useMediaQuery` (generic `prefers-*` / pointer media-query hook).
- Animation is **Framer Motion**, globally wrapped with `MotionConfig reducedMotion="user"` in `main.tsx`; `index.css` also disables transitions/animations under `prefers-reduced-motion`. Respect reduced-motion when adding motion.

### `vite.config.ts` notes
- `DISABLE_HMR=true` disables HMR (a legacy AI Studio artifact — a comment says "Do not modify"; leave the HMR block as-is).

## Build & deploy
- Netlify config (`netlify.toml`): build command `npm run build`, publish `dist/`, SPA catch-all redirect `/* → /index.html` (200) so deep links/hash routes work.
- Static SEO/social assets live in `public/`: `favicon.svg`, `og-image.webp`, `robots.txt`, `sitemap.xml`, `CV-Mohammad-Baghersad.pdf`, `robotics-illustration.svg`. `index.html` carries OG/Twitter meta and JSON-LD `Person` schema.
- `.env.example` documents `APP_URL` (hosted URL); it is injected at runtime and referenced for self-referential links.
