import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaCloud, FaServer, FaDatabase, FaShieldAlt, FaTachometerAlt, FaSyncAlt, FaNetworkWired, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CloudServices = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const cloudProviders = [
        { key: 'aws', icon: <FaCloud className="w-12 h-12 text-[#FF9900]" />, delay: 0 },
        { 
            key: 'gcp', 
            icon: (
                <>
                    <img src="/images/icons/google-cloud.svg" alt="GCP" className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all opacity-80" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                    <FaServer className="w-12 h-12 text-[#4285F4] hidden" />
                </>
            ), 
            delay: 100 
        },
        { key: 'oracle', icon: <FaDatabase className="w-12 h-12 text-[#F80000]" />, delay: 200 },
        { key: 'azure', icon: <FaCloud className="w-12 h-12 text-[#0089D6]" />, delay: 300 },
        { key: 'digital_ocean', icon: <FaServer className="w-12 h-12 text-[#0080FF]" />, delay: 400 }
    ];

    const capabilities = [
        { key: 'setup', icon: FaNetworkWired },
        { key: 'serverless', icon: FaCloud },
        { key: 'migration', icon: FaSyncAlt },
        { key: 'database', icon: FaDatabase },
        { key: 'devops', icon: FaServer },
        { key: 'monitoring', icon: FaTachometerAlt }
    ];

    const whyUsItems = [
        { key: 0, icon: FaCheckCircle },
        { key: 1, icon: FaShieldAlt },
        { key: 2, icon: FaMoneyBillWave },
        { key: 3, icon: FaServer },
        { key: 4, icon: FaNetworkWired },
        { key: 5, icon: FaCloud }
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0f172a] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[clamp(200px,45vw,500px)] h-[clamp(200px,45vw,500px)] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[clamp(250px,50vw,600px)] h-[clamp(250px,50vw,600px)] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('cloud_services_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase">
                                {t('cloud_services_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{t('cloud_services_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                                {t('cloud_services_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-center text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    {t('cloud_services_page.hero.cta_deploy')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-4 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[500px] shadow-2xl animate-float">
                                <img src="/images/cloud-connect.png" alt="Cloud Services" className="w-full h-auto rounded-[3.5rem] mix-blend-screen" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">{t('cloud_services_page.ecosystems.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('cloud_services_page.ecosystems.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('cloud_services_page.ecosystems.title_gradient')}</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-10">
                        {cloudProviders.map((provider) => (
                            <div key={provider.key} className="bg-slate-50 rounded-3xl p-10 border border-slate-100 hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-2 group" data-aos="fade-up" data-aos-delay={provider.delay}>
                                <div className="bg-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {provider.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(`cloud_services_page.ecosystems.providers.${provider.key}.title`)}</h3>
                                <p className="text-slate-600">{t(`cloud_services_page.ecosystems.providers.${provider.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h3 className="text-3xl md:text-5xl font-bold mb-6">{t('cloud_services_page.secure_scalable.title')}</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                {t('cloud_services_page.secure_scalable.desc')}
                            </p>
                            <ul className="space-y-4">
                                {t('cloud_services_page.secure_scalable.features', { returnObjects: true }).map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <FaShieldAlt className="text-cyan-500 w-5 h-5 flex-shrink-0" />
                                        <span className="text-slate-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative" data-aos="zoom-in">
                            <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
                            <img src="/images/Home Page - Integration.png" alt="Cloud Architecture" className="relative z-10 w-full rounded-2xl border border-white/10 shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">{t('cloud_services_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('cloud_services_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('cloud_services_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-cyan-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`cloud_services_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`cloud_services_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">{t('cloud_services_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('cloud_services_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 font-bold text-lg shadow-sm border border-cyan-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`cloud_services_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`cloud_services_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudServices;
