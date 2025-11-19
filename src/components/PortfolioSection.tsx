import { ExternalLink, ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import EditableText from "./EditableText";
import { useEditableArray } from "@/hooks/useEditableArray";

interface Website {
  name: string;
  url: string;
}

const defaultWebsites: Website[] = [
  { name: "Ace Maritime", url: "https://www.acemaritime.co.id" },
  { name: "Naritah Group", url: "https://www.naritahgroup.com" },
  { name: "Dr. Norman Hadi", url: "https://www.drnormanhadi.ct.ws" },
  { name: "Rans Prima Maritim", url: "https://www.ranspm.co.id" },
  { name: "Sipikan Seri", url: "https://www.sipikanseri.com/" },
];

const PortfolioSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isEditMode } = useAuth();
  const { items: websites, addItem, updateItem, deleteItem } = useEditableArray<Website>('portfolio', defaultWebsites);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleAddWebsite = () => {
    addItem({
      name: "New Website",
      url: "https://example.com"
    });
  };

  const updateField = (index: number, field: keyof Website, value: string) => {
    const site = websites[index];
    updateItem(index, { ...site, [field]: value });
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

          <div ref={scrollRef} className="flex-1 horizontal-scroll pb-1 mb-2 min-h-0">
            <div className="flex gap-2 sm:gap-3 min-w-max pr-2 items-stretch">
              {websites.map((website, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in border border-primary/10 w-[calc(100vw-3rem)] sm:w-72 md:w-80 flex-shrink-0 h-full flex flex-col justify-between"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center text-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-primary/20 mb-2 sm:mb-3">
                      <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <EditableText
                      value={website.name}
                      onChange={(v) => updateField(index, 'name', v)}
                      as="h3"
                      className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2"
                    />
                    <EditableText
                      value={website.url}
                      onChange={(v) => updateField(index, 'url', v)}
                      as="p"
                      className="text-xs sm:text-sm md:text-base text-muted-foreground break-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Button
                      className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                      asChild
                    >
                      <a href={website.url} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    {isEditMode && (
                      <Button
                        size="sm"
                        variant="destructive"
                        className="w-full"
                        onClick={() => deleteItem(index)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {isEditMode && (
              <Button
                size="sm"
                onClick={handleAddWebsite}
                className="mr-2"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Website
              </Button>
            )}
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
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
