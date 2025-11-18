import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const websites = [
  { name: "Ace Maritime", url: "https://www.acemaritime.co.id" },
  { name: "Naritah Group", url: "https://www.naritahgroup.com" },
  { name: "Dr. Norman Hadi", url: "https://www.drnormanhadi.ct.ws" },
  { name: "Rans Prima Maritim", url: "https://www.ranspm.co.id" },
  { name: "Sipikan Seri", url: "https://www.sipikanseri.com/" },
];

const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="snap-section gradient-bg-4 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-visible max-h-none">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-6xl h-auto flex flex-col overflow-visible min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh]">
          <div className="text-center mb-2 sm:mb-3 flex-shrink-0">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-0.5 sm:mb-1 text-glow">
              Website Portfolio
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              Professional Websites Developed & Designed
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <button
              onClick={() => scroll('left')}
              className="p-1 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1 rounded-md bg-primary/20 hover:bg-primary/30 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 horizontal-scroll pb-1 min-h-0">
            <div className="flex gap-2 sm:gap-3 min-w-max pr-2 items-stretch">
              {websites.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-[calc(100vw-3rem)] sm:w-64 md:w-72 flex-shrink-0 h-full"
                >
                  <div
                    className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 animate-fade-in-up h-full flex flex-col justify-between"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="w-full h-20 sm:h-24 md:h-28 mb-2 sm:mb-3 rounded-md bg-background/50 border border-primary/10 flex items-center justify-center">
                        <img
                          src={`https://via.placeholder.com/200x100?text=${encodeURIComponent(site.name)}`}
                          alt={`${site.name} logo`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex items-start justify-between mb-1 sm:mb-2 gap-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold group-hover:text-primary transition-colors duration-200 break-words flex-1">
                          {site.name}
                        </h3>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2 truncate">
                        {site.url}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary transition-all duration-200 text-xs sm:text-sm h-8"
                    >
                      Visit
                    </Button>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

