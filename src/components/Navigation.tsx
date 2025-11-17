import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const sections = [
    { id: 0, name: "Home", label: "Profile" },
    { id: 1, name: "Experience", label: "Career" },
    { id: 2, name: "Skills", label: "Expertise" },
    { id: 3, name: "Portfolio", label: "Works" },
    { id: 4, name: "Contact", label: "Connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="glass-morphism mx-4 mt-4 rounded-2xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary text-glow">
              MBI
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    "hover:text-primary",
                    activeSection === section.id
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex md:hidden gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === section.id
                      ? "bg-primary w-6"
                      : "bg-foreground/30"
                  )}
                  aria-label={section.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
