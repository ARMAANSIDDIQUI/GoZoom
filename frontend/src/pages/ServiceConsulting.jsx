import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaUsers, FaChartPie, FaLightbulb, FaLaptopCode, FaProjectDiagram, FaBalanceScale, FaCheckCircle, FaClipboardCheck, FaRegHandshake } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServiceConsulting = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const offerings = [
        { key: 'transformation', icon: FaChartPie },
        { key: 'audits', icon: FaClipboardCheck },
        { key: 'strategy', icon: FaProjectDiagram },
        { key: 'vendor', icon: FaBalanceScale },
        { key: 'coaching', icon: FaUsers },
        { key: 'cto', icon: FaLaptopCode }
    ];

    const whyUsItems = [
        { key: 'experience', icon: FaChartPie },
        { key: 'unbiased', icon: FaBalanceScale },
        { key: 'roadmaps', icon: FaClipboardCheck },
        { key: 'collaborative', icon: FaRegHandshake }
    ];

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-white overflow-hidden text-slate-900">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right">
                            <span className="block w-fit mx-auto py-1 px-3 rounded-full bg-teal-50 text-teal-600 font-bold text-sm mb-6 uppercase tracking-wider">{t('service_consulting_page.hero.badge')}</span>
                            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-800">
                                {t('service_consulting_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">{t('service_consulting_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-12 max-w-2xl font-medium leading-relaxed">
                                {t('service_consulting_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full mt-2">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-slate-900 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-slate-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    {t('service_consulting_page.hero.cta_book')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/images/business-people.webp" alt={t('service_consulting_page.hero.alt_team')} className="w-full max-w-[500px] rounded-3xl shadow-2xl z-10 relative" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-3xl mix-blend-overlay z-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Services Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 font-bold text-sm mb-4">{t('service_consulting_page.offerings.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('service_consulting_page.offerings.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('service_consulting_page.offerings.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-teal-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-teal-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`service_consulting_page.offerings.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`service_consulting_page.offerings.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4">{t('service_consulting_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('service_consulting_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-lg shadow-sm border border-teal-100">
                                    <FaCheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`service_consulting_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`service_consulting_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceConsulting;
