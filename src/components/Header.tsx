import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from 'lucide-react';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'CONTACT', href: '#contact' }
];

const Header = ({ theme, onThemeToggle }: { theme: 'dark' | 'light'; onThemeToggle: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const updateActiveSection = () => {
      const scrollPos = window.scrollY + 120;
      let current = 'about';

      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top + window.scrollY <= scrollPos) {
          current = navItems[index].label.toLowerCase();
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-brand-black/90 backdrop-blur-xl px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border border-brand-purple-light/30 glow-purple flex items-center justify-center bg-brand-purple">
            <img
              src="/profile.webp"
              alt="Mohammad Baghersad"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) parent.textContent = 'MB';
              }}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-semibold tracking-wider text-white">MOHAMMAD BAGHERSAD</h1>
            <p className="text-[10px] text-brand-silver/50 font-mono uppercase tracking-[0.2em]">Robotics & Embedded Systems</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-widest text-brand-silver/60">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors ${
                activeSection === item.label.toLowerCase()
                  ? 'text-white underline underline-offset-4 decoration-brand-purple-light'
                  : 'hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com/mmd-bsd" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-baghersad/" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:robotmb@gmail.com" className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors">
            <Mail size={18} />
          </a>
          <button
            onClick={onThemeToggle}
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-brand-silver/70 hover:text-white transition-colors"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-brand-silver/70 hover:text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-brand-black/95 p-5 shadow-2xl shadow-black/40 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold tracking-widest text-brand-silver/70">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3 transition-colors ${
                  activeSection === item.label.toLowerCase()
                    ? 'bg-brand-purple/10 text-white'
                    : 'hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
