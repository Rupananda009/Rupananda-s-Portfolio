import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillStrip } from './components/SkillStrip';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { CurrentFocus } from './components/CurrentFocus';
import { WhyMe } from './components/WhyMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleContactClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] light:bg-[#F8F9FA] text-white light:text-slate-900 selection:bg-[#FF5A1F] selection:text-white relative transition-colors duration-300">
      {/* Sticky Translucent Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Skill Numbers Strip */}
        <SkillStrip />

        {/* About Section */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Technical Skills Stack */}
        <Skills />

        {/* Areas of Capability / Services */}
        <Services />

        {/* Selected Projects */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Currently Exploring / Continuous Learning */}
        <CurrentFocus />

        {/* Why Me / Mechanical to Software Mindset */}
        <WhyMe />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={handleContactClick}
      />

      {/* ATS Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

