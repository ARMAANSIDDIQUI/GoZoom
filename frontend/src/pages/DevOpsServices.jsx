import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaDocker, FaLayerGroup, FaSyncAlt, FaServer, FaShieldAlt, FaCodeBranch, FaCheckCircle, FaCloudsmith } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const DevOpsServices = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const serviceHighlights = [
        { key: 'containerization', icon: FaDocker, color: '#2496ED', delay: 0 },
        { key: 'orchestration', icon: FaLayerGroup, color: '#326CE5', delay: 100 },
        { key: 'cicd', icon: FaSyncAlt, color: 'cyan-500', delay: 200 }
    ];

    const expertiseItems = [
        { key: 'microservices', icon: FaDocker },
        { key: 'iac', icon: FaCodeBranch },
        { key: 'ci', icon: FaSyncAlt },
        { key: 'cd', icon: FaCloudsmith },
        { key: 'monitoring', icon: FaLayerGroup },
        { key: 'devsecops', icon: FaShieldAlt }
    ];

    const whyUsItems = [
        { key: 'k8s_certified', icon: FaCheckCircle },
        { key: 'market_speed', icon: FaLayerGroup },
        { key: 'high_availability', icon: FaServer },
        { key: 'cloud_agnostic', icon: FaDocker }
    ];

    return (
        <div>
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">
            <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">{t('devops_services_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                {t('devops_services_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('devops_services_page.hero.title_gradient')}</span>
              </h1>
              <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('devops_services_page.hero.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                  {t('devops_services_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                  {t('devops_services_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative w-full max-w-[450px] aspect-square animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-[3rem] blur-3xl"></div>
                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-4 sm:p-8 flex flex-col items-center justify-center gap-6 sm:gap-8">
                  <div className="grid grid-cols-2 gap-6 sm:gap-8 w-full place-items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#2496ED]/10 flex items-center justify-center shadow-lg border border-[#2496ED]/20"><FaDocker className="w-10 h-10 sm:w-12 sm:h-12 text-[#2496ED]" /></div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#326CE5]/10 flex items-center justify-center shadow-lg border border-[#326CE5]/20"><FaLayerGroup className="w-10 h-10 sm:w-12 sm:h-12 text-[#326CE5]" /></div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><FaSyncAlt className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400" /></div>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-blue-500/10 flex items-center justify-center shadow-lg border border-blue-500/20"><FaServer className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" /></div>
                  </div>
                  <div className="w-2/3 h-1.5 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-full mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="grid md:grid-cols-3 gap-10">
                        {serviceHighlights.map((service) => (
                            <div key={service.key} className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={service.delay}>
                                <service.icon className={`w-14 h-14 mb-6 group-hover:scale-110 transition-transform ${service.color.startsWith('#') ? '' : `text-${service.color}`}`} style={service.color.startsWith('#') ? { color: service.color } : {}} />
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t(`devops_services_page.services.${service.key}.title`)}</h3>
                                <p className="text-slate-600">{t(`devops_services_page.services.${service.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">{t('devops_services_page.expertise.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('devops_services_page.expertise.title')}</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">{t('devops_services_page.expertise.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {expertiseItems.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-blue-500 mb-4" />
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`devops_services_page.expertise.items.${item.key}.title`)}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{t(`devops_services_page.expertise.items.${item.key}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">{t('devops_services_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('devops_services_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {whyUsItems.map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-lg shadow-sm border border-blue-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{t(`devops_services_page.why_us.items.${item.key}.title`)}</h4>
                                    <p className="text-slate-600 leading-relaxed">{t(`devops_services_page.why_us.items.${item.key}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DevOpsServices;
