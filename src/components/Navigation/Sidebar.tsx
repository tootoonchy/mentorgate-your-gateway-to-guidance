import { NavLink } from 'react-router-dom';
import { 
  History, 
  Users, 
  MessageSquare, 
  LayoutGrid, 
  Settings, 
  LogOut 
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutGrid, path: '/dashboard', label: 'Dashboard' },
  { icon: Users, path: '/mentors', label: 'Mentors' },
  { icon: MessageSquare, path: '/chat', label: 'Chat' },
  { icon: History, path: '/activities', label: 'Activities' },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[72px] bg-white border-r border-gray-100 flex flex-col items-center py-8 z-50">
      <div className="flex-1 flex flex-col gap-6">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-200 group relative ${
                isActive 
                  ? 'bg-purple-100 text-purple-600' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`
            }
          >
            <item.icon className="w-6 h-6" />
            
            {/* Tooltip on hover */}
            <div className="absolute left-16 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap font-bold uppercase tracking-wider">
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all">
          <Settings className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-2xl text-gray-400 hover:bg-gray-50 hover:text-pink-600 transition-all">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};
