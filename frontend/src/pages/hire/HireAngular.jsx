import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaAngular, FaTerminal, FaLayerGroup, FaCubes, FaShieldAlt, FaSyncAlt, FaMicrochip, FaUserTie } from 'react-icons/fa';
import { SiTypescript, SiReactivex, SiFirebase } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireAngular = () => {
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

    const angularStrengths = [
        { icon: <SiTypescript />, title: 'TypeScript First', desc: 'Enterprise-grade type safety and scalable architecture using modern TypeScript features.' },
        { icon: <FaLayerGroup />, title: 'Modular Design', desc: 'Building complex, reusable NgModules and standalone components for rapid scaling.' },
        { icon: <SiReactivex />, title: 'Reactive Patterns', desc: 'Mastering RxJS observables for high-performance, asynchronous data flows.' },
        { icon: <FaSyncAlt />, title: 'Real-time Sync', desc: 'Seamless integration with Firebase, WebSockets, or SignalR for live updates.' },
    ];

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#1a0b0b]">
                {/* Geometric Background Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    {/* SVG Hexagon Grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="hex" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                                <path d="M25 0 L50 14.4 L50 28.9 L25 43.3 L0 28.9 L0 14.4 Z" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hex)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-5 rounded-lg bg-red-600/10 border border-red-600/20 text-red-500 font-black text-xs mb-8 uppercase tracking-[0.3em]">
                                <FaAngular className="text-lg" /> Enterprise Platforms
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                                Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">Angular</span> Architectures for Global Brands
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
                                Hire senior Angular engineers who specialized in heavy-duty enterprise applications, utilizing the full power of TypeScript and RxJS.
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                <Link to="/contact" className="px-10 py-5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-black text-lg rounded-xl shadow-2xl shadow-red-600/20 hover:-translate-y-1 transition-all flex items-center gap-3 group">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#capabilities" className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all">
                                    Our Capabilities
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-8 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] shadow-2xl">
                                <img src="/images/angularboy.svg" alt="Angular Specialist" className="w-full h-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[400px] bg-white border border-slate-100 p-6 rounded-3xl shadow-3xl flex items-center gap-4 group hover:border-red-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-3xl text-red-600 group-hover:scale-110 transition-transform">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Architecture</p>
                                    <p className="text-lg font-black text-slate-800 mt-1 uppercase">Enterprise Grade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strengths Grid */}
            <section id="capabilities" className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col items-center text-center mb-24" data-aos="fade-up">
                        <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-4">Core Strengths</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase">Our Angular <span className="text-red-600 italic">Playbook</span></h2>
                        <div className="w-24 h-1 bg-red-600 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {angularStrengths.map((strength, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 hover:shadow-red-600/5 hover:-translate-y-3 transition-all duration-500 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-red-600 mb-8 group-hover:scale-110 transition-transform origin-left">{strength.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{strength.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">{strength.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* In-depth Experience */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                            <div className="absolute inset-0 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
                            <img src="/images/angularbg.webp" alt="Angular Project" className="relative z-10 rounded-[3rem] w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 uppercase leading-none">The <span className="text-red-600 italic">Angular</span> Advantage</h2>
                            <div className="space-y-12">
                                {[
                                    { icon: <FaCubes />, title: 'Micro-Frontend Mastery', text: 'Splitting large monolithic apps into manageable, independently deployable modules.' },
                                    { icon: <FaTerminal />, title: 'CLI-Driven Efficiency', text: 'Leveraging the full power of Angular CLI for consistent, high-quality boilerplate development.' },
                                    { icon: <FaMicrochip />, title: 'Ivy Engine Performance', text: 'Unlocking faster build times and smaller bundle sizes with the latest compiler optimizations.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-red-500 text-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">{feature.title}</h4>
                                            <p className="text-slate-600 leading-relaxed font-medium">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elite CTA */}
            <section className="py-32 px-6">
                <div className="container mx-auto">
                    <div className="max-w-6xl mx-auto rounded-[4rem] bg-gradient-to-r from-red-600 to-rose-700 p-16 lg:p-24 text-center relative overflow-hidden shadow-3xl" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase leading-tight">Scale Your <span className="text-slate-900">Enterprise</span> Fleet Today</h2>
                            <p className="text-xl text-red-100 mb-12 font-bold opacity-90">Our Angular consultants are ready to integrate into your existing workflow or start a greenfield project from scratch.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-12 py-5 bg-white text-red-600 font-black text-lg rounded-full shadow-2xl hover:scale-105 transition-transform uppercase tracking-widest">
                                    Start Consultation
                                </Link>
                                <div className="flex items-center gap-4 text-white font-bold border-l border-white/20 pl-10 hidden md:flex">
                                    <FaUserTie className="text-3xl text-red-300" />
                                    <span className="text-left text-sm uppercase">Direct Lead Dev<br />Communication</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Form */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-3xl p-12 lg:p-20 border-t-8 border-red-600">
                        {submitted ? (
                            <div className="text-center py-16 animate-fade-in text-white">
                                <FaCheckCircle className="text-6xl text-red-500 mx-auto mb-8 animate-bounce" />
                                <h3 className="text-3xl font-black uppercase mb-4">Transmission Received</h3>
                                <p className="text-slate-400 text-lg">Our Angular lead architect will be in touch within 24 hours.</p>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Submit Your Requirements</h3>
                                <p className="text-slate-400 mb-12 font-medium">Briefly describe your project or the talent gaps you're looking to fill.</p>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white text-lg" placeholder="Name *" />
                                        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white text-lg" placeholder="Email *" />
                                    </div>
                                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white text-lg" placeholder="Contact Number *" />
                                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full bg-transparent border-b-2 border-slate-700 px-0 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white text-lg resize-none" placeholder="How can we help?" />
                                    <button type="submit" className="w-full bg-red-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-red-500/20 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-[0.2em]">
                                        Dispatch Enquiry
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireAngular;
