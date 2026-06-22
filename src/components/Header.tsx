import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, Moon, Sun, Check } from 'lucide-react';
import profileImg from '../assets/profile.webp';
import { site } from '../config/site';

const navItems = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' }
];

const Header = ({ theme, onThemeToggle }: { theme: 'dark' | 'light'; onThemeToggle: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [emailCopied, setEmailCopied] = useState(false);
  const manualOverrideRef = useRef(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = site.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 2000);
  };
  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const updateActiveSection = () => {
      if (manualOverrideRef.current) return;
      const scrollPos = window.scrollY + 120;
      let current = 'about';
      let closestDistance = Infinity;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPos) {
            const distance = scrollPos - sectionTop;
            if (distance < closestDistance) {
              closestDistance = distance;
              current = navItems[index].label.toLowerCase();
            }
          }
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
              src={profileImg}
              alt={site.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-wider text-white">{site.name.toUpperCase()}</p>
            <p className="text-[10px] text-brand-silver/50 font-mono uppercase tracking-[0.2em]">{site.title}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold tracking-widest text-brand-silver/60" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.label.toLowerCase());
                manualOverrideRef.current = true;
                setTimeout(() => { manualOverrideRef.current = false; }, 600);
              }}
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
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
          <div className="relative">
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full p-2 text-brand-silver/70 hover:text-white transition-colors"
              title={emailCopied ? 'Copied!' : `Copy email: ${site.email}`}
              aria-label={emailCopied ? 'Email copied' : 'Copy email address'}
            >
              {emailCopied ? <Check size={18} className="text-emerald-400" /> : <Mail size={18} />}
            </button>
            <AnimatePresence>
              {emailCopied && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-brand-purple px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>
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
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-brand-black/95 p-5 shadow-2xl shadow-black/40 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold tracking-widest text-brand-silver/70" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection(item.label.toLowerCase());
                  manualOverrideRef.current = true;
                  setTimeout(() => { manualOverrideRef.current = false; }, 600);
                }}
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
