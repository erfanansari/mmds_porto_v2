import { motion } from 'motion/react';
import { Cpu, Settings, Brain, Radio, Zap, ShieldCheck, GraduationCap, Building, BookOpen } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: { title: string, skills: string[], icon: any, key?: any }) => (
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
    <section id="skills" className="py-24 px-6 md:px-12 bg-brand-black/95 relative overflow-hidden">
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
        <div id="education" className="pt-24 border-t border-white/5 -mx-6 md:-mx-12 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-brand-purple/10 border border-brand-purple/30 p-10 rounded-3xl backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-black/0" />
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-3xl bg-brand-purple/30 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-brand-purple-light">
                    <path d="M21 8l-9-5-9 5 9 5 9-5z" />
                    <path d="M12 13v9" />
                    <path d="M3 8.5l9 5 9-5" />
                    <path d="M3 11.5l9 5 9-5" />
                  </svg>
                </div>
                <div>
                  <div className="text-brand-purple-light font-mono text-xs tracking-widest uppercase">Education</div>
                  <h2 className="text-3xl font-bold text-white leading-tight mt-2">Academic Background in Engineering</h2>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple-light">
                  <GraduationCap size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-widest text-brand-purple-light mb-1">Bachelor's Degree</p>
                  <h3 className="text-lg font-semibold text-white">Mechanical Engineering</h3>
                  <p className="text-brand-silver/70 text-sm mt-1">University of Isfahan</p>
                </div>
              </div>
              <div className="flex gap-4 items-start rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple-light">
                  <Building size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-widest text-brand-purple-light mb-1">Master's Degree</p>
                  <h3 className="text-lg font-semibold text-white">Mechatronics</h3>
                  <p className="text-brand-silver/70 text-sm mt-1">Shahid Beheshti University</p>
                </div>
              </div>
              <div className="flex gap-4 items-start rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-brand-purple/20 flex items-center justify-center text-brand-purple-light">
                  <BookOpen size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-widest text-brand-purple-light mb-1">PhD Candidate</p>
                  <h3 className="text-lg font-semibold text-white">Mechatronics</h3>
                  <p className="text-brand-silver/70 text-sm mt-1">University of Tehran</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsResearch;
