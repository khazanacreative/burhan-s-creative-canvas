import { Code, Palette, Video, FileText, Globe, Cpu } from "lucide-react";

const skillCategories = [
  {
    category: "Graphic Design Software",
    icon: Palette,
    skills: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Inkscape"],
  },
  {
    category: "Vector Design",
    icon: Palette,
    skills: ["Illustrator", "CorelDRAW", "Inkscape"],
  },
  {
    category: "3D Software",
    icon: Cpu,
    skills: ["SketchUp", "3ds Max", "Blender", "AutoCAD"],
  },
  {
    category: "Video Editing",
    icon: Video,
    skills: ["Adobe Premiere", "After Effects", "Final Cut Pro"],
  },
  {
    category: "Office Software",
    icon: FileText,
    skills: ["Microsoft Office", "Google Workspace", "LibreOffice"],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["WordPress", "Elementor", "WooCommerce", "Custom Themes"],
  },
  {
    category: "Coding",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
];

const SkillsSection = () => {
  return (
    <section className="snap-section gradient-bg-3 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-morphism rounded-3xl p-6 md:p-12 max-h-[85vh] overflow-y-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-glow">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Multidisciplinary Design & Development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-background/30 hover:bg-background/40 transition-all duration-300 animate-fade-in border border-primary/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-secondary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold text-accent mb-1">12+</p>
                <p className="text-sm text-muted-foreground">Website Portfolios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
