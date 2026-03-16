import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaBrain, FaMicrochip, FaRobot, FaLightbulb, FaNetworkWired, FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AiApplications = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const capabilityItems = [
        { key: 'predictive', icon: FaBrain, color: 'rose' },
        { key: 'neural', icon: FaMicrochip, color: 'fuchsia' },
        { key: 'automation', icon: FaRobot, color: 'purple' }
    ];

    const expertiseItems = [
        { key: 'gen_ai', icon: FaBrain },
        { key: 'recommendation', icon: FaNetworkWired },
        { key: 'anomaly', icon: FaLightbulb },
        { key: 'crm', icon: FaBrain },
        { key: 'speech', icon: FaNetworkWired },
        { key: 'workflows', icon: FaMicrochip }
    ];

    const whyUsItems = t('ai_applications_page.why_us.items', { returnObjects: true });

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a0a0a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-fuchsia-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                    <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-5 mix-blend-screen bg-cover bg-center"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center mx-auto" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">{t('ai_applications_page.hero.badge')}</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase" data-aos="fade-down" data-aos-delay="100">
                                {t('ai_applications_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">{t('ai_applications_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('ai_applications_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[550px] mx-auto" data-aos="fade-up" data-aos-delay="600">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-gradient-to-r from-rose-600 to-fuchsia-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-rose-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('ai_applications_page.hero.cta_build')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('common.learn_more')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-2 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] border border-white/20 backdrop-blur-xl w-full max-w-[450px] shadow-[0_0_50px_rgba(225,29,72,0.3)] animate-float">
                                <img src="/images/20943839.jpg" alt="AI Applications" className="w-full h-auto rounded-[1.8rem] opacity-90" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-4">{t('ai_applications_page.capabilities.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('ai_applications_page.capabilities.title_main')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-fuchsia-600">{t('ai_applications_page.capabilities.title_gradient')}</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {capabilityItems.map((item, i) => (
                            <div key={item.key} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-20 h-20 bg-${item.color}-100 text-${item.color}-600 rounded-2xl mx-auto flex items-center justify-center mb-6`}>
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{t(`ai_applications_page.capabilities.items.${item.key}.title`)}</h3>
                                <p className="text-slate-600">{t(`ai_applications_page.capabilities.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-fuchsia-100 text-fuchsia-700 font-bold text-sm mb-4">{t('ai_applications_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('ai_applications_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('ai_applications_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertiseItems.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-fuchsia-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-fuchsia-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`ai_applications_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`ai_applications_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-4">{t('ai_applications_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('ai_applications_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {Array.isArray(whyUsItems) && whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-bold text-lg shadow-sm">
                                    <FaCheckCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiApplications;
