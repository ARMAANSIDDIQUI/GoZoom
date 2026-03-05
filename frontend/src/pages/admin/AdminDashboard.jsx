import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/admin');
    };

    const stats = [
        { label: 'Total Enquiries', value: '124', color: 'from-blue-500 to-indigo-500' },
        { label: 'Active Blogs', value: '32', color: 'from-emerald-500 to-teal-500' },
        { label: 'Site Uptime', value: '99.9%', color: 'from-amber-500 to-orange-500' },
        { label: 'Total Services', value: '12', color: 'from-purple-500 to-pink-500' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20">
                            GZ
                        </div>
                        <h1 className="text-xl font-black tracking-tight text-white hidden sm:block">GoZoom <span className="text-blue-500">Admin</span></h1>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/20 text-slate-400 hover:text-red-400 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10 animate-fade-in">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="glass-card p-6 md:p-8 flex flex-col justify-between group">
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 group-hover:text-slate-400 transition-colors">{stat.label}</span>
                            <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Primary Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                    {/* Blogs Card */}
                    <div className="glass-card p-1 bg-gradient-to-br from-blue-500/10 to-transparent group">
                        <div className="bg-slate-900/40 p-8 md:p-10 rounded-[calc(1rem-1px)] h-full">
                            <div className="mb-8">
                                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM3 10h11M10 4V10" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Blogs Content</h2>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">Manage your expert insights, tech news, and company announcements with our pro editor.</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/admin/add-blog"
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 shadow-lg shadow-blue-500/20"
                                >
                                    Publish New Post
                                </Link>
                                <button
                                    className="bg-white/5 border border-white/10 text-slate-400 px-6 py-3 rounded-xl font-black text-sm opacity-50 cursor-not-allowed"
                                >
                                    Manage Archive (WIP)
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enquiries Card */}
                    <div className="glass-card p-1 bg-gradient-to-br from-emerald-500/10 to-transparent group">
                        <div className="bg-slate-900/40 p-8 md:p-10 rounded-[calc(1rem-1px)] h-full">
                            <div className="mb-8">
                                <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Leads & Enquiries</h2>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed">View and respond to potential clients who have reached out via your service landing pages.</p>
                            </div>
                            <button
                                className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 px-8 py-3 rounded-xl font-black text-sm opacity-50 cursor-not-allowed"
                            >
                                Inbox (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>

                {/* System Message */}
                <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6 flex items-center gap-4 animate-pulse-slow">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                    <p className="text-blue-400 text-sm font-bold">System Status: All services operational. Cloud sync active.</p>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
