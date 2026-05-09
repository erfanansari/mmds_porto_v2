import { motion } from 'motion/react';
import { Linkedin, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 md:px-12 pt-32 overflow-hidden bg-brand-black">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px]" />
        
        {/* Abstract Grid Line */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 mb-10">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9] text-center lg:text-left">
                MOHAMMAD <br className="hidden sm:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-white">
                  BAGHERSAD
                </span>
              </h1>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 px-3 py-1.5 bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono tracking-[0.2em] text-white uppercase rounded-sm backdrop-blur-sm"
              >
                PhD Candidate @ Shahid Beheshti
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="shrink-0"
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 glow-purple bg-brand-slate/50 group">
                <img 
                  src="/profile.jpg" 
                  alt="Mohammad Baghersad" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center text-4xl font-bold text-white/5 font-mono';
                      fallback.innerText = 'MB';
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          <p className="text-lg md:text-xl text-brand-silver/80 max-w-2xl font-light leading-relaxed mb-10 text-center lg:text-left">
            Mechatronic Engineer and ADAS Algorithm Designer specializing in 
            <span className="text-white font-normal"> autonomous systems </span> 
            and 
            <span className="text-white font-normal"> intelligent control</span>. 
            Currently pioneering research in high-reliability perception for future mobility.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mohammad-baghersad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white font-medium flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Accent */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute right-0 bottom-20 hidden lg:block opacity-20 pointer-events-none"
      >
        <div className="text-[200px] font-bold text-white/5 select-none font-mono">
            ENGINEER
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
