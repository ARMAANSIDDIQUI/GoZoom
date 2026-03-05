import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaLaravel, FaDatabase, FaLock, FaServer, FaChartBar, FaMagic, FaCode, FaHeart, FaSyncAlt, FaClock, FaShieldAlt } from 'react-icons/fa';
import { SiPhp, SiMysql, SiRedis } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireLaravel = () => {
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

    const laravelEcosystem = [
        { icon: <FaMagic />, title: 'Eloquent & Artisan', desc: 'Harnessing the full power of ORM and CLI for rapid, elegant development cycles.' },
        { icon: <FaLock />, title: 'Security Defaults', desc: 'Implementing CSRF, XSS, and SQL injection protection by default for rock-solid apps.' },
        { icon: <SiRedis />, title: 'Caching & Queues', desc: 'Optimizing performance with Redis and asynchronous job processing for high scale.' },
        { icon: <FaServer />, title: 'Forge & Vapor', desc: 'Deployment-ready architectures optimized for serverless or dedicated environments.' },
    ];

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#fdf2f0]">
                {/* Elegant Decorative Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#ff2d20]/10 rounded-full blur-[120px] animate-float"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
                    {/* Subtle Dot Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ff2d20 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-white shadow-xl shadow-rose-500/5 text-[#ff2d20] font-black text-xs mb-8 uppercase tracking-[0.4em] border border-rose-100">
                                <FaLaravel className="text-xl" /> The Artisan's Choice
                            </div>
                            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                                Build <span className="text-[#ff2d20] italic">Expressive</span> Scalable Web Apps
                            </h1>
                            <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-bold italic">
                                Hire specialized Laravel developers who value clean code, elegant syntax, and rapid delivery without compromising on performance.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-6 bg-[#ff2d20] text-white font-black text-center text-lg rounded-2xl shadow-3xl shadow-rose-500/30 hover:scale-105 transition-all group">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#stack" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-6 bg-white border border-rose-100 text-slate-800 font-black text-center text-lg rounded-2xl hover:bg-rose-50 transition-all">
                                    Our Stack <FaHeart className="text-rose-500" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-3xl border border-rose-50 w-full max-w-[380px]">
                                <img src="/images/laravelboy1.svg" alt="Laravel Expert" className="w-full h-auto rounded-[3.5rem]" />
                            </div>
                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[380px] bg-gradient-to-br from-[#ff2d20] to-rose-400 p-6 rounded-3xl shadow-2xl text-white flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform">
                                    <FaLaravel />
                                </div>
                                <div>
                                    <p className="font-black text-xl leading-none italic">Architecture</p>
                                    <p className="text-[10px] text-rose-100 uppercase tracking-widest font-bold mt-1">Enterprise Scalability</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Grid */}
            <section id="stack" className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-widest leading-none">The Laravel <span className="text-[#ff2d20]">Universe</span></h2>
                        <p className="text-xl text-slate-500 font-bold leading-relaxed px-10 border-l-8 border-rose-500 bg-rose-50 py-6 rounded-r-3xl">We don't just write PHP; we craft digital art using the most sophisticated backend framework in the world.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {laravelEcosystem.map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-3xl transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-4xl text-[#ff2d20] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visual Advantage */}
            <section className="py-40 bg-[#fdf2f0] relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="relative" data-aos="fade-right">
                            <div className="absolute -inset-10 bg-white/40 rounded-[5rem] blur-3xl"></div>
                            <img src="/images/laravelbg.webp" alt="Laravel Excellence" className="relative z-10 rounded-[4rem] w-full h-auto shadow-4xl filter contrast-125" />
                        </div>
                        <div data-aos="fade-left">
                            <span className="text-[#ff2d20] font-black uppercase tracking-[0.5em] text-sm mb-10 block">Expertise</span>
                            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 uppercase leading-[0.9]">Why Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d20] to-rose-400">Laravel</span> Experts?</h2>

                            <div className="space-y-12">
                                {[
                                    { icon: <FaCode />, title: 'PSR Standard Compliance', text: 'Clean, understandable, and highly maintainable codebases that follow industry best practices.' },
                                    { icon: <FaChartBar />, title: 'Performance at Scale', text: 'Optimizing database queries and query builders for lightning-fast response times.' },
                                    { icon: <FaSyncAlt />, title: 'Seamless Integration', text: 'Connecting with third-party APIs and services with expressive wrapper classes.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#ff2d20] text-3xl shadow-xl group-hover:bg-[#ff2d20] group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-500 font-bold leading-relaxed">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Impact CTA */}
            <section className="py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="bg-[#1a0b0b] rounded-[5rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-4xl" data-aos="zoom-in">
                        {/* Abstract Background */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 uppercase leading-none italic tracking-tighter">Ready to Build Something <span className="text-[#ff2d20]">Extraordinary</span>?</h2>
                            <p className="text-2xl text-slate-400 mb-16 font-bold leading-relaxed uppercase tracking-widest opacity-80 overflow-hidden text-clip">Elite Laravel Development</p>
                            <div className="flex flex-wrap justify-center gap-8">
                                <Link to="/contact" className="px-16 py-7 bg-[#ff2d20] text-white font-black text-xl rounded-full shadow-3xl shadow-rose-600/40 hover:scale-110 transition-transform uppercase tracking-widest">
                                    Get Started Today
                                </Link>
                                <div className="flex items-center gap-6 text-white/40 border-l-2 border-white/10 pl-10 hidden md:flex font-black uppercase text-sm tracking-widest">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-rose-500 italic">
                                        24/7
                                    </div>
                                    <span className="text-left">Global<br />Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="pb-40 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 bg-slate-50 rounded-[4rem] shadow-4xl overflow-hidden border border-rose-50">
                        <div className="p-16 lg:p-24 bg-gradient-to-br from-[#ff2d20] to-rose-600 text-white">
                            <h2 className="text-5xl font-black mb-10 uppercase leading-none tracking-tighter italic">Let's <span className="text-slate-900">Create</span></h2>
                            <p className="text-xl text-rose-100 mb-16 font-bold italic leading-relaxed">Tell us about your project or the specific Laravel talent you need. Our tech lead will call you personally.</p>

                            <div className="space-y-10">
                                {[
                                    { icon: <FaClock />, title: 'Rapid Turnaround', text: 'Response within 6 hours' },
                                    { icon: <FaShieldAlt />, title: 'Confidentiality', text: 'Iron-clad NDA guaranteed' },
                                    { icon: <FaHeart />, title: 'Artisan Quality', text: 'Handcrafted, elegant code' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 items-center">
                                        <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl text-white">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-black text-2xl uppercase tracking-tight">{item.title}</p>
                                            <p className="text-rose-100 font-bold text-sm tracking-widest opacity-80 uppercase">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-16 lg:p-24 bg-white relative">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-24 h-24 bg-rose-100 text-[#ff2d20] rounded-[2rem] flex items-center justify-center text-5xl mb-10 animate-fade-in shadow-3xl">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Transmission Sent</h3>
                                    <p className="text-slate-500 font-bold text-xl leading-relaxed">Our Laravel architect will reach out shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10">
                                    <div className="space-y-12">
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Your Identity</label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-transparent border-b-4 border-slate-100 px-0 py-6 focus:outline-none focus:border-[#ff2d20] transition-all font-black text-slate-800 text-2xl uppercase" placeholder="Full Name *" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Electronic Mail</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b-4 border-slate-100 px-0 py-6 focus:outline-none focus:border-[#ff2d20] transition-all font-black text-slate-800 text-2xl uppercase" placeholder="Email *" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Project Soul</label>
                                            <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full bg-transparent border-b-4 border-slate-100 px-0 py-6 focus:outline-none focus:border-[#ff2d20] transition-all font-black text-slate-800 text-2xl uppercase resize-none" placeholder="Describe Your Vision" />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-slate-900 text-white font-black py-7 rounded-3xl shadow-4xl hover:bg-[#ff2d20] transition-all text-xl uppercase tracking-[0.3em] hover:-translate-y-2">
                                        Ship Request
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireLaravel;
