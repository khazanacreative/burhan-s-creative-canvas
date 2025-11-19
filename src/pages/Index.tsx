import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import AuroraBackground from "@/components/AuroraBackground";
import WaveTransition from "@/components/WaveTransition";
import FloatingLoginButton from "@/components/FloatingLoginButton";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [waveTransitionTrigger, setWaveTransitionTrigger] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;
      const totalScrollHeight = containerRef.current.scrollHeight - windowHeight;

      // Calculate overall scroll progress for parallax
      const progress = totalScrollHeight > 0 ? (scrollPosition / totalScrollHeight) * 100 : 0;
      setScrollProgress(progress);

      // Find which section is currently in view
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
            setActiveSection(index);
          }

          // Apply parallax transform to each section based on scroll position
          const sectionCenter = sectionTop + section.offsetHeight / 2;
          const distanceFromCenter = sectionCenter - scrollPosition - windowHeight / 2;
          const parallaxAmount = (distanceFromCenter * 0.3) / windowHeight;
          
          section.style.transform = `translateY(${parallaxAmount * 8}px) scale(${1 - Math.abs(parallaxAmount) * 0.005})`;
          section.style.opacity = `${Math.max(0.85, 1 - Math.abs(parallaxAmount) * 0.08)}`;
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleNavigate = (index: number) => {
    const section = sectionRefs.current[index];
    if (section && containerRef.current) {
      setWaveTransitionTrigger(prev => prev + 1);
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(index);
      }, 100);
    }
  };

  return (
    <div className="relative" style={{ zIndex: 10 }}>
      <AuroraBackground />
      <WaveTransition trigger={waveTransitionTrigger} />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <FloatingLoginButton />
      
      <div ref={containerRef} className="snap-container" style={{ zIndex: 5, position: 'relative' }}>
        <div ref={(el) => (sectionRefs.current[0] = el)} className={`section ${activeSection === 0 ? 'active' : ''}`}>
          <ProfileSection />
        </div>
        <div ref={(el) => (sectionRefs.current[1] = el)} className={`section ${activeSection === 1 ? 'active' : ''}`}>
          <ExperienceSection />
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el)} className={`section ${activeSection === 2 ? 'active' : ''}`}>
          <SkillsSection />
        </div>
        <div ref={(el) => (sectionRefs.current[3] = el)} className={`section ${activeSection === 3 ? 'active' : ''}`}>
          <PortfolioSection />
        </div>
        <div ref={(el) => (sectionRefs.current[4] = el)} className={`section ${activeSection === 4 ? 'active' : ''}`}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
