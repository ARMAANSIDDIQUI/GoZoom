import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaMobileAlt, FaLayerGroup, FaCode, FaRocket, FaCheckCircle, FaProjectDiagram } from 'react-icons/fa';

const ReactNative = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#06b6d4 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Cross-Platform Excellence</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight uppercase">
                                React Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Development</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Build native apps for Android and iOS using a single, robust codebase. Our expert React Native developers deliver high-performance, cost-effective mobile solutions tailored to your business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Start Your Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/services" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-4 lg:py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-12 lg:p-16 bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                                <img src="/images/react-js-icon.svg" alt="React Native Custom Apps" className="w-[120px] h-auto drop-shadow-[0_20px_50px_rgba(6,182,212,0.5)] animate-[spin_10s_linear_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm mb-4">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build with React Native</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">We leverage React Native's shared codebase architecture to deliver versatile, scalable mobile applications.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaMobileAlt />, title: 'Custom App Development', desc: 'From startup ideas to enterprise mobility solutions, we build fully customized apps that hit both app stores simultaneously.' },
                            { icon: <FaLayerGroup />, title: 'UI/UX Design for RN', desc: 'Creating native-feeling, fluid, and brilliantly intuitive interfaces optimized for React Native’s rendering engine.' },
                            { icon: <FaCode />, title: 'App Migration', desc: 'Seamlessly port your existing native or hybrid (Cordova/Ionic) apps over to the powerful React Native framework.' },
                            { icon: <FaProjectDiagram />, title: 'API Integrations', desc: 'Extending app functionality by securely linking third-party RESTful APIs, payment gateways, and backend services.' },
                            { icon: <FaCheckCircle />, title: 'Testing & QA', desc: 'Rigorous automated and manual testing on real devices across iOS and Android ecosystems to guarantee zero crashes.' },
                            { icon: <FaRocket />, title: 'Post-Launch Maintenance', desc: 'Ongoing support, performance monitoring, OS updates, and feature enhancements to keep your app ahead.' }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 text-3xl mb-6 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-500">
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
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-bold text-sm">Why Us</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose GoZoom for React Native?</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    React Native speeds up development and maintains high native performance. Combining this powerful technology with our experienced talent ensures your mobile product hits the market faster and scales seamlessly.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        'Single codebase for Android & iOS lowers cost by ~40%',
                                        'Hot reloading guarantees faster development cycles',
                                        'True native UI components and deep OS integration',
                                        'Massive community support and pre-built libraries',
                                        'Dedicated React framework experts on staff'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center flex-shrink-0">
                                                <FaCheckCircle className="text-sm" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-[3rem] transform rotate-3 scale-105 opacity-50"></div>
                            <img src="/images/app-mockup.png" alt="React Native Dev Team" className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=Mobile+App+Design"; }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReactNative;
