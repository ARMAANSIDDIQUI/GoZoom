import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaPython, FaServer, FaDatabase, FaShieldAlt, FaRocket, FaCode, FaCogs } from 'react-icons/fa';
import { SiRedis, SiPostgresql, SiDocker } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Django = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const features = [
        { icon: <FaServer />, key: 'enterprise' },
        { icon: <FaCode />, key: 'api' },
        { icon: <FaDatabase />, key: 'data' },
        { icon: <FaShieldAlt />, key: 'security' },
        { icon: <FaPython />, key: 'ai' },
        { icon: <FaRocket />, key: 'saas' }
    ];

    return (
        <div className="bg-[#051120]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-gradient-to-b from-[#092e20] to-[#051120] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#092e20 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center gap-16">
                        <div className="w-full max-w-4xl flex flex-col items-center" data-aos="fade-down">
                            <span className="inline-block py-2 px-4 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-bold text-sm mb-6 uppercase tracking-widest">{t('django_dev_page.hero.badge')}</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
                                {t('django_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">{t('django_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
                                {t('django_dev_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[550px] mx-auto">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-green-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('django_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('django_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full max-w-2xl relative flex flex-col items-center" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative z-10 p-8 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl animate-float">
                                <img src="/django_hero_illustration_1773661224396.png" alt="Django Development" className="w-full h-auto rounded-[2.5rem] drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Grid */}
            <section className="py-24 bg-[#051120] relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <span className="text-green-400 font-bold uppercase tracking-widest text-sm">{t('django_dev_page.expertise.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">{t('django_dev_page.expertise.title')}</h2>
                        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">{t('django_dev_page.expertise.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-3xl text-green-400 mb-6 transform group-hover:scale-110 transition-transform inline-block">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{t(`django_dev_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {t(`django_dev_page.expertise.items.${item.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why GoZoom for Django */}
            <section className="py-24 bg-[#040d18] relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <span className="text-green-400 font-bold uppercase tracking-widest text-sm">{t('django_dev_page.why_us.badge')}</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 leading-tight">
                                {t('django_dev_page.why_us.title')}
                            </h3>
                            <p className="text-slate-300 text-lg mb-10 leading-relaxed italic border-l-4 border-green-500 pl-6">
                                {t('django_dev_page.why_us.desc')}
                            </p>
                            <div className="space-y-4">
                                {t('django_dev_page.why_us.list', { returnObjects: true }).map((point, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-300">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 lg:pl-12" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center">
                                    <FaCogs className="text-5xl mb-4 text-green-500 opacity-80" />
                                    <span className="text-white font-bold">Celery</span>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center">
                                    <SiRedis className="text-5xl mb-4 text-[#FF4438] opacity-80" />
                                    <span className="text-white font-bold">Redis</span>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center">
                                    <SiPostgresql className="text-5xl mb-4 text-[#4169E1] opacity-80" />
                                    <span className="text-white font-bold">PostgreSQL</span>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center">
                                    <SiDocker className="text-5xl mb-4 text-[#2496ED] opacity-80" />
                                    <span className="text-white font-bold">Docker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Django;
