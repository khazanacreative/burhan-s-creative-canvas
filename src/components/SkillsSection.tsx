import { Code, Palette, Video, FileText, Globe, Cpu, ChevronLeft, ChevronRight, Plus, Trash2 } from "lucide-react";
import { useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import EditableText from "./EditableText";
import { useEditableArray } from "@/hooks/useEditableArray";
import { Button } from "./ui/button";

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

const iconMap: Record<string, typeof Code> = {
  Code, Palette, Video, FileText, Globe, Cpu
};

const defaultSkillCategories: SkillCategory[] = [
  {
    category: "Graphic Design Software",
    icon: "Palette",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Inkscape"],
  },
  {
    category: "Vector Design",
    icon: "Palette",
    skills: ["Illustrator", "CorelDRAW", "Inkscape"],
  },
  {
    category: "3D Software",
    icon: "Cpu",
    skills: ["SketchUp", "3ds Max", "Blender", "AutoCAD"],
  },
  {
    category: "Video Editing",
    icon: "Video",
    skills: ["Adobe Premiere", "After Effects", "Final Cut Pro"],
  },
  {
    category: "Office Software",
    icon: "FileText",
    skills: ["Microsoft Office", "Google Workspace", "LibreOffice"],
  },
  {
    category: "Web Development",
    icon: "Globe",
    skills: ["WordPress", "Elementor", "WooCommerce", "Custom Themes"],
  },
  {
    category: "Coding",
    icon: "Code",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
];

const SkillsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isEditMode } = useAuth();
  const { items: skillCategories, addItem, updateItem, deleteItem } = useEditableArray<SkillCategory>('skills', defaultSkillCategories);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleAddCategory = () => {
    addItem({
      category: "New Category",
      icon: "Code",
      skills: ["Skill 1", "Skill 2"]
    });
  };

  const updateField = (index: number, field: keyof SkillCategory, value: any) => {
    const cat = skillCategories[index];
    updateItem(index, { ...cat, [field]: value });
  };

  return (
    <section className="snap-section gradient-bg-3 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-visible max-h-none">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-6xl h-auto flex flex-col overflow-visible min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          <div className="text-center mb-2 sm:mb-3 flex-shrink-0">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-0.5 sm:mb-1 text-glow">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              Multidisciplinary Design & Development
            </p>
          </div>

          <div ref={scrollRef} className="flex-1 horizontal-scroll pb-1 mb-2 min-h-0">
            <div className="flex gap-2 sm:gap-3 min-w-max pr-2 items-stretch">
              {skillCategories.map((category, index) => {
                const Icon = iconMap[category.icon] || Code;
                return (
                  <div
                    key={index}
                    className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in border border-primary/10 w-[calc(100vw-3rem)] sm:w-64 md:w-72 h-full flex flex-col justify-between"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                      <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-primary/20 flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 text-primary" />
                      </div>
                      <EditableText
                        value={category.category}
                        onChange={(v) => updateField(index, 'category', v)}
                        as="h3"
                        className="text-sm sm:text-base md:text-lg font-bold break-words"
                      />
                    </div>
                    <div className="flex-1 flex items-start">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-sm sm:text-base font-medium text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200 whitespace-nowrap"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
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
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            {isEditMode && (
              <Button
                size="sm"
                onClick={handleAddCategory}
                className="mr-2"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Category
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

export default SkillsSection;
