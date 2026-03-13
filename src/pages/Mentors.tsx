import { Search, Filter, Star } from 'lucide-react';

const mentors = [
  {
    name: 'Sarah Wilson',
    role: 'Senior UX Designer at Google',
    rating: 4.9,
    reviews: 128,
    tags: ['UX Design', 'UCD', 'Figma'],
    price: '$80/hr',
    image: 'SW'
  },
  {
    name: 'David Chen',
    role: 'Principal Engineer at Meta',
    rating: 5.0,
    reviews: 84,
    tags: ['System Design', 'React', 'Go'],
    price: '$120/hr',
    image: 'DC'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Lead at Airbnb',
    rating: 4.8,
    reviews: 210,
    tags: ['Product Strategy', 'Growth', 'Agile'],
    price: '$95/hr',
    image: 'ER'
  },
  {
    name: 'Marcus Thorne',
    role: 'Mobile Architect at Spotify',
    rating: 4.9,
    reviews: 65,
    tags: ['iOS', 'Swift', 'Kotlin'],
    price: '$110/hr',
    image: 'MT'
  }
];

export const Mentors = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Find your Mentor</h1>
          <p className="text-gray-400">Direct access to industry experts who can help you grow.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search skills..." 
              className="bg-gray-900 border border-gray-800 rounded-xl py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-all w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-gray-900 border border-gray-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-medium hover:text-white hover:border-gray-700 transition-all">
            <Filter className="w-4 h-4" />
            Category
          </button>
        </div>
      </section>

      {/* Mentor Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all group flex flex-col">
            <div className="h-32 bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative">
              <div className="absolute -bottom-6 left-6 w-16 h-16 bg-gray-800 rounded-2xl border-4 border-gray-900 flex items-center justify-center font-bold text-xl text-white">
                {mentor.image}
              </div>
            </div>
            <div className="p-6 pt-10 flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-white text-lg group-hover:text-purple-400 transition-colors">{mentor.name}</h3>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold">{mentor.rating}</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{mentor.role}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {mentor.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-400/10 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800 mt-auto">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-lg font-bold text-white">{mentor.price}</p>
                </div>
                <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-xl hover:bg-purple-400 transition-all">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Community Section */}
      <section className="bg-indigo-600/10 border border-indigo-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-white mb-4">Join the MentorGate Community</h2>
          <p className="text-gray-400">Share your journey, get peer feedback, and attend exclusive workshops hosted by our top mentors.</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-gray-950 bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500">U{i}</div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-gray-950 bg-indigo-600 flex items-center justify-center text-xs font-bold text-white">+5k</div>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-500 transition-all">
            Join Discord
          </button>
        </div>
      </section>
    </div>
  );
};
