import { Menu, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 md:px-6 h-14">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 text-foreground"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Ment<span className="text-primary">o</span>rGate
          </span>
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          <a href="/" className="hover:text-primary transition-colors">Mentors</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Chat with AI</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Corporates</a>
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Our Mission</a>
          <a href="#" className="hover:text-foreground transition-colors">Become a Mentor</a>
          <button className="p-1 text-foreground">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
