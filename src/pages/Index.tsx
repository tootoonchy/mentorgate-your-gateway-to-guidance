import { Search, Loader2 } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import MentorCard from "@/components/MentorCard";

const mentorNames = [
  "Heidi Green", "Calvin Horton", "Camila Ruiz", "Wayne Elliott",
  "Samantha Gonzales", "Carl Washington", "Isobel Horton", "Manuel Dean",
  "Sandra Daniels", "Floyd Allen", "Calvin Horton", "Calvin Horton",
  "Kristin Watson", "Samantha Gonzales", "Camila Ruiz", "Isobel Horton",
  "Wayne Elliott", "Camila Ruiz", "Samantha Gonzales", "Manuel Dean",
  "Sandra Daniels", "Floyd Allen", "Wayne Elliott", "Kristin Watson",
];

const coverImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=200&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
];

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
];

const mentors = mentorNames.map((name, i) => ({
  name,
  role: i === 12 || i === 23 ? "Lead UX/UI Designer" : "UX/UI Designer",
  company: "Apple",
  location: "Charleston, United states",
  languages: "English, Arabic",
  experience: "6+ years of experience",
  coverImage: coverImages[i % coverImages.length],
  avatarImage: avatarImages[i % avatarImages.length],
  flag: "🇺🇸",
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

      <main className="max-w-[1600px] mx-auto px-4 md:px-6 py-6">
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
        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map((mentor, i) => (
            <MentorCard key={`${mentor.name}-${i}`} {...mentor} />
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
