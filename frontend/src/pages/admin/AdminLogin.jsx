import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="min-h-screen relative flex items-center justify-center bg-slate-50 font-sans overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-60"></div>

            <div className="relative z-10 w-full max-w-md px-6">
                <div className="glass-premium p-10 rounded-[2.5rem] border border-white bg-white/80 backdrop-blur-2xl shadow-premium animate-fade-up">
                    <div className="text-center mb-10">
                        <div className="mb-6">
                            <img src="/images/logo2.png" alt="GoZoom Logo" className="h-16 mx-auto object-contain" />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 mb-2">Admin Portal</h2>
                        <p className="text-slate-500 font-medium">Log in to manage GoZoom</p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-2xl mb-6 text-center text-sm font-bold animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-slate-700 font-bold ml-1 text-sm">Username</label>
                            <input
                                type="text"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                                placeholder="Enter admin ID"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-slate-700 font-bold ml-1 text-sm">Password</label>
                            <input
                                type="password"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 placeholder:text-slate-400"
                                placeholder="••••••••"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black py-5 px-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-1 active:scale-95"
                        >
                            Connect to Dashboard
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-slate-400 text-xs font-bold tracking-widest uppercase">
                            Enterprise Security Layer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
