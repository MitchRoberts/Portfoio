'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import HomeSection from '@/components/sections/HomeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Page() {
  const [activeSection, setActiveSection] = useState('home');
  const [fade, setFade] = useState<'in' | 'out'>('in');

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    setFade('out');
    setTimeout(() => {
      setActiveSection(section);
      setFade('in');
    }, 300); // fade duration match
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />
      <div
        className={`pt-24 transition-opacity duration-300 ${
          fade === 'out' ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </div>
  );
}
