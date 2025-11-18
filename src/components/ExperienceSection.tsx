import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "CV. Hexa Integra Mandiri",
    period: "2021 - Present",
    role: "Website Designer, WordPress Developer, Graphic Designer",
    description: "IT Solution and Software Development Company",
    responsibilities: "Designing layouts, creating graphic images for websites and social media, designing logos, company profile book, flyer, brochures and infographics, familiar with working on frontend design for website.",
  },
  {
    company: "IdeaDIGI Digital Printing",
    period: "2021",
    role: "Graphic Design Customer Service",
    description: "Digital Printing Service Provider",
    responsibilities: "Layouting design for customer as a file to print.",
  },
  {
    company: "PT. Attayibah Almultazam Group",
    period: "2019 - 2020",
    role: "Administration Assistant and Social Media Specialist",
    description: "Umrah and Hajj Service Agency - Sidoarjo Branch",
    responsibilities: "Managing and distributing information within an office, preparing of manasik, creating content of social media for promotion, maintaining website for company's update.",
  },
  {
    company: "Shahira Travel",
    period: "2018 - 2019",
    role: "Freelance Graphic Designer",
    description: "Travel and Tourism Agency",
    responsibilities: "Designing flyer for promotion, maintaining website for company's update and graphic design support.",
  },
  {
    company: "PT. Orela Shipyard",
    period: "2011 - 2018",
    role: "Graphic Design & Engineering Support, QMS Staff",
    description: "Shipyard, Ship Design & Engineering",
    responsibilities: "Designing layouts, logos, company profile, creating graphic images and animation for ship presentation, making ship Interior concept with 3D preview, supervision of ship interior installation, preparing documents for ISO and OHSAS audits.",
  },
  {
    company: "CV. Alam Karya Utama",
    period: "2007 - 2010",
    role: "Freelance Drafter",
    description: "Interior Design and Architecture Workshop",
    responsibilities: "Creating layouts of interior design, designing and making preview of furniture or product design, providing 2D and 3D images.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="snap-section gradient-bg-2 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-visible max-h-none">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-6xl h-auto flex flex-col overflow-visible min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          <div className="text-center mb-2 sm:mb-3 flex-shrink-0">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-0.5 sm:mb-1 text-glow">
              Working Experience
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              15+ Years in Design & Development
            </p>
          </div>

          <div className="flex-1 horizontal-scroll pb-1">
            <div className="flex gap-2 sm:gap-3 min-w-max pr-2 items-stretch">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in-up border border-primary/10 w-[calc(100vw-3rem)] sm:w-80 md:w-96 flex-shrink-0 h-full flex flex-col justify-between"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 flex-shrink-0">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex flex-col mb-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold break-words">{exp.company}</h3>
                        <span className="text-xs sm:text-sm md:text-base text-primary font-medium mt-0.5">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base md:text-lg text-secondary font-semibold mb-1">{exp.role}</p>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-2 italic">
                          {exp.description}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/80">
                          {exp.responsibilities}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
