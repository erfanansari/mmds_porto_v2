/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import { projects } from './data/projects';

const Hero = lazy(() => import('./components/Hero'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const SkillsResearch = lazy(() => import('./components/SkillsResearch'));
const Footer = lazy(() => import('./components/Footer'));

const SectionFallback = () => (
  <div className="min-h-[12rem] animate-pulse bg-brand-black" aria-hidden="true" />
);

const HeroFallback = () => (
  <section className="min-h-screen bg-brand-black flex items-center justify-center" aria-hidden="true">
    <div className="w-10 h-10 border-2 border-white/20 border-t-brand-purple-light rounded-full animate-spin" />
  </section>
);

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [savedScroll, setSavedScroll] = useState<number | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  useEffect(() => {
    if (selectedProject) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProject]);

  useEffect(() => {
    const syncProjectFromUrl = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const slug = hash.slice('#project-'.length);
        const matched = projects.find((project) => project.slug === slug);
        setActiveProjectId(matched ? matched.id : null);
        return;
      }
      setActiveProjectId(null);
    };

    syncProjectFromUrl();
    window.addEventListener('hashchange', syncProjectFromUrl);
    window.addEventListener('popstate', syncProjectFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncProjectFromUrl);
      window.removeEventListener('popstate', syncProjectFromUrl);
    };
  }, []);

  const openProject = (projectId: number, slug: string) => {
    setSavedScroll(window.scrollY);
    window.history.pushState(null, '', `#project-${slug}`);
    setActiveProjectId(projectId);
  };

  const closeProject = () => {
    window.history.pushState(null, '', '#projects');
    setActiveProjectId(null);
    if (savedScroll !== null) {
      window.scrollTo({ top: savedScroll, behavior: 'smooth' });
      setSavedScroll(null);
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-silver selection:bg-brand-purple/40">
      <Header theme={theme} onThemeToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
      <main>
        {!selectedProject && (
          <Suspense fallback={<HeroFallback />}>
            <Hero />
          </Suspense>
        )}
        {selectedProject ? (
          <Suspense fallback={<SectionFallback />}>
            <ProjectDetail project={selectedProject} onBack={closeProject} />
          </Suspense>
        ) : (
          <Suspense fallback={<SectionFallback />}>
            <ProjectGallery onProjectSelect={openProject} />
          </Suspense>
        )}
        {!selectedProject && (
          <Suspense fallback={<SectionFallback />}>
            <SkillsResearch />
          </Suspense>
        )}
      </main>
      {!selectedProject && (
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      )}
    </div>
  );
}
