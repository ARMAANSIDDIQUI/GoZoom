import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Retail = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const retailSolutions = [
        { img: 'images/11.webp', title: 'RETAIL EXECUTION', desc: "GOZOOM's connected retail solutions empower global companies to enhance retail execution, boost sales, and increase profitability through innovative and industry-leading products and solutions." },
        { img: 'images/brandProtection.jpg', title: 'SECURITY', desc: "GOZOOM offers customized solutions to protect brands comprehensively, safeguard investments and reputation, prevent counterfeits, and increase profits through track and trace capabilities." },
        { img: 'images/enhance.webp', title: 'CUSTOMER EXPERIENCE', desc: "At GOZOOM, we prioritize enhancing the customer experience. We offer a range of solutions that cater to different shopping experiences such as pop-up stores, web or app shopping, QR or voice-based commerce." },
    ];

    const products = [
        { img: 'images/6.png', title: 'CHECKOUT', desc: "GOZOOM's point of sale (PoS) system goes beyond just a cash register. We transform your raw sales data into meaningful insights for accounting and management." },
        { img: 'images/digitalpay.webp', title: 'ELECTRONIC PAYMENTS', desc: "GOZOOM's integrated digital payment solutions offer greater accuracy, time-saving benefits, and eliminate manual transactions." },
        { img: 'images/selforder.webp', title: 'INTERACTIVE ORDERING', desc: "GOZOOM's Self-Ordering Kiosks offer customers a user-friendly menu and flexible payment options, allowing them to easily place their orders." },
        { img: 'images/livereport.webp', title: 'REAL TIME REPORTING', desc: "GOZOOM's LIV Reporting app provides real-time data access from anywhere in the world, empowering informed decisions based on analytics." },
        { img: 'images/rfid.jpg', title: 'SMART RFID SOLUTIONS', desc: "Smart RFID enables swift and hassle-free shopping. It provides hands free warehouse operations while avoiding thefts and counterfeits." },
        { img: 'images/webmobilebg.webp', title: 'WEB & MOBILE DEV', desc: "Our design team is committed to giving your customer the best user experience so they are compelled to return to your websites and mobile apps." },
    ];

    const industrySolutions = [
        { img: 'images/FB.png', title: 'FOOD & BEVERAGES', features: ['POS', 'KDS', 'CLOUD KITCHEN', 'SELF-ORDER KIOSK', 'CONTACTLESS ORDERING', 'LIVE REPORTING', 'INTEGRATED PAYMENTS'] },
        { img: 'images/12.webp', title: 'MERCHANDISING', features: ['POS', 'RFID', 'ENDLESS AISLE', 'SELF CHECKOUT', 'LIVE REPORTING', 'INTEGRATED PAYMENTS'] },
        { img: 'images/cinema.webp', title: 'ENTERTAINMENT', features: ['POS', 'SELF-ORDER KIOSK', 'VOICE ORDERING', 'LIVE REPORTING', 'INTEGRATED PAYMENTS'] },
        { img: 'images/hospital.png', title: 'HEALTHCARE', features: ['POS', 'HEALTHCARE KIOSK', 'INFORMATION KIOSK', 'LIVE REPORTING', 'INTEGRATED PAYMENTS'] },
    ];

    const testimonials = [
        { img: 'images/shadani.png', text: "Working with Gozoom Technologies IT Solutions has been a game-changer for our business. Their team of experts seamlessly integrated our systems and provided us with a comprehensive solution that has boosted our productivity and efficiency." },
        { img: 'images/rajdhani.png', text: "I was blown away by the professionalism and expertise of the team at Gozoom Technologies. They took the time to understand our unique business requirements and offered customized solutions that exceeded our expectations." },
        { img: 'images/maisoninfra.png', text: "The team at GoZoom IT Solutions is truly top-notch. They provided us with a comprehensive suite of services that has transformed the way we do business. From digital transformation to cybersecurity, their team delivered exceptional results." },
    ];

    return (
        <div>
            {/* Hero Banner — Emerald Retail colors */}
            <section className="hero-premium">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/images/retail.webp")' }}></div>
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-teal-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-screen py-24">
                    <div className="max-w-4xl text-center mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Retail Technology
                        </div>
                        <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase" data-aos="fade-up" data-aos-delay="200">
                            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Retail</span>
                        </h1>
                        <p className="text-hero-desc text-slate-400 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                            We aim to revolutionize and enhance the retail experience like never before through innovation and transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="600">
                            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                Get In Touch <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/integration" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                Integration
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Retail Solutions */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">Retail Solutions</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">RETAIL <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">SOLUTIONS</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {retailSolutions.map((item, i) => (
                            <div key={i} className="glass-card bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={i * 150}>
                                <div className="relative overflow-hidden h-56">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg tracking-widest">{item.title}</h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products & Services */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16,185,129,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20,184,166,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Products & Services</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">PRODUCTS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">SERVICES</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {products.map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="relative h-44 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-slate-900/50"></div>
                                    <h4 className="absolute bottom-3 left-3 text-white font-bold tracking-widest text-sm">{item.title}</h4>
                                </div>
                                <div className="p-5">
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">Industries</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">INDUSTRY <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">SOLUTIONS</span></h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industrySolutions.map((item, i) => (
                            <div key={i} className="glass-card bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="relative h-48 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                                    <h4 className="absolute bottom-3 left-3 text-white font-bold text-sm tracking-widest">{item.title}</h4>
                                </div>
                                <div className="p-5">
                                    <ul className="space-y-2">
                                        {item.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                                                <div className="w-4 h-4 bg-emerald-100 rounded flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-2.5 h-2.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">Testimonials</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Clients Say</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex justify-center mb-5">
                                    <div className="w-20 h-20 rounded-full border-4 border-emerald-200 overflow-hidden">
                                        <img src={t.img} alt="" className="w-full h-full object-contain p-2" />
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed text-center italic">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">Our Partners</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Partners</span></h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {['images/shadani.png', 'images/rajdhani.png', 'images/maisoninfra.png', 'images/cornitos.png'].map((p, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center" data-aos="fade-up" data-aos-delay={i * 100}>
                                <img src={p} alt="Partner" className="h-24 w-24 object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Retail;
