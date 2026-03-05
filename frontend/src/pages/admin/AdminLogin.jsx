import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShootingStars from '../../components/ShootingStars';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Default admin simulation
        if (username === 'admin' && password === 'admin123') {
            navigate('/admin/dashboard');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center bg-slate-950 font-sans overflow-hidden">
            {/* Animated Background */}
            <ShootingStars />

            {/* Ambient Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>

            <div className="relative z-10 w-full max-w-md px-6">
                <div className="glass-dark p-10 rounded-[2.5rem] shadow-2xl border border-white/5 backdrop-blur-3xl animate-fade-up">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-gradient-premium mb-3">GoZoom Admin</h2>
                        <p className="text-slate-400 font-medium">Secure Access Portal</p>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-6 text-center text-sm font-semibold animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-slate-300 font-bold ml-1 text-sm">Username</label>
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600"
                                placeholder="Enter admin ID"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-slate-300 font-bold ml-1 text-sm">Password</label>
                            <input
                                type="password"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-slate-600"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-5 px-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-1 active:scale-95"
                        >
                            Sign In to Dashboard
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-slate-500 text-xs font-medium tracking-widest uppercase">
                            Protected by GoZoom Security
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
