import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaApple, FaMobileAlt, FaLayerGroup, FaDesktop, FaGamepad, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Swift = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div className="font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#1e293b] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[clamp(150px,40vw,500px)] h-[clamp(150px,40vw,500px)] bg-orange-500/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[clamp(200px,50vw,600px)] h-[clamp(200px,50vw,600px)] bg-amber-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col items-center text-center gap-12">
                        <div className="w-full max-w-4xl flex flex-col items-center" data-aos="fade-down">
                            <span className="inline-block py-1 px-4 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('swift_dev_page.hero.badge')}</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
                                {t('swift_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{t('swift_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                                {t('swift_dev_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[550px] mx-auto">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('swift_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('swift_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl relative flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
                            {/* Swift Stylized Placeholder / Graphic because of missing image */}
                            <div className="relative z-10 p-10 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl flex items-center justify-center group hover:scale-105 transition-all duration-500 animate-float">
                                <FaApple className="text-[12rem] text-white/20 filter blur-[2px]" />
                                <FaMobileAlt className="absolute text-[8rem] text-orange-400/80 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4">{t('swift_dev_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('swift_dev_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('swift_dev_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <FaMobileAlt />, title: t('swift_dev_page.expertise.items.custom_ios.title'), desc: t('swift_dev_page.expertise.items.custom_ios.desc') },
                            { icon: <FaLayerGroup />, title: t('swift_dev_page.expertise.items.uiux.title'), desc: t('swift_dev_page.expertise.items.uiux.desc') },
                            { icon: <FaDesktop />, title: t('swift_dev_page.expertise.items.wearables.title'), desc: t('swift_dev_page.expertise.items.wearables.desc') },
                            { icon: <FaApple />, title: t('swift_dev_page.expertise.items.migration.title'), desc: t('swift_dev_page.expertise.items.migration.desc') },
                            { icon: <FaGamepad />, title: t('swift_dev_page.expertise.items.next_gen.title'), desc: t('swift_dev_page.expertise.items.next_gen.desc') },
                            { icon: <FaRocket />, title: t('swift_dev_page.expertise.items.deployment.title'), desc: t('swift_dev_page.expertise.items.deployment.desc') }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 text-3xl mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
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
                                <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 font-bold text-sm">{t('swift_dev_page.why_us.badge')}</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('swift_dev_page.why_us.title')}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('swift_dev_page.why_us.desc')}
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {t('swift_dev_page.why_us.list', { returnObjects: true }).map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                                                <FaCheckCircle className="text-sm" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-amber-50 rounded-[3rem] transform rotate-[4deg] scale-105 opacity-50"></div>
                            <img src="/images/mobile_app_mockup_realistic_premium.png" alt={t('swift_dev_page.why_us.img_alt')} className="relative z-10 w-full h-auto rounded-[3rem] shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Swift;
