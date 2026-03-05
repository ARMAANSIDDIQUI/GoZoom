import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/admin');
    };

    const stats = [
        { label: 'Total Enquiries', value: '124', color: 'from-blue-600 to-indigo-600' },
        { label: 'Active Blogs', value: '32', color: 'from-emerald-600 to-teal-600' },
        { label: 'Site Uptime', value: '99.9%', color: 'from-amber-500 to-orange-500' },
        { label: 'Total Services', value: '12', color: 'from-purple-600 to-pink-600' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Header / Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-6 py-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="block">
                            <img src="/images/logo2.png" alt="GoZoom Logo" className="h-10 object-contain" />
                        </Link>
                        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 hidden sm:block">Admin <span className="text-blue-600 text-[10px] uppercase font-bold ml-1 tracking-widest border border-blue-100 bg-blue-50 px-2 py-0.5 rounded-md">Control</span></h1>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="bg-white hover:bg-red-50 border border-slate-200 hover:border-red-100 text-slate-500 hover:text-red-600 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-10 animate-fade-in">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
                            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4 block group-hover:text-slate-500 transition-colors">{stat.label}</span>
                            <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Primary Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                    {/* Blogs Card */}
                    <div className="bg-white p-2 rounded-[2.5rem] border border-slate-200 shadow-sm group hover:border-blue-200 transition-colors">
                        <div className="bg-slate-50/50 p-8 md:p-10 rounded-[2.2rem] h-full flex flex-col justify-between">
                            <div className="mb-8">
                                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2zM3 10h11M10 4V10" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Blogs Content</h2>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">Manage your expert insights, tech news, and announcements with our professional publishing suite.</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/admin/add-blog"
                                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] text-white px-8 py-3.5 rounded-2xl font-black text-sm transition-all duration-300 shadow-lg shadow-blue-500/20"
                                >
                                    Publish New Post
                                </Link>
                                <button
                                    className="bg-white border border-slate-200 text-slate-400 px-8 py-3.5 rounded-2xl font-black text-sm opacity-50 cursor-not-allowed"
                                >
                                    Manage Archive (WIP)
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Enquiries Card */}
                    <div className="bg-white p-2 rounded-[2.5rem] border border-slate-200 shadow-sm group hover:border-emerald-200 transition-colors">
                        <div className="bg-slate-50/50 p-8 md:p-10 rounded-[2.2rem] h-full flex flex-col justify-between">
                            <div className="mb-8">
                                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2-0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Leads & Enquiries</h2>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">View and respond to potential clients who have reached out via your service landing pages.</p>
                            </div>
                            <button
                                className="bg-emerald-50 border border-emerald-100 text-emerald-600 px-8 py-3.5 rounded-2xl font-black text-sm opacity-60 cursor-not-allowed"
                            >
                                View Inbox (Coming Soon)
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;
