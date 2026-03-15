import { Search, Loader2 } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import MentorCard from "@/components/MentorCard";

const mentorData = [
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
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
];

const mentors = mentorData.map((m, i) => ({
  ...m,
  coverImage: "",
  avatarImage: avatarImages[i % avatarImages.length],
  available: true,
}));

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = mentors.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="w-fit mx-auto px-4 md:px-6 py-6">
        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search mentor by name or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <CategoryFilter />
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-[repeat(6,251.76px)] gap-3 justify-center">
          {filtered.map((mentor, i) => (
            <MentorCard key={`${mentor.name}-${i}`} {...mentor} index={i} />
          ))}
        </div>

        {/* Loading indicator */}
        <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground text-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          Please wait loading your mentors
        </div>
      </main>
    </div>
  );
};

export default Index;
