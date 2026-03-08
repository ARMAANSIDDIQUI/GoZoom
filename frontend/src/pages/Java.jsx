import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaJava, FaServer, FaCogs, FaProjectDiagram, FaCheckCircle, FaRocket, FaShieldAlt } from 'react-icons/fa';

const Java = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#2d1b11] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Enterprise-Grade Robustness</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight uppercase">
                                Java Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Applications</span>
                            </h1>
                            <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Build secure, highly scalable, and exceptionally reliable software solutions with Java. We specialize in robust enterprise applications, complex architectures, and high-performance backend systems.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Start Your Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-12 lg:p-16 bg-gradient-to-br from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] shadow-2xl flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                                <div className="text-[140px] text-red-500 drop-shadow-[0_20px_50px_rgba(239,68,68,0.4)] group-hover:rotate-12 transition-transform duration-500">
                                    <FaJava />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 font-bold text-sm mb-4">Core Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build with Java</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From legacy system migrations to highly complex cloud-native microservices for enterprise businesses.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaServer />, title: 'Enterprise Web Applications', desc: 'Secure B2B portals, ERPs, and CRM systems built using robust frameworks like Spring Boot and Java EE.' },
                            { icon: <FaCogs />, title: 'Microservices Architectures', desc: 'De-coupling monolithic applications into scalable, independently deployable microservices.' },
                            { icon: <FaShieldAlt />, title: 'High-Security Systems', desc: 'Developing applications with strict financial and healthcare compliance demands utilizing robust Java security APIs.' },
                            { icon: <FaProjectDiagram />, title: 'API Development', desc: 'Building high-throughput, low-latency REST and SOAP APIs to serve mobile frontends and third-party integrations.' },
                            { icon: <FaJava />, title: 'Legacy System Modernization', desc: 'Carefully migrating and refactoring outdated codebases to modern Java standards without business disruption.' },
                            { icon: <FaRocket />, title: 'Cloud-Native Java', desc: 'Optimizing enterprise applications utilizing Kubernetes, Docker, and AWS native environments.' }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 text-3xl mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
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
                                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 font-bold text-sm">Why Us</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why GoZoom for Enterprise Java?</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Java is the backbone of the world's largest corporate networks. Our specialized backend engineering teams build architectures that are mathematically sound, highly typed, and impervious to scale bottlenecks.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        'Strict adherence to Object-Oriented and SOLID design principles',
                                        'Deep expertise in the Spring Ecosystem (Spring Boot, Security, Data)',
                                        'Extensive performance tuning for JVM multi-threading and memory management',
                                        'Guaranteed 99.9% uptime architecture design'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                                <FaCheckCircle className="text-sm" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-100 to-orange-50 rounded-[3rem] transform rotate-[3deg] scale-105 opacity-50"></div>
                            <img src="/images/Home Page - IT Solutions.png" alt="Java Enterprise Services" className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=Enterprise+Architecture"; }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Java;
