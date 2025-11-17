import { Mail, Phone, MapPin, Calendar, Heart, User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="snap-section gradient-bg-1 flex items-center justify-center p-4 md:p-8 pt-24 md:pt-32">
      <div className="container max-w-6xl mx-auto">
        <div className="glass-morphism rounded-3xl p-6 md:p-12 animate-scale-in">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="w-40 h-40 rounded-full border-4 border-primary overflow-hidden animate-glow-pulse">
                <img 
                  src={profilePhoto} 
                  alt="Mochamad Burhan Islami" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow">
              Mochamad Burhan Islami, ST
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-2">
              Website Designer & Developer
            </p>
            <p className="text-lg text-muted-foreground">
              Graphic Designer | WordPress Specialist | Frontend Developer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">mochaburi4@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+62 822 4576 7700</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Sidoarjo, East Java, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Date of Birth</p>
                <p className="font-medium">July 1st, 1986</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <Heart className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="font-medium">Married</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-background/30">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Nationality</p>
                <p className="font-medium">Indonesian • Islam</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-background/30">
            <h3 className="text-xl font-bold mb-3 text-primary">Education</h3>
            <div className="space-y-2">
              <p className="font-semibold text-lg">Bachelor of Engineering</p>
              <p className="text-muted-foreground">Industrial Product Design</p>
              <p className="text-sm">Sepuluh November Institute of Technology (ITS Surabaya)</p>
              <p className="text-sm text-primary">2003 - 2010 • GPA 3.01/4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
