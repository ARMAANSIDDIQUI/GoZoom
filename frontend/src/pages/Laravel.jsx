import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaCheckCircle, FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { useTranslation, Trans } from 'react-i18next';

const Laravel = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#2d0b0b] overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[clamp(300px,60vw,800px)] h-[clamp(300px,60vw,800px)] bg-red-600/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[clamp(250px,50vw,600px)] h-[clamp(250px,50vw,600px)] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(#ff2d20 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
              <span className="inline-block py-2 px-4 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 font-bold text-sm mb-6 uppercase tracking-widest">{t('laravel_dev_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-8 leading-[1.1] tracking-tight uppercase">
                {t('laravel_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d20] to-[#ff7d75]">{t('laravel_dev_page.hero.title_gradient')}</span>{t('laravel_dev_page.hero.title_end')}
              </h1>
              <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                {t('laravel_dev_page.hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-10 py-5 rounded-2xl bg-[#ff2d20] text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-600/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                  {t('laravel_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-10 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                  {t('laravel_dev_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="flex-1 relative" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-4 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl animate-float">
                <img src="/images/laravelboy1.svg" alt={t('laravel_dev_page.hero.badge')} className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff2d20]/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10 block">
          <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              {t('laravel_dev_page.about.title')}
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
              <p>{t('laravel_dev_page.about.p1')}</p>
              <p>{t('laravel_dev_page.about.p2')}</p>
              <p>
                <Trans
                  i18nKey="laravel_dev_page.about.p3_start"
                  components={{
                    link: <Link to="/blog/laravel-migration" className="text-[#ff2d20] font-bold hover:underline" />
                  }}
                >
                  {t('laravel_dev_page.about.p3_start')}
                </Trans>
                {t('laravel_dev_page.about.p3_link')}
              </p>
              <p>{t('laravel_dev_page.about.p4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-slate-50">
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h3 className="text-3xl md:text-5xl font-bold text-slate-800 mb-10 leading-tight">
                {t('laravel_dev_page.offerings.title')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {t('laravel_dev_page.offerings.list', { returnObjects: true }).map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <FaCheckCircle className="text-[#ff2d20] mt-1 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/images/laravelboy2.svg" alt="Laravel Features" className="w-full h-auto drop-shadow-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">
              {t('laravel_dev_page.why_us.title_main')}<span className="text-[#ff2d20]">{t('laravel_dev_page.why_us.title_gradient')}</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t('laravel_dev_page.why_us.items', { returnObjects: true }).map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {i === 0 ? <FaShieldAlt className="text-3xl text-[#ff2d20]" /> : i === 1 ? <FaRocket className="text-3xl text-[#ff2d20]" /> : <FaCogs className="text-3xl text-[#ff2d20]" />}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 bg-[#1a0b0b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff2d20]/5 rounded-full blur-[120px]"></div>
        <div className="container relative z-10 block">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase leading-tight">
                  {t('laravel_dev_page.cta_section.title')}
                </h3>
                <p className="text-slate-400 text-lg mb-8">{t('laravel_dev_page.cta_section.send_message')}</p>
                <img src="/images/laravel-hero.svg" alt="Laravel White" className="w-32 opacity-20" />
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder={t('laravel_dev_page.cta_section.form.name')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors" />
                  <input type="text" placeholder={t('laravel_dev_page.cta_section.form.business')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors" />
                  <input type="email" placeholder={t('laravel_dev_page.cta_section.form.email')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors" />
                  <input type="tel" placeholder={t('laravel_dev_page.cta_section.form.phone')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors" />
                </div>
                <input type="text" placeholder={t('laravel_dev_page.cta_section.form.subject')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors" />
                <textarea rows="4" placeholder={t('laravel_dev_page.cta_section.form.message')} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-[#ff2d20] transition-colors"></textarea>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 text-slate-400 text-sm cursor-pointer">
                    <input type="checkbox" className="mt-1" defaultChecked />
                    <span>{t('laravel_dev_page.cta_section.form.privacy')}</span>
                  </label>
                  <label className="flex items-start gap-3 text-slate-400 text-sm cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span>{t('laravel_dev_page.cta_section.form.subscribe')}</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h5 className="text-white font-bold mb-2 text-sm">{t('laravel_dev_page.cta_section.form.why_collect_title')}</h5>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {t('laravel_dev_page.cta_section.form.why_collect_desc')}
                  </p>
                  <button type="submit" className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-[#ff2d20] text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-600/40 transition-all hover:-translate-y-1 uppercase tracking-wider">
                    {t('laravel_dev_page.cta_section.form.submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laravel;
