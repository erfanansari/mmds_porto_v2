import { motion } from 'motion/react';
import { Linkedin, ChevronRight, DownloadCloud } from 'lucide-react';
import profileImg from '../assets/profile.webp';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 overflow-hidden bg-brand-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[560px] h-[560px] bg-brand-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[560px] h-[560px] bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10 mb-10 w-full">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                MOHAMMAD <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-white">
                  BAGHERSAD
                </span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 px-4 py-2 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white uppercase rounded-full backdrop-blur-sm"
              >
                Robotics & Embedded Systems Engineer
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white/10 glow-purple bg-brand-slate/50 group">
                <img
                  src={profileImg}
                  alt="Mohammad Baghersad"
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-40 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          <p className="text-lg md:text-xl text-brand-silver/80 max-w-3xl font-light leading-relaxed mb-10">
            Mechatronics engineer and researcher specializing in robotics, control systems, embedded design, and computer vision. I develop high-reliability prototypes using STM32, Raspberry Pi, MATLAB, Python, and SolidWorks for advanced automation projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/mohammad-baghersad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Linkedin size={18} /> Connect on LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="/CV-Mohammad-Baghersad.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white transition-all hover:bg-white/10"
              download
            >
              <DownloadCloud size={18} /> Download CV
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-brand-purple-light bg-brand-purple/90 px-6 py-3 text-sm text-white transition-all hover:bg-brand-purple-light"
            >
              View Projects
              <ChevronRight size={18} className="transition-transform" />
            </motion.a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
            {['STM32', 'Raspberry Pi', 'MATLAB', 'Python', 'SolidWorks', 'Computer Vision', 'Control Systems', 'Robotics'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-silver/70">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute right-0 bottom-20 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="text-[200px] font-bold text-white/5 select-none font-mono">ENGINEER</div>
      </motion.div>
    </section>
  );
};

export default Hero;
