import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { useTranslation } from 'react-i18next';

const Chatbot = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  const whyUsItems = t('chatbot_page.why_us.items', { returnObjects: true });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#140b25] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 -ml-40 -mt-20 w-96 h-96 rounded-full bg-[var(--color-gozoom-blue)]/30 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 -mr-40 -mb-20 w-96 h-96 rounded-full bg-[var(--color-gozoom-green)]/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <span className="inline-block py-1 px-4 rounded-full bg-[var(--color-gozoom-blue)]/20 text-[var(--color-gozoom-blue)] border border-[var(--color-gozoom-blue)]/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">{t('chatbot_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                {t('chatbot_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)]">{t('chatbot_page.hero.title_gradient')}</span>
              </h1>
              <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('chatbot_page.hero.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-[var(--color-gozoom-green)]/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                  {t('chatbot_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                  {t('chatbot_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="w-full lg:flex-1 relative flex justify-center lg:justify-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative z-10 p-4 sm:p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl flex items-center justify-center group/bot hover:scale-105 transition-all duration-500 animate-float w-full max-w-[450px]">
                <img src="/images/chatbot1.svg" alt="Chatbot Expert" className="w-full h-auto drop-shadow-[0_20px_60px_rgba(11,157,240,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gozoom-blue)]/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-gozoom-green)]/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                  {t('chatbot_page.transform.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)]">{t('chatbot_page.transform.title_gradient')}</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('chatbot_page.transform.desc_1')}
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-[var(--color-gozoom-blue)] rounded-r-2xl">
                  <p className="text-lg text-slate-700 italic font-medium">
                    {t('chatbot_page.transform.quote')}
                  </p>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('chatbot_page.transform.desc_2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-[var(--color-gozoom-blue)] to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(11,157,240,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(27,211,97,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-gozoom-blue)]/20 text-[var(--color-gozoom-blue)] border border-[var(--color-gozoom-blue)]/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('chatbot_page.specialization.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">{t('chatbot_page.specialization.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)]">{t('chatbot_page.specialization.title_gradient')}</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 mx-auto mb-6 bg-[var(--color-gozoom-blue)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpsnowflake.svg" className="w-10 h-10" alt="Conversational UX" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">{t('chatbot_page.specialization.items.ux.title')}</strong> {t('chatbot_page.specialization.items.ux.desc')}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 mx-auto mb-6 bg-[var(--color-gozoom-green)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpdiamond.svg" className="w-10 h-10" alt="Integration" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">{t('chatbot_page.specialization.items.integration.title')}</strong> {t('chatbot_page.specialization.items.integration.desc')}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 mx-auto mb-6 bg-[var(--color-gozoom-blue)]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpplane.svg" className="w-10 h-10" alt="AI Solutions" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">{t('chatbot_page.specialization.items.ai.title')}</strong> {t('chatbot_page.specialization.items.ai.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 relative" id="learnMore">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-gozoom-blue)]/20 text-[var(--color-gozoom-blue)] font-bold text-sm mb-4">{t('chatbot_page.why_us.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('chatbot_page.why_us.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)]">{t('chatbot_page.why_us.title_gradient')}</span></h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4" data-aos="fade-right">
              {Object.keys(whyUsItems).map((key, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-gozoom-blue)]/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--color-gozoom-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">{whyUsItems[key].title}</p>
                    <p className="text-slate-600 text-sm mt-1">{whyUsItems[key].desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center" data-aos="fade-left">
              <div className="glass-card bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 inline-block">
                <img src="../images/chatbot2.svg" className="w-48 mx-auto mb-6" alt="Chatbot Experts" />
                <p className="text-2xl font-bold text-slate-800 mb-6">{t('chatbot_page.cta_section.title_main')}<br /><span className="text-[var(--color-gozoom-blue)]">{t('chatbot_page.cta_section.title_sub')}</span></p>
                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-bold hover:shadow-lg hover:shadow-[var(--color-gozoom-blue)]/30 transition-all hover:-translate-y-1">{t('chatbot_page.cta_section.cta_start')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;
