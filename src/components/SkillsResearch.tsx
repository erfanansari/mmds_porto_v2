import type { ElementType, FC } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Settings, Brain, Radio, GraduationCap, Building, BookOpen } from 'lucide-react';

const SkillCategory = ({
  title,
  skills,
  icon: Icon,
  featured = false,
  className = '',
}: {
  title: string;
  skills: string[];
  icon: ElementType;
  featured?: boolean;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-brand-slate/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-purple-light/40 hover:bg-brand-slate/60 ${featured ? 'lg:p-9' : ''} ${className}`}
  >
    {/* Top accent line — reveals on hover */}
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple-light/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

    <div className="mb-6 flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/15 text-brand-purple-light ring-1 ring-inset ring-brand-purple-light/20 transition-all duration-500 group-hover:bg-brand-purple group-hover:text-white">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className={`font-bold tracking-tight text-white ${featured ? 'text-2xl' : 'text-xl'}`}>{title}</h3>
    </div>

    <div className="mt-auto flex flex-wrap content-start gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wide text-brand-silver/60 transition-colors duration-300 group-hover:border-white/20 group-hover:text-brand-silver/85"
        >
          {skill}
        </span>
      ))}
    </div>
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
        {/* Technical Core — header + asymmetric bento (featured = his core domains) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-2xl lg:mb-14"
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-brand-purple-light">// capabilities</div>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Technical Core</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            <SkillCategory
              title="Robotics"
              icon={Settings}
              featured
              className="sm:col-span-2 lg:col-span-4"
              skills={["SolidWorks 3D Design", "Altium Designer", "Kinematics & Dynamics", "Gazebo / Webots"]}
            />
            <SkillCategory
              title="Control Systems"
              icon={Radio}
              className="lg:col-span-2"
              skills={["MPC & Optimal Control", "PID / Kalman Filters", "State Estimation", "MATLAB / Simulink"]}
            />
            <SkillCategory
              title="AI & Vision"
              icon={Brain}
              className="lg:col-span-2"
              skills={["Deep Learning (PyTorch)", "Point Cloud Processing", "Object Detection", "Sensor Fusion"]}
            />
            <SkillCategory
              title="Embedded Systems"
              icon={Cpu}
              featured
              className="sm:col-span-2 lg:col-span-4"
              skills={["C / C++ / Python", "Real-time OS (RTOS)", "STM32", "PIC", "Raspberry Pi"]}
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
