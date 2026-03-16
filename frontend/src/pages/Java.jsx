import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaJava, FaServer, FaCogs, FaShieldAlt, FaRocket, FaCode } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Java = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const features = [
        { icon: <FaServer />, key: 'enterprise' },
        { icon: <FaCogs />, key: 'microservices' },
        { icon: <FaShieldAlt />, key: 'secure' },
        { icon: <FaRocket />, key: 'performance' },
        { icon: <FaCode />, key: 'cloud' },
        { icon: <FaJava />, key: 'legacy' }
    ];

    return (
        <div className="bg-[#f4f7f6]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#f4f7f6] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] bg-red-600 rounded-full blur-[150px]"></div>
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0073b7" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 w-full">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-2 px-4 rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20 font-bold text-sm mb-6 uppercase tracking-widest">{t('java_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-slate-900 mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                                {t('java_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">{t('java_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-600 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                                {t('java_dev_page.hero.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('java_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white text-[#0073b7] font-black text-center text-base sm:text-lg border border-[#0073b7]/20 hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-xl uppercase tracking-wider w-full">
                                    {t('java_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex justify-center lg:justify-center" data-aos="zoom-in">
                            <div className="relative z-10 p-4 sm:p-8 bg-white/50 border border-white/20 rounded-[3rem] backdrop-blur-md shadow-2xl animate-float w-full max-w-[450px]">
                                <img src="/java_hero_illustration_1773662119196.png" alt="Java Development" className="w-full h-auto rounded-[2rem] shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{t('java_dev_page.expertise.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">{t('java_dev_page.expertise.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0073b7] text-3xl mb-8 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">{t(`java_dev_page.expertise.items.${feature.key}.title`)}</h4>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                    {t(`java_dev_page.expertise.items.${feature.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                                {t('java_dev_page.why_us.title')}
                            </h3>
                            <div className="space-y-6">
                                {t('java_dev_page.why_us.list', { returnObjects: true }).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-300">
                                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center font-bold text-blue-400">
                                            {i + 1}
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1" data-aos="fade-left">
                            <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                                <div className="space-y-8">
                                    {(t('java_dev_page.why_us.tech_cards', { returnObjects: true }) || []).map((card, idx) => (
                                        <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                            <h4 className="font-bold text-xl mb-2">{card.title}</h4>
                                            <p className="text-slate-400">{card.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Java;
