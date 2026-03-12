import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaMobileAlt, FaLaptopCode, FaCogs, FaProjectDiagram, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Flutter = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#042b59] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#60a5fa 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider">UI Toolkit by Google</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight uppercase">
                                Flutter App <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Development</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Create natively compiled, visually stunning applications for mobile, web, and desktop from a single codebase. Delivering expressive and flexible UI without compromising on speed.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Hire Flutter Devs <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-12 lg:p-16 bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[500px] shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                                <img src="/images/flutter.svg" alt="Flutter App Development" className="w-[180px] h-auto drop-shadow-[0_20px_60px_rgba(96,165,250,0.6)] transform transition-transform group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400?text=Flutter"; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-4">Our Services</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build with Flutter</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From MVP launches to enterprise-scale systems, we harness Dart and Flutter for maximum impact.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaMobileAlt />, title: 'Cross-Platform Apps', desc: 'Reach billions of Android and iOS users simultaneously using custom, feature-rich apps compiled ahead-of-time.' },
                            { icon: <FaLaptopCode />, title: 'Flutter for Web & Desktop', desc: 'Expand your mobile application immediately into progressive web apps (PWA) and macOS, Windows, or Linux clients.' },
                            { icon: <FaCogs />, title: 'Custom Widget Design', desc: 'Building beautiful, highly intricate custom UI widgets matching your specific brand guidelines perfectly.' },
                            { icon: <FaProjectDiagram />, title: 'Backend Integration', desc: 'Hooking up scalable Firebase backgrounds, AWS configurations, or custom REST/GraphQL APIs securely.' },
                            { icon: <FaCheckCircle />, title: 'UI/UX Migration', desc: 'Modernizing legacy application interfaces into the blazing fast Flutter render engine.' },
                            { icon: <FaRocket />, title: 'MVP Development', desc: 'Launch start-up ideas reliably and affordably in record time, proving market fit without building twice.' }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 text-3xl mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                    {srv.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{srv.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <div className="space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm">Why Us</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">The Power of Flutter Framework</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At GoZoom, we have embraced Flutter's revolutionary widget-based architecture to bypass native performance bridges, meaning your app looks and feels 100% native while costing significantly less to develop and maintain.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        'Hot Reload dramatically reduces coding and testing times in Dart',
                                        'A single codebase that easily deploys to 6 platforms max',
                                        '60 & 120 FPS performance out of the box using Skia/Impeller',
                                        'Extensive catalog of highly customizable materialistic & cupertino widgets',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <FaCheckCircle className="text-sm" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[3rem] transform rotate-[-3deg] scale-105 opacity-50"></div>
                            <img src="/images/app-mockup.png" alt="Flutter Dev Team" className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=App+Design"; }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Flutter;
