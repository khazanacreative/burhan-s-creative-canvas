import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import EditableText from "./EditableText";
import { useEditableContent } from "@/hooks/useEditableContent";

const ContactSection = () => {
  const [email, setEmail] = useEditableContent('contact_email', 'mochaburi4@gmail.com');
  const [phone, setPhone] = useEditableContent('contact_phone', '+62 822 4576 7700');
  const [location, setLocation] = useEditableContent('contact_location', 'Sidoarjo, East Java, Indonesia');
  const [facebook, setFacebook] = useEditableContent('contact_facebook', 'https://www.facebook.com/abu.fazana/');
  const [instagram, setInstagram] = useEditableContent('contact_instagram', 'https://www.instagram.com/mo.bur.is/');
  const [linkedin, setLinkedin] = useEditableContent('contact_linkedin', 'https://www.linkedin.com/in/mochamad-burhan-islami-a9959b33/');

  return (
    <section className="snap-section gradient-bg-5 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 animate-scale-in w-full max-w-3xl min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          <div className="text-center mb-2 sm:mb-3">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-0.5 sm:mb-1 text-glow">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              Ready to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-2 sm:mb-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-md bg-primary/20 group-hover:bg-primary/30 transition-colors duration-200 flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                <EditableText
                  value={email}
                  onChange={setEmail}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-200 break-words whitespace-normal"
                />
              </div>
            </a>

            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-md bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-200 flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                <EditableText
                  value={phone}
                  onChange={setPhone}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-secondary transition-colors duration-200 break-words whitespace-normal"
                />
              </div>
            </a>

            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 border border-primary/10">
              <div className="p-2 sm:p-3 rounded-md bg-accent/20 flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                <EditableText
                  value={location}
                  onChange={setLocation}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold break-words whitespace-normal"
                />
              </div>
            </div>

            <a
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-md bg-primary/20 group-hover:bg-primary/30 transition-colors duration-200 flex-shrink-0">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Facebook</p>
                <EditableText
                  value={facebook}
                  onChange={setFacebook}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-200 break-all whitespace-normal"
                />
              </div>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-md bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-200 flex-shrink-0">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">Instagram</p>
                <EditableText
                  value={instagram}
                  onChange={setInstagram}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-secondary transition-colors duration-200 break-all whitespace-normal"
                />
              </div>
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md sm:rounded-lg bg-background/30 hover:bg-background/50 transition-all duration-300 border border-primary/10 hover:border-primary/30 group"
            >
              <div className="p-2 sm:p-3 rounded-md bg-accent/20 group-hover:bg-accent/30 transition-colors duration-200 flex-shrink-0">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground">LinkedIn</p>
                <EditableText
                  value={linkedin}
                  onChange={setLinkedin}
                  as="p"
                  className="text-sm sm:text-base md:text-lg font-semibold group-hover:text-accent transition-colors duration-200 break-all whitespace-normal"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
