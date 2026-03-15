import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Menu, User, MapPin, Globe, Calendar, Star, Users, CheckCircle,
  MessageSquare, UserPlus, Linkedin, Instagram, Facebook, Twitter, Youtube,
  ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Video, UserCheck,
  Users2, Building2, Play, MoreHorizontal, ThumbsUp, Heart, MessageCircle,
  Search, SlidersHorizontal, Lock, Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";

// --- Mock Data ---
const mentorData = {
  name: "Ney Batista",
  flag: "🇺🇸",
  role: "Product Designer",
  company: "MentorGate",
  location: "Charleston, United states",
  languages: "English, Spanish",
  experience: "10+ years of experience",
  reviews: "Reviews (4.9 - 2.4k)",
  subscribers: "124 Subscribers",
  sessions: "37 Completed sessions",
  available: true,
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  cover: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=300&fit=crop",
  bio: `With over 18 years of experience in engineering, product management, and executive leadership, I bring a unique blend of technical depth, strategic vision, and operational expertise. I've built and scaled products, teams, and companies, working at the intersection of cloud-native technologies, observability, and organizational transformation.`,
  expertise: ["Building a team", "Go to market strategy", "Leadership", "Product marketing", "Technology and tools"],
  socialLinks: ["linkedin", "instagram", "facebook", "twitter", "youtube"],
};

const services = [
  {
    title: "1:1 Video Consultation",
    icon: Video,
    color: "bg-amber-100 text-amber-700",
    description: "Book a 1:1 live video consultation & get personalized advice",
    nextAvailable: "Friday, 31 January\n9:00am (GMT +8)",
    price: "Starting at $80",
    rating: "4.98",
    cta: "Request a Call",
  },
  {
    title: "1:1 Mentorship",
    icon: UserCheck,
    color: "bg-amber-100 text-amber-700",
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
    color: "bg-amber-100 text-amber-700",
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
    color: "bg-amber-100 text-amber-700",
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

// --- Activity Heatmap ---
const ActivityHeatmap = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const levels = ["bg-muted", "bg-green-100", "bg-green-200", "bg-green-400", "bg-green-600"];

  return (
    <div>
      <div className="flex gap-1 mb-1 ml-8">
        {months.map((m) => (
          <span key={m} className="text-[10px] text-muted-foreground w-[calc(100%/12)] text-center">{m}</span>
        ))}
      </div>
      {days.map((day) => (
        <div key={day} className="flex items-center gap-1 mb-[2px]">
          <span className="text-[10px] text-muted-foreground w-7 text-right pr-1">{day}</span>
          <div className="flex gap-[2px] flex-1">
            {Array.from({ length: 52 }).map((_, i) => (
              <div
                key={i}
                className={`w-[calc(100%/52)] aspect-square rounded-[2px] ${levels[Math.floor(Math.random() * 5)]}`}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-muted-foreground">
        <span>Less</span>
        {levels.map((l, i) => (
          <div key={i} className={`w-3 h-3 rounded-[2px] ${l}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};

// --- Services Sidebar ---
const ServicesSidebar = () => (
  <div className="space-y-4">
    {services.map((service, i) => (
      <div key={i} className="border border-border rounded-xl p-4 bg-card">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-semibold text-foreground">{service.title}</h4>
          <div className={`p-1.5 rounded-lg ${service.color}`}>
            <service.icon className="h-4 w-4" />
          </div>
        </div>

        {service.description && (
          <p className="text-xs text-muted-foreground mb-3">{service.description}</p>
        )}

        {service.nextAvailable && (
          <div className="mb-3">
            <p className="text-xs font-medium text-foreground mb-1">Next available</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span className="whitespace-pre-line">{service.nextAvailable}</span>
            </div>
          </div>
        )}

        {service.included && (
          <div className="mb-3">
            <p className="text-xs font-medium text-foreground mb-1">What's included:</p>
            <ul className="space-y-1">
              {service.included.map((item, j) => (
                <li key={j} className="text-xs text-muted-foreground flex gap-1">
                  <span>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-foreground">{service.price}</span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3" />
            <span>{service.rating}</span>
          </div>
        </div>

        {service.remaining && (
          <p className="text-xs text-muted-foreground mb-2">{service.remaining}</p>
        )}

        <button className="w-full py-2.5 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity">
          {service.cta}
        </button>
      </div>
    ))}
  </div>
);

// --- Overview Tab ---
const OverviewTab = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
    <div className="space-y-6">
      {/* Activity */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-4">Activity</h3>
        <ActivityHeatmap />
      </div>

      {/* Biography */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-3">Biography</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{mentorData.bio}</p>
        <button className="flex items-center gap-1 mt-3 text-sm text-foreground font-medium">
          Read More <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Expertise */}
      <div className="border border-border rounded-xl p-5 bg-card">
        <h3 className="text-base font-semibold text-foreground mb-3">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {mentorData.expertise.map((tag) => (
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
const FeedTab = () => {
  const categories = ["All", "Career advice", "Mentorship", "Community", "Technology", "Tech Tools", "Podca"];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
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
              <img src={mentorData.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-foreground">{post.author} {post.flag}</span>
                  <span className="text-xs text-muted-foreground">Added in</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.time}</span>
                </div>
                <div className="flex items-center justify-end">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <p className="text-sm text-foreground mt-3 whitespace-pre-line">{post.text}</p>

            {post.images.length > 0 && (
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
              <img src={mentorData.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
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
            <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Hello Community ▾</span>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <img src={mentorData.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
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
        <div className="border border-border rounded-xl p-4 bg-card">
          <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
          {services.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-sm text-foreground">{s.title}</span>
              <div className={`p-1.5 rounded-lg ${s.color}`}>
                <s.icon className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
          <div className="mt-3">
            <p className="text-xs text-muted-foreground mb-1">What's included:</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              {services[3].included?.map((item, j) => (
                <li key={j}>✦ {item}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-semibold">{services[3].price}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Star className="h-3 w-3" /> {services[3].rating}</span>
            </div>
            <button className="w-full mt-2 py-2.5 text-sm font-medium bg-foreground text-background rounded-lg">Subscribe</button>
          </div>
        </div>
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
const ProfileHeader = () => {
  const socialIcons: Record<string, any> = {
    linkedin: Linkedin,
    instagram: Instagram,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
  };

  return (
    <>
      {/* Cover — abstract gradient, no people */}
      <div
        className="relative h-40 md:h-52"
        style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)" }}
      />

      {/* Profile info */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-14 relative z-10 pb-4">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <img
              src={mentorData.avatar}
              alt={mentorData.name}
              className="h-28 w-28 rounded-full border-4 border-background object-cover shadow-lg"
            />
            {mentorData.available && (
              <span
                className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-medium flex items-center gap-1"
                style={{
                  fontSize: "10px",
                  background: "#D5F2DA",
                  color: "#3B6643",
                  padding: "3px 10px",
                  borderRadius: "42px",
                }}
              >
                <Zap className="h-3 w-3" /> Available ASAP
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-foreground">{mentorData.name}</h1>
              <span>{mentorData.flag}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">
              {mentorData.role} <span className="mx-1 opacity-40">·</span> {mentorData.company}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {mentorData.location}</span>
              <span className="flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> {mentorData.languages}</span>
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {mentorData.experience}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {mentorData.reviews}</span>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {mentorData.subscribers}</span>
              <span className="opacity-40">·</span>
              <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5" /> {mentorData.sessions}</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-3">
              {mentorData.socialLinks.map((social) => {
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

          {/* Actions */}
          <div className="flex items-center gap-2">
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

// --- Main Page ---
const tabs = ["Overview", "Feed", "Podcasts", "Courses", "Files", "Calendar"];

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ProfileHeader />

      {/* Tabs */}
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

        {/* Tab content */}
        <div className="pb-12">
          {activeTab === "Overview" && <OverviewTab />}
          {activeTab === "Feed" && <FeedTab />}
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
