import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Phone, MessageSquare, Check } from 'lucide-react';
import { site } from '../config/site';

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer id="contact" className="bg-brand-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-purple-light to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Stay Connected</h2>

            <div className="space-y-6">
            <button type="button" onClick={copyEmail} className="flex w-full items-center gap-4 group cursor-pointer text-left" aria-label={emailCopied ? 'Email copied' : 'Copy email address'}>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                {emailCopied
                  ? <Check size={20} className="text-emerald-400 group-hover:text-white transition-colors" />
                  : <Mail size={20} className="group-hover:text-white transition-colors" />}
              </div>
              <div>
                <div className="text-[10px] font-mono tracking-widest uppercase text-accent">
                  EMAIL
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-white font-sans">{site.email}</span>
                  <AnimatePresence>
                    {emailCopied && (
                      <motion.span
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -6 }}
                        className="whitespace-nowrap rounded-md bg-brand-purple px-2 py-0.5 text-[10px] font-semibold text-white"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </button>
            <a href={site.phoneHref} className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                <Phone size={20} className="group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-brand-silver/50 font-mono tracking-widest uppercase">PHONE</div>
                <div className="text-sm font-medium text-white">{site.phone}</div>
              </div>
            </a>
            <a href={site.telegramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                <MessageSquare size={20} className="group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-brand-silver/50 font-mono tracking-widest uppercase">TELEGRAM</div>
                <div className="text-sm font-medium text-white">{site.telegram}</div>
              </div>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                <Linkedin size={20} className="group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-[10px] text-brand-silver/50 font-mono tracking-widest uppercase">LINKEDIN</div>
                <div className="text-sm font-medium text-white">{site.linkedinHandle}</div>
              </div>
            </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-brand-purple/10 rounded-full blur-[80px] scale-75 pointer-events-none" />
            <img
              src="/robotics-illustration.svg"
              alt=""
              className="relative w-full max-w-md lg:max-w-lg h-auto"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-8 h-8 rounded bg-brand-purple flex items-center justify-center font-bold text-sm text-white force-white">MB</div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-brand-silver/40">© 2026 {site.name.toUpperCase()}</div>
              <div className="text-[10px] text-brand-silver/50">Engineering portfolio for robotics, embedded systems, and control applications.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href={site.github} aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="text-brand-silver/50 hover:text-white transition-colors"><Github size={18} /></a>
            <a href={site.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="text-brand-silver/50 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href={site.cvPath} download className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-brand-silver/60 hover:text-white hover:border-brand-purple transition-all">
              Download CV
            </a>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/50 hover:text-white hover:border-white transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
