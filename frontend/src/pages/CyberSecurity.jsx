import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaShieldAlt, FaLock, FaUserSecret, FaSearch, FaServer, FaEye } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CyberSecurity = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const securityItems = [
        { key: 'pen_testing', icon: FaUserSecret },
        { key: 'vulnerability', icon: FaSearch },
        { key: 'cloud', icon: FaServer },
        { key: 'compliance', icon: FaLock },
        { key: 'threat', icon: FaEye },
        { key: 'zero_trust', icon: FaShieldAlt }
    ];

    const whyUsItems = [
        { key: 'hackers', icon: FaUserSecret },
        { key: 'intelligence', icon: FaSearch },
        { key: 'devsecops', icon: FaServer },
        { key: 'response', icon: FaShieldAlt }
    ];

    return (
        <div>
            {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a0f18] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 w-full">
            <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-4 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">{t('cyber_security_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight uppercase">
                {t('cyber_security_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">{t('cyber_security_page.hero.title_gradient')}</span>
              </h1>
              <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('cyber_security_page.hero.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                  {t('cyber_security_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                  {t('cyber_security_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="w-full lg:flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative z-10 p-4 sm:p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl flex items-center justify-center group/security hover:scale-105 transition-transform duration-500 animate-float w-full max-w-[450px]">
                <FaShieldAlt className="text-red-500 w-full h-auto drop-shadow-[0_20px_60px_rgba(239,68,68,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* What We Offer / Capabilities */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 font-bold text-sm mb-4">{t('cyber_security_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('cyber_security_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('cyber_security_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {securityItems.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-red-500/10 transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-red-600" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`cyber_security_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`cyber_security_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4">{t('cyber_security_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('cyber_security_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 font-bold text-lg shadow-sm border border-red-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`cyber_security_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`cyber_security_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CyberSecurity;
