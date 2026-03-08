import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaStar, FaShoppingCart, FaUsers, FaChartLine, FaCogs, FaShieldAlt, FaRocket, FaLaptopCode, FaCheckCircle, FaSearch } from 'react-icons/fa';

const Retail = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loadingTestimonials, setLoadingTestimonials] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();

        const fetchTestimonials = async () => {
            try {
                const apiUrl = process.env.NODE_ENV === 'production'
                    ? 'https://gozoom-backend.onrender.com'
                    : 'http://localhost:5001';
                const res = await axios.get(`${apiUrl}/api/testimonials`);
                setTestimonials(res.data);
            } catch (err) {
                console.error('Failed to fetch testimonials', err);
            } finally {
                setLoadingTestimonials(false);
            }
        };
        fetchTestimonials();
    }, []);

    const backendUrl = process.env.NODE_ENV === 'production'
        ? 'https://gozoom-backend.onrender.com'
        : 'http://localhost:5001';

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

            {/* Why Choose Us for Retail */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4 uppercase">Next-Gen Commerce</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-sans">Empowering Modern Retailers</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                We help brick-and-mortar stores transition into data-driven digital hubs. Our solutions bridge the gap between physical storefronts and the digital marketplace.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <FaShoppingCart />, title: "Omnichannel Sync", desc: "Unified inventory across web, mobile, and store." },
                                    { icon: <FaUsers />, title: "Customer Loyalty", desc: "Deep analytics on buyer behavior and repeat visits." },
                                    { icon: <FaChartLine />, title: "Real-time Profit", desc: "Live reporting on sales and cost margin metrics." },
                                    { icon: <FaShieldAlt />, title: "Fraud Prevention", desc: "Enterprise-grade digital payment security." }
                                ].map((benefit, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/20">
                                            {benefit.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{benefit.title}</h4>
                                            <p className="text-sm text-slate-500">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="fade-left">
                            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
                                <img src="/images/Home Page - IT Solutions.png" alt="Retail Excellence" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=Retail+Tech"; }} />
                                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industry Solutions - Redesigned Grid */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">Vertical Solutions</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800 font-sans tracking-tight">SPECIALIZED <span className="text-emerald-600">SECTORS</span></h3>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industrySolutions.map((item, i) => (
                            <div key={i} className="group relative bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-emerald-600 transition-all duration-500 hover:-translate-y-2 overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 rounded-full group-hover:bg-white/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-600 text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                                        {i === 0 ? <FaCogs /> : i === 1 ? <FaShoppingCart /> : i === 2 ? <FaRocket /> : <FaSearch />}
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-white transition-colors">{item.title}</h4>
                                    <ul className="space-y-3">
                                        {item.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-600 group-hover:text-emerald-50 text-sm font-medium transition-colors">
                                                <div className="w-5 h-5 rounded-full bg-emerald-500 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0">
                                                    <FaCheckCircle className="text-[10px] text-white" />
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

            {/* Dynamic Testimonials */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #10b981 0%, transparent 70%)' }}></div>
                <div className="container relative z-10 block px-6 text-center">
                    <div className="mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-4 tracking-wider uppercase border border-emerald-500/30">Client Success</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-sans tracking-tight leading-tight">IMPACTFUL <span className="text-emerald-400">PARTNERSHIPS</span></h3>
                    </div>

                    {loadingTestimonials ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                        </div>
                    ) : testimonials.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((t, idx) => (
                                <div key={t._id} className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-left hover:border-emerald-500/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <FaQuoteLeft className="text-4xl text-emerald-500/20 mb-6 group-hover:text-emerald-500/40 transition-colors" />
                                    <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">"{t.content}"</p>
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center overflow-hidden">
                                            {t.avatar ? (
                                                <img src={`${backendUrl}${t.avatar}`} alt={t.authorName} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-xl font-bold text-emerald-400">{t.authorName.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{t.authorName}</h4>
                                            <p className="text-sm text-emerald-400/80 font-medium">{t.authorRole}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-400">Collaborating with global brands to redefine retail excellence.</p>
                    )}
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
