import { MapPin, Globe, Clock, MessageCircle, Heart } from "lucide-react";

interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  location: string;
  languages: string;
  experience: string;
  coverImage: string;
  avatarImage: string;
  flag?: string;
  available?: boolean;
}

const MentorCard = ({
  name,
  role,
  company,
  location,
  languages,
  experience,
  coverImage,
  avatarImage,
  flag = "🇺🇸",
  available = true,
}: MentorCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Cover image */}
      <div className="relative h-32 bg-muted">
        <img
          src={coverImage}
          alt={`${name} cover`}
          className="w-full h-full object-cover"
        />

        {/* Action icons */}
        <div className="absolute top-2 right-2 flex gap-1">
          <button className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors">
            <MessageCircle className="h-3.5 w-3.5" />
          </button>
          <button className="p-1.5 rounded-full bg-background/80 backdrop-blur-sm text-destructive hover:bg-background transition-colors">
            <Heart className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-5 left-3">
          <div className="relative">
            <img
              src={avatarImage}
              alt={name}
              className="h-12 w-12 rounded-full border-2 border-background object-cover"
            />
            {available && (
              <span className="absolute -bottom-1 left-0 right-0 mx-auto w-max text-[8px] bg-green-500 text-background px-1.5 py-0.5 rounded-full font-medium">
                Available ASAP
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-7 px-3 pb-3">
        <div className="flex items-center gap-1.5">
          <h3 className="text-sm font-semibold text-foreground truncate">{name}</h3>
          <span className="text-xs">{flag}</span>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">
          {role} · {company}
        </p>

        <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="h-3 w-3 shrink-0" />
            <span>{languages}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3 w-3 shrink-0" />
            <span>{experience}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <button className="w-full py-2.5 text-sm font-medium text-foreground bg-muted hover:bg-accent transition-colors border-t border-border">
        View Profile
      </button>
    </div>
  );
};

export default MentorCard;
