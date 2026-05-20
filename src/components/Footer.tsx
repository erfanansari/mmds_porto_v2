import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, GraduationCap, Send, ArrowUp, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('robotmb@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-purple-light to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tight">Stay Connected</h2>
            <p className="text-brand-silver/60 mb-12 max-w-md font-light leading-relaxed">
              Open to collaborative research, consulting opportunities, or technical discussions regarding the future of ADAS and Mechatronics.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:robotmb@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                  <Mail size={20} className="group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase text-brand-purple">
                    EMAIL
                  </div>
                  <div className="text-sm font-medium text-white font-sans">robotmb@gmail.com</div>
                </div>
              </a>
              <a href="tel:+989136399987" className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                  <Phone size={20} className="group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">PHONE</div>
                  <div className="text-sm font-medium text-white">+98-9136399987</div>
                </div>
              </a>
              <a href="https://t.me/mmdba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                  <MessageSquare size={20} className="group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">TELEGRAM</div>
                  <div className="text-sm font-medium text-white">@mmdba</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mohammad-baghersad/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                  <Linkedin size={20} className="group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">LINKEDIN</div>
                  <div className="text-sm font-medium text-white">mohammad-baghersad</div>
                </div>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-purple group-hover:border-brand-purple transition-all duration-300">
                  <GraduationCap size={20} className="group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-[10px] text-brand-silver/40 font-mono tracking-widest uppercase">GOOGLE SCHOLAR</div>
                  <div className="text-sm font-medium text-white">View Publications</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 bg-brand-slate/20"
          >
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-brand-silver/50 ml-1">NAME</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full h-12 px-4 bg-brand-black border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-brand-silver/50 ml-1">EMAIL</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full h-12 px-4 bg-brand-black border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-brand-silver/50 ml-1">MESSAGE</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4} 
                  placeholder="How can we collaborate?" 
                  className="w-full px-4 py-3 bg-brand-black border border-white/10 rounded-lg focus:outline-none focus:border-brand-purple transition-colors text-white text-sm resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-brand-purple hover:bg-brand-purple-light text-white font-bold rounded-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                SEND TRANSMISSION
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-8 h-8 rounded bg-brand-purple flex items-center justify-center font-bold text-sm">MB</div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-brand-silver/40">© 2026 MOHAMMAD BAGHERSAD</div>
              <div className="text-[10px] text-brand-silver/50">Engineering portfolio for robotics, embedded systems, and control applications.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="https://github.com/mmd-bsd" className="text-brand-silver/50 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/mohammad-baghersad/" className="text-brand-silver/50 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="/CV-Mohammad-Baghersad.pdf" download className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-brand-silver/60 hover:text-white hover:border-brand-purple transition-all">
              Download CV
            </a>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver/50 hover:text-white hover:border-white transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
