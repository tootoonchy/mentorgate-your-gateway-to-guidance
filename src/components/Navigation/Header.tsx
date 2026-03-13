import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-[#EDF2F7] px-8 flex items-center justify-between sticky top-0 z-40">
      {/* Left Side: Hamburger Menu + Logo */}
      <div className="flex items-center gap-4 h-16">
        <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors">
          <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="black"/>
          </svg>
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
            `text-sm font-medium transition-colors ${isActive ? 'text-black/90' : 'text-black/50 hover:text-black/90'}`
          }
        >
          Mentors
        </NavLink>
        <NavLink
          to="/chat"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-black/90' : 'text-black/50 hover:text-black/90'}`
          }
        >
          Chats with AI
        </NavLink>
        <NavLink
          to="/corporates"
          className={({ isActive }) =>
            `text-sm font-medium transition-colors ${isActive ? 'text-black/90' : 'text-black/50 hover:text-black/90'}`
          }
        >
          Corporates
        </NavLink>
      </nav>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-black/50 hover:text-black/90 transition-colors">
          Our Mission
        </button>
        <button className="px-6 py-2 border border-[#EDF2F7] text-black/90 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors h-8 flex items-center justify-center">
          Become a Mentor
        </button>
        <button className="w-10 h-10 flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13 10.4C11.4536 10.4 10.2 11.6536 10.2 13.2C10.2 14.7464 11.4536 16 13 16C14.5464 16 15.8 14.7464 15.8 13.2C15.8 11.6536 14.5464 10.4 13 10.4ZM11.64 13.2C11.64 12.4488 12.2488 11.84 13 11.84C13.7512 11.84 14.36 12.4488 14.36 13.2C14.36 13.9512 13.7512 14.56 13 14.56C12.2488 14.56 11.64 13.9512 11.64 13.2Z" fill="black" fillOpacity="0.9"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 6.8C8.0368 6.8 4 10.8368 4 15.8C4 20.7632 8.0368 24.8 13 24.8C17.9632 24.8 22 20.7632 22 15.8C22 10.8368 17.9632 6.8 13 6.8ZM5.44 15.8C5.44 11.632 8.832 8.24 13 8.24C17.168 8.24 20.56 11.632 20.56 15.8C20.56 17.4672 19.9544 19.004 18.9312 20.2272C18.5056 18.488 16.9344 17.1808 15.0496 17.1808H10.9504C9.0656 17.1808 7.4944 18.4876 7.0672 20.2268C6.0448 19.004 5.44 17.4668 5.44 15.8ZM18.5968 21.5144V21.5224C17.5184 22.3176 16.2144 22.8 13 22.8C11.7856 22.8 10.4816 22.3172 9.4032 21.5218V21.5144C9.4032 19.9168 10.7088 18.6208 10.9504 18.6208H15.0496C16.6472 18.6208 17.9528 19.9168 18.5968 21.5144Z" fill="black" fillOpacity="0.9"/>
          </svg>
        </button>
      </div>
    </header>
  );
};
