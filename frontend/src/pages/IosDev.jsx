import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaApple, FaMobileAlt, FaTabletAlt, FaClock, FaTv, FaCodeBranch, FaCogs, FaShieldAlt, FaRocket, FaCheckCircle, FaUserTie } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const IosDev = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0a112f] overflow-hidden">
                {/* iOS Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-cyan-500/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-sky-400/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">{t('ios_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight uppercase">
                                {t('ios_dev_page.hero.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t('ios_dev_page.hero.title2')}</span>
                            </h1>
                            <p className="text-hero-desc text-blue-100 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium">
                                {t('ios_dev_page.hero.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] mx-auto">
                                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('ios_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('ios_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-8 lg:p-12 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] lg:rounded-[5rem] border border-white/10 backdrop-blur-xl w-full max-w-[300px] lg:max-w-[380px] shadow-2xl flex items-center justify-center group/ios hover:scale-105 transition-transform duration-500">
                                <img src="/images/apple-ios-app-store-seeklogo.svg" alt={t('ios_dev_page.hero.img_alt')} className="w-full h-auto rounded-[2.5rem] drop-shadow-[0_20px_50px_rgba(14,165,233,0.3)] filter brightness-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <div className="space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-2">{t('ios_dev_page.about.badge')}</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">{t('ios_dev_page.about.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t('ios_dev_page.about.title2')}</span>{t('ios_dev_page.about.title3')}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                    {t('ios_dev_page.about.p1')}
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('ios_dev_page.about.p2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14,165,233,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56,189,248,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('ios_dev_page.expertise.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">{t('ios_dev_page.expertise.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t('ios_dev_page.expertise.capabilities')}</span>{t('ios_dev_page.expertise.title2')}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: t('ios_dev_page.expertise.items.iphone.title'), desc: t('ios_dev_page.expertise.items.iphone.desc'), icon: FaMobileAlt },
                            { title: t('ios_dev_page.expertise.items.ipad.title'), desc: t('ios_dev_page.expertise.items.ipad.desc'), icon: FaTabletAlt },
                            { title: t('ios_dev_page.expertise.items.watch.title'), desc: t('ios_dev_page.expertise.items.watch.desc'), icon: FaClock },
                            { title: t('ios_dev_page.expertise.items.tvos.title'), desc: t('ios_dev_page.expertise.items.tvos.desc'), icon: FaTv },
                            { title: t('ios_dev_page.expertise.items.uiux.title'), desc: t('ios_dev_page.expertise.items.uiux.desc'), icon: FaApple },
                            { title: t('ios_dev_page.expertise.items.deployment.title'), desc: t('ios_dev_page.expertise.items.deployment.desc'), icon: FaRocket },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ "backgroundImage": "url(\"../images/hire_dedicated_ios_development_service_81065c6945.jpg\")" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="container relative z-10 block text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t('ios_dev_page.hire.title1')}<span className="text-gradient-cyan">{t('ios_dev_page.hire.title2')}</span>{t('ios_dev_page.hire.title3')}</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        {t('ios_dev_page.hire.p')}
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-1">{t('ios_dev_page.hire.button')}</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">{t('ios_dev_page.why_us.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('ios_dev_page.why_us.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t('ios_dev_page.why_us.title2')}</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: t('ios_dev_page.why_us.items.customized.title'), desc: t('ios_dev_page.why_us.items.customized.desc'), icon: FaCogs },
                            { title: t('ios_dev_page.why_us.items.satisfaction.title'), desc: t('ios_dev_page.why_us.items.satisfaction.desc'), icon: FaCheckCircle },
                            { title: t('ios_dev_page.why_us.items.security.title'), desc: t('ios_dev_page.why_us.items.security.desc'), icon: FaShieldAlt },
                            { title: t('ios_dev_page.why_us.items.fast.title'), desc: t('ios_dev_page.why_us.items.fast.desc'), icon: FaRocket },
                            { title: t('ios_dev_page.why_us.items.premium.title'), desc: t('ios_dev_page.why_us.items.premium.desc'), icon: FaCodeBranch },
                            { title: t('ios_dev_page.why_us.items.support.title'), desc: t('ios_dev_page.why_us.items.support.desc'), icon: FaUserTie },
                        ].map((item, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-blue-500 group-hover:text-cyan-500 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IosDev;
