import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  ChevronRight,
  LogOut,
  Bell
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Mentors', active: false },
  { icon: Briefcase, label: 'Projects', active: false },
  { icon: MessageSquare, label: 'Messages', active: false },
  { icon: Bell, label: 'Notifications', active: false },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <LayoutDashboard className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            MentorGate
          </span>
        </div>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
                item.active 
                  ? 'bg-purple-500/10 text-purple-400' 
                  : 'text-gray-500 hover:bg-gray-900 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${item.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <button className="flex items-center gap-3 p-3 w-full text-gray-500 hover:text-gray-300 hover:bg-gray-900 rounded-xl transition-all">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </button>
        
        <div className="pt-4 border-t border-gray-800">
          <button className="flex items-center gap-3 p-3 w-full text-pink-500/80 hover:text-pink-400 hover:bg-pink-500/5 rounded-xl transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
