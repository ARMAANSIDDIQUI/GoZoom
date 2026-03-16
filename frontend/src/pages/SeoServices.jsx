import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaSearch, FaCode, FaPenNib, FaTasks, FaMapMarkerAlt, FaLink, FaChartLine, FaTrophy, FaCogs, FaRocket, FaChartPie, FaHeadset } from 'react-icons/fa';

const SeoServices = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  const featuresItems = [
    { key: 'keyword', icon: FaSearch },
    { key: 'on_page', icon: FaCode },
    { key: 'content', icon: FaPenNib },
    { key: 'technical', icon: FaTasks },
    { key: 'local', icon: FaMapMarkerAlt },
    { key: 'links', icon: FaLink },
  ];

  const whyUsItems = [
    { key: 'track_record', icon: FaTrophy },
    { key: 'tailored', icon: FaCogs },
    { key: 'expertise', icon: FaRocket },
    { key: 'reporting', icon: FaChartPie },
    { key: 'growth', icon: FaChartLine },
    { key: 'support', icon: FaHeadset },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#160d01] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container relative z-10 w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 w-full">
            <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('seo_services_page.hero.badge')}</span>
              <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                {t('seo_services_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{t('seo_services_page.hero.title_gradient')}</span>
              </h1>
              <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                {t('seo_services_page.hero.desc')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px]">
                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                  {t('seo_services_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                  {t('seo_services_page.hero.cta_about')}
                </Link>
              </div>
            </div>
            <div className="w-full lg:flex-1 relative flex justify-center lg:justify-center" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative z-10 p-4 sm:p-10 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-md animate-float w-full max-w-[450px]">
                <img src="/images/seo1.png" alt="SEO Specialist" className="w-full h-auto rounded-[3.5rem] shadow-4xl filter saturate-[1.2]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 font-bold text-sm mb-4">{t('seo_services_page.about.badge')}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                {t('seo_services_page.about.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t('seo_services_page.about.title_gradient')}</span>
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  {t('seo_services_page.about.p1')}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('seo_services_page.about.p2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(249,115,22,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245,158,11,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('seo_services_page.features.badge')}</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('seo_services_page.features.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">{t('seo_services_page.features.title_gradient')}</span></h3>
              <div className="grid md:grid-cols-2 gap-6">
                {featuresItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/10 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mt-1">
                      <item.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <span className="text-white text-base font-bold block mb-1">{t(`seo_services_page.features.items.${item.key}.title`)}</span>
                      <span className="text-slate-400 text-sm leading-relaxed">{t(`seo_services_page.features.items.${item.key}.desc`)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block" data-aos="fade-left">
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[80px]"></div>
              <img src="../images/seo2.png" alt="SEO Features" className="w-full max-w-md mx-auto relative z-10 drop-shadow-xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-4">{t('seo_services_page.why_us.badge')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('seo_services_page.why_us.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t('seo_services_page.why_us.title_gradient')}</span></h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4" data-aos="fade-right">
              {whyUsItems.map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl flex items-center justify-center border border-orange-200">
                    <item.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{t(`seo_services_page.why_us.items.${item.key}.title`)}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{t(`seo_services_page.why_us.items.${item.key}.desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center" data-aos="fade-left">
              <div className="glass-card bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 inline-block overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 blur-xl"></div>
                <img src="../images/seo1.png" className="w-40 mx-auto mb-6 animate-float drop-shadow-xl filter saturate-150" alt="SEO Experts" />
                <p className="text-2xl font-bold text-slate-800 mb-6 relative z-10">{t('seo_services_page.why_us.cta.text')}<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t('seo_services_page.why_us.cta.gradient')}</span></p>
                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 relative z-10">{t('seo_services_page.why_us.cta.button')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
