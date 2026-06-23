import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Linkedin, ChevronRight, DownloadCloud } from 'lucide-react';
import profileImg from '../assets/profile.webp';
import splineBg from '../assets/spline-bg.png';
import { site } from '../config/site';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useIsVisible } from '@/hooks/useIsVisible';

const ShaderBackground = lazy(() => import('@/components/ui/shader-background'));
const SplineSceneLazy = lazy(() =>
  import('@/components/ui/splite').then((m) => ({ default: m.SplineScene }))
);

const skillsList = [
  'STM32',
  'Raspberry Pi',
  'MATLAB',
  'Python',
  'SolidWorks',
  'Computer Vision',
  'Control Systems',
  'Robotics',
];

const Hero = () => {
  const { scrollY } = useScroll();
  const engineerOpacity = useTransform(scrollY, [0, 300], [0.2, 0]);
  const engineerX = useTransform(scrollY, [0, 300], [0, -60]);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [heroRef, heroVisible] = useIsVisible(0.05);
  const [splineDeferred, setSplineDeferred] = useState(false);

  useEffect(() => {
    if (heroVisible && !splineDeferred) {
      const id = setTimeout(() => setSplineDeferred(true), 300);
      return () => clearTimeout(id);
    }
  }, [heroVisible, splineDeferred]);

  return (
    <section
      ref={heroRef}
      id="about"
      className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 pb-16 overflow-hidden bg-brand-black"
    >
      {/* 21st.dev WebGL Shader Background — desktop only, deferred */}
      {isDesktop && (
        <Suspense fallback={null}>
          <ShaderBackground />
        </Suspense>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/80 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-brand-black/20 pointer-events-none" />

      {/* Spline 3D scene — desktop: live, mobile: static screenshot */}
      {isDesktop ? (
        splineDeferred && (
          <div className="absolute inset-0 z-[1] w-full h-full pointer-events-none">
            <div className="w-full h-full opacity-25 pointer-events-auto">
              <Suspense fallback={null}>
                <SplineSceneLazy
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </Suspense>
            </div>
          </div>
        )
      ) : (
        <div className="absolute inset-0 z-[1] w-full h-full pointer-events-none">
          <img
            src={splineBg}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        </div>
      )}

      {/* Fade-to-black mask at bottom — smooth scroll transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-30 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent pointer-events-none" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto w-full flex pt-40 pb-16 pointer-events-none"
      >
        <div className="w-full">
          {/* --- Name + Photo row --- */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-10 w-full pointer-events-none">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none">
              <h1 className="text-[2.7rem] md:text-[4rem] lg:text-[5.4rem] font-bold tracking-tighter text-white leading-[0.9]">
                MOHAMMAD
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-white hero-name-gradient">
                  BAGHERSAD
                </span>
              </h1>

              <div className="mt-6 px-4 py-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white uppercase rounded-full backdrop-blur-sm">
                Robotics & Embedded Systems Engineer
              </div>
            </div>

            {/* --- Profile photo --- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
              className="shrink-0 pointer-events-auto"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 group">
                <motion.div
                  initial={{ opacity: 0.25, scale: 1 }}
                  whileHover={{ scale: 1.08, opacity: 0.55 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -inset-4 rounded-full bg-brand-purple-light/15 blur-2xl"
                />
                <div className="relative rounded-full overflow-hidden border-4 border-white/10 glow-purple bg-brand-slate/50 group">
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full origin-center"
                  >
                    <img
                      src={profileImg}
                      alt="Mohammad Baghersad"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-40 transition-opacity duration-500 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- Bio --- */}
          <p className="text-lg md:text-xl text-brand-silver/80 max-w-3xl font-light leading-relaxed mb-10">
            Mechatronics engineer and researcher specializing in robotics, control systems,
            embedded design, and computer vision. I develop high-reliability prototypes using
            STM32, Raspberry Pi, MATLAB, Python, and SolidWorks for advanced automation
            projects.
          </p>

          {/* --- CTA Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pointer-events-auto">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={site.cvPath}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition-all hover:bg-white/10"
              download
            >
              <DownloadCloud size={18} /> Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-brand-purple-light bg-brand-purple/90 px-6 py-3 text-sm text-white force-white transition-all hover:bg-brand-purple-light"
            >
              View Projects
              <ChevronRight size={18} />
            </motion.a>
          </div>

          {/* --- Skill tags --- */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start pointer-events-auto">
            {skillsList.map((item) => (
              <motion.span
                key={item}
                whileHover={{
                  scale: 1.08,
                  borderColor: 'rgba(196, 181, 253, 0.4)',
                  color: 'rgba(196, 181, 253, 1)',
                }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-silver/70 transition-colors"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Parallax "ENGINEER" background text --- */}
      <motion.div
        style={{ opacity: engineerOpacity, x: engineerX }}
        className="absolute right-0 bottom-20 hidden lg:block pointer-events-none"
      >
        <div className="text-[200px] font-bold text-white/[0.03] select-none font-mono">
          ENGINEER
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
