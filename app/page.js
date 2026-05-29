'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function BiographyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const experiences = [
    {
      title: 'Chief Photojournalist',
      organization: 'The Synthesis – Official Student Publication of College of Health and Sciences',
      year: '2025–2026',
      icon: '📸',
    },
    {
      title: 'Senior Photojournalist',
      organization: 'Ang Rawis-wis Publication',
      year: '2024–2025',
      icon: '📷',
    },
    {
      title: 'President',
      organization: 'BKD Student Organization',
      year: '2023–2024',
      icon: '👑',
    },
    {
      title: 'Secretary',
      organization: 'Science Club Student Organization',
      year: '2024–2025',
      icon: '📝',
    },
  ];

  const skills = [
    'Leadership',
    'Photojournalism',
    'Public Speaking',
    'Community Engagement',
    'Event Documentation',
    'Creative Writing',
  ];

  const achievements = [
    'Chief Photojournalist and Campus Media Contributor',
    'Creative Storytelling Through Visual Journalism',
    'Active Student Leader and Publication Officer',
    'Passionate Advocate for Media, Creativity, and Communication',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-slate-800 font-sans">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <AchievementsSection achievements={achievements} />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
