import { Layout, CheckCircle2, Clock, MoreVertical, Plus, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce Redesign',
    mentor: 'Sarah Wilson',
    progress: 75,
    dueDate: 'Oct 24, 2026',
    status: 'Active',
    tasks: '12/16'
  },
  {
    title: 'Fintech Dashboard Architecture',
    mentor: 'David Chen',
    progress: 40,
    dueDate: 'Nov 02, 2026',
    status: 'Active',
    tasks: '8/20'
  },
  {
    title: 'Brand Identity - MentorGate',
    mentor: 'Elena Rodriguez',
    progress: 100,
    dueDate: 'Sep 30, 2026',
    status: 'Completed',
    tasks: '10/10'
  }
];

export const Projects = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Projects</h1>
          <p className="text-gray-400">Track your progress and collaborate on your active assignments.</p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl font-bold hover:bg-purple-400 transition-all">
          <Plus className="w-5 h-5" />
          Create Project
        </button>
      </section>

      {/* Project Status Tabs */}
      <div className="flex gap-4 border-b border-gray-800 pb-px">
        {['All Projects', 'Active', 'Completed', 'Drafts'].map((tab, i) => (
          <button 
            key={tab} 
            className={`pb-4 px-2 text-sm font-semibold transition-all relative ${
              i === 0 ? 'text-purple-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab}
            {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.4)]"></div>}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-900 border border-gray-800 rounded-3xl p-6 hover:border-gray-700 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center text-purple-400">
                  <Layout className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Mentor:</span>
                    <span className="text-gray-300 font-medium">{project.mentor}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-600 hover:text-white transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tasks: {project.tasks}</span>
                </div>
                <span className="text-white font-bold">{project.progress}%</span>
              </div>
              
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${
                    project.status === 'Completed' ? 'bg-emerald-500' : 'bg-purple-500'
                  }`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Due: {project.dueDate}</span>
                </div>
                <div className="flex items-center gap-3">
                   <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg ${
                     project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-purple-500/10 text-purple-400'
                   }`}>
                     {project.status}
                   </span>
                   <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl transition-all">
                     <ExternalLink className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
