import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaCode, FaMobileAlt, FaApple, FaAndroid, FaRobot, FaSearch, FaDesktop, FaCheckCircle, FaRocket, FaShieldAlt, FaComments } from 'react-icons/fa';
import { SiPhp, SiLaravel, SiAngular, SiReact, SiHtml5, SiJquery, SiCodeigniter } from 'react-icons/si';

const WebDevelopment = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { icon: SiPhp, color: 'text-indigo-400', title: t('web_dev_page.services.php.title'), desc: t('web_dev_page.services.php.desc'), link: '/hire-php-developer', linkText: t('web_dev_page.services.php.link_text') },
        { icon: SiLaravel, color: 'text-red-500', title: t('web_dev_page.services.laravel.title'), desc: t('web_dev_page.services.laravel.desc'), link: '/laravel-development-company', linkText: t('web_dev_page.services.laravel.link_text') },
        { icon: SiAngular, color: 'text-red-600', title: t('web_dev_page.services.angular.title'), desc: t('web_dev_page.services.angular.desc'), link: '/hire-angular-developer', linkText: t('web_dev_page.services.angular.link_text') },
        { icon: SiReact, color: 'text-cyan-400', title: t('web_dev_page.services.react.title'), desc: t('web_dev_page.services.react.desc'), link: '/hire-react-developer', linkText: t('web_dev_page.services.react.link_text') },
        { icon: SiHtml5, color: 'text-orange-500', title: t('web_dev_page.services.html.title'), desc: t('web_dev_page.services.html.desc'), link: '/hire-html-developer', linkText: t('web_dev_page.services.html.link_text') },
        { icon: SiJquery, color: 'text-blue-500', title: t('web_dev_page.services.jquery.title'), desc: t('web_dev_page.services.jquery.desc'), link: '/hire-jquery-developers', linkText: t('web_dev_page.services.jquery.link_text') },
        { icon: FaMobileAlt, color: 'text-slate-600', title: t('web_dev_page.services.mobile.title'), desc: t('web_dev_page.services.mobile.desc'), link: '/mobile-application-development', linkText: t('web_dev_page.services.mobile.link_text') },
        { icon: FaAndroid, color: 'text-green-500', title: t('web_dev_page.services.android.title'), desc: t('web_dev_page.services.android.desc'), link: '/android-development', linkText: t('web_dev_page.services.android.link_text') },
        { icon: FaApple, color: 'text-slate-800', title: t('web_dev_page.services.ios.title'), desc: t('web_dev_page.services.ios.desc'), link: '/ios-development', linkText: t('web_dev_page.services.ios.link_text') },
        { icon: FaComments, color: 'text-purple-500', title: t('web_dev_page.services.chatbot.title'), desc: t('web_dev_page.services.chatbot.desc'), link: '/chatbot', linkText: t('web_dev_page.services.chatbot.link_text') },
        { icon: FaSearch, color: 'text-yellow-500', title: t('web_dev_page.services.seo.title'), desc: t('web_dev_page.services.seo.desc'), link: '/expert-seo-services', linkText: t('web_dev_page.services.seo.link_text') },
        { icon: FaDesktop, color: 'text-blue-400', title: t('web_dev_page.services.kiosk.title'), desc: t('web_dev_page.services.kiosk.desc'), link: '/kiosks', linkText: t('web_dev_page.services.kiosk.link_text') },
        { icon: SiCodeigniter, color: 'text-orange-600', title: t('web_dev_page.services.codeigniter.title'), desc: t('web_dev_page.services.codeigniter.desc'), link: '/hire-codeIgniter-developers', linkText: t('web_dev_page.services.codeigniter.link_text') },
    ];

    const testimonials = [
        { name: t('web_dev_page.testimonials_static.t1.name'), company: t('web_dev_page.testimonials_static.t1.company'), text: t('web_dev_page.testimonials_static.t1.text') },
        { name: t('web_dev_page.testimonials_static.t2.name'), company: t('web_dev_page.testimonials_static.t2.company'), text: t('web_dev_page.testimonials_static.t2.text') },
        { name: t('web_dev_page.testimonials_static.t3.name'), company: t('web_dev_page.testimonials_static.t3.company'), text: t('web_dev_page.testimonials_static.t3.text') },
        { name: t('web_dev_page.testimonials_static.t4.name'), company: t('web_dev_page.testimonials_static.t4.company'), text: t('web_dev_page.testimonials_static.t4.text') },
    ];

    return (
        <div>
            {/* Hero Banner — Blue Web colors */}
            <section className="hero-premium">
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 min-h-[85vh] lg:min-h-screen py-16 lg:py-24 flex items-center">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                {t('web_dev_page.hero.subtitle')}
                            </div>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
                                {t('web_dev_page.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('web_dev_page.hero.title2')}</span>
                            </h1>
                            <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                                {t('web_dev_page.hero.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] mx-auto" data-aos="fade-up" data-aos-delay="600">
                                <a href="#explore" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-black hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1 uppercase tracking-wider w-full">{t('web_dev_page.hero.button_explore')}</a>
                                <Link to="/contact" className="inline-flex items-center justify-center h-16 px-10 rounded-2xl bg-white/5 text-white text-center font-bold hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider w-full">{t('web_dev_page.hero.button_enquire')}</Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-8 w-full place-items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><SiReact className="w-10 h-10 text-cyan-400" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center shadow-lg border border-red-500/20"><SiAngular className="w-10 h-10 text-red-500" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center shadow-lg border border-indigo-500/20"><SiPhp className="w-10 h-10 text-indigo-400" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center shadow-lg border border-orange-500/20"><SiLaravel className="w-10 h-10 text-orange-500" /></div>
                                    </div>
                                    <div className="w-1/2 h-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="explore" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">{t('web_dev_page.offer.subtitle')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('web_dev_page.offer.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('web_dev_page.offer.title2')}</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group text-center" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="h-20 w-20 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <svc.icon className={`w-10 h-10 ${svc.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                                <Link to={svc.link} className="text-blue-600 font-bold hover:text-indigo-600 inline-flex items-center gap-1 transition-colors">
                                    {svc.linkText} <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(37,99,235,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('web_dev_page.choose_us.subtitle')}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('web_dev_page.choose_us.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('web_dev_page.choose_us.title2')}</span> {t('web_dev_page.choose_us.title3')}</h2>
                            <div className="space-y-4">
                                {[
                                    { text: t('web_dev_page.choose_us.points.p1'), icon: FaCode },
                                    { text: t('web_dev_page.choose_us.points.p2'), icon: FaCheckCircle },
                                    { text: t('web_dev_page.choose_us.points.p3'), icon: FaRocket },
                                    { text: t('web_dev_page.choose_us.points.p4'), icon: FaDesktop },
                                    { text: t('web_dev_page.choose_us.points.p5'), icon: FaComments },
                                    { text: t('web_dev_page.choose_us.points.p6'), icon: FaShieldAlt },
                                    { text: t('web_dev_page.choose_us.points.p7'), icon: FaSearch },
                                    { text: t('web_dev_page.choose_us.points.p8'), icon: FaAndroid },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/10 transition-colors">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500/30 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <span className="text-slate-300 flex items-center">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">{t('web_dev_page.choose_us.button')}</Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block" data-aos="fade-left">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-[40px]"></div>
                            <img src="/images/web-client.png" alt="Web Clients" className="w-full relative z-10 rounded-3xl shadow-2xl animate-float" />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-House Team Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('web_dev_page.team.subtitle')}</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('web_dev_page.team.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('web_dev_page.team.title2')}</span></h3>
                                <p className="text-slate-300 text-lg italic mb-4">{t('web_dev_page.team.desc1')}</p>
                                <p className="text-slate-400 mb-6">{t('web_dev_page.team.desc2')}</p>
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">{t('web_dev_page.team.button')}</Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { num: '3000+', label: t('web_dev_page.team.stats.projects'), color: 'blue' },
                                    { num: '100+', label: t('web_dev_page.team.stats.clients'), color: 'indigo' },
                                    { num: '300+', label: t('web_dev_page.team.stats.developers'), color: 'sky' },
                                    { num: '7+', label: t('web_dev_page.team.stats.experience'), color: 'cyan' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-3xl font-extrabold text-white mb-1">{stat.num}</p>
                                        <p className="text-slate-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4 uppercase tracking-wider">{t('web_dev_page.testimonials_static.subtitle')}</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('web_dev_page.testimonials_static.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('web_dev_page.testimonials_static.title2')}</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((t_item, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-blue-600">{t_item.name[0]}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800">{t_item.name}</h5>
                                        <span className="text-slate-500 text-sm">{t_item.company}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic">"{t_item.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;