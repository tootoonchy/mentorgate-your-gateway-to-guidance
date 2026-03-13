import { DashboardLayout } from './layouts/DashboardLayout';
import { 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp,
  ArrowUpRight,
  MoreHorizontal,
  Plus
} from 'lucide-react';
import './App.css';

const stats = [
  { label: 'Total Mentors', value: '124', change: '+12%', icon: Users, color: 'from-blue-500 to-indigo-500' },
  { label: 'Active Sessions', value: '42', change: '+18%', icon: Calendar, color: 'from-purple-500 to-pink-500' },
  { label: 'Hours Mentored', value: '1,280', change: '+7%', icon: Clock, color: 'from-orange-500 to-red-500' },
  { label: 'Project Success', value: '94%', change: '+3%', icon: TrendingUp, color: 'from-emerald-500 to-teal-500' },
];

const upcomingSessions = [
  { name: 'Sarah Wilson', role: 'Senior UX Designer', time: 'Tomorrow, 10:00 AM', status: 'Confirmed' },
  { name: 'David Chen', role: 'Full Stack Architect', time: 'In 2 days, 2:30 PM', status: 'Pending' },
  { name: 'Elena Rodriguez', role: 'Product Manager', time: 'In 4 days, 9:00 AM', status: 'Confirmed' },
];

function App() {
  return (
    <DashboardLayout>
      {/* Header Section */}
      <section className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Sajid!</h1>
          <p className="text-gray-400">Here's what's happening with your mentorship journey today.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg shadow-purple-500/20 transition-all active:scale-95">
          <Plus className="w-5 h-5" />
          New Request
        </button>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 p-6 rounded-3xl hover:border-gray-700 transition-all group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity`}></div>
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="flex items-center gap-1 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-1 rounded-lg">
                <TrendingUp className="w-3.5 h-3.5" />
                {stat.change}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-white tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sessions List */}
        <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-gray-950/30">
            <h2 className="text-lg font-bold text-white">Upcoming Sessions</h2>
            <button className="text-gray-500 hover:text-white transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="p-2">
            {upcomingSessions.map((session, i) => (
              <div key={session.name} className={`p-4 flex items-center justify-between rounded-2xl hover:bg-gray-800/50 transition-all cursor-pointer group ${i !== upcomingSessions.length - 1 ? 'mb-1' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-all">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">{session.name}</h4>
                    <p className="text-sm text-gray-500">{session.role}</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-6">
                  <div className="hidden sm:block">
                    <p className="text-sm text-white font-medium">{session.time}</p>
                    <p className={`text-xs ${session.status === 'Confirmed' ? 'text-emerald-400' : 'text-orange-400'}`}>
                      {session.status}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 text-sm font-semibold text-gray-500 hover:text-white hover:bg-gray-800 transition-all border-t border-gray-800">
            View All Sessions
          </button>
        </div>

        {/* Promo Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-indigo-600/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">Upgrade to Pro for Unlimited Mentors</h3>
            <p className="text-indigo-100/70 mb-8">Get priority access to top-tier industry experts and unlimited project reviews.</p>
          </div>
          <div className="relative z-10">
            <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl">
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

// Simple internal components for App.tsx to keep it clean
const User = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default App;
