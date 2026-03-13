import { NavLink } from 'react-router-dom';
import { Menu, UserCircle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between sticky top-0 z-40 ml-[72px]">
      {/* Left Side: Hamburger Menu + Logo */}
      <div className="flex items-center gap-4 h-16">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-black" />
        </button>
        <div className="flex items-center">
          <span className="text-lg font-bold tracking-tight text-black">MentorGate</span>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
        <NavLink
          to="/mentors"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/60 hover:text-black'}`
          }
        >
          Mentors
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/60 hover:text-black'}`
          }
        >
          Chat with AI
        </NavLink>
        <NavLink
          to="/corporates"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-black/60 hover:text-black'}`
          }
        >
          Corporates
        </NavLink>
      </nav>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-black/60 hover:text-black transition-colors">
          Our Mission
        </button>
        <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-black/90 transition-colors">
          Become a Mentor
        </button>
        <div className="w-8 h-8 flex items-center justify-center">
          <UserCircle className="w-8 h-8 text-black" />
        </div>
      </div>
    </header>
  );
};
