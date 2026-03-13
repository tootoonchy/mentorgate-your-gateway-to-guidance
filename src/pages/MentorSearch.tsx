import { Search, Filter, MapPin, Globe, Clock, LayoutGrid, Heart, PenTool, Database, Palette, Code, Volume2, Search as SearchIcon, DollarSign } from 'lucide-react';

const categories = [
  { icon: LayoutGrid, label: 'All', active: true },
  { icon: Heart, label: 'Soft skills' },
  { icon: PenTool, label: 'Content writing' },
  { icon: Database, label: 'Data Science' },
  { icon: Palette, label: 'Design' },
  { icon: Code, label: 'Engineering' },
  { icon: Volume2, label: 'Marketing' },
  { icon: Code, label: 'No/Low Code' },
  { icon: SearchIcon, label: 'Product Research' },
  { icon: DollarSign, label: 'Sale/BD' },
  { icon: SearchIcon, label: 'Product Research' },
  { icon: Volume2, label: 'Marketing' },
];

const mentors = [
  {
    id: 1,
    name: 'Heidi Green',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 2,
    name: 'Calvin Horton',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 3,
    name: 'Camila Ruiz',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 4,
    name: 'Wayne Elliott',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 5,
    name: 'Samantha Gonzales',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 6,
    name: 'Carl Washington',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 7,
    name: 'Isobel Horton',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 8,
    name: 'Manuel Dean',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 9,
    name: 'Sandra Daniels',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 10,
    name: 'Floyd Allen',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1554034483-04fda0d3507b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 11,
    name: 'Calvin Horton',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 12,
    name: 'Calvin Horton',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 13,
    name: 'Kristin Watson',
    role: 'Lead UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 14,
    name: 'Samantha Gonzales',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/14.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 15,
    name: 'Camila Ruiz',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/15.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 16,
    name: 'Isobel Horton',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
    available: false,
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 17,
    name: 'Wayne Elliott',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/men/17.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 18,
    name: 'Camila Ruiz',
    role: 'UX/UI Designer',
    company: 'Apple',
    location: 'Charleston, United states',
    languages: 'English, Arabic',
    experience: '6+ years',
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    available: true,
    coverImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000',
  },
];

const MentorCard = ({ mentor }: { mentor: typeof mentors[0] }) => {
  return (
    <div className="flex flex-col w-full h-[323.57px] bg-white rounded-[5.6px] shadow-[0px_0px_28px_rgba(203,204,205,0.3)] isolation-auto relative group overflow-hidden transition-all hover:shadow-lg">
      {/* Header Image */}
      <div className="w-full h-[84.08px] shrink-0 relative">
        <img
          src={mentor.coverImage}
          alt="cover"
          className="w-full h-full object-cover rounded-t-[2.8px]"
        />
        {/* Badges positioned absolutely on the card header right */}
        <div className="absolute right-[13.52px] top-[84.08px] flex flex-row items-start gap-[5.26px] z-[2] w-[73.58px] h-[21.02px]">
           <div className="w-[21.02px] h-[21.02px] flex-none order-0 relative">
              <svg width="21.02" height="21.02" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
                <path d="M0 0H21.0225V19.5409C21.0225 20.265 20.3075 20.7723 19.6241 20.5331L10.8585 17.4651C10.6337 17.3864 10.3888 17.3864 10.164 17.4651L1.39836 20.5331C0.714947 20.7723 0 20.265 0 19.5409V0Z" fill="black"/>
                <path d="M6.11698 11.3066V8.24787H5.00279V7.57515H8.04054V8.24787H6.92109V11.3066H6.11698ZM9.97247 11.3907C9.59407 11.3907 9.26822 11.3119 8.99492 11.1542C8.72514 10.9966 8.51666 10.7723 8.36951 10.4815C8.22585 10.1907 8.15403 9.84558 8.15403 9.44615C8.15403 9.04672 8.22585 8.7016 8.36951 8.41079C8.51666 8.11648 8.72514 7.89049 8.99492 7.73282C9.26822 7.57165 9.59407 7.49106 9.97247 7.49106C10.3509 7.49106 10.675 7.57165 10.9448 7.73282C11.2181 7.89049 11.4265 8.11648 11.5702 8.41079C11.7173 8.7016 11.7909 9.04672 11.7909 9.44615C11.7909 9.84558 11.7173 10.1907 11.5702 10.4815C11.4265 10.7723 11.2181 10.9966 10.9448 11.1542C10.675 11.3119 10.3509 11.3907 9.97247 11.3907ZM9.96721 10.718C10.1774 10.718 10.3561 10.669 10.5033 10.5709C10.6539 10.4692 10.7678 10.3238 10.8449 10.1346C10.9255 9.94543 10.9658 9.71594 10.9658 9.44615C10.9658 9.17636 10.9255 8.94687 10.8449 8.75766C10.7678 8.56496 10.6539 8.4178 10.5033 8.31619C10.3561 8.21458 10.1774 8.16378 9.96721 8.16378C9.76049 8.16378 9.58355 8.21458 9.4364 8.31619C9.28924 8.4178 9.17537 8.56496 9.09478 8.75766C9.0177 8.94687 8.97916 9.17636 8.97916 9.44615C8.97916 9.71594 9.0177 9.94543 9.09478 10.1346C9.17537 10.3238 9.28924 10.4692 9.4364 10.5709C9.58706 10.669 9.764 10.718 9.96721 10.718ZM12.3729 11.3066V7.57515H13.8655C14.314 7.57515 14.6644 7.68377 14.9167 7.901C15.1724 8.11823 15.3003 8.41605 15.3003 8.79445C15.3003 9.04322 15.2425 9.26045 15.1269 9.44615C15.0148 9.62835 14.8501 9.77025 14.6329 9.87186C14.4191 9.96996 14.1633 10.019 13.8655 10.019H13.1718V11.3066H12.3729ZM13.1718 9.34629H13.8182C14.0285 9.34629 14.1914 9.30075 14.307 9.20965C14.4226 9.11505 14.4804 8.97665 14.4804 8.79445C14.4804 8.61576 14.4226 8.48087 14.307 8.38977C14.1949 8.29517 14.032 8.24787 13.8182 8.24787H13.1718V9.34629Z" fill="white"/>
              </svg>
           </div>
           <div className="w-[21.02px] h-[21.02px] flex-none order-1 relative">
              <svg width="21.02" height="21.02" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
                <path d="M0 0H21.0225V19.5409C21.0225 20.265 20.3075 20.7723 19.6241 20.5331L10.8585 17.4651C10.6337 17.3864 10.3888 17.3864 10.164 17.4651L1.39836 20.5331C0.714947 20.7723 0 20.265 0 19.5409V0Z" fill="#FFD836"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M6.56953 8.14631C6.56953 5.96935 8.3343 4.20459 10.5113 4.20459C12.6882 4.20459 14.453 5.96935 14.453 8.14631C14.453 9.24893 14.0002 10.2459 13.2705 10.9613V14.3216C13.2705 14.4582 13.1997 14.5851 13.0835 14.6569C12.9673 14.7287 12.8222 14.7353 12.7 14.6742L10.6875 13.6679C10.5766 13.6125 10.4459 13.6125 10.335 13.6679L8.3225 14.6742C8.20031 14.7353 8.0552 14.7287 7.93899 14.6569C7.82278 14.5851 7.75205 14.4582 7.75205 14.3216V10.9613C7.0223 10.2459 6.56953 9.24893 6.56953 8.14631ZM10.5113 4.99293C8.76969 4.99293 7.35788 6.40475 7.35788 8.14631C7.35788 9.88786 8.76969 11.2997 10.5113 11.2997C12.2528 11.2997 13.6646 9.88786 13.6646 8.14631C13.6646 6.40475 12.2528 4.99293 10.5113 4.99293ZM8.54039 11.5607V13.6838L9.98243 12.9628C10.3153 12.7964 10.7072 12.7964 11.0401 12.9628L12.4821 13.6838V11.5607C11.9023 11.8961 11.2292 12.088 10.5113 12.088C9.79328 12.088 9.12017 11.8961 8.54039 11.5607Z" fill="#1A1A1A"/>
              </svg>
           </div>
           <div className="w-[21.02px] h-[21.02px] flex-none order-2 relative">
              <svg width="21.02" height="21.02" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0">
                <path d="M0 0H21.0225V19.5409C21.0225 20.265 20.3075 20.7723 19.6241 20.5331L10.8585 17.4651C10.6337 17.3864 10.3888 17.3864 10.164 17.4651L1.39836 20.5331C0.714947 20.7723 0 20.265 0 19.5409V0Z" fill="#D2DEF7"/>
                <path d="M12.85 10.138C13.2389 9.98556 15.1099 9.10787 15.1099 6.39071C15.1099 6.17523 14.9312 5.99654 14.7157 5.99654H13.5175V5.2555C13.5175 5.04002 13.3388 4.86133 13.1233 4.86133H7.89919C7.68371 4.86133 7.50502 5.04002 7.50502 5.2555V5.99654H6.30674C6.09126 5.99654 5.91257 6.17523 5.91257 6.39071C5.91257 9.10787 7.78357 9.98556 8.17248 10.138C8.64549 10.7266 9.33398 11.126 10.1171 11.2311V11.9091H8.67177C8.50359 11.9091 8.35118 12.0195 8.29862 12.1772L7.84664 13.5384C7.80459 13.6592 7.82561 13.7906 7.89919 13.8957C7.97277 14.0009 8.09365 14.0587 8.21978 14.0587H12.8027C12.9288 14.0587 13.0497 13.9956 13.1233 13.8957C13.1969 13.7959 13.2179 13.6592 13.1758 13.5384L12.7239 12.1772C12.6713 12.0142 12.5189 11.9091 12.3507 11.9091H10.9054V11.2311C11.6885 11.126 12.377 10.7266 12.85 10.138ZM12.2561 13.2703H8.76637L8.95557 12.6975H12.0616L12.2561 13.2703ZM14.3058 6.78489C14.227 7.73615 13.8538 8.36157 13.4701 8.76625C13.5017 8.59807 13.5175 8.42989 13.5175 8.2512V6.78489H14.3058ZM6.71668 6.78489H7.50502V8.2512C7.50502 8.42464 7.52079 8.59807 7.55232 8.76625C7.16866 8.36157 6.80077 7.73615 6.72193 6.78489H6.71668ZM8.29336 8.2512V5.64967H12.7344V8.2512C12.7344 9.47576 11.7411 10.4691 10.5165 10.4691C9.29193 10.4691 8.29336 9.47576 8.29336 8.2512Z" fill="#1A1A1A"/>
              </svg>
           </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-[16.8px] relative z-10 -mt-[42px] mb-2 flex items-end justify-between">
        <div className="relative">
          <div className="w-[85.5px] h-[85.5px] rounded-full border-[2.8px] border-white bg-gray-100 overflow-hidden shadow-sm">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-full h-full object-cover"
            />
          </div>
          {mentor.available && (
            <div className="absolute bottom-0 left-0 right-0 h-[17.5px] bg-[#D5F2DA] rounded-full flex items-center justify-center gap-[2.1px] px-[7px] border border-white/50">
              <div className="w-[8.5px] h-[8.5px] bg-[#3B6643] rounded-full flex items-center justify-center">
                <div className="w-[4px] h-[4px] bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-[9px] font-medium text-[#3B6643] whitespace-nowrap">Available ASAP</span>
            </div>
          )}
        </div>
      </div>

      {/* Features / Content Section */}
      <div className="px-[16.8px] pt-1 flex-1 flex flex-col gap-[14px]">
        <div>
          <h3 className="text-sm font-bold text-black/90 leading-[18px] mb-0.5">{mentor.name}</h3>
          <p className="text-xs font-medium text-black/90 tracking-tight flex items-center gap-1">
            {mentor.role} <span className="opacity-60 text-[8px]">•</span> {mentor.company}
          </p>
        </div>

        <div className="flex flex-col gap-[4.2px]">
          <div className="flex items-center gap-[4.2px] text-black/80">
            <MapPin className="w-4 h-4" />
            <span className="text-xs font-normal tracking-tight">{mentor.location}</span>
          </div>
          <div className="flex items-center gap-[4.2px] text-black/80">
            <Globe className="w-4 h-4" />
            <span className="text-xs font-normal tracking-tight">{mentor.languages}</span>
          </div>
          <div className="flex items-center gap-[4.2px] text-black/80">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-normal tracking-tight">{mentor.experience} of experience</span>
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-auto">
        <div className="w-full h-[0.7px] border-t border-black/10"></div>
        <button className="w-full h-[42px] bg-[#1A1A1A] text-white text-[14px] font-normal tracking-tight hover:bg-black transition-colors flex items-center justify-center gap-[4.2px]">
          View Profile
        </button>
      </div>
    </div>
  );
};

export const MentorSearch = () => {
  return (
    <div className="max-w-[1680px] mx-auto px-[30px] pt-[24px] pb-[30px] bg-white min-h-screen">
      {/* Search Bar Section */}
      <section className="flex flex-col items-center mb-12">
        <div className="relative w-full max-w-[935px] h-[60px] group">
          <div className="absolute inset-0 bg-white border border-gray-200 rounded-2xl shadow-sm group-focus-within:border-gray-300 transition-all"></div>
          <div className="absolute inset-0 flex items-center px-6 gap-3">
            <Search className="w-6 h-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search mentor by name or skill..."
              className="bg-transparent border-none focus:ring-0 text-base font-normal text-gray-900 flex-1 placeholder:text-gray-400 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories & Filter */}
      <section className="relative flex items-center gap-2 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pr-48">
          {categories.map((cat, idx) => (
            <button
              key={`${cat.label}-${idx}`}
              className={`flex flex-col items-center justify-center shrink-0 min-w-[90px] px-3 h-[60px] gap-1 rounded-full transition-all ${
                cat.active
                  ? 'bg-black text-white'
                  : 'bg-transparent text-black hover:bg-gray-50'
              }`}
            >
              <cat.icon className={`w-[22px] h-[22px] ${cat.active ? 'text-white' : 'text-black'}`} />
              <span className="text-[13px] font-medium text-center leading-tight px-1">
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Filter Button (Stuck to right) */}
        <div className="absolute right-0 top-0 h-[60px] w-[240px] pointer-events-none bg-gradient-to-l from-white via-white/95 to-transparent flex items-center justify-end pl-8">
          <button className="pointer-events-auto flex items-center gap-2 bg-black text-white border-none px-5 h-[60px] rounded-full font-medium text-base hover:bg-black/90 transition-all shrink-0">
            <Filter className="w-5 h-5 text-white" />
            Filter
          </button>
        </div>
      </section>

      {/* Mentor Cards Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </section>
    </div>
  );
};
