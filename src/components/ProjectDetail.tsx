import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Layers } from 'lucide-react';
import { ProjectData } from '../data/projects';

interface ProjectDetailProps {
  project: ProjectData;
  onBack: () => void;
}

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const detailImages = project.images.length ? project.images : [project.image];
  const gridImages = detailImages.slice(0, Math.min(2, detailImages.length));
  const mainImage = detailImages.length > 2 ? detailImages[2] : detailImages[detailImages.length - 1];

  return (
    <section className="min-h-screen bg-brand-black text-brand-silver px-6 md:px-12 py-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-brand-silver/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-brand-purple-light uppercase tracking-[0.35em] text-[10px] font-mono mb-3">Project Detail</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
              <p className="text-brand-silver/70 mt-4 max-w-2xl leading-relaxed">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] bg-white/5 border border-white/10 text-brand-silver rounded-full px-4 py-2">{project.category}</span>
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-[0.25em] bg-brand-purple/10 text-brand-purple rounded-full px-4 py-2">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gridImages.map((src, index) => (
                <div key={src} className="project-card-frame">
                  <img src={src} alt={`${project.title} screenshot ${index + 1}`} className="project-cover hover:scale-105" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
            <div className="project-card-frame">
              <img src={mainImage} alt={`${project.title} main view`} className="project-cover hover:scale-105 h-[420px]" loading="lazy" decoding="async" />
            </div>
            {detailImages.length > 3 && (
              <div className="grid grid-cols-1 gap-6">
                {detailImages.slice(3).map((src, index) => (
                  <div key={src} className="project-card-frame">
                    <img src={src} alt={`${project.title} extra screenshot ${index + 4}`} className="project-cover hover:scale-105 h-72" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Technical Explanation</h2>
              <p className="text-brand-silver/70 leading-relaxed">{project.technical}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Hardware Used</h3>
                <ul className="space-y-3 text-sm text-brand-silver/70">
                  {project.hardware.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-brand-purple-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Software Used</h3>
                <ul className="space-y-3 text-sm text-brand-silver/70">
                  {project.software.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-brand-purple-light" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Challenges & Solutions</h3>
              <ul className="space-y-4 text-brand-silver/70 text-sm">
                {project.challenges.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-brand-purple-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Results</h3>
              <ul className="space-y-4 text-brand-silver/70 text-sm">
                {project.results.map(point => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-brand-purple-light" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
              >
                <Github size={18} /> View GitHub
              </a>
              <button
                onClick={onBack}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 text-white py-4 hover:bg-white/10 transition-all"
              >
                <ExternalLink size={18} /> Back to Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
