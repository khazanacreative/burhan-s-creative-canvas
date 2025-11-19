import { Mail, Phone, MapPin, Calendar, Heart, User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";
import { useEditableContent, useEditableImage } from "@/hooks/useEditableContent";

const ProfileSection = () => {
  const [name, setName] = useEditableContent('profile_name', 'Mochamad Burhan Islami, ST');
  const [title, setTitle] = useEditableContent('profile_title', 'Website Designer & Developer');
  const [subtitle, setSubtitle] = useEditableContent('profile_subtitle', 'Graphic Designer | WordPress Specialist | Frontend Developer');
  const [email, setEmail] = useEditableContent('profile_email', 'mochaburi4@gmail.com');
  const [phone, setPhone] = useEditableContent('profile_phone', '+62 822 4576 7700');
  const [location, setLocation] = useEditableContent('profile_location', 'Sidoarjo, East Java');
  const [birthdate, setBirthdate] = useEditableContent('profile_birthdate', "July 1'st 1986");
  const [status, setStatus] = useEditableContent('profile_status', 'Married');
  const [gender, setGender] = useEditableContent('profile_gender', 'Male');
  const [about, setAbout] = useEditableContent('profile_about', 'Enthusiastic Web Developer with expertise in website design and development. Proficient in WordPress development and frontend technologies. Passionate about creating engaging and user-friendly web experiences.');
  const [profileImage, setProfileImage] = useEditableImage('profile_photo', profilePhoto);

  return (
    <section className="snap-section gradient-bg-1 px-3 pt-16 sm:pt-20 pb-[3vh]">
      <div className="w-full h-full flex items-center justify-center">
        <div className="glass-morphism rounded-xl p-4 sm:p-6 md:p-8 animate-scale-in w-full max-w-4xl min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh]">
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-block mb-2 sm:mb-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 sm:border-3 md:border-4 border-primary overflow-hidden animate-glow-pulse">
                <EditableImage
                  src={profileImage}
                  alt={name}
                  onImageChange={setProfileImage}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <EditableText
              value={name}
              onChange={setName}
              as="h1"
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3 text-glow leading-tight"
            />
            <EditableText
              value={title}
              onChange={setTitle}
              as="p"
              className="text-sm sm:text-lg md:text-xl text-primary mb-0.5 sm:mb-1"
            />
            <EditableText
              value={subtitle}
              onChange={setSubtitle}
              as="p"
              className="text-xs sm:text-sm md:text-base text-muted-foreground hidden sm:block"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 md:mt-4">
            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Email</p>
                <EditableText
                  value={email}
                  onChange={setEmail}
                  as="p"
                  className="font-medium text-xs sm:text-sm break-words whitespace-normal"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Phone</p>
                <EditableText
                  value={phone}
                  onChange={setPhone}
                  as="p"
                  className="font-medium text-xs sm:text-sm break-words whitespace-normal"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30 col-span-2 md:col-span-1">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Location</p>
                <EditableText
                  value={location}
                  onChange={setLocation}
                  as="p"
                  className="font-medium text-xs sm:text-sm break-words whitespace-normal"
                />
              </div>
            </div>

            <div className="flex items-center gap-1 p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-background/30">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Birthdate</p>
                <EditableText
                  value={birthdate}
                  onChange={setBirthdate}
                  as="p"
                  className="font-medium text-xs break-words whitespace-normal"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Status</p>
                <EditableText
                  value={status}
                  onChange={setStatus}
                  as="p"
                  className="font-medium text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
              <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground">Gender</p>
                <EditableText
                  value={gender}
                  onChange={setGender}
                  as="p"
                  className="font-medium text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 sm:mt-4 md:mt-6 p-2 sm:p-3 md:p-4 rounded-md sm:rounded-lg bg-background/30">
            <h3 className="text-xs sm:text-sm md:text-base font-semibold text-primary mb-1 sm:mb-2">About Me</h3>
            <EditableText
              value={about}
              onChange={setAbout}
              multiline
              as="p"
              className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
