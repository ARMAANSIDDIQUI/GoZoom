import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaMobileAlt, FaLayerGroup, FaShieldAlt, FaRocket, FaTabletAlt, FaCodeBranch, FaClock, FaCheckCircle, FaLaptopCode, FaWrench } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { useTranslation } from 'react-i18next';

const MobileAppDev = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Banner — Purple Mobile colors */}
            <section className="hero-premium">
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-pink-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>
                <div className="container relative z-10 block py-16 lg:py-24">
                    <div className="flex flex-col items-center gap-12 text-center">
                        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-6 lg:mb-8" data-aos="fade-down">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                                {t('mobile_app_dev_page.hero.badge')}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase" data-aos="fade-down" data-aos-delay="100">
                                {t('mobile_app_dev_page.hero.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('mobile_app_dev_page.hero.title2')}</span>
                            </h1>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="200">
                                {t('mobile_app_dev_page.hero.desc')}
                            </p>

                            {/* Stats Grid - Glassmorphism - Centered */}
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-10 w-full max-w-md mx-auto" data-aos="fade-up" data-aos-delay="300">
                                {[
                                    { label: t('mobile_app_dev_page.hero.stats.users'), value: '100k' },
                                    { label: t('mobile_app_dev_page.hero.stats.featured'), value: '100+' },
                                    { label: t('mobile_app_dev_page.hero.stats.published'), value: '600+' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-2xl text-center">
                                        <p className="text-lg lg:text-2xl font-black text-white">{stat.value}</p>
                                        <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[550px] mx-auto" data-aos="fade-up" data-aos-delay="600">
                                <Link to="/contact" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group w-full">
                                    {t('mobile_app_dev_page.hero.cta_enquire')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center flex-1 min-h-[4rem] py-4 px-10 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">
                                    {t('mobile_app_dev_page.hero.cta_about')}
                                </Link>
                            </div>
                        </div>
                        
                        <div className="w-full max-w-2xl relative flex justify-center items-center" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative group w-full">
                                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[60px] lg:blur-[80px] group-hover:bg-purple-500/30 transition-all duration-700"></div>
                                <img src="/images/mobile_app_mockup_realistic_premium.png" alt={t('mobile_app_dev_page.hero.img_alt')} className="w-full h-auto relative z-10 rounded-[2.5rem] animate-float drop-shadow-2xl mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
                <div className="container relative z-10 block">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 font-bold text-sm mb-4">{t('mobile_app_dev_page.about.badge')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t('mobile_app_dev_page.about.title1')}</span>{t('mobile_app_dev_page.about.title2')}</h2>
                        <p className="text-xl text-slate-600 font-semibold mb-4">{t('mobile_app_dev_page.about.p1')}</p>
                        <p className="text-lg text-slate-600 leading-relaxed">{t('mobile_app_dev_page.about.p2')}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { num: '3000+', label: t('mobile_app_dev_page.about.stats.projects'), color: 'purple' },
                            { num: '100+', label: t('mobile_app_dev_page.about.stats.clients'), color: 'violet' },
                            { num: '30+', label: t('mobile_app_dev_page.about.stats.team'), color: 'pink' },
                            { num: '7+', label: t('mobile_app_dev_page.about.stats.years'), color: 'fuchsia' },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card bg-white p-6 rounded-2xl text-center shadow-xl border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <h3 className="text-3xl font-extrabold text-slate-800 mb-2">{stat.num}</h3>
                                <p className="text-slate-600 font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Types Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(147,51,234,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236,72,153,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('mobile_app_dev_page.services.badge')}</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: t('mobile_app_dev_page.services.ios.title'), desc: t('mobile_app_dev_page.services.ios.desc'), icon: FaMobileAlt },
                            { title: t('mobile_app_dev_page.services.android.title'), desc: t('mobile_app_dev_page.services.android.desc'), icon: FaLayerGroup },
                            { title: t('mobile_app_dev_page.services.cross_platform.title'), desc: t('mobile_app_dev_page.services.cross_platform.desc'), icon: FaCodeBranch },
                            { title: t('mobile_app_dev_page.services.iot.title'), desc: t('mobile_app_dev_page.services.iot.desc'), icon: FaLaptopCode },
                            { title: t('mobile_app_dev_page.services.enterprise.title'), desc: t('mobile_app_dev_page.services.enterprise.desc'), icon: FaTabletAlt },
                            { title: t('mobile_app_dev_page.services.maintenance.title'), desc: t('mobile_app_dev_page.services.maintenance.desc'), icon: FaWrench },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-10 h-10 text-purple-400 group-hover:text-pink-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">{t('mobile_app_dev_page.services.cta.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('mobile_app_dev_page.services.cta.title2')}</span></h3>
                        <Link to="/contact" className="flex-shrink-0 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1 flex items-center gap-2">
                            {t('mobile_app_dev_page.services.cta.button')} <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 font-bold text-sm mb-4">{t('mobile_app_dev_page.why_us.badge')}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{t('mobile_app_dev_page.why_us.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: t('mobile_app_dev_page.why_us.items.security.title'), desc: t('mobile_app_dev_page.why_us.items.security.desc'), icon: FaShieldAlt },
                            { title: t('mobile_app_dev_page.why_us.items.speed.title'), desc: t('mobile_app_dev_page.why_us.items.speed.desc'), icon: FaRocket },
                            { title: t('mobile_app_dev_page.why_us.items.aso.title'), desc: t('mobile_app_dev_page.why_us.items.aso.desc'), icon: FaCheckCircle },
                            { title: t('mobile_app_dev_page.why_us.items.reliability.title'), desc: t('mobile_app_dev_page.why_us.items.reliability.desc'), icon: FaClock }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 font-bold text-lg shadow-sm border border-purple-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-4">{t('mobile_app_dev_page.tech.badge')}</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('mobile_app_dev_page.tech.title1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t('mobile_app_dev_page.tech.title2')}</span></h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
                        {[
                            { name: 'iOS', img: 'apple.svg' }, { name: 'Android', img: 'android.svg' }, { name: 'Flutter', img: 'flutterio-icon.svg' },
                            { name: 'Java', img: 'java.svg' }, { name: 'React Native', img: 'physics.svg' }, { name: 'Kotlin', img: '../kotlin.png', rel: true },
                            { name: 'Swift', img: 'swift.svg' }, { name: 'Dart', img: '../dart.png', rel: true }, { name: 'Java', img: 'java.svg' }
                        ].map((tech, i) => (
                            <div key={i} className="glass-card bg-white border border-slate-100 p-4 rounded-2xl text-center hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-2 transition-all duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 50}>
                                <div className="h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <img src={tech.rel ? tech.img : `../images/icons/${tech.img}`} alt={tech.name} className="max-h-10 w-auto" />
                                </div>
                                <p className="font-semibold text-slate-700 group-hover:text-purple-600 text-xs">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileAppDev;
