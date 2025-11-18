import { Mail, Phone, MapPin, Calendar, Heart, User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const ProfileSection = () => {
  return (
    <section className="snap-section gradient-bg-1 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 animate-scale-in w-full max-w-4xl min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-block mb-2 sm:mb-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 sm:border-3 md:border-4 border-primary overflow-hidden animate-glow-pulse">
                <img 
                  src={profilePhoto} 
                  alt="Mochamad Burhan Islami" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 text-glow leading-tight">
              Mochamad Burhan Islami, ST
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-primary mb-0.5 sm:mb-1">
              Website Designer & Developer
            </p>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground hidden sm:block">
              Graphic Designer | WordPress Specialist | Frontend Developer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium text-xs sm:text-sm break-words whitespace-normal">mochaburi4@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-xs sm:text-sm break-words whitespace-normal">+62 822 4576 7700</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30 col-span-2 md:col-span-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-xs sm:text-sm break-words whitespace-normal">Sidoarjo, East Java</p>
              </div>
            </div>

            <div className="flex items-center gap-1 p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-background/30">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Birth</p>
                <p className="font-medium text-xs break-words whitespace-normal">July 1</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="font-medium text-xs sm:text-sm">Married</p>
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Nation</p>
                <p className="font-medium text-xs sm:text-sm">Indo</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Education</p>
                <div className="flex items-center justify-between gap-2 w-full">
                  <div className="min-w-0">
                    <p className="font-semibold text-xs sm:text-sm md:text-base break-words whitespace-normal">Bachelor of Engineering</p>
                    <p className="text-xs text-muted-foreground break-words whitespace-normal">Industrial Product Design • ITS</p>
                  </div>
                  <p className="text-xs sm:text-sm text-primary whitespace-nowrap">2003-2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
