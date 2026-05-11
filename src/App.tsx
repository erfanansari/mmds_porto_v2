/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetail from './components/ProjectDetail';
import SkillsResearch from './components/SkillsResearch';
import Footer from './components/Footer';
import { projects } from './data/projects';

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#project-', '');
      if (!hash) {
        setActiveProjectId(null);
        return;
      }
      const matched = projects.find((project) => project.slug === hash);
      setActiveProjectId(matched ? matched.id : null);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openProject = (projectId: number, slug: string) => {
    window.history.pushState(null, '', `#project-${slug}`);
    setActiveProjectId(projectId);
  };

  const closeProject = () => {
    window.history.pushState(null, '', '#projects');
    setActiveProjectId(null);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-silver selection:bg-brand-purple/40">
      <Header />
      <main>
        <Hero />
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={closeProject} />
        ) : (
          <ProjectGallery onProjectSelect={openProject} />
        )}
        <SkillsResearch />
      </main>
      <Footer />
    </div>
  );
}
