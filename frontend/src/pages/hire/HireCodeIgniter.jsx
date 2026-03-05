import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaFire, FaBolt, FaHdd, FaMicrochip, FaShieldAlt, FaTools, FaCodeBranch, FaTachometerAlt } from 'react-icons/fa';
import { SiPhp, SiMysql, SiApache } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireCodeIgniter = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const ciHighlights = [
        { icon: <FaBolt />, title: 'Tiny Footprint', desc: 'Developing high-performance apps with near-zero configuration and minimal overhead.' },
        { icon: <FaFire />, title: 'MVC Excellence', desc: 'Strict adherence to Model-View-Controller patterns for clean, decoupled codebases.' },
        { icon: <FaShieldAlt />, title: 'Built-in Security', desc: 'XSS and CSRF filtering enabled by default to protect your mission-critical data.' },
        { icon: <FaTachometerAlt />, title: 'Peak Performance', desc: 'Optimized for speed, CodeIgniter outperforms most modern PHP frameworks in execution time.' },
    ];

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#120805]">
                {/* Performance-Focused Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    {/* SVG Speed Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="lines" width="100" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#lines)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-5 bg-orange-600/10 border border-orange-600/20 rounded-full text-orange-500 font-black text-xs mb-8 uppercase tracking-[0.3em]">
                                <FaFire className="text-lg" /> High-Octane PHP
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                                Igniting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Performance</span> with CodeIgniter Experts
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-black mx-auto">
                                Hire specialized developers who master the "small footprint, big impact" philosophy of CodeIgniter to deliver blazing-fast web applications.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 bg-orange-600 text-white font-black text-center text-lg rounded-2xl shadow-2xl shadow-orange-600/20 hover:bg-orange-700 hover:-translate-y-1 transition-all group uppercase tracking-wider">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#speed" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 bg-white/5 border border-white/20 text-white font-black text-center text-lg rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-wider">
                                    Why Speed Matters
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-8 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl animate-float">
                                <img src="/images/codeignitorboy1.svg" alt="CodeIgniter Specialist" className="w-full h-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[400px] bg-white border border-slate-100 p-6 rounded-3xl shadow-3xl flex items-center gap-4 group hover:border-orange-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl text-orange-600 group-hover:scale-110 transition-transform">
                                    <FaHdd />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Memory Footprint</p>
                                    <p className="text-lg font-black text-slate-800 mt-1 uppercase">Ultra-Light</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Grid */}
            <section id="speed" className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">The <span className="text-orange-600">CodeIgniter</span> Edge</h2>
                        <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto italic">Simple, elegant, and exceptionally fast backend solutions for businesses that value time-to-market.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {ciHighlights.map((stat, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-orange-600/10 hover:-translate-y-3 transition-all duration-500 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-orange-600 mb-8 group-hover:scale-110 transition-transform origin-left italic">{stat.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{stat.title}</h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Depth */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div data-aos="fade-right">
                            <div className="p-8 bg-slate-50 rounded-[4rem] border-4 border-orange-100 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                                <img src="/images/codeignitor2.svg" alt="Technical Specs" className="w-full h-auto relative z-10" />
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 uppercase leading-none">Why Partner with Our <span className="text-orange-600 italic">CI Experts?</span></h2>
                            <div className="space-y-10">
                                {[
                                    { icon: <FaTools />, title: 'Zero Configuration Setup', text: 'We spend time building your business logic, not wrestling with complex framework configs.' },
                                    { icon: <FaCodeBranch />, title: 'Scalable MVC Hooks', text: 'Extending core framework functionality through custom libraries and helpers.' },
                                    { icon: <FaMicrochip />, title: 'Low Server Overhead', text: 'CodeIgniter sites run efficiently even on entry-level hosting, saving infrastructure costs.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-3xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">{item.title}</h4>
                                            <p className="text-slate-400 font-bold leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="relative rounded-[4rem] bg-[#120805] p-12 lg:p-24 text-center overflow-hidden shadow-4xl" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff6b35 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 uppercase leading-tight italic tracking-tighter">Velocity Meets <span className="text-orange-500">Versatility</span></h2>
                            <p className="text-xl text-slate-400 mb-12 font-bold opacity-80 uppercase tracking-[0.2em]">Build fast. Scalable. Secure.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-14 py-6 bg-white text-orange-600 font-black text-xl rounded-full shadow-2xl hover:bg-orange-500 hover:text-white transition-all uppercase tracking-widest">
                                    Start Your Engine
                                </Link>
                                <div className="flex items-center gap-4 text-white font-bold border-l-2 border-white/10 pl-10 hidden md:flex font-black uppercase text-xs tracking-widest italic text-orange-400">
                                    Instant Response<br />Guaranteed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireCodeIgniter;
