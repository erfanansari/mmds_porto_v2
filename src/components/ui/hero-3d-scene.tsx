import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * Hero3DScene — a lightweight, code-only animated hero background.
 *
 * Replaces the former Spline (WebGL) + WebGL shader setup. Instead of running a
 * real-time 3D engine (multi-MB JS + two GPU contexts), this renders a small set
 * of on-brand geometric forms across several CSS depth layers (`translateZ`)
 * inside a `perspective` container, and nudges the whole scene with the mouse
 * for a subtle parallax "3D follows the cursor" feel.
 *
 * Why this is cheap: no WebGL, no media download, no heavy dependency — just CSS
 * transforms (GPU-composited) and one rAF loop that only runs while visible.
 *
 * Motion tiers:
 *  - prefers-reduced-motion → static (no animation, no parallax)
 *  - low-power device        → ambient motion only (parallax disabled)
 *  - otherwise (fine pointer)→ ambient motion + mouse parallax
 *
 * Power management: ambient animation + the parallax loop pause when the hero
 * scrolls out of view (IntersectionObserver) or the tab is hidden.
 */
const Hero3DScene = () => {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const finePointer = useMediaQuery('(pointer: fine)');
  const [lowPower, setLowPower] = useState(false);
  const [paused, setPaused] = useState(false);

  const sceneRef = useRef<HTMLDivElement>(null);
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });

  // Detect low-power devices once, at mount (each signal feature-detected).
  useEffect(() => {
    const conn = (navigator as unknown as { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const slowNet = !!conn?.effectiveType && /^(2g|slow-2g)$/.test(conn.effectiveType);
    const saveData = conn?.saveData === true;
    const cores = navigator.hardwareConcurrency;
    const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory;
    setLowPower(slowNet || saveData || (typeof cores === 'number' && cores < 4) || (typeof mem === 'number' && mem < 4));
  }, []);

  // Pause when the hero leaves the viewport or the tab is hidden.
  useEffect(() => {
    const el = sceneRef.current?.parentElement; // observe the scene root (fills the hero)
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);

    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Ambient animation runs unless reduced-motion or paused.
  const animate = !reduceMotion && !paused;
  // Mouse parallax only for fine pointers, with motion allowed, on capable devices.
  const parallaxEnabled = finePointer && !reduceMotion && !lowPower && !paused;

  useEffect(() => {
    if (!parallaxEnabled) return;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      // Normalize cursor to [-1, 1] from viewport center.
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      // Subtle tilt range (degrees). X tilt follows vertical cursor, Y follows horizontal.
      targetRot.current = { x: ny * 5, y: nx * 7 };
    };

    const loop = () => {
      const t = targetRot.current;
      const c = currentRot.current;
      // Ease toward the target for smooth, laggy parallax.
      c.x += (t.x - c.x) * 0.05;
      c.y += (t.y - c.y) * 0.05;
      if (sceneRef.current) {
        sceneRef.current.style.transform = `rotateX(${c.x.toFixed(2)}deg) rotateY(${c.y.toFixed(2)}deg)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [parallaxEnabled]);

  return (
    <div className="hero3d-root absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        ref={sceneRef}
        data-paused={animate ? 'false' : 'true'}
        className="hero3d-scene absolute inset-0"
      >
        {/* Layer 1 — deepest: soft glow + faint orbiting ring */}
        <div className="hero3d-layer absolute inset-0" style={{ transform: 'translateZ(-300px)' }}>
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="w-[600px] h-[600px] rounded-full blur-[110px] bg-brand-purple/40"
              style={{ animation: 'geo-pulse 9s ease-in-out infinite' }}
            />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="w-[460px] h-[460px] rounded-full border border-brand-purple-light/10"
              style={{ animation: 'hero3d-spin 60s linear infinite' }}
            />
          </div>
        </div>

        {/* Layer 2 — mid-back: floating panel + counter-rotating ring */}
        <div className="hero3d-layer absolute inset-0" style={{ transform: 'translateZ(-150px)' }}>
          <div
            className="absolute top-[16%] left-[12%] w-48 h-48 rounded-[2.5rem] bg-gradient-to-br from-brand-purple-light/12 to-brand-purple/6 rotate-12"
            style={{ animation: 'float 22s ease-in-out infinite' }}
          />
          <div className="absolute bottom-[18%] right-[13%] w-40 h-40 rounded-full border border-brand-purple-light/15">
            <div
              className="w-full h-full rounded-full border-t border-brand-purple-light/30"
              style={{ animation: 'hero3d-spin-rev 50s linear infinite' }}
            />
          </div>
        </div>

        {/* Layer 3 — mid plane: dots + a drifting line */}
        <div className="hero3d-layer absolute inset-0" style={{ transform: 'translateZ(0px)' }}>
          <div
            className="absolute top-[30%] left-[26%] w-4 h-4 rounded-full bg-brand-purple-light/30"
            style={{ animation: 'geo-pulse 6s ease-in-out infinite' }}
          />
          <div
            className="absolute top-[62%] right-[28%] w-3 h-3 rounded-full bg-brand-purple/25"
            style={{ animation: 'geo-pulse 8s ease-in-out 2s infinite' }}
          />
          <div
            className="absolute top-[44%] left-[8%] w-64 h-px bg-gradient-to-r from-transparent via-brand-purple-light/20 to-transparent rotate-[15deg]"
            style={{ animation: 'float 20s ease-in-out 2s infinite' }}
          />
        </div>

        {/* Layer 4 — foreground: brightest, moves most with the cursor */}
        <div className="hero3d-layer absolute inset-0" style={{ transform: 'translateZ(160px)' }}>
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="w-56 h-56 rounded-full blur-2xl bg-brand-purple-light/20"
              style={{ animation: 'float 18s ease-in-out infinite' }}
            />
          </div>
          <div className="absolute top-[24%] right-[22%] w-24 h-24 rounded-full border border-brand-purple-light/25">
            <div
              className="w-full h-full rounded-full border-t border-brand-purple-light/40"
              style={{ animation: 'hero3d-spin 40s linear infinite' }}
            />
          </div>
          <div
            className="absolute bottom-[28%] left-[24%] w-5 h-5 rounded-full bg-brand-purple-light/25"
            style={{ animation: 'geo-pulse 7s ease-in-out 1s infinite' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero3DScene;
