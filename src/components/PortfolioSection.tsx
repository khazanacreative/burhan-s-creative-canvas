import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const websites = [
  { name: "Ace Maritime", url: "https://www.acemaritime.co.id" },
  { name: "Bangun Tata Nusantara", url: "https://www.banguntatanusantara.com" },
  { name: "Priquin", url: "https://www.priquin.com" },
  { name: "Daycare Bintaq", url: "https://www.daycarebintaq.com" },
  { name: "JGB Properti", url: "https://www.jgbproperti.com" },
  { name: "Kusumo Four Transport", url: "https://www.kusumofourtransport.com" },
  { name: "Naritah Group", url: "https://www.naritahgroup.com" },
  { name: "LGR Apparel", url: "https://www.lgrapparel.com" },
  { name: "Dr. Norman Hadi", url: "https://www.drnormanhadi.ct.ws" },
  { name: "Dayan Enterprise", url: "https://www.dayangenterpris.net" },
  { name: "Rans PM", url: "https://www.ranspm.co.id" },
];

const PortfolioSection = () => {
  return (
    <section className="snap-section gradient-bg-4 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-morphism rounded-3xl p-6 md:p-12 max-h-[85vh] overflow-y-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-glow">
              Website Portfolio
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional Websites Developed & Designed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {websites.map((site, index) => (
              <a
                key={index}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className="p-6 rounded-2xl bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 animate-fade-in-up h-full flex flex-col justify-between"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-200">
                        {site.name}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 truncate">
                      {site.url}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 hover:bg-primary/10 group-hover:border-primary transition-all duration-200"
                  >
                    Visit Website
                  </Button>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 text-center border border-primary/30">
            <p className="text-lg mb-2">
              <span className="text-3xl font-bold text-primary">{websites.length}</span>
            </p>
            <p className="text-muted-foreground">
              Live websites featuring WordPress, custom design, and responsive layouts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
