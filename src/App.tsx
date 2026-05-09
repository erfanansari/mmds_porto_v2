/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsResearch from './components/SkillsResearch';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-silver selection:bg-brand-purple/40">
      <Header />
      <main>
        <Hero />
        <ProjectGallery />
        <SkillsResearch />
      </main>
      <Footer />
    </div>
  );
}
