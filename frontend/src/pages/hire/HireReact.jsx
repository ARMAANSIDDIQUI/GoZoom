import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaReact, FaMobileAlt, FaCode, FaRocket, FaShieldAlt, FaUsers, FaClock, FaGem, FaBolt, FaCogs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const HireReact = () => {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const coreExpertise = (t('hire_pages.react.coreExpertise', { returnObjects: true }) || []).map((item, i) => ({
        ...item,
        icon: [<SiNextdotjs />, <FaMobileAlt />, <SiRedux />, <SiTailwindcss />][i]
    }));

    const advantageFeatures = (t('hire_pages.react.advantageFeatures', { returnObjects: true }) || []).map((item, idx) => ({
        ...item,
        icon: [<FaCogs />, <FaBolt />, <FaCode />][idx]
    }));

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a192f]">
                {/* Handcrafted Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#61dafb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-extrabold text-sm mb-6 uppercase tracking-widest">
                                <FaReact className="animate-spin-slow" /> {t('hire_common.elite_react_talent')}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                                {t('hire_pages.react.heroTitle').split('Fast and Scalable')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Fast and Scalable</span> {t('hire_pages.react.heroTitle').split('Fast and Scalable')[1]}
                            </h1>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed font-black mx-auto italic">
                                "{t('hire_pages.react.heroDesc')}"
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-center px-12 py-5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(6,182,212,0.5)] hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all group uppercase tracking-wider">
                                    {t('hire_common.enquire_now')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#expertise" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 bg-white/5 border border-white/20 text-white font-black text-center px-12 py-5 rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md uppercase tracking-wider">
                                    {t('hire_common.our_stack')}
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-4 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl w-full max-w-[400px] animate-float">
                                <img src="/images/reactboy.svg" alt="React Developer" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[400px] bg-white border border-slate-100 p-6 rounded-3xl shadow-2xl flex items-center gap-6 group hover:shadow-cyan-500/10 transition-all duration-300">
                                <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-4xl text-cyan-600 group-hover:scale-110 transition-transform">
                                    <FaRocket />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-end mb-2">
                                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none">{t('hire_common.performance')}</p>
                                        <p className="text-xl font-black text-slate-800">{t('hire_common.lighthouse_score')}</p>
                                    </div>
                                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="w-[99%] h-full bg-cyan-500 animate-slide-right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Grid */}
            <section id="expertise" className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl" data-aos="fade-up">
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">{t('hire_pages.react.ecosystemTitle').split('Ecosystem')[0]} <span className="text-blue-600 italic">{t('hire_pages.react.ecosystemTitle').split('Ecosystem')[1] || 'Ecosystem'}</span></h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-bold italic border-l-4 border-blue-600 pl-6">{t('hire_pages.react.ecosystemDesc')}</p>
                        </div>
                        <div className="hidden lg:block h-px flex-1 bg-slate-200 mx-10 mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreExpertise.map((item, i) => (
                            <div key={i} className="group p-10 bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-3 transition-all duration-500 relative overflow-hidden" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="text-5xl text-blue-600 mb-8 relative z-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why React Section - Unique Layout */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 animate-pulse"></div>
                            <img src="/images/react11.png" alt="Core Competence" className="relative z-10 rounded-2xl w-full h-auto shadow-2xl" />
                            {/* Floating Decorative card */}
                            <div className="absolute top-10 -right-10 bg-[#0a192f] p-8 rounded-2xl text-white shadow-2xl lg:block hidden animate-float" style={{ animationDelay: '1s' }}>
                                <FaShieldAlt className="text-cyan-400 text-3xl mb-4" />
                                <p className="text-lg font-bold">{t('hire_common.enterprise_ready')}</p>
                                <p className="text-xs text-slate-400">{t('hire_common.stable_architectures')}</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm mb-6 block">{t('hire_pages.react.why_our_team')}</span>
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 uppercase leading-none tracking-tighter">{t('hire_pages.react.advantageTitle').split('GoZoom')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 italic">GoZoom</span> {t('hire_pages.react.advantageTitle').split('GoZoom')[1]}</h2>

                            <div className="space-y-8">
                                {advantageFeatures.map((benefit, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 flex-shrink-0 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">{benefit.title}</h4>
                                            <p className="text-slate-600 leading-relaxed font-medium">{benefit.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA / Trust Section */}
            <section className="py-24 bg-[#0a192f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[4rem] p-12 lg:p-24 text-center text-white shadow-3xl relative overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl lg:text-6xl font-black mb-8 uppercase leading-tight">{t('hire_pages.react.reactifyTitle').split('React-ify')[0]}<span className="text-cyan-300">React-ify</span>{t('hire_pages.react.reactifyTitle').split('React-ify')[1]}</h2>
                            <p className="text-xl text-blue-100 mb-12 opacity-80 font-medium">{t('hire_pages.react.reactifyDesc')}</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="bg-white text-blue-700 font-black px-12 py-5 rounded-full shadow-2xl hover:scale-105 transition-all text-lg uppercase tracking-wider">
                                    {t('hire_common.enquire_now')}
                                </Link>
                                <div className="flex items-center gap-4 text-white/80 font-bold">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(idx => (
                                            <div key={idx} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-slate-800 flex items-center justify-center overflow-hidden">
                                                <FaUsers className="text-xs" />
                                            </div>
                                        ))}
                                    </div>
                                    <span>{t('hire_common.joined_enterprises')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Form Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 bg-white rounded-[3rem] shadow-3xl overflow-hidden border border-slate-100">
                        <div className="p-12 lg:p-20 bg-[#0a192f] text-white">
                            <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">{t('hire_common.let_talk').split('Tech')[0]}<span className="text-cyan-400">Tech</span></h2>
                            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-medium">{t('hire_pages.react.contactDesc')}</p>
                            
                            <div className="space-y-8">
                                {[
                                    { icon: <FaClock />, title: t('hire_common.response_24h'), text: t('hire_common.respect_time') },
                                    { icon: <FaGem />, title: t('hire_common.quality_first'), text: t('hire_common.clean_code_doc') },
                                    { icon: <FaRocket />, title: t('hire_common.rapid_prototype'), text: t('hire_common.mvp_faster') }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5 items-center">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl text-cyan-400">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">{item.title}</p>
                                            <p className="text-sm text-slate-500 leading-tight">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-12 lg:p-20">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-xl shadow-green-200">
                                        <FaCheckCircle />
                                    </div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">{t('hire_common.success')}</h3>
                                    <p className="text-slate-600 font-medium">{t('hire_pages.react.success_msg')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t('hire_common.full_name')}</label>
                                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800" placeholder={t('hire_common.name_label')} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t('hire_common.email_address')}</label>
                                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800" placeholder={t('hire_common.email_label')} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t('hire_common.phone_number')}</label>
                                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800" placeholder={t('hire_common.phone_label')} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{t('hire_common.project_brief')}</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-bold text-slate-800 resize-none" placeholder={t('hire_common.how_can_we_help')} />
                                    </div>
                                    <button type="submit" className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all text-lg uppercase tracking-widest hover:-translate-y-1">
                                        {t('hire_common.dispatch_enquiry')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireReact;
