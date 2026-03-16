import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Menu, User, MapPin, Globe, Calendar, Star, Users, CheckCircle,
  MessageSquare, UserPlus, Linkedin, Instagram, Facebook, Twitter, Youtube,
  ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Video, UserCheck,
  Users2, Building2, Play, MoreHorizontal, ThumbsUp, Heart, MessageCircle,
  Search, SlidersHorizontal, Lock, Clock, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";

// --- All mentors (same data as Index page) ---
const allMentors = [
  { name: "Heidi Green", role: "UX/UI Designer", company: "Apple", location: "Charleston, US", languages: "English, Arabic", experience: "6+ years", flag: "🇺🇸" },
  { name: "Calvin Horton", role: "Product Manager", company: "Google", location: "London, UK", languages: "English, French", experience: "8+ years", flag: "🇬🇧" },
  { name: "Camila Ruiz", role: "Data Scientist", company: "Meta", location: "Madrid, Spain", languages: "Spanish, English", experience: "5+ years", flag: "🇪🇸" },
  { name: "Wayne Elliott", role: "Software Engineer", company: "Microsoft", location: "Berlin, Germany", languages: "English, German", experience: "10+ years", flag: "🇩🇪" },
  { name: "Samantha Gonzales", role: "Marketing Lead", company: "Spotify", location: "Stockholm, Sweden", languages: "English, Swedish", experience: "7+ years", flag: "🇸🇪" },
  { name: "Carl Washington", role: "UX Researcher", company: "Amazon", location: "Seattle, US", languages: "English", experience: "4+ years", flag: "🇺🇸" },
  { name: "Isobel Horton", role: "Design Director", company: "Figma", location: "Toronto, Canada", languages: "English, French", experience: "12+ years", flag: "🇨🇦" },
  { name: "Manuel Dean", role: "Frontend Engineer", company: "Stripe", location: "São Paulo, Brazil", languages: "Portuguese, English", experience: "6+ years", flag: "🇧🇷" },
  { name: "Sandra Daniels", role: "Content Strategist", company: "Notion", location: "Paris, France", languages: "French, English", experience: "5+ years", flag: "🇫🇷" },
  { name: "Floyd Allen", role: "DevOps Engineer", company: "Netflix", location: "Tokyo, Japan", languages: "English, Japanese", experience: "9+ years", flag: "🇯🇵" },
  { name: "Kristin Watson", role: "Lead UX/UI Designer", company: "Airbnb", location: "Melbourne, Australia", languages: "English", experience: "11+ years", flag: "🇦🇺" },
  { name: "Ahmed Hassan", role: "AI Engineer", company: "OpenAI", location: "Dubai, UAE", languages: "Arabic, English", experience: "5+ years", flag: "🇦🇪" },
  { name: "Yuki Tanaka", role: "Product Designer", company: "LINE", location: "Osaka, Japan", languages: "Japanese, English", experience: "7+ years", flag: "🇯🇵" },
  { name: "Priya Sharma", role: "Growth Manager", company: "Razorpay", location: "Mumbai, India", languages: "Hindi, English", experience: "6+ years", flag: "🇮🇳" },
  { name: "Luca Rossi", role: "Backend Engineer", company: "Shopify", location: "Milan, Italy", languages: "Italian, English", experience: "8+ years", flag: "🇮🇹" },
  { name: "Elena Petrov", role: "UX Writer", company: "Canva", location: "Sydney, Australia", languages: "English, Russian", experience: "4+ years", flag: "🇦🇺" },
  { name: "James O'Brien", role: "CTO", company: "Intercom", location: "Dublin, Ireland", languages: "English, Irish", experience: "15+ years", flag: "🇮🇪" },
  { name: "Sofia Martinez", role: "Brand Designer", company: "Uber", location: "Mexico City, Mexico", languages: "Spanish, English", experience: "6+ years", flag: "🇲🇽" },
  { name: "Chen Wei", role: "ML Engineer", company: "ByteDance", location: "Shanghai, China", languages: "Mandarin, English", experience: "7+ years", flag: "🇨🇳" },
  { name: "Fatima Al-Rashid", role: "PM Lead", company: "Careem", location: "Riyadh, Saudi Arabia", languages: "Arabic, English", experience: "9+ years", flag: "🇸🇦" },
  { name: "Oliver Schmidt", role: "Full Stack Dev", company: "SAP", location: "Munich, Germany", languages: "German, English", experience: "8+ years", flag: "🇩🇪" },
  { name: "Anya Kowalski", role: "UX/UI Designer", company: "Revolut", location: "Warsaw, Poland", languages: "Polish, English", experience: "5+ years", flag: "🇵🇱" },
  { name: "Tariq Osman", role: "Data Engineer", company: "Grab", location: "Singapore", languages: "English, Malay", experience: "6+ years", flag: "🇸🇬" },
  { name: "Maria Santos", role: "Scrum Master", company: "Atlassian", location: "Lisbon, Portugal", languages: "Portuguese, English", experience: "7+ years", flag: "🇵🇹" },
];

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
];

const defaultBio = `With over 18 years of experience in engineering, product management, and executive leadership, I bring a unique blend of technical depth, strategic vision, and operational expertise. I've built and scaled products, teams, and companies, working at the intersection of cloud-native technologies, observability, and organizational transformation.`;

function getMentorFromSlug(slug: string | undefined) {
  if (!slug) return null;
  const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "");
  const found = allMentors.find(
    (m) => m.name.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/\s+/g, "-") === normalizedSlug ||
           m.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") === slug
  );
  if (!found) return null;
  const idx = allMentors.indexOf(found);
  return {
    name: found.name,
    flag: found.flag,
    role: found.role,
    company: found.company,
    location: found.location,
    languages: found.languages,
    experience: found.experience + " of experience",
    reviews: "Reviews (4.9 - 2.4k)",
    subscribers: "124 Subscribers",
    sessions: "37 Completed sessions",
    available: true,
    avatar: avatarImages[idx % avatarImages.length],
    cover: "",
    bio: defaultBio,
    expertise: ["Building a team", "Go to market strategy", "Leadership", "Product marketing", "Technology and tools"],
    socialLinks: ["linkedin", "instagram", "facebook", "twitter", "youtube"],
  };
}

const services = [
  {
    title: "1:1 Video Consultation",
    icon: Video,
    tagColor: "#D7BDFF",
    description: "Book a 1:1 live video consultation & get personalized advice",
    nextAvailable: "Friday, 31 January\n9:00am (GMT +8)",
    price: "Starting at $80",
    rating: "4.98",
    cta: "Request a Call",
  },
  {
    title: "1:1 Mentorship",
    icon: UserCheck,
    tagColor: "#DCF251",
    included: [
      "1:1 Chat (Unlimited)",
      "1:1 Video Calls (30 min / month)",
      "Details on how to build & manage a successful restaurant",
      "Advice on how to scale operations, launch a new location, & enter a new market",
      "Common mistakes when building a restaurant business",
      "Establishing and reviewing metrics for monitoring financial health and performance",
    ],
    price: "$250/Month",
    rating: "4.98",
    remaining: "2 plans remaining!",
    cta: "Subscribe",
  },
  {
    title: "Community Membership",
    icon: Users2,
    tagColor: "#FFD836",
    included: [
      "Details on how to build & manage a successful restaurant",
      "Advice on how to scale operations, launch a new location, & enter a new market",
      "Common mistakes when building a restaurant business",
      "Establishing and reviewing metrics for monitoring financial health and performance",
    ],
    price: "$50/Month",
    rating: "4.98",
    cta: "Subscribe",
  },
  {
    title: "Corporate Mentorship",
    icon: Building2,
    tagColor: "#C4DEF8",
    included: [
      "B2B and corporate clients booking for workshop or limited time experiences.",
      "Common mistakes when building a restaurant business",
      "Establishing and reviewing metrics for monitoring financial health and performance",
    ],
    price: "$500/hour or $5000/day",
    rating: "4.98",
    cta: "Subscribe",
  },
];

const reviews = [
  {
    name: "Kristin Watson",
    date: "1 Feb 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    text: "I really enjoyed my convo with Andreas. He gave me lots of great suggestions, especially around positioning and messaging for my subscription-based editing and design service. Thanks so much for all the help – I'm excited to stay in touch!",
  },
  {
    name: "Guy Hawkins",
    date: "23 Dec 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    text: "Great Insights! Helpful actions can be taken from the session. thank you!",
  },
  {
    name: "Dianne Russell",
    date: "1 Nov 2024",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop&crop=face",
    text: "I had a great meeting with Andreas. We discussed strategy, positioning, and pricing, and I found his insights to be incredibly valuable, as he provided practical suggestions that I believe will greatly enhance our approach. His professional background and expertise made the conversation both productive and enjoyable. Highly recommended!",
  },
  {
    name: "Jerome Bell",
    date: "1 Nov 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    text: "Had a great session with Andreas, as a founder of an AI startup he was very helpful to me in providing critical feedback of our positioning and go to market strategy. I hope to have good reason to speak again in the future to pick his brains on a PLG strategy. I found him very attentive and enjoyed our conversation a lot, highly recommended mentor!",
  },
];

const feedPosts = [
  {
    author: "Ney Batista",
    flag: "🇺🇸",
    category: "Technology",
    time: "09:19 AM",
    text: "I really enjoyed my convo with and He gave me lots of great suggestions, especially around positioning and messaging for my subscription-based editing and design service.",
    likes: 56,
    claps: 23,
    hearts: 2,
    replies: 29,
    images: [],
  },
  {
    author: "Ney Batista",
    flag: "🇺🇸",
    category: "Technology",
    time: "09:19 AM",
    text: "I really enjoyed my convo with and He gave me lots of great.",
    likes: 56,
    claps: 23,
    hearts: 2,
    replies: 29,
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=300&h=200&fit=crop",
    ],
  },
  {
    author: "Kristin Watson",
    flag: "",
    category: "Technology",
    time: "09:19 AM",
    text: "Which one would you pick?\n\n#tech #polls #mentorpoll",
    likes: 56,
    claps: 23,
    hearts: 2,
    replies: 29,
    poll: {
      question: "If you had to pick ONE of these, what would that be?",
      subtitle: "Thanks for participating!",
      options: [
        { label: "Unlimited leaves per year", pct: 20 },
        { label: "4 company offsites per year", pct: 13 },
        { label: "Profit sharing within the team", pct: 49, selected: true },
        { label: "unlimited budget for courses", pct: 18 },
      ],
    },
  },
];

const courses = [
  {
    title: "Very long course name",
    description: "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?",
    extra: "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    access: "Public",
    locked: false,
  },
  {
    title: "Very long course name",
    description: "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop",
    access: "Public",
    locked: true,
  },
  {
    title: "Very long course name",
    description: "But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a",
    extra: "• Pain that produces no resultant",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    access: "Public",
    locked: false,
  },
];

// --- Activity Heatmap (GitHub-style, ending today) ---
const ActivityHeatmap = () => {
  // GitHub-style green palette
  const greenColors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  const levelClasses = ["bg-[#ebedf0]", "bg-[#9be9a8]", "bg-[#40c463]", "bg-[#30a14e]", "bg-[#216e39]"];

  // Generate 365 days of data ending today
  const today = new Date();
  const cells = useMemo(() => {
    const result: { date: Date; level: number }[] = [];
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      // Random activity level, with more activity for recent days
      const recencyBoost = i < 30 ? 0.3 : i < 90 ? 0.15 : 0;
      const rand = Math.random() + recencyBoost;
      let level = 0;
      if (rand > 0.85) level = 4;
      else if (rand > 0.7) level = 3;
      else if (rand > 0.5) level = 2;
      else if (rand > 0.35) level = 1;
      result.push({ date: d, level });
    }
    return result;
  }, []);

  // Group into weeks (columns), 7 days each
  const weeks: { date: Date; level: number }[][] = [];
  // First, find what day of week the first cell is
  const firstDay = cells[0].date.getDay(); // 0=Sun
  // Pad the beginning so columns align
  const paddedCells = [...Array(firstDay === 0 ? 6 : firstDay - 1).fill(null), ...cells];
  for (let i = 0; i < paddedCells.length; i += 7) {
    weeks.push(paddedCells.slice(i, i + 7));
  }

  // Month labels
  const monthLabels: { label: string; col: number }[] = [];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const validCell = week.find((c) => c !== null);
    if (validCell) {
      const m = validCell.date.getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ label: monthNames[m], col: wi });
        lastMonth = m;
      }
    }
  });

  const dayLabels = ["Mon", "", "Wed", "", "Fri", "", ""];
  const totalWeeks = weeks.length;
  const cellSize = 11;
  const cellGap = 2;
  const gridWidth = totalWeeks * (cellSize + cellGap);

  return (
    <div>
      {/* Month labels */}
      <div className="flex mb-1 ml-8" style={{ width: gridWidth }}>
        {monthLabels.map((ml, i) => {
          const nextCol = i < monthLabels.length - 1 ? monthLabels[i + 1].col : totalWeeks;
          const span = nextCol - ml.col;
          return (
            <span
              key={i}
              className="text-[10px] text-muted-foreground"
              style={{ width: span * (cellSize + cellGap), flexShrink: 0 }}
            >
              {ml.label}
            </span>
          );
        })}
      </div>
      {/* Grid */}
      <div className="flex gap-0">
        {/* Day labels */}
        <div className="flex flex-col mr-1" style={{ gap: cellGap }}>
          {dayLabels.map((d, i) => (
            <span key={i} className="text-[10px] text-muted-foreground leading-none" style={{ height: cellSize, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: 24 }}>
              {d}
            </span>
          ))}
        </div>
        {/* Weeks */}
        <div className="flex" style={{ gap: cellGap }}>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col" style={{ gap: cellGap }}>
              {week.map((cell, di) => (
                <div
                  key={di}
                  className={`rounded-[2px] ${cell ? levelClasses[cell.level] : 'bg-transparent'}`}
                  style={{ width: cellSize, height: cellSize }}
                  title={cell ? `${cell.date.toLocaleDateString()}: Level ${cell.level}` : ''}
                />
              ))}
              {/* Pad remaining cells if week is incomplete */}
              {week.length < 7 && Array.from({ length: 7 - week.length }).map((_, pi) => (
                <div key={`pad-${pi}`} style={{ width: cellSize, height: cellSize }} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Legend */}
      <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-muted-foreground">
        <span>Less</span>
        {levelClasses.map((l, i) => (
          <div key={i} className={`rounded-[2px] ${l}`} style={{ width: 11, height: 11 }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

// --- Collapsible Service Card (Figma-accurate) ---
const ServiceCard = ({ service, defaultOpen = false, zIndex = 0 }: { service: typeof services[0]; defaultOpen?: boolean; zIndex?: number }) => {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = service.icon;

  return (
    <div
      className="relative flex flex-col items-start"
      style={{
        width: "360px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 40px rgba(203, 204, 205, 0.3)",
        borderRadius: open ? "8px" : "8px",
        margin: "-8px 0px",
        zIndex,
      }}
    >
      {/* Colored Tag Badge — top right */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          width: "40px",
          height: "40px",
          right: "24px",
          top: "0px",
          background: service.tagColor,
          borderRadius: "0px 0px 4px 4px",
        }}
      >
        <Icon style={{ width: "24px", height: "24px", color: "rgba(0,0,0,0.9)" }} />
      </div>

      {/* Title row — clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start"
        style={{ padding: "16px 24px 16px 24px" }}
      >
        <span
          style={{
            fontFamily: "'Geist', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            letterSpacing: "0.01em",
            color: "rgba(0,0,0,0.9)",
          }}
        >
          {service.title}
        </span>
      </button>

      {/* Divider */}
      <div style={{ width: "360px", height: "0px", borderBottom: "1px solid rgba(0,0,0,0.1)" }} />

      {open && (
        <>
          {/* Features / Description */}
          {service.description && (
            <div style={{ padding: "16px 24px 0" }}>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "17px",
                  letterSpacing: "0.01em",
                  color: "rgba(0,0,0,0.9)",
                }}
              >
                {service.description}
              </p>
            </div>
          )}

          {service.nextAvailable && (
            <div style={{ padding: "16px 24px 0" }}>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgba(0,0,0,0.9)",
                  marginBottom: "4px",
                }}
              >
                Next available
              </p>
              <div className="flex items-center gap-1">
                <Calendar style={{ width: "20px", height: "20px", color: "rgba(0,0,0,0.5)" }} />
                <span
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.01em",
                    color: "rgba(0,0,0,0.9)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {service.nextAvailable}
                </span>
              </div>
            </div>
          )}

          {service.included && (
            <div style={{ padding: "16px 24px 20px" }}>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgba(0,0,0,0.9)",
                  marginBottom: "8px",
                }}
              >
                What's included:
              </p>
              <div className="space-y-1">
                {service.included.map((item, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0.01em",
                      color: "rgba(0,0,0,0.9)",
                    }}
                  >
                    ✦ {item}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Divider before price */}
          <div style={{ width: "360px", height: "0px", borderBottom: "1px solid rgba(0,0,0,0.1)" }} />

          {/* Price row */}
          <div
            className="flex items-center justify-between"
            style={{ padding: "20px 24px", width: "360px", boxSizing: "border-box" }}
          >
            <div className="flex flex-col gap-1 flex-1">
              {service.remaining && (
                <span
                  style={{
                    fontFamily: "'Kumbh Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "18px",
                    letterSpacing: "0.01em",
                    color: "rgba(0,0,0,0.9)",
                    background: "#FFE895",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    display: "inline-block",
                    width: "fit-content",
                    marginBottom: "4px",
                  }}
                >
                  {service.remaining}
                </span>
              )}
              <span
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgba(0,0,0,0.9)",
                }}
              >
                {service.price}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star style={{ width: "20px", height: "20px", color: "rgba(0,0,0,0.8)" }} />
              <span
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.01em",
                  color: "rgba(0,0,0,0.9)",
                }}
              >
                {service.rating}
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="flex items-center justify-center w-full hover:opacity-90 transition-opacity"
            style={{
              padding: "14px 16px",
              height: "60px",
              background: "#1A1A1A",
              borderRadius: "0 0 8px 8px",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "11px",
                letterSpacing: "0.01em",
                color: "#FFFFFF",
              }}
            >
              {service.cta}
            </span>
          </button>
        </>
      )}
    </div>
  );
};

// --- Services Sidebar ---
const ServicesSidebar = () => (
  <div className="flex flex-col" style={{ width: "360px", gap: "0px", paddingTop: "8px" }}>
    <h3
      style={{
        fontFamily: "'Geist', sans-serif",
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "18px",
        letterSpacing: "0.01em",
        color: "rgba(0,0,0,0.9)",
        marginBottom: "12px",
      }}
    >
      Services
    </h3>
    {services.map((service, i) => (
      <ServiceCard key={i} service={service} zIndex={i} defaultOpen={i === services.length - 1} />
    ))}
  </div>
);

type MentorInfo = ReturnType<typeof getMentorFromSlug> & {};

const OverviewTab = ({ mentor }: { mentor: NonNullable<MentorInfo> }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
    <div className="space-y-6">
      {/* Activity */}
      <div className="border border-border rounded-xl p-5 bg-card overflow-hidden">
        <h3 className="text-base font-semibold text-foreground mb-4">Activity</h3>
        <ActivityHeatmap />
      </div>

      {/* Biography */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-3">Biography</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
        <button className="flex items-center gap-1 mt-3 text-sm text-foreground font-medium">
          Read More <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Expertise */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-3">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {mentor.expertise.map((tag) => (
            <span key={tag} className="px-3 py-1.5 text-xs font-medium border border-border rounded-full text-foreground bg-background">
              ✅ {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-4">Reviews (32)</h3>
        <div className="space-y-5">
          {reviews.map((review, i) => (
            <div key={i} className="flex gap-3">
              <img src={review.avatar} alt={review.name} className="h-8 w-8 rounded-full object-cover shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
          View more
        </button>
      </div>
    </div>

    {/* Sidebar */}
    <div className="hidden lg:block">
      <ServicesSidebar />
    </div>
  </div>
);

// --- Feed Tab ---
const FeedTab = ({ mentor }: { mentor: NonNullable<MentorInfo> }) => {
  const categories = ["All", "Career advice", "Mentorship", "Community", "Technology", "Tech Tools", "Podca"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
      <div className="space-y-4">
        <div className="border border-border rounded-xl p-5 bg-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-foreground">Feed Activity</h3>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap ${
                  i === 0 ? "bg-foreground text-background" : "border border-border text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {feedPosts.map((post, i) => (
          <div key={i} className="border border-border rounded-xl p-5 bg-card">
            <div className="flex items-start gap-3">
              <img src={mentor.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-foreground">{post.author} {post.flag}</span>
                  <span className="text-xs text-muted-foreground">Added in</span>
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                <div className="flex items-center justify-end">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground mt-3 whitespace-pre-line">{post.text}</p>

            {post.images && post.images.length > 0 && (
              <div className="flex gap-2 mt-3">
                {post.images.map((img, j) => (
                  <img key={j} src={img} alt="" className="flex-1 rounded-lg object-cover h-40" />
                ))}
              </div>
            )}

            {post.poll && (
              <div className="mt-3 border border-border rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground">{post.poll.question}</p>
                <p className="text-xs text-muted-foreground mt-1">{post.poll.subtitle}</p>
                <div className="space-y-2 mt-3">
                  {post.poll.options.map((opt, j) => (
                    <div
                      key={j}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                        opt.selected ? "border-2 border-foreground" : "border border-border"
                      }`}
                    >
                      <span className="text-foreground">{opt.label}</span>
                      <span className="text-muted-foreground">{opt.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">👍 {post.likes}</span>
              <span className="flex items-center gap-1">👏 {post.claps}</span>
              <span className="flex items-center gap-1">❤️ {post.hearts}</span>
              <span className="flex items-center gap-1 ml-auto">💬 {post.replies} Replies</span>
            </div>

            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
              <img src={mentor.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
              <span className="text-xs text-muted-foreground flex-1">Reply to {post.author}...</span>
              <button className="px-3 py-1 text-xs font-medium bg-foreground text-background rounded-md">Post</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right sidebar */}
      <div className="hidden lg:block space-y-4">
        {/* Create post */}
        <div className="border border-border rounded-xl p-4 bg-card">
          <h4 className="text-sm font-semibold text-foreground mb-3">Create post</h4>
          <div className="mb-2">
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">Hello Community ▾</span>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <img src={mentor.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
            <div className="flex-1 border border-border rounded-lg p-2 min-h-[60px]">
              <span className="text-xs text-muted-foreground">What's on your mind?</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>0/4000</span>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">📷 Media</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">📎 Attach</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">📊 Poll</span>
            <button className="ml-auto px-3 py-1 text-xs font-medium bg-foreground text-background rounded-md">Post</button>
          </div>
        </div>

        {/* Services list */}
        <ServicesSidebar />
      </div>
    </div>
  );
};

// --- Courses Tab ---
const CoursesTab = () => (
  <div className="border border-border rounded-xl p-5 bg-card">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-base font-semibold text-foreground">Courses</h3>
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground cursor-pointer" />
        <SlidersHorizontal className="h-4 w-4 text-muted-foreground cursor-pointer" />
      </div>
    </div>
    <div className="space-y-6">
      {courses.map((course, i) => (
        <div key={i} className="flex gap-4">
          <div className="relative w-48 h-32 shrink-0 rounded-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            {course.locked && (
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" />
                  Subscribe to unlock
                </div>
              </div>
            )}
            <span className="absolute bottom-2 right-2 text-[10px] font-medium bg-foreground text-background px-2 py-0.5 rounded">
              {course.access}
            </span>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h4 className="text-sm font-semibold text-foreground">{course.title}</h4>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground shrink-0" />
            </div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{course.description}</p>
            {course.extra && (
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{course.extra}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Profile Header ---
const ProfileHeader = ({ mentor }: { mentor: NonNullable<MentorInfo> }) => {
  const socialIcons: Record<string, any> = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
  };

  return (
    <>
      <div
        className="relative h-40 md:h-52 bg-secondary"
        style={{ background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 50%, hsl(var(--accent)) 100%)" }}
      />
      <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-14 relative z-10 pb-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="relative shrink-0">
            <img src={mentor.avatar} alt={mentor.name} className="h-28 w-28 rounded-full border-4 border-background object-cover shadow-lg" />
            {mentor.available && (
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium flex items-center gap-1 text-[10px] bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full border border-border">
                <Zap className="h-3 w-3" /> Available ASAP
              </span>
            )}
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-foreground">{mentor.name}</h1>
              <span>{mentor.flag}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {mentor.role} <span className="mx-1 opacity-40">·</span> {mentor.company}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {mentor.location}</span>
              <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> {mentor.languages}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {mentor.experience}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {mentor.reviews}</span>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {mentor.subscribers}</span>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5" /> {mentor.sessions}</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              {mentor.socialLinks.map((social) => {
                const Icon = socialIcons[social];
                return Icon ? (
                  <a key={social} href="#" className="text-foreground hover:text-muted-foreground transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ) : null;
              })}
              <a href="#" className="flex items-center gap-1 text-xs text-foreground hover:text-muted-foreground transition-colors">
                <ExternalLink className="h-3.5 w-3.5" /> Personal website
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:self-end md:mb-2">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
              <MessageSquare className="h-4 w-4" /> Message
            </button>
            <button className="p-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
              <UserPlus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// --- Main Page Component ---
const tabs = ["Overview", "Feed", "Podcasts", "Courses", "Files", "Calendar"];

const MentorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Overview");
  const mentor = getMentorFromSlug(id);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          Mentor not found. <Link to="/" className="ml-2 underline text-foreground">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProfileHeader mentor={mentor} />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between border-b border-border mb-6">
          <div className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className="text-sm font-medium text-foreground flex items-center gap-1">
            Services <span className="bg-muted text-xs px-1.5 py-0.5 rounded">4</span>
          </span>
        </div>

        <div className="pb-12">
          {activeTab === "Overview" && <OverviewTab mentor={mentor} />}
          {activeTab === "Feed" && <FeedTab mentor={mentor} />}
          {activeTab === "Courses" && <CoursesTab />}
          {(activeTab === "Podcasts" || activeTab === "Files" || activeTab === "Calendar") && (
            <div className="text-center py-12 text-muted-foreground text-sm">
              {activeTab} content coming soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
