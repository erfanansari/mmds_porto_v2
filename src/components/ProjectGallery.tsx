import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectData, projects } from '../data/projects';

const filterOptions = ['All', 'Robotics', 'Control', 'Embedded', 'Vision', 'Automation'];

const ProjectCard = ({
  project,
  index,
  onSelect
}: {
  project: ProjectData;
  index: number;
  onSelect: (id: number, slug: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group relative glass-card overflow-hidden border-white/10 hover:border-brand-purple-light shadow-lg shadow-black/20 transition-all"
    >
      <div className="project-card-frame aspect-video overflow-hidden rounded-[1.75rem] border-b border-white/10 bg-brand-slate/10">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="project-cover group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
      </div>

      <div className="p-6 relative">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.35em] font-mono text-brand-purple-light font-bold">
            {project.category}
          </span>
          <span className="text-[10px] uppercase px-2 py-1 bg-white/5 border border-white/10 rounded-full text-brand-silver/70">
            {project.filter}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-brand-purple-light">
          {project.title}
        </h3>
        <p className="text-sm text-brand-silver/70 mb-6 leading-relaxed min-h-[3.5rem]">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-1 border border-white/10 rounded-full uppercase tracking-wider text-brand-silver/40 bg-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-silver/80 hover:text-white transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <button
            onClick={() => onSelect(project.id, project.slug)}
            className="inline-flex items-center justify-center rounded-full border border-brand-purple-light bg-brand-purple/90 px-4 py-2 text-sm text-white transition-all hover:bg-brand-purple-light"
          >
            View Details
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = ({ onProjectSelect }: { onProjectSelect: (id: number, slug: string) => void }) => {
  const [filter, setFilter] = useState('All');

  const visibleProjects = useMemo(
    () => projects.filter((project) => filter === 'All' || project.filter === filter),
    [filter]
  );

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <div className="text-brand-purple-light font-mono text-xs tracking-widest uppercase mb-2">Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Engineering Portfolio</h2>
          </div>
          <p className="max-w-xl text-sm text-brand-silver/60 leading-relaxed">
            Professional robotics, mechatronics, and manufacturing projects showcasing embedded design, control engineering, and applied automation prototypes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {filterOptions.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                filter === item
                  ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20'
                  : 'bg-white/5 text-brand-silver/70 hover:bg-white/10'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={onProjectSelect} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectGallery;
