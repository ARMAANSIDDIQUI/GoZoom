import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaAndroid, FaMobileAlt, FaLayerGroup, FaTachometerAlt, FaGamepad, FaRobot, FaCheckCircle, FaShieldAlt, FaRocket, FaHandshake } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AndroidDev = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Banner Section */}
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a1f0a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 -ml-40 -mt-20 w-96 h-96 rounded-full bg-green-500/30 blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 -mr-40 -mb-20 w-96 h-96 rounded-full bg-emerald-600/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 w-full">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">{t('android_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight uppercase">
                                {t('android_dev_page.hero.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{t('android_dev_page.hero.title2')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                {t('android_dev_page.hero.desc')}
                            </p>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-green-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('android_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('android_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex justify-center lg:justify-center" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative z-10 p-4 sm:p-10 bg-white/5 border border-white/10 rounded-[2.5rem] sm:rounded-[4rem] backdrop-blur-md shadow-2xl animate-float w-full max-w-[450px]">
                                <img src="/images/android.svg" alt={t('android_dev_page.hero.img_alt')} className="w-full h-auto drop-shadow-[0_25px_60px_rgba(74,222,128,0.4)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                <div className="container relative z-10 block">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 font-bold text-sm mb-4">{t('android_dev_page.about.badge')}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                                {t('android_dev_page.about.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">{t('android_dev_page.about.title2')}</span>{t('android_dev_page.about.title3')}
                            </h2>
                            <div className="space-y-5">
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-green-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                    {t('android_dev_page.about.p1')}
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('android_dev_page.about.p2_start')}<strong>{t('android_dev_page.about.p2_team')}</strong>{t('android_dev_page.about.p2_end')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specializes Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-green-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(74,222,128,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16,185,129,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('android_dev_page.expertise.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">{t('android_dev_page.expertise.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{t('android_dev_page.expertise.title2')}</span></h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: t('android_dev_page.expertise.items.native.title'), desc: t('android_dev_page.expertise.items.native.desc'), icon: FaTachometerAlt },
                            { title: t('android_dev_page.expertise.items.tv.title'), desc: t('android_dev_page.expertise.items.tv.desc'), icon: FaMobileAlt },
                            { title: t('android_dev_page.expertise.items.legacy.title'), desc: t('android_dev_page.expertise.items.legacy.desc'), icon: FaLayerGroup },
                            { title: t('android_dev_page.expertise.items.ar_vr.title'), desc: t('android_dev_page.expertise.items.ar_vr.desc'), icon: FaGamepad },
                            { title: t('android_dev_page.expertise.items.ml.title'), desc: t('android_dev_page.expertise.items.ml.desc'), icon: FaRobot },
                            { title: t('android_dev_page.expertise.items.enterprise.title'), desc: t('android_dev_page.expertise.items.enterprise.desc'), icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-green-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-24 bg-white relative" id="learnMore">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">{t('android_dev_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('android_dev_page.why_us.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">{t('android_dev_page.why_us.title2')}</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: t('android_dev_page.why_us.items.compose.title'), desc: t('android_dev_page.why_us.items.compose.desc'), icon: FaAndroid },
                            { title: t('android_dev_page.why_us.items.play_store.title'), desc: t('android_dev_page.why_us.items.play_store.desc'), icon: FaCheckCircle },
                            { title: t('android_dev_page.why_us.items.cicd.title'), desc: t('android_dev_page.why_us.items.cicd.desc'), icon: FaRocket },
                            { title: t('android_dev_page.why_us.items.support.title'), desc: t('android_dev_page.why_us.items.support.desc'), icon: FaHandshake }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 font-bold text-lg shadow-sm border border-green-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center" data-aos="fade-left">
                        <div className="glass-card bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 inline-block">
                            <img src="../images/androidboy2.jpg" className="w-40 h-52 mx-auto mb-6 rounded-2xl object-cover shadow-lg" alt={t('android_dev_page.why_us.cta.img_alt')} />
                            <p className="text-2xl font-bold text-slate-800 mb-6">{t('android_dev_page.why_us.cta.title1')}<br /><span className="text-green-600">{t('android_dev_page.why_us.cta.title2')}</span></p>
                            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1">{t('android_dev_page.why_us.cta.button')}</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AndroidDev;
