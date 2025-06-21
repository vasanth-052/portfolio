import { useScrollEffects } from './hooks/useScrollEffects';
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

  return (
    <div className="min-h-screen bg-gray-900 text-slate-100 font-sans overflow-x-hidden">
      <div className="fixed inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HeroSection />
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