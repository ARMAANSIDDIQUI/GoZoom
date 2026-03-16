import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaCode, FaRocket, FaMobileAlt, FaSearch, FaCogs, FaShieldAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const NextJs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { icon: <FaRocket />, key: 'ssr' },
        { icon: <FaCode />, key: 'static' },
        { icon: <FaMobileAlt />, key: 'pwa' },
        { icon: <FaSearch />, key: 'seo' },
        { icon: <FaCogs />, key: 'api' },
        { icon: <FaShieldAlt />, key: 'enterprise' }
    ];

    return (
        <div className="bg-[#000000]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#111,000)]"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <span className="inline-block py-2 px-4 rounded-full bg-white/10 text-white border border-white/20 font-bold text-sm mb-6 uppercase tracking-widest">{t('nextjs_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.1] uppercase">
                                {t('nextjs_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t('nextjs_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                                {t('nextjs_dev_page.hero.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] mx-auto lg:mx-0">
                                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-white text-black font-black text-center text-lg hover:bg-gray-200 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('nextjs_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-transparent text-white font-black text-center text-lg border border-white/20 hover:bg-white/5 transition-all hover:-translate-y-1 backdrop-blur-md uppercase tracking-wider w-full">
                                    {t('nextjs_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="zoom-in">
                            <div className="relative z-10 p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] animate-float">
                                <div className="bg-black rounded-[2.9rem] p-8">
                                    <img src="/nextjs_hero_illustration_1773661241677.png" alt="Next.js Development" className="w-full h-auto rounded-[2.5rem]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 leading-tight">
                            {t('nextjs_dev_page.about.title')}
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify">
                            <p>{t('nextjs_dev_page.about.p1')}</p>
                            <p>{t('nextjs_dev_page.about.p2')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <span className="text-black font-bold uppercase tracking-widest text-sm">{t('nextjs_dev_page.services.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-black mt-4">{t('nextjs_dev_page.services.title')}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-black transition-all duration-500 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black text-3xl mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-black mb-4">{t(`nextjs_dev_page.services.items.${service.key}.title`)}</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {t(`nextjs_dev_page.services.items.${service.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-black relative overflow-hidden text-white">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                                {t('nextjs_dev_page.why_us.title')}
                            </h3>
                            <div className="space-y-8">
                                {Array.isArray(t('nextjs_dev_page.why_us.items', { returnObjects: true })) && t('nextjs_dev_page.why_us.items', { returnObjects: true }).map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-bold">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 lg:pl-12" data-aos="fade-left">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/5 rounded-[3rem] transform rotate-3"></div>
                                <div className="relative bg-white/10 backdrop-blur-xl p-12 rounded-[3rem] border border-white/20">
                                    <div className="grid grid-cols-2 gap-8 text-center">
                                        <div>
                                            <div className="text-4xl font-bold mb-2">99/100</div>
                                            <div className="text-sm text-gray-400">Lighthouse Score</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">&lt;1s</div>
                                            <div className="text-sm text-gray-400">LCP Time</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">100%</div>
                                            <div className="text-sm text-gray-400">SEO Optimized</div>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold mb-2">24/7</div>
                                            <div className="text-sm text-gray-400">Support</div>
                                        </div>
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

export default NextJs;
