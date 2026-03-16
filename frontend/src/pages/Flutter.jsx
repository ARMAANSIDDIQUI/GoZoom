import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaMobileAlt, FaLaptopCode, FaCogs, FaProjectDiagram, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Flutter = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#042b59] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-6 lg:px-16 w-full">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:flex-1 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('flutter_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                                {t('flutter_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">{t('flutter_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-blue-100 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                {t('flutter_dev_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-[550px]" data-aos="fade-up" data-aos-delay="600">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('flutter_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('flutter_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-4 sm:p-10 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-xl shadow-2xl animate-float w-full max-w-[450px] flex items-center justify-center group hover:scale-105 transition-transform duration-500">
                                <img src="/images/flutter.svg" alt={t('flutter_dev_page.hero.img_alt')} className="w-[180px] h-auto drop-shadow-[0_20px_60px_rgba(96,165,250,0.6)] transform transition-transform group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = "/images/placeholder-flutter.png"; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 font-bold text-sm mb-4">{t('flutter_dev_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('flutter_dev_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('flutter_dev_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaMobileAlt />, title: t('flutter_dev_page.expertise.items.cross_platform.title'), desc: t('flutter_dev_page.expertise.items.cross_platform.desc') },
                            { icon: <FaLaptopCode />, title: t('flutter_dev_page.expertise.items.web_desktop.title'), desc: t('flutter_dev_page.expertise.items.web_desktop.desc') },
                            { icon: <FaCogs />, title: t('flutter_dev_page.expertise.items.widgets.title'), desc: t('flutter_dev_page.expertise.items.widgets.desc') },
                            { icon: <FaProjectDiagram />, title: t('flutter_dev_page.expertise.items.backend.title'), desc: t('flutter_dev_page.expertise.items.backend.desc') },
                            { icon: <FaCheckCircle />, title: t('flutter_dev_page.expertise.items.migration.title'), desc: t('flutter_dev_page.expertise.items.migration.desc') },
                            { icon: <FaRocket />, title: t('flutter_dev_page.expertise.items.mvp.title'), desc: t('flutter_dev_page.expertise.items.mvp.desc') }
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
                                <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm">{t('flutter_dev_page.why_us.badge')}</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('flutter_dev_page.why_us.title')}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('flutter_dev_page.why_us.desc')}
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {t('flutter_dev_page.why_us.list', { returnObjects: true }).map((item, idx) => (
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
                            <img src="/images/mobile_app_mockup_realistic_premium.png" alt={t('flutter_dev_page.why_us.img_alt')} className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Flutter;
