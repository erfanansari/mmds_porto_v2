import type { ElementType, FC } from 'react';
import { motion } from 'framer-motion';
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

type EducationEntry = {
  degree: string;
  field: string;
  institution: string;
  period: string;
  icon: ElementType;
};

const education: EducationEntry[] = [
  {
    degree: "Bachelor's Degree",
    field: 'Mechanical Engineering',
    institution: 'University of Isfahan',
    period: '2019 – 2023',
    icon: GraduationCap,
  },
  {
    degree: "Master's Degree",
    field: 'Mechatronics Engineering',
    institution: 'Shahid Beheshti University',
    period: '2024 – 2026',
    icon: Building,
  },
  {
    degree: 'PhD Candidate',
    field: 'Mechatronics Engineering',
    institution: 'University of Tehran',
    period: '2026 – Present',
    icon: BookOpen,
  },
];

const EducationStage: FC<{ item: EducationEntry; index: number; isLast: boolean }> = ({ item, index, isLast }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Year */}
      <div className="h-5 flex items-center mb-5 text-xs font-mono uppercase tracking-[0.25em] text-brand-purple-light whitespace-nowrap">
        {item.period}
      </div>

      {/* Node */}
      <div className="relative">
        {/* Pulsing ring on the current (last) stage */}
        {isLast && (
          <motion.span
            className="absolute inset-0 rounded-full border border-brand-purple-light/50"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            aria-hidden="true"
          />
        )}
        <div className="relative w-14 h-14 rounded-full bg-brand-slate/70 border border-brand-purple-light/40 flex items-center justify-center text-brand-purple-light shadow-lg shadow-brand-purple/20">
          <Icon size={22} />
        </div>
      </div>

      {/* Details */}
      <div className="mt-5 max-w-[15rem]">
        <div className="text-sm font-bold uppercase tracking-wider text-white">{item.degree}</div>
        <div className="text-sm text-brand-silver/70 mt-1">{item.field}</div>
        <div className="text-xs text-brand-silver/50 mt-1.5">{item.institution}</div>
      </div>
    </motion.div>
  );
};

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
        <div id="education" className="pt-24 border-t border-white/5">
          <div className="mb-14">
            <div className="text-brand-purple-light font-mono text-xs tracking-widest uppercase mb-2">Education</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Academic Background</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
            {/* Desktop connector drawn through the nodes */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="hidden md:block absolute left-[16.66%] right-[16.66%] top-[4.25rem] h-0.5 origin-left bg-gradient-to-r from-brand-purple-light/10 via-brand-purple-light/40 to-brand-purple-light/10"
              aria-hidden="true"
            />
            {education.map((item, index) => (
              <EducationStage key={item.institution} item={item} index={index} isLast={index === education.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsResearch;
