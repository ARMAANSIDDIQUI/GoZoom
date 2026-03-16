import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Angular = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#1a0b0b] overflow-hidden">
        {/* Geometric Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] right-[5%] w-[clamp(250px,50vw,600px)] h-[clamp(250px,50vw,600px)] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[clamp(200px,45vw,500px)] h-[clamp(200px,45vw,500px)] bg-rose-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          {/* SVG Hexagon Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M25 0 L50 14.4 L50 28.9 L25 43.3 L0 28.9 L0 14.4 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('angular_dev_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase">
                {t('angular_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t('angular_dev_page.hero.title_gradient')}</span>
              </h1>
              <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl mx-auto font-medium">
                {t('angular_dev_page.hero.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] mx-auto">
                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                  {t('angular_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                  {t('angular_dev_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-8 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] shadow-2xl animate-float">
                <img src="/images/angularboy.svg" alt={t('angular_dev_page.hero.badge')} className="w-full h-auto rounded-[2.5rem] drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-4">{t('angular_dev_page.about.badge')}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {t('angular_dev_page.about.title')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t('angular_dev_page.about.title_gradient')}</span>
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-red-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  {t('angular_dev_page.about.desc_highlight')}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('angular_dev_page.about.desc_main')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4">{t('angular_dev_page.strengths.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('angular_dev_page.strengths.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t('angular_dev_page.strengths.title_gradient')}</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t('angular_dev_page.strengths.items', { returnObjects: true }).map((desc, i) => {
              const icons = ['../images/thought.png', '../images/expertise.png', '../images/performance.png'];
              const bgs = ['bg-red-50', 'bg-orange-50', 'bg-amber-50'];
              return (
                <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center group" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                  <div className={`w-24 h-24 mx-auto mb-6 ${bgs[i]} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <img src={icons[i]} className="w-14 h-14 object-contain" alt="Strength Icon" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent"></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-last lg:order-first" data-aos="fade-right">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-[80px] opacity-50"></div>
              <img className="w-full max-w-xs mx-auto relative z-10 drop-shadow-2xl animate-float" src="../images/angular-icon.svg" alt="Angular Services" />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-4">{t('angular_dev_page.expertise.badge')}</span>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">{t('angular_dev_page.expertise.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t('angular_dev_page.expertise.title_gradient')}</span></h3>
              <div className="grid grid-cols-2 gap-4">
                {t('angular_dev_page.expertise.list', { returnObjects: true }).map((service, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-red-950/50 to-slate-900 relative overflow-hidden">
        <div className="container relative z-10 block">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-4">{t('angular_dev_page.cta_section.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">{t('angular_dev_page.cta_section.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">{t('angular_dev_page.cta_section.title_gradient')}</span>{t('angular_dev_page.cta_section.title_end')}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {t('angular_dev_page.cta_section.steps', { returnObjects: true }).map((step, i) => (
              <div key={i} className={`relative px-8 py-4 rounded-full font-bold text-white ${i === 0 ? 'bg-red-600' : i === 3 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white/10'} border border-white/20`}>
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-white text-slate-800 rounded-full text-xs font-extrabold flex items-center justify-center">{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-slate-900 border border-white/10 rounded-3xl p-10 shadow-2xl">
            <form className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder={t('angular_dev_page.cta_section.form.name')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="text" placeholder={t('angular_dev_page.cta_section.form.business')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="email" placeholder={t('angular_dev_page.cta_section.form.email')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="tel" placeholder={t('angular_dev_page.cta_section.form.phone')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="text" placeholder={t('angular_dev_page.cta_section.form.subject')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors md:col-span-2" />
              <textarea rows="5" placeholder={t('angular_dev_page.cta_section.form.message')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors mb-6 md:col-span-2"></textarea>
              <div className="md:col-span-2 flex flex-col sm:flex-row justify-between items-start gap-4">
                <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded" />
                  {t('angular_dev_page.cta_section.form.privacy')}
                </label>
                <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1">{t('angular_dev_page.cta_section.form.submit')}</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4">{t('angular_dev_page.why_us.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('angular_dev_page.why_us.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{t('angular_dev_page.why_us.title_gradient')}</span></h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { key: 'satisfaction', icon: '../images/expertises.png', bg: 'bg-red-50' },
              { key: 'experience', icon: '../images/guarantees.png', bg: 'bg-orange-50' },
              { key: 'collaboration', icon: '../images/collectives.png', bg: 'bg-amber-50' },
              { key: 'fast', icon: '../images/rockets.png', bg: 'bg-green-50' },
              { key: 'pricing', icon: '../images/discounts.png', bg: 'bg-yellow-50' },
              { key: 'support', icon: '../images/telephones.png', bg: 'bg-cyan-50' }
            ].map((item, i) => (
              <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={(i + 1) * 100}>
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <img src={item.icon} className="w-8 h-8" alt="Feature Icon" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{t(`angular_dev_page.why_us.items.${item.key}.title`)}</h4>
                <p className="text-slate-600 leading-relaxed">{t(`angular_dev_page.why_us.items.${item.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Angular;
