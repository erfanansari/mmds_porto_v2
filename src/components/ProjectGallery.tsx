import { motion } from 'motion/react';
import { ExternalLink, Github, Play, FileText } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
  githubUrl?: string;
  docUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Autonomous Lane Keeping System",
    category: "ADAS / Computer Vision",
    description: "Developed a deep learning-based lane detection and path planning algorithm for highway environments using sensor fusion of camera and Radar.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    docUrl: "#",
    tags: ["PyTorch", "C++", "OpenCV", "Control Theory"]
  },
  {
    id: 2,
    title: "6-DOF Robotic Manipulator",
    category: "Robotics / Control",
    description: "Implementation of inverse kinematics and trajectory optimization for high-precision robotic assembly tasks. Integrated with ROS and Gazebo simulations.",
    image: "/src/assets/images/regenerated_image_1778319913919.png",
    githubUrl: "https://github.com",
    tags: ["ROS", "Python", "Kinematics", "URDF"]
  },
  {
    id: 3,
    title: "Sensor Fusion: LiDAR & Radar",
    category: "Perception / AI",
    description: "Real-time object tracking and obstacle detection using Extended Kalman Filters (EKF) and point cloud processing for ADAS Level 3 autonomy.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com",
    videoUrl: "#",
    tags: ["C++", "LiDAR", "EKF", "Unreal Engine"]
  },
  {
    id: 4,
    title: "UAV Dynamic Path Planning",
    category: "Mechatronics / Research",
    description: "Bio-inspired collision avoidance algorithms for quadcopters in dense urban environments. Optimized for low-power embedded systems.",
    image: "/src/assets/images/regenerated_image_1778319934561.png",
    docUrl: "#",
    tags: ["MATLAB", "Embedded C", "Fluid Dynamics", "IoT"]
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number, key?: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative glass-card overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-90" />
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        {project.videoUrl && (
          <button className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-purple transition-colors">
            <Play size={14} fill="white" />
          </button>
        )}
      </div>

      <div className="p-6 relative">
        <div className="text-[10px] uppercase tracking-[2px] font-mono text-brand-purple-light mb-2 font-bold">
          {project.category}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-purple-light transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-brand-silver/60 mb-6 line-clamp-2 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-0.5 border border-white/10 rounded uppercase tracking-wider text-brand-silver/40">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a href={project.githubUrl} className="text-brand-silver/70 hover:text-white flex items-center gap-2 text-xs transition-colors">
              <Github size={14} /> Code
            </a>
          )}
          {project.docUrl && (
            <a href={project.docUrl} className="text-brand-silver/70 hover:text-white flex items-center gap-2 text-xs transition-colors">
              <FileText size={14} /> Documentation
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-purple-light font-mono text-xs tracking-widest uppercase mb-2">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineering Portfolio</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right text-brand-silver/50 max-w-sm text-sm"
          >
            Showcasing integrated systems, ADAS algorithms, and experimental robotics prototypes developed during academic and professional career.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 py-12 border-y border-white/5 flex flex-col items-center text-center"
        >
          <p className="text-brand-silver/60 mb-6 text-sm italic">
            "Precision in design, innovation in motion."
          </p>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-brand-silver/30">
            <span>VERSION 2.0.4</span>
            <div className="w-1 h-1 rounded-full bg-brand-purple" />
            <span>LAST UPDATE: MAY 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
