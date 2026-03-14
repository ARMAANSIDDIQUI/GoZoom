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
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ backgroundImage: 'radial-gradient(#0073b7 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <span className="inline-block py-2 px-4 rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20 font-bold text-sm mb-6 uppercase tracking-widest">{t('java_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-slate-900 mb-8 leading-[1.1] uppercase">
                                {t('java_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-red-600">{t('java_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                                {t('java_dev_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-10 py-5 rounded-2xl bg-[#0073b7] text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-600/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    {t('java_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-10 py-5 rounded-2xl bg-white text-[#0073b7] font-black text-center text-lg border border-[#0073b7]/20 hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-xl uppercase tracking-wider">
                                    {t('java_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="zoom-in">
                            <div className="relative z-10 p-8 bg-white rounded-[3rem] shadow-2xl animate-float">
                                <img src="/images/java-hero.svg" alt="Java Development" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">{t('java_dev_page.features.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">{t('java_dev_page.features.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-600/30 transition-all duration-500 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0073b7] text-3xl mb-8 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">{t(`java_dev_page.features.items.${feature.key}.title`)}</h4>
                                <p className="text-slate-600 leading-relaxed font-medium text-sm">
                                    {t(`java_dev_page.features.items.${feature.key}.desc`)}
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
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-xl mb-2">Spring Boot Expert</h4>
                                        <p className="text-slate-400">Microservices architecture with Spring Cloud and Netflix OSS.</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-xl mb-2">Hibernate & JPA</h4>
                                        <p className="text-slate-400">Efficient data persistence and complex query optimization.</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h4 className="font-bold text-xl mb-2">Kubernetes & Docker</h4>
                                        <p className="text-slate-400">Modern containerized deployment and orchestration.</p>
                                    </div>
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
