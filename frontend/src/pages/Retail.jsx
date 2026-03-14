import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaQuoteLeft, FaStar, FaShoppingCart, FaUsers, FaChartLine, FaCogs, FaShieldAlt, FaRocket, FaLaptopCode, FaCheckCircle, FaSearch } from 'react-icons/fa';

const Retail = () => {
    const { t } = useTranslation();
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
        { img: 'images/11.webp', title: t('retail_page.solutions.items.execution.title'), desc: t('retail_page.solutions.items.execution.desc') },
        { img: 'images/brandProtection.jpg', title: t('retail_page.solutions.items.security.title'), desc: t('retail_page.solutions.items.security.desc') },
        { img: 'images/enhance.webp', title: t('retail_page.solutions.items.experience.title'), desc: t('retail_page.solutions.items.experience.desc') },
    ];

    const industrySolutions = [
        { img: 'images/FB.png', title: t('retail_page.sectors.food'), features: [t('retail_page.sectors.features.pos'), t('retail_page.sectors.features.kds'), t('retail_page.sectors.features.cloud_kitchen'), t('retail_page.sectors.features.self_order_kiosk'), t('retail_page.sectors.features.contactless'), t('retail_page.sectors.features.live_reporting'), t('retail_page.sectors.features.integrated_payments')] },
        { img: 'images/12.webp', title: t('retail_page.sectors.merchandising'), features: [t('retail_page.sectors.features.pos'), t('retail_page.sectors.features.rfid'), t('retail_page.sectors.features.endless_aisle'), t('retail_page.sectors.features.self_checkout'), t('retail_page.sectors.features.live_reporting'), t('retail_page.sectors.features.integrated_payments')] },
        { img: 'images/cinema.webp', title: t('retail_page.sectors.entertainment'), features: [t('retail_page.sectors.features.pos'), t('retail_page.sectors.features.self_order_kiosk'), t('retail_page.sectors.features.voice_ordering'), t('retail_page.sectors.features.live_reporting'), t('retail_page.sectors.features.integrated_payments')] },
        { img: 'images/hospital.png', title: t('retail_page.sectors.healthcare'), features: [t('retail_page.sectors.features.pos'), t('retail_page.sectors.features.healthcare_kiosk'), t('retail_page.sectors.features.information_kiosk'), t('retail_page.sectors.features.live_reporting'), t('retail_page.sectors.features.integrated_payments')] },
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
                            {t('retail_page.hero.subtitle')}
                        </div>
                        <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase" data-aos="fade-up" data-aos-delay="200">
                            {t('retail_page.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">{t('retail_page.hero.title2')}</span>
                        </h1>
                        <p className="text-hero-desc text-slate-400 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                            {t('retail_page.hero.desc')}
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="600">
                            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-emerald-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                {t('retail_page.hero.button_contact')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/integration" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                {t('retail_page.hero.button_integration')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Retail Solutions */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">{t('retail_page.solutions.subtitle')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('retail_page.solutions.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{t('retail_page.solutions.title2')}</span></h2>
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
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4 uppercase">{t('retail_page.choose_us.subtitle')}</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-sans">{t('retail_page.choose_us.title')}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {t('retail_page.choose_us.desc')}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: <FaShoppingCart />, title: t('retail_page.choose_us.benefits.sync.title'), desc: t('retail_page.choose_us.benefits.sync.desc') },
                                    { icon: <FaUsers />, title: t('retail_page.choose_us.benefits.loyalty.title'), desc: t('retail_page.choose_us.benefits.loyalty.desc') },
                                    { icon: <FaChartLine />, title: t('retail_page.choose_us.benefits.profit.title'), desc: t('retail_page.choose_us.benefits.profit.desc') },
                                    { icon: <FaShieldAlt />, title: t('retail_page.choose_us.benefits.fraud.title'), desc: t('retail_page.choose_us.benefits.fraud.desc') }
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
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">{t('retail_page.sectors.subtitle')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800 font-sans tracking-tight">{t('retail_page.sectors.title1')} <span className="text-emerald-600">{t('retail_page.sectors.title2')}</span></h3>
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
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mb-4 tracking-wider uppercase border border-emerald-500/30">{t('retail_page.testimonials.subtitle')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white font-sans tracking-tight leading-tight">{t('retail_page.testimonials.title1')} <span className="text-emerald-400">{t('retail_page.testimonials.title2')}</span></h3>
                    </div>

                    {loadingTestimonials ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                        </div>
                    ) : testimonials.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((t_item, idx) => (
                                <div key={t_item._id} className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/10 text-left hover:border-emerald-500/50 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                    <FaQuoteLeft className="text-4xl text-emerald-500/20 mb-6 group-hover:text-emerald-500/40 transition-colors" />
                                    <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">"{t_item.content}"</p>
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center overflow-hidden">
                                            {t_item.avatar ? (
                                                <img src={`${backendUrl}${t_item.avatar}`} alt={t_item.authorName} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-xl font-bold text-emerald-400">{t_item.authorName.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{t_item.authorName}</h4>
                                            <p className="text-sm text-emerald-400/80 font-medium">{t_item.authorRole}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-400">{t('retail_page.testimonials.empty')}</p>
                    )}
                </div>
            </section>

            {/* Partners */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-4 uppercase tracking-wider">{t('retail_page.partners.subtitle')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('retail_page.partners.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{t('retail_page.partners.title2')}</span></h3>
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