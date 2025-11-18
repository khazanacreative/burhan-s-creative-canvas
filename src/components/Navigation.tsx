import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import placeholderLogo from "@/assets/placeholder-logo.svg";

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

  const logoSrc = (import.meta.env.VITE_LOGO_URL as string) || placeholderLogo;
  const companyUrl = (import.meta.env.VITE_COMPANY_URL as string) || "#";
  const isExternal = /^https?:\/\//.test(companyUrl);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="glass-morphism mx-2 sm:mx-3 mt-2 rounded-lg">
        <div className="container mx-auto px-3 sm:px-5 py-1.5 sm:py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate(0)}
                className="inline-flex items-center gap-3"
                aria-label="Go to home section"
              >
                <img
                  src={logoSrc}
                  alt="Company logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover bg-white/5 p-0.5"
                />
                <div className="text-base sm:text-lg font-bold text-primary text-glow">
                  Moch. Burhan Islami
                </div>
              </button>
            </div>
            
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    "relative text-xs sm:text-sm font-medium transition-colors duration-300",
                    "hover:text-primary",
                    activeSection === section.id
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex md:hidden gap-1.5">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => onNavigate(section.id)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    activeSection === section.id
                      ? "bg-primary w-4"
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
