import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = window.innerHeight;

      // Find which section is currently in view
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
            setActiveSection(index);
          }
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
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(index);
    }
  };

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <div ref={containerRef} className="snap-container">
        <div ref={(el) => (sectionRefs.current[0] = el)}>
          <ProfileSection />
        </div>
        <div ref={(el) => (sectionRefs.current[1] = el)}>
          <ExperienceSection />
        </div>
        <div ref={(el) => (sectionRefs.current[2] = el)}>
          <SkillsSection />
        </div>
        <div ref={(el) => (sectionRefs.current[3] = el)}>
          <PortfolioSection />
        </div>
        <div ref={(el) => (sectionRefs.current[4] = el)}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
