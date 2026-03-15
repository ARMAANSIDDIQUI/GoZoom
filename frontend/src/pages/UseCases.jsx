import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaChartLine, FaHeartbeat, FaShoppingCart, FaIndustry, FaGraduationCap, FaCar, FaRegLightbulb, FaTools, FaShieldAlt, FaRocket } from 'react-icons/fa';

const UseCases = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const cases = [
        { key: 'healthcare', icon: <FaHeartbeat />, color: 'text-red-500', bg: 'bg-red-50' },
        { key: 'ecommerce', icon: <FaShoppingCart />, color: 'text-blue-500', bg: 'bg-blue-50' },
        { key: 'finance', icon: <FaChartLine />, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        { key: 'manufacturing', icon: <FaIndustry />, color: 'text-amber-500', bg: 'bg-amber-50' },
    ];

    const innovationItems = [
        { key: 'edtech', icon: FaGraduationCap },
        { key: 'automotive', icon: FaCar },
        { key: 'retail', icon: FaShoppingCart },
        { key: 'healthcare_diag', icon: FaHeartbeat },
        { key: 'fraud', icon: FaShieldAlt },
        { key: 'manufacturing_smart', icon: FaIndustry },
    ];

    const strategyItems = [
        { key: 'workflow', icon: FaTools },
        { key: 'scalability', icon: FaRocket },
        { key: 'proprietary', icon: FaRegLightbulb },
        { key: 'security', icon: FaShieldAlt },
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/about2.jpg')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">{t('use_cases_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-6 leading-tight tracking-tight" data-aos="fade-down" data-aos-delay="100">
                                {t('use_cases_page.hero.title_main')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t('use_cases_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-10 max-w-2xl font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('use_cases_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="300">
                                <a href="#industries" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-black text-center text-base sm:text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    {t('use_cases_page.hero.cta_explore')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[320px] sm:max-w-[420px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 sm:gap-8">
                                    <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center">
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-red-500/10 flex items-center justify-center shadow-lg border border-red-500/20"><FaHeartbeat className="w-8 h-8 sm:w-12 sm:h-12 text-red-500" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-blue-500/10 flex items-center justify-center shadow-lg border border-blue-500/20"><FaShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-blue-500" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-emerald-500/10 flex items-center justify-center shadow-lg border border-emerald-500/20"><FaChartLine className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-500" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-amber-500/10 flex items-center justify-center shadow-lg border border-amber-500/20"><FaIndustry className="w-8 h-8 sm:w-12 sm:h-12 text-amber-500" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="industries" className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        {cases.map((c, i) => (
                            <div key={i} className={`p-10 rounded-3xl border border-slate-100 ${c.bg} hover:shadow-xl transition-all duration-300 group`} data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl ${c.color} shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                                    {c.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(`use_cases_page.industries.items.${c.key}.title`)}</h3>
                                <p className="text-slate-600 text-lg">{t(`use_cases_page.industries.items.${c.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* In-Depth Industry Innovations Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-800 font-bold text-sm mb-4">{t('use_cases_page.innovations.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('use_cases_page.innovations.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('use_cases_page.innovations.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {innovationItems.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-emerald-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-emerald-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`use_cases_page.innovations.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`use_cases_page.innovations.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Custom Solutions Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm mb-4">{t('use_cases_page.why_custom.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('use_cases_page.why_custom.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {strategyItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-lg shadow-sm border border-emerald-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`use_cases_page.why_custom.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`use_cases_page.why_custom.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseCases;
