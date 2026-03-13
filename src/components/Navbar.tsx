import { Search, Bell, User, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="h-20 border-b border-gray-800 bg-gray-950/50 backdrop-blur-xl px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search for mentors, projects, or messages..." 
            className="w-full bg-gray-900 border border-gray-800 rounded-2xl py-3 pl-12 pr-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all">
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-pink-500 border-2 border-gray-950 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-gray-800"></div>

        <button className="flex items-center gap-3 p-1.5 hover:bg-gray-800 rounded-2xl transition-all group">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center p-0.5">
            <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
              <User className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-semibold text-white leading-tight">Sajid Khan</p>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
        </button>
      </div>
    </header>
  );
};
