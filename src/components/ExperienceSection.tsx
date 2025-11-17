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
    <section className="snap-section gradient-bg-2 flex items-center justify-center p-4 md:p-8">
      <div className="container max-w-full mx-auto h-full flex flex-col">
        <div className="glass-morphism rounded-3xl p-6 md:p-8 flex-1 overflow-hidden flex flex-col">
          <div className="text-center mb-6 flex-shrink-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-glow">
              Working Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              15+ Years in Design & Development
            </p>
          </div>

          <div className="flex-1 horizontal-scroll pb-4">
            <div className="flex gap-6 min-w-max pr-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in-up border border-primary/10 w-96 flex-shrink-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col mb-2">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <span className="text-sm text-primary font-medium mt-1">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-secondary font-semibold mb-1">{exp.role}</p>
                      <p className="text-sm text-muted-foreground mb-3 italic">
                        {exp.description}
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/80">
                        {exp.responsibilities}
                      </p>
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
