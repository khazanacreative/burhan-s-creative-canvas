import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="snap-section gradient-bg-5 flex items-center justify-center p-4 md:p-8">
      <div className="container max-w-4xl mx-auto">
        <div className="glass-morphism rounded-3xl p-6 md:p-12 animate-scale-in">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 text-glow">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to bring your ideas to life
            </p>
          </div>

          <div className="space-y-6 mb-10">
            <a
              href="mailto:mochaburi4@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-4 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors duration-200">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                  mochaburi4@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+6282245767700"
              className="flex items-center gap-4 p-6 rounded-2xl bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-4 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-200">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-lg font-semibold group-hover:text-secondary transition-colors duration-200">
                  +62 822 4576 7700
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 rounded-2xl bg-background/30 border border-primary/10">
              <div className="p-4 rounded-xl bg-accent/20">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-semibold">
                  Sidoarjo, East Java, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Available for freelance projects and full-time opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold animate-glow-pulse"
                asChild
              >
                <a href="mailto:mochaburi4@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a href="tel:+6282245767700">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary/20 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Mochamad Burhan Islami. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Website Designer • WordPress Developer • Graphic Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
