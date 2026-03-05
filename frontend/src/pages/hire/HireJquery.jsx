import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaJs, FaLayerGroup, FaBolt, FaPuzzlePiece, FaSync, FaShieldAlt, FaDesktop, FaCode } from 'react-icons/fa';
import { SiJquery, SiJavascript, SiHtml5 } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireJquery = () => {
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

    const jqueryExpertise = [
        { icon: <FaBolt />, title: 'DOM Manipulation', desc: 'Crafting lightning-fast DOM updates and dynamic content injections for interactive experiences.' },
        { icon: <FaPuzzlePiece />, title: 'Plugin Development', desc: 'Building custom, reusable jQuery plugins to extend functionality across your entire site.' },
        { icon: <FaSync />, title: 'AJAX Real-time', desc: 'Implementing seamless, asynchronous data transfers without page reloads for a modern feel.' },
        { icon: <FaShieldAlt />, title: 'Cross-Browser', desc: 'Ensuring your website functions flawlessly across all legacy and modern browsers.' },
    ];

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#070e1b]">
                {/* Technical Blue Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[15%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    {/* SVG Code Pattern */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.05] flex items-end justify-center">
                        <span className="text-[20rem] font-black text-white select-none pointer-events-none">$()</span>
                    </div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-6 bg-blue-600/10 border border-blue-600/20 rounded-lg text-blue-400 font-black text-xs mb-8 uppercase tracking-[0.4em]">
                                <FaJs className="text-lg" /> Lightweight DOM Mastery
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                                Streamline Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-400">Interaction</span> with jQuery Experts
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-bold">
                                Hire developers who leverage jQuery's power to build fast, interactive, and cross-browser compatible web experiences with surgical precision.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-5 bg-blue-600 text-white font-black text-center text-lg rounded-xl shadow-2xl shadow-blue-600/20 hover:scale-105 transition-all group">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#plugins" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-5 border border-white/20 text-white text-center font-bold text-lg rounded-xl hover:bg-white/5 transition-all">
                                    Case Studies
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-6 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl">
                                <img src="/images/programmer-working-with-software.webp" alt="jQuery Developer" className="w-full h-auto rounded-[2.5rem] shadow-4xl filter saturate-[0.8] contrast-[1.1]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[400px] bg-white border border-slate-100 p-6 rounded-3xl shadow-3xl flex items-center gap-4 group hover:border-blue-500/30 transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-blue-600 group-hover:rotate-12 transition-transform">
                                    <SiJquery />
                                </div>
                                <div>
                                    <p className="font-black text-lg text-slate-900 leading-tight">Write Less.</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Do More.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plugin Grid */}
            <section id="plugins" className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase italic">Our jQuery <span className="text-blue-600">Toolset</span></h2>
                        <div className="w-20 h-2 h-px bg-blue-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-500 font-bold">From legacy support to modern lightweight animations, we bring the best of jQuery to your stack.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {jqueryExpertise.map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-blue-500/30 hover:-translate-y-4 transition-all duration-500 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-slate-800 mb-8 group-hover:text-blue-600 transition-colors uppercase italic">{item.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Jquery Section */}
            <section className="py-32 bg-[#070e1b] text-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                            <img src="/images/jquerybgg.webp" alt="Work Process" className="w-full h-auto rounded-[3rem] shadow-3xl opacity-80" />
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase leading-none italic">Why Hire Our <span className="text-blue-400">Library Veterans?</span></h2>
                            <div className="space-y-12">
                                {[
                                    { icon: <FaDesktop />, title: 'UI/UX Interactive Elements', text: 'Developing smooth sliders, modals, and navigation systems that users love.' },
                                    { icon: <FaCode />, title: 'Legacy Support & Migration', text: 'Optimizing and maintaining older jQuery codebases while planning future migrations.' },
                                    { icon: <FaLayerGroup />, title: 'Event-Driven Logic', text: 'Complex event handling and bubbling management for predictable application behavior.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-400 font-bold leading-relaxed">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Functional CTA */}
            <section className="py-32">
                <div className="container mx-auto px-6 lg:px-16 text-center">
                    <div className="max-w-4xl mx-auto rounded-[4rem] bg-gradient-to-br from-blue-700 to-slate-900 p-16 lg:p-24 shadow-4xl relative overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase leading-[0.9]">Reliability That <span className="text-cyan-400 italic">Wins Brands</span></h2>
                        <p className="text-xl text-blue-100 mb-12 font-bold opacity-80">Simple integrations. Rock-solid performance. Global Reach.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/contact" className="px-12 py-5 bg-white text-slate-900 font-black text-lg rounded-xl shadow-2xl hover:scale-105 transition-all uppercase tracking-widest italic">
                                Enquire Today
                            </Link>
                            <div className="flex items-center gap-4 text-blue-300 font-bold border-l border-white/10 pl-10 hidden md:flex font-black uppercase text-xs italic tracking-widest">
                                Quick Onboarding<br />Guaranteed
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireJquery;
