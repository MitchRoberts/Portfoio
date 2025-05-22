// app/page.tsx
'use client';

import { useState } from 'react';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import MUNStarProject from '@/components/projects/MUNStarProject';
import APPartmentProject from '@/components/projects/APPartmentProject';


const allProjects = [
  {
    slug: "munstar-1",
    title: "MUNStar-1 Communications",
    description: "Designed and implemented the satellite's internal and external communication systems using UART, RS-485, and I2C.",
    tech: ["VHDL", "UART", "C", "Python", "Embedded"],
  },
  {
    slug: "appartment",
    title: "APPartment Web Platform",
    description: "Full-stack app for rental listings, messaging, and appointment booking.",
    tech: ["React", "Firebase", "Tailwind CSS", "Next.js"],
  },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string | null>(null);

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    setFade('out');
    setTimeout(() => {
      setActiveSection(section);
      setSelectedProjectSlug(null);
      setFade('in');
    }, 300);
  };

  const handleProjectClick = (slug: string) => {
    setFade('out');
    setTimeout(() => {
      setSelectedProjectSlug(slug);
      setActiveSection('projectDetail');
      setFade('in');
    }, 300);
  };

  return (
    <div className="relative bg-black text-white min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-50 pointer-events-none">
        <StarBackground />
      </div>
      <div className="relative z-10">
        <Header onNavigate={handleNavigate} activeSection={activeSection} />
        <div
          className={`pt-24 transition-opacity duration-300 ${
            fade === 'out' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'skills' && <SkillsSection />}
          {activeSection === 'projects' && (
            <ProjectsSection project={allProjects} onProjectClick={handleProjectClick} />
          )}
          {activeSection === 'contact' && <ContactSection />}

          {activeSection === 'projectDetail' && selectedProjectSlug === 'munstar-1' && (
            <MUNStarProject onBack={() => handleNavigate('projects')} />
          )}
          {activeSection === 'projectDetail' && selectedProjectSlug === 'appartment' && (
            <APPartmentProject onBack={() => handleNavigate('projects')} />
          )}
        </div>
      </div>
    </div>
  );
}