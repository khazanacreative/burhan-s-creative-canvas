import { Briefcase, ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";
import { useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import EditableText from "./EditableText";
import { useEditableArray } from "@/hooks/useEditableArray";
import { Button } from "./ui/button";

interface Experience {
  company: string;
  period: string;
  role: string;
  description: string;
  responsibilities: string;
}

const defaultExperiences: Experience[] = [
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isEditMode } = useAuth();
  const { items: experiences, addItem, updateItem, deleteItem } = useEditableArray<Experience>('experiences', defaultExperiences);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleAddExperience = () => {
    addItem({
      company: "New Company",
      period: "Year",
      role: "Role",
      description: "Description",
      responsibilities: "Responsibilities"
    });
  };

  const updateField = (index: number, field: keyof Experience, value: string) => {
    const exp = experiences[index];
    updateItem(index, { ...exp, [field]: value });
  };

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

          <div ref={scrollRef} className="flex-1 horizontal-scroll pb-1 mb-2">
            <div className="flex gap-2 sm:gap-3 min-w-max pr-2 items-stretch">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in-up border border-primary/10 w-[calc(100vw-3rem)] sm:w-80 md:w-96 flex-shrink-0 h-full flex flex-col justify-between"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md bg-primary/20 flex-shrink-0">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <EditableText
                        value={exp.company}
                        onChange={(v) => updateField(index, 'company', v)}
                        as="h3"
                        className="text-sm sm:text-base md:text-lg font-bold mb-0.5 sm:mb-1 break-words"
                      />
                      <EditableText
                        value={exp.period}
                        onChange={(v) => updateField(index, 'period', v)}
                        as="p"
                        className="text-xs sm:text-sm text-primary mb-1 sm:mb-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 flex-1">
                    <EditableText
                      value={exp.role}
                      onChange={(v) => updateField(index, 'role', v)}
                      as="p"
                      className="text-xs sm:text-sm font-semibold"
                    />
                    <EditableText
                      value={exp.description}
                      onChange={(v) => updateField(index, 'description', v)}
                      as="p"
                      className="text-xs sm:text-sm text-muted-foreground"
                    />
                    <EditableText
                      value={exp.responsibilities}
                      onChange={(v) => updateField(index, 'responsibilities', v)}
                      multiline
                      as="p"
                      className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed"
                    />
                  </div>
                  {isEditMode && (
                    <Button
                      size="sm"
                      variant="destructive"
                      className="mt-2"
                      onClick={() => deleteItem(index)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {isEditMode && (
              <Button
                size="sm"
                onClick={handleAddExperience}
                className="mr-2"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Experience
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

export default ExperienceSection;
