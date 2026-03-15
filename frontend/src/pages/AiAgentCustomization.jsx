import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaSlidersH, FaPuzzlePiece, FaCodeBranch, FaDatabase, FaShieldAlt, FaComments, FaCheckCircle, FaProjectDiagram, FaUserLock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AiAgentCustomization = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const coreServiceItems = [
        { key: 'fine_tuning', icon: FaSlidersH, color: 'pink' },
        { key: 'guardrails', icon: FaCodeBranch, color: 'purple' },
        { key: 'persona', icon: FaPuzzlePiece, color: 'cyan' }
    ];

    const capabilityItems = [
        { key: 'rag', icon: FaDatabase },
        { key: 'voice', icon: FaComments },
        { key: 'compliance', icon: FaShieldAlt },
        { key: 'tools', icon: FaProjectDiagram },
        { key: 'rbac', icon: FaUserLock },
        { key: 'automated_retraining', icon: FaSlidersH }
    ];

    const whyUsItems = [
        { key: 'accuracy', icon: FaShieldAlt },
        { key: 'agnostic', icon: FaPuzzlePiece },
        { key: 'privacy', icon: FaUserLock },
        { key: 'enterprise', icon: FaProjectDiagram }
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[30%] left-[5%] w-[clamp(150px,30vw,300px)] h-[clamp(150px,30vw,300px)] bg-pink-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-[10%] right-[10%] w-[clamp(200px,40vw,400px)] h-[clamp(200px,40vw,400px)] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-[20%] right-[40%] w-[clamp(175px,35vw,350px)] h-[clamp(175px,35vw,350px)] bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start mx-auto lg:mx-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">{t('ai_agent_customization_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-down" data-aos-delay="100">
                                {t('ai_agent_customization_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">{t('ai_agent_customization_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-10 max-w-2xl font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('ai_agent_customization_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="300">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black text-center text-base sm:text-lg hover:shadow-2xl hover:shadow-pink-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    {t('ai_agent_customization_page.hero.cta_customize')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-6 sm:gap-8">
                                    <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center">
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-pink-500/10 flex items-center justify-center shadow-lg border border-pink-500/20"><FaSlidersH className="w-8 h-8 sm:w-12 sm:h-12 text-pink-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-purple-500/10 flex items-center justify-center shadow-lg border border-purple-500/20"><FaCodeBranch className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><FaShieldAlt className="w-8 h-8 sm:w-12 sm:h-12 text-cyan-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-indigo-500/10 flex items-center justify-center shadow-lg border border-indigo-500/20"><FaPuzzlePiece className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-cyan-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {coreServiceItems.map((item, i) => (
                            <div key={item.key} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className={`w-16 h-16 bg-${item.color}-100 text-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(`ai_agent_customization_page.core_services.items.${item.key}.title`)}</h3>
                                <p className="text-slate-600">{t(`ai_agent_customization_page.core_services.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-800 font-bold text-sm mb-4 border border-cyan-200">{t('ai_agent_customization_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('ai_agent_customization_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('ai_agent_customization_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilityItems.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-cyan-500" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`ai_agent_customization_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`ai_agent_customization_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-800 font-bold text-sm mb-4 border border-pink-200">{t('ai_agent_customization_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('ai_agent_customization_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 font-bold text-lg shadow-sm border border-pink-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`ai_agent_customization_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`ai_agent_customization_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiAgentCustomization;
