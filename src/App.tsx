import React from 'react';
import { useScrollEffects } from './hooks/useScrollEffects';
import { useTypewriter } from './hooks/useTypewriter';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const { isMenuOpen, setIsMenuOpen } = useScrollEffects();
  const { typewriterText } = useTypewriter();

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 font-sans overflow-x-hidden">
      {/* Background texture */}
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* 3D Scene Container */}
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection typewriterText={typewriterText} />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;