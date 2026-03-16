import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaNetworkWired, FaProjectDiagram, FaRobot, FaMicroscope, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AgenticDevelopment = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const paradigmItems = [
        { key: 'swarms', icon: FaProjectDiagram, color: 'indigo' },
        { key: 'tool_integration', icon: FaNetworkWired, color: 'violet' }
    ];

    const agentTypes = [
        { key: 'planner', color: 'indigo' },
        { key: 'executor', color: 'violet' },
        { key: 'reviewer', color: 'fuchsia' }
    ];

    const expertiseItems = [
        { key: 'research', icon: FaMicroscope },
        { key: 'coding', icon: FaProjectDiagram },
        { key: 'trading', icon: FaExchangeAlt },
        { key: 'success', icon: FaRobot },
        { key: 'supply_chain', icon: FaNetworkWired },
        { key: 'defense', icon: FaShieldAlt }
    ];

    const whyUsItems = [
        { key: 'frameworks', icon: FaNetworkWired },
        { key: 'guardrails', icon: FaShieldAlt },
        { key: 'infrastructure', icon: FaProjectDiagram },
        { key: 'cognitive', icon: FaRobot }
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-10 mix-blend-screen bg-cover bg-center"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[20%] w-[clamp(200px,40vw,500px)] h-[clamp(200px,40vw,500px)] bg-indigo-600/30 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[20%] w-[clamp(150px,35vw,400px)] h-[clamp(150px,35vw,400px)] bg-violet-600/30 rounded-full blur-[150px]" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center mx-auto" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">{t('agentic_development_page.hero.badge')}</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase" data-aos="fade-down" data-aos-delay="100">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">{t('agentic_development_page.hero.title_gradient')}</span>{t('agentic_development_page.hero.title_main')}
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('agentic_development_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[550px] mx-auto" data-aos="fade-up" data-aos-delay="600">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('agentic_development_page.hero.cta_build')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('agentic_development_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative w-full max-w-[350px] sm:max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center">
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-indigo-500/10 flex items-center justify-center shadow-lg border border-indigo-500/20"><FaRobot className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-violet-500/10 flex items-center justify-center shadow-lg border border-violet-500/20"><FaNetworkWired className="w-8 h-8 sm:w-12 sm:h-12 text-violet-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-fuchsia-500/10 flex items-center justify-center shadow-lg border border-fuchsia-500/20"><FaProjectDiagram className="w-8 h-8 sm:w-12 sm:h-12 text-fuchsia-400" /></div>
                                        <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-3xl bg-purple-500/10 flex items-center justify-center shadow-lg border border-purple-500/20"><FaMicroscope className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" /></div>
                                    </div>
                                    <div className="w-2/3 h-1.5 bg-gradient-to-r from-indigo-500/50 to-violet-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t('agentic_development_page.paradigm.title')}</h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                {t('agentic_development_page.paradigm.desc')}
                            </p>
                            <div className="space-y-6">
                                {paradigmItems.map((item) => (
                                    <div key={item.key} className="flex gap-4 items-start">
                                        <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-xl flex items-center justify-center flex-shrink-0 text-${item.color}-400`}>
                                            <item.icon />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-1">{t(`agentic_development_page.paradigm.items.${item.key}.title`)}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{t(`agentic_development_page.paradigm.items.${item.key}.desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {agentTypes.map((agent, i) => (
                                    <div key={agent.key} className={`bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md`}>
                                        <h4 className={`text-${agent.color}-400 font-bold mb-2`}>{t(`agentic_development_page.paradigm.agent_types.${agent.key}.title`)}</h4>
                                        <p className={`text-slate-400 text-xs text-left`}>{t(`agentic_development_page.paradigm.agent_types.${agent.key}.desc`)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-black relative border-t border-white/5 overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-5 mix-blend-screen bg-cover bg-center"></div>

                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 text-violet-300 font-bold text-sm mb-4 border border-violet-500/30">{t('agentic_development_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">{t('agentic_development_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">{t('agentic_development_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertiseItems.map((item, i) => (
                            <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-shadow duration-300 backdrop-blur-md group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/30 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-violet-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{t(`agentic_development_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">{t(`agentic_development_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-slate-900 relative text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-4 border border-indigo-500/30">{t('agentic_development_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">{t('agentic_development_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 font-bold text-lg border border-indigo-500/30 shadow-sm">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{t(`agentic_development_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-400 leading-relaxed">{t(`agentic_development_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgenticDevelopment;
