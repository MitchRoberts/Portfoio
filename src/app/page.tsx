// app/page.tsx
'use client';

import { useState } from 'react';
import type { Project } from '@/types/Project';
import StarBackground from '@/components/StarBackground';
import Header from '@/components/Header';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import MUNStarProject from '@/components/projects/MUNStarProject';
import RightRenterProject from '@/components/projects/RightRenterProject';
import INCOMINGProject from '@/components/projects/INCOMINGProject';
import TripTailorProject from '@/components/projects/TripTailorProject'


const allProjects: Project[] = [
  {
    slug: "munstar-1",
    title: "MUNStar-1 Communications",
    description: "Designed and implemented the satellite's internal and external communication systems using UART, RS-485, and I2C.",
    tech: ["VHDL", "UART", "C", "C++", "Python", "Embedded"],
    platform: 'gitlab'
  },
  {
    slug: "RightRenter",
    title: "RightRenter Web Platform",
    description: "Full-stack app for rental listings, messaging, and appointment booking.",
    tech: ["React", "Firebase", "Tailwind CSS", "Next.js", "Figma"],
    platform: 'github',
  },
  {
    slug: "INCOMING!",
    title: "INCOMING! Game",
    description: "Turn based artillery shooter game developed in Unity with custom UDP / TCP networking code.",
    tech: ["C#", "Unity", "Networking"],
    platform: 'github',
  },
  {
    slug: "TripTailor",
    title: "TripTailor",
    description: "Fulll-stack app for helping create itineraries, and make your own for places you travel.",
    tech: ["React", "CSS", "Javascript", "GoLang", "PostgreSQL", "Docker"],
    platform: 'github',
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
      <div className="fixed inset-0 z-10 pointer-events-none">
        <StarBackground />
      </div>
      <div className="relative z-50">
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
          {activeSection === 'projectDetail' && selectedProjectSlug === 'RightRenter' && (
            <RightRenterProject onBack={() => handleNavigate('projects')} />
          )}
          {activeSection === 'projectDetail' && selectedProjectSlug === 'INCOMING!' && (
            <INCOMINGProject onBack={() => handleNavigate('projects')} />
          )}
          {activeSection === 'projectDetail' && selectedProjectSlug === 'TripTailor' && (
            <TripTailorProject onBack={() => handleNavigate('projects')} />
          )}
        </div>
      </div>
    </div>
  );
}