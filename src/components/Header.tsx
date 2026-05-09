import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-brand-black/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg overflow-hidden border border-brand-purple-light/30 glow-purple flex items-center justify-center bg-brand-purple">
          <img 
            src="/profile.jpg" 
            alt="Mohammad Baghersad" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to initials if image fails to load
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = 'MB';
            }}
          />
        </div>
        <div className="hidden sm:block">
          <h1 className="text-sm font-semibold tracking-wider text-white">MOHAMMAD BAGHERSAD</h1>
          <p className="text-[10px] text-brand-silver/50 font-mono uppercase tracking-[0.2em]">Mechanical & ADAS Engineer</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-brand-silver/70">
        {['ABOUT', 'PROJECTS', 'SKILLS', 'RESEARCH', 'CONTACT'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/mohammad-baghersad/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:contact@example.com" className="p-2 hover:text-white transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
