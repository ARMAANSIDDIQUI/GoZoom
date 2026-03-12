import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaCartShopping, FaCircleInfo, FaCreditCard, FaHospital, FaMasksTheater, FaGear } from 'react-icons/fa6';

const Kiosks = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Banner — Teal Kiosk colors */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #042f2e 50%, #0f172a 100%)' }}></div>
                <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-teal-500/25 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-emerald-500/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">Kiosk Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
                                GoZooms <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Kiosk Technologies!</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
                                Interactive kiosk solutions that enhance customer experience and streamline business operations across all industries.
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="600">
                                <Link to="/integration" className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:-translate-y-1">Integration</Link>
                                <Link to="/retail" className="px-8 py-4 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20">Retail</Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-8 w-full place-items-center">
                                        <div className="w-24 h-24 rounded-3xl bg-teal-500/10 flex items-center justify-center shadow-lg border border-teal-500/20"><FaCartShopping className="w-12 h-12 text-teal-400" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><FaCreditCard className="w-12 h-12 text-cyan-400" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 flex items-center justify-center shadow-lg border border-emerald-500/20"><FaHospital className="w-12 h-12 text-emerald-400" /></div>
                                        <div className="w-24 h-24 rounded-3xl bg-blue-500/10 flex items-center justify-center shadow-lg border border-blue-500/20"><FaMasksTheater className="w-12 h-12 text-blue-400" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-teal-500/50 to-cyan-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-700 font-bold text-sm mb-4">Our Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Kiosk Solutions</span></h2>
                    </div>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-xl text-slate-600 leading-relaxed">
                            We provide state-of-the-art kiosk solutions for various industries, including retail, healthcare, and entertainment. Our kiosks are designed to enhance customer experience and streamline business operations.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Self-Ordering Kiosks', desc: 'Allow customers to browse menus, customize orders, and make payments independently — reducing wait times and increasing order accuracy.', icon: FaCartShopping },
                            { title: 'Information Kiosks', desc: 'Provide visitors with wayfinding, product info, and interactive content in retail spaces, hotels, and public venues.', icon: FaCircleInfo },
                            { title: 'Payment Kiosks', desc: 'Secure, fast, and reliable payment processing terminals integrated with your existing POS and accounting systems.', icon: FaCreditCard },
                            { title: 'Healthcare Kiosks', desc: 'Patient check-in, registration, and information retrieval solutions that reduce administrative burden and improve patient flow.', icon: FaHospital },
                            { title: 'Entertainment Kiosks', desc: 'Ticketing, loyalty programs, and interactive entertainment solutions for cinemas, theme parks, and venues.', icon: FaMasksTheater },
                            { title: 'Custom Kiosks', desc: 'Bespoke kiosk solutions tailored to your specific industry needs, workflows, and brand identity.', icon: FaGear },
                        ].map((item, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-4xl mb-5 text-teal-600 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
                                    <item.icon />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(20,184,166,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6,182,212,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Why Choose Us</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Why GoZooms <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Kiosk Solutions?</span></h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4" data-aos="fade-right">
                            {[
                                { title: 'Reliability First', desc: '99.9% uptime guarantee with proactive monitoring and rapid response support around the clock.' },
                                { title: 'Seamless Integration', desc: 'Easily integrates with your existing POS, ERP, and payment systems for a unified business ecosystem.' },
                                { title: 'Brand Consistency', desc: 'Fully customizable UI to match your brand identity and deliver a consistent customer experience.' },
                                { title: 'Data Analytics', desc: 'Real-time dashboards and reports on kiosk usage, transactions, and customer behavior patterns.' },
                                { title: 'Scalable Platform', desc: 'Scale from a single unit to hundreds of kiosks across multiple locations with centralized management.' },
                                { title: 'Industry Expertise', desc: 'Years of experience deploying kiosks in retail, hospitality, healthcare, and entertainment industries.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:-translate-y-1 transition-all duration-200">
                                    <div className="flex-shrink-0 w-10 h-10 bg-teal-500/30 rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{item.title}</p>
                                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center" data-aos="fade-left">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
                                <p className="text-2xl font-bold text-white mb-6">Ready to transform<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">your customer experience?</span></p>
                                <p className="text-slate-300 mb-8">Talk to our kiosk specialists and get a customized solution for your business today.</p>
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold hover:shadow-lg hover:shadow-teal-500/30 transition-all hover:-translate-y-1">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kiosks;
