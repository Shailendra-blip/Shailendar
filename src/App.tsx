/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { IoTRoboticsSection } from './components/IoTRoboticsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TeamSection } from './components/TeamSection';
import { CommunityCTA } from './components/CommunityCTA';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#F5F5F7] transition-colors selection:bg-[#00AEEF]/30 selection:text-[#00AEEF]">
      {/* Sticky Responsive Navbar */}
      <Navbar onJoinClick={() => setIsJoinModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreEvents={() => scrollToSection('#events')}
          onDiscoverCommunity={() => scrollToSection('#about')}
        />

        {/* About the Community Section */}
        <AboutSection />

        {/* Events & Workshops Section */}
        <EventsSection />

        {/* IoT & Robotics Projects Gallery (Real Photographs) */}
        <IoTRoboticsSection />

        {/* Software Innovations Project Showcase Section */}
        <ProjectsSection />

        {/* Awards & Achievements Section (Real Photographs & Video) */}
        <AchievementsSection />

        {/* Core Team Section */}
        <TeamSection />

        {/* Community Full-Width CTA Section */}
        <CommunityCTA
          onJoinClick={() => setIsJoinModalOpen(true)}
          onExploreProjects={() => scrollToSection('#iot-robotics')}
        />

        {/* FAQ Accordion Section */}
        <FAQSection />

        {/* Contact & Proposals Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onJoinClick={() => setIsJoinModalOpen(true)} />

      {/* Join Community Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </div>
  );
}
