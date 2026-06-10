import type { ElementType } from 'react';
import { motion } from 'motion/react';
import { Cpu, Settings, Brain, Radio, Zap, ShieldCheck, GraduationCap, Building, BookOpen } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string; skills: string[]; icon: ElementType }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 glass-card border-none bg-brand-slate/30 group hover:bg-brand-slate/50 transition-all duration-500"
  >
    <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-6 text-brand-purple-light group-hover:bg-brand-purple group-hover:text-white transition-all">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-sm text-brand-silver/60">
          <div className="w-1 h-1 rounded-full bg-brand-purple-light" />
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

const SkillsResearch = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-brand-black/95 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-brand-purple-light font-mono text-xs tracking-widest uppercase mb-2">Capabilities</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Technical <br />Core</h2>
              <p className="text-brand-silver/60 text-sm leading-relaxed mb-8">
                Mastery of cross-disciplinary engineering principles, combining traditional mechanical engineering with modern AI and control systems.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-brand-purple-light group-hover:text-brand-purple-light transition-all">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">SYSTEM INTEGRATION</div>
                    <div className="text-[10px] text-brand-silver/40">Hardware-in-the-loop testing</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-brand-purple-light group-hover:text-brand-purple-light transition-all">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">RELIABILITY ENGINEERING</div>
                    <div className="text-[10px] text-brand-silver/40">Fault-tolerant architecture</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SkillCategory 
              title="Robotics" 
              icon={Settings} 
              skills={["SolidWorks 3D Design", "Altium Designer", "Kinematics & Dynamics", "Gazebo / Webots"]} 
            />
            <SkillCategory 
              title="Control Systems" 
              icon={Radio} 
              skills={["MPC & Optimal Control", "PID / Kalmann Filters", "State Estimation", "MATLAB / Simulink"]} 
            />
            <SkillCategory 
              title="AI & Vision" 
              icon={Brain} 
              skills={["Deep Learning (PyTorch)", "Point Cloud Processing", "Object Detection", "Sensor Fusion"]} 
            />
            <SkillCategory 
              title="Embedded Systems" 
              icon={Cpu} 
              skills={["C / C++ / Python", "Real-time OS (RTOS)", "STM32 Microcontrollers", "PIC Microcontrollers", "Raspberry Pi"]} 
            />
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="pt-24 border-t border-white/5 px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-brand-purple-light/5 border border-brand-purple-light/10 p-3 sm:p-4 lg:p-6 rounded-3xl mx-auto w-full"
          >
            <div className="mb-12">
              <div className="text-brand-purple-light font-mono text-[11px] md:text-xs tracking-widest uppercase mb-3">Education</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Academic Background</h2>
            </div>

            <div className="grid gap-2 grid-cols-1">
              {/* Bachelor's */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative glass-card p-4 sm:p-5 border border-brand-purple-light/30 hover:border-brand-purple-light transition-all duration-300 bg-gradient-to-br from-brand-purple-light/20 to-transparent"
              >
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-purple-light/25 border border-brand-purple-light/40 flex items-center justify-center group-hover:bg-brand-purple-light/50 transition-all">
                    <GraduationCap size={16} className="text-brand-purple-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-purple-light mb-2 leading-none">
                      <span>Bachelor's Degree</span>
                      <span className="block">2019-2023</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Mechanical Engineering</h3>
                    <p className="text-brand-silver/70">University of Isfahan</p>
                  </div>
                </div>
              </motion.div>

              {/* Master's */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative glass-card p-4 sm:p-5 border border-brand-purple-light/30 hover:border-brand-purple-light transition-all duration-300 bg-gradient-to-br from-brand-purple-light/20 to-transparent"
              >
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-purple-light/25 border border-brand-purple-light/40 flex items-center justify-center group-hover:bg-brand-purple-light/50 transition-all">
                    <Building size={16} className="text-brand-purple-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-purple-light mb-2 leading-none">
                      <span>Master's Degree</span>
                      <span className="block">2024-2026</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Mechatronics Engineering</h3>
                    <p className="text-brand-silver/70">Shahid Beheshti University </p>
                  </div>
                </div>
              </motion.div>

              {/* PhD */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative glass-card p-4 sm:p-5 border border-brand-purple-light/30 hover:border-brand-purple-light transition-all duration-300 bg-gradient-to-br from-brand-purple-light/20 to-transparent"
              >
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-purple-light/25 border border-brand-purple-light/40 flex items-center justify-center group-hover:bg-brand-purple-light/50 transition-all">
                    <BookOpen size={16} className="text-brand-purple-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-purple-light mb-2 leading-none">
                      <span>PhD Candidate</span>
                      <span className="block">2026-Present</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-1 leading-tight">Mechatronics Engineering</h3>
                    <p className="text-brand-silver/70">University of Tehran </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsResearch;
