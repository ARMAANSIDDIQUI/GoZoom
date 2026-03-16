import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ReactJs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { img: '../images/reactmy1.svg', title: t('react_js_dev_page.expertise.items.web_app.title'), desc: t('react_js_dev_page.expertise.items.web_app.desc') },
        { img: '../images/react2.png', title: t('react_js_dev_page.expertise.items.mobile.title'), desc: t('react_js_dev_page.expertise.items.mobile.desc') },
        { img: '../images/react3.png', title: t('react_js_dev_page.expertise.items.websites.title'), desc: t('react_js_dev_page.expertise.items.websites.desc') },
        { img: '../images/react4.png', title: t('react_js_dev_page.expertise.items.ui.title'), desc: t('react_js_dev_page.expertise.items.ui.desc') },
        { img: '../images/react5.jpg', title: t('react_js_dev_page.expertise.items.server.title'), desc: t('react_js_dev_page.expertise.items.server.desc') },
        { img: '../images/react6.svg', title: t('react_js_dev_page.expertise.items.migration.title'), desc: t('react_js_dev_page.expertise.items.migration.desc') },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a192f] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[clamp(200px,45vw,500px)] h-[clamp(200px,45vw,500px)] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-[clamp(150px,40vw,400px)] h-[clamp(150px,40vw,400px)] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                        <div className="w-full lg:flex-1 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-6 uppercase tracking-wider">{t('react_js_dev_page.hero.badge')}</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight tracking-tight uppercase">
                                {t('react_js_dev_page.hero.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{t('react_js_dev_page.hero.title_gradient')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                {t('react_js_dev_page.hero.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-[550px]">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 h-16 px-10 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('react_js_dev_page.hero.cta_start')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 h-16 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('react_js_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 bg-white/5 p-4 sm:p-10 rounded-[40px] border border-white/10 backdrop-blur-md shadow-2xl w-full max-w-[450px] animate-zoom-in-out">
                                <img src="/images/react2.png" alt={t('react_js_dev_page.expertise.items.web_app.title')} className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
                <div className="container relative z-10 block">
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6 mt-12 lg:mt-0">
                            {t('react_js_dev_page.about.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('react_js_dev_page.about.title_gradient')}</span>
                        </h2>
                        <div className="space-y-5">
                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-cyan-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                {t('react_js_dev_page.about.desc_highlight')}
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('react_js_dev_page.about.desc_main')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-cyan-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(6,182,212,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-4 uppercase tracking-wider" data-aos="fade-down">{t('react_js_dev_page.expertise.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white" data-aos="fade-up">{t('react_js_dev_page.expertise.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{t('react_js_dev_page.expertise.title_gradient')}</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-20 h-20 mx-auto mb-6 bg-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src={svc.img} className="w-12 h-12 object-contain" alt={svc.title} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{svc.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1">{t('react_js_dev_page.expertise.cta')}</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">{t('react_js_dev_page.why_us.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('react_js_dev_page.why_us.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('react_js_dev_page.why_us.title_gradient')}</span></h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            { img: '../images/react11.png', title: t('react_js_dev_page.why_us.items.flexible.title'), desc: t('react_js_dev_page.why_us.items.flexible.desc') },
                            { img: '../images/react11.png', title: t('react_js_dev_page.why_us.items.expertise.title'), desc: t('react_js_dev_page.why_us.items.expertise.desc') },
                            { img: '../images/react12.png', title: t('react_js_dev_page.why_us.items.satisfaction.title'), desc: t('react_js_dev_page.why_us.items.satisfaction.desc') },
                            { img: '../images/react13.png', title: t('react_js_dev_page.why_us.items.affordability.title'), desc: t('react_js_dev_page.why_us.items.affordability.desc') },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center">
                                    <img src={item.img} alt={item.title} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-900 to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="container relative z-10 block">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-4">{t('react_js_dev_page.cta_section.badge')}</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">{t('react_js_dev_page.cta_section.title_main')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{t('react_js_dev_page.cta_section.title_gradient')}</span>{t('react_js_dev_page.cta_section.title_end')}</h3>
                            <p className="text-slate-300 mt-4">{t('react_js_dev_page.cta_section.desc')}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <input type="text" placeholder={t('react_js_dev_page.cta_section.form.name')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                    <input type="email" placeholder={t('react_js_dev_page.cta_section.form.email')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                    <input type="tel" placeholder={t('react_js_dev_page.cta_section.form.phone')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                    <input type="text" placeholder={t('react_js_dev_page.cta_section.form.subject')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                </div>
                                <textarea rows="4" placeholder={t('react_js_dev_page.cta_section.form.message')} className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors mb-6"></textarea>
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                    <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
                                        <input type="checkbox" defaultChecked className="rounded" />
                                        {t('react_js_dev_page.cta_section.form.privacy')}
                                    </label>
                                    <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1">{t('react_js_dev_page.cta_section.form.submit')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReactJs;
