import { MapPin, Globe, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div
      className="flex flex-col items-start isolate bg-card overflow-hidden"
      style={{
        width: "251.76px",
        boxShadow: "0px 0px 28px rgba(203, 204, 205, 0.3)",
        borderRadius: "5.6px",
      }}
    >
      {/* Cover area with background image + avatar */}
      <div className="relative w-full" style={{ height: "141.59px" }}>
        {/* Banner background — abstract gradient instead of people */}
        <div
          className="w-full bg-muted"
          style={{
            height: "84px",
            borderRadius: "2.8px 2.8px 0 0",
            background: `linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--accent)) 50%, hsl(var(--border)) 100%)`,
          }}
        />

        {/* Badges — TOP, yellow, blue */}
        <div
          className="absolute flex gap-[5.26px]"
          style={{ right: "13.52px", top: "84px" }}
        >
          <div className="flex items-center justify-center bg-foreground text-background" style={{ width: "21px", height: "21px" }}>
            <span className="text-[5.25px] font-bold tracking-wide">TOP</span>
          </div>
          <div className="flex items-center justify-center" style={{ width: "21px", height: "21px", background: "#FFD836" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/></svg>
          </div>
          <div className="flex items-center justify-center" style={{ width: "21px", height: "21px", background: "#D2DEF7" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2"/></svg>
          </div>
        </div>

        {/* Avatar */}
        <div className="absolute flex items-center" style={{ left: "16.82px", top: "0px", paddingTop: "0px" }}>
          <div className="relative" style={{ width: "85.53px", height: "85.53px" }}>
            <img
              src={avatarImage}
              alt={name}
              className="object-cover"
              style={{
                width: "85.53px",
                height: "85.53px",
                border: "2.8px solid white",
                borderRadius: "42.77px",
              }}
            />
            {available && (
              <div
                className="absolute flex items-center gap-[2.14px]"
                style={{
                  left: "0px",
                  bottom: "0px",
                  width: "87.71px",
                  height: "17.49px",
                  background: "#D5F2DA",
                  borderRadius: "42.77px",
                  padding: "4.96px 7px 3.97px",
                }}
              >
                <Zap style={{ width: "8.55px", height: "8.55px", color: "#3B6643" }} />
                <span
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: "9px",
                    lineHeight: "6px",
                    color: "#3B6643",
                  }}
                >
                  Available ASAP
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content / Features */}
      <div
        className="flex flex-col items-start w-full"
        style={{ padding: "11.21px 16.82px 11.21px" }}
      >
        {/* Name + role */}
        <div className="flex flex-col gap-[2.8px]" style={{ paddingRight: "22.42px" }}>
          <div className="flex items-center gap-1">
            <span
              className="text-foreground"
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "18px",
                letterSpacing: "0.01em",
              }}
            >
              {name}
            </span>
            <span className="text-xs">{flag}</span>
          </div>
          <div className="flex items-center gap-[4.9px]">
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "17px",
                letterSpacing: "0.01em",
                color: "rgba(0,0,0,0.9)",
              }}
            >
              {role}
            </span>
            <span style={{ width: "1.4px", height: "1.4px", background: "rgba(0,0,0,0.54)", borderRadius: "50%" }} />
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "17px",
                letterSpacing: "0.01em",
                color: "rgba(0,0,0,0.9)",
              }}
            >
              {company}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-[7.01px] mt-[14px]" style={{ maxWidth: "218.62px" }}>
          <div className="flex items-center gap-[4.2px]">
            <MapPin style={{ width: "16px", height: "16px", color: "rgba(0,0,0,0.8)" }} />
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "17px",
                letterSpacing: "0.01em",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              {location}
            </span>
          </div>
          <div className="flex items-center gap-[4.2px]">
            <Globe style={{ width: "16px", height: "16px", color: "rgba(0,0,0,0.8)" }} />
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "17px",
                letterSpacing: "0.01em",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              {languages}
            </span>
          </div>
          <div className="flex items-center gap-[4.2px]">
            <Clock style={{ width: "16px", height: "16px", color: "rgba(0,0,0,0.8)" }} />
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "17px",
                letterSpacing: "0.01em",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              {experience}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full" style={{ height: "0.7px", borderTop: "0.7px solid rgba(0,0,0,0.1)" }} />

      {/* View Profile Button */}
      <Link
        to={`/mentor/${name.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex items-center justify-center w-full"
        style={{
          padding: "9.81px 11.21px",
          height: "42.03px",
          background: "#1A1A1A",
          fontFamily: "'Geist', sans-serif",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "11px",
          letterSpacing: "0.01em",
          color: "#FFFFFF",
        }}
      >
        View Profile
      </Link>
    </div>
  );
};

export default MentorCard;
