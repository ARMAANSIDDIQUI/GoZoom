import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaPhp, FaDatabase, FaServer, FaCogs, FaShieldAlt, FaChartLine, FaHeadset, FaLightbulb, FaClock } from 'react-icons/fa';
import { SiMysql, SiApache, SiLinux } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const HirePhp = () => {
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

    const techStack = (t('hire_pages.php.techStack', { returnObjects: true }) || []).map((tech, i) => ({
        ...tech,
        icon: [<FaPhp />, <SiMysql />, <FaServer />, <FaCogs />][i]
    }));

    const partnerFeatures = (t('hire_pages.php.partnerFeatures', { returnObjects: true }) || []).map((item, idx) => ({
        ...item,
        icon: [<FaShieldAlt />, <FaChartLine />, <FaClock />][idx]
    }));

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-gradient-to-br from-[#1e1e2f] to-[#0f0f1a]">
                {/* Custom Fluid Backgrounds */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '3s' }}></div>
                    {/* SVG Mesh Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center" data-aos="fade-right">
                            <span className="inline-block py-2 px-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-sm mb-8 uppercase tracking-[0.2em]">
                                {t('hire_common.reliable_enterprise')}
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.05]">
                                {t('hire_pages.php.heroTitle').split('Robust PHP')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Robust PHP</span> {t('hire_pages.php.heroTitle').split('Robust PHP')[1]}
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-black mx-auto">
                                {t('hire_pages.php.heroDesc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] justify-center">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-12 py-5 rounded-2xl bg-indigo-600 text-white font-black text-center text-lg transition-all hover:bg-indigo-700 hover:-translate-y-1 shadow-2xl shadow-indigo-500/20 group uppercase tracking-wider">
                                    {t('hire_common.enquire_now')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#why-php" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-12 py-5 rounded-2xl bg-white/5 border border-white/20 text-white text-center font-black text-lg hover:bg-white/10 transition-all backdrop-blur-sm uppercase tracking-wider">
                                    {t('hire_common.our_approach')}
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-center gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-6 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[380px] shadow-2xl animate-float">
                                <img src="/images/phpboyy.svg" alt="PHP Expert" className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[380px] bg-indigo-600/90 backdrop-blur-xl p-6 rounded-3xl shadow-3xl text-white border border-white/10 flex items-center gap-4 group hover:bg-indigo-600 transition-all duration-300">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl text-indigo-200 group-hover:scale-110 transition-transform">
                                    <FaDatabase />
                                </div>
                                <div>
                                    <p className="font-black text-xl leading-none">{t('hire_common.uptime')}</p>
                                    <p className="text-[10px] text-indigo-200 uppercase tracking-widest font-bold mt-1">{t('hire_common.stable_architectures')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Tech Grid */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center max-w-3xl mx-auto mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase italic">{t('hire_pages.php.fullstackTitle').split('Mastery')[0]} <span className="text-indigo-600">{t('hire_pages.php.fullstackTitle').split('Mastery')[1] || 'Mastery'}</span></h2>
                        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg text-slate-600 font-medium">{t('hire_pages.php.fullstackDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {techStack.map((tech, i) => (
                            <div key={i} className="p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-indigo-600 transition-all duration-500 hover:-translate-y-4" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-indigo-600 mb-8 group-hover:text-white transition-colors duration-500">{tech.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase group-hover:text-white transition-colors duration-500">{tech.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-indigo-100 transition-colors duration-500">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Hire Us Section */}
            <section id="why-php" className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '100px 100px' }}></div>
                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div data-aos="fade-right">
                            <img src="/images/phpboy2.svg" alt="PHP Workflow" className="w-full h-auto drop-shadow-2xl animate-float" />
                        </div>
                        <div data-aos="fade-left">
                            <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase leading-none">{t('hire_pages.php.partnerTitle').split('Vanguards')[0]} <span className="text-indigo-400 italic">{t('hire_pages.php.partnerTitle').split('Vanguards')[1] || 'Vanguards'}?</span></h2>
                            <div className="space-y-10">
                                {partnerFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black mb-2 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-400 text-lg leading-relaxed font-medium">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="relative rounded-[4rem] bg-[#1e1e2f] p-12 lg:p-24 overflow-hidden" data-aos="zoom-in">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 uppercase leading-tight max-w-4xl">{t('hire_pages.php.accelerateTitle').split('Backend')[0]}<span className="text-indigo-400">Backend</span>{t('hire_pages.php.accelerateTitle').split('Backend')[1]}</h2>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl font-medium">{t('hire_pages.php.accelerateDesc')}</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-12 py-5 rounded-2xl bg-white text-slate-900 font-black text-lg uppercase tracking-wider hover:scale-105 transition-transform shadow-2xl">
                                    {t('hire_common.get_quote')}
                                </Link>
                                <div className="flex items-center gap-4 text-slate-400 font-bold border-l border-white/10 pl-10 hidden md:flex">
                                    <FaHeadset className="text-2xl text-indigo-400" />
                                    <span className="text-left">{t('hire_common.expert_consult').replace('Consultation', '')}<br />Consultation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Form */}
            <section className="pb-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-5xl mx-auto p-12 lg:p-20 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-2xl">
                        {submitted ? (
                            <div className="text-center py-20 animate-fade-in">
                                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-8 shadow-xl" />
                                <h3 className="text-4xl font-black text-slate-900 mb-4 uppercase">{t('hire_common.transmission_sent')}</h3>
                                <p className="text-slate-600 text-lg font-medium">{t('hire_pages.php.success_msg')}</p>
                            </div>
                        ) : (
                            <div className="grid lg:grid-cols-5 gap-16">
                                <div className="lg:col-span-2">
                                    <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase">{t('hire_common.consult_architect').split('Architect')[0]}<span className="text-indigo-600">Architect</span></h3>
                                    <p className="text-slate-600 mb-10 leading-relaxed font-medium">{t('hire_pages.php.consultDesc')}</p>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-slate-800 font-black uppercase tracking-widest text-sm">
                                            <FaLightbulb className="text-indigo-600" /> {t('hire_common.innovation_driven')}
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-800 font-black uppercase tracking-widest text-sm">
                                            <FaShieldAlt className="text-indigo-600" /> {t('hire_common.security_focused')}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-3">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-indigo-600 transition-all font-bold text-slate-800 text-lg" placeholder={t('hire_common.name_label')} />
                                            </div>
                                            <div>
                                                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-indigo-600 transition-all font-bold text-slate-800 text-lg" placeholder={t('hire_common.email_label')} />
                                            </div>
                                        </div>
                                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-indigo-600 transition-all font-bold text-slate-800 text-lg" placeholder={t('hire_common.phone_label')} />
                                        <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full bg-white border-b-2 border-slate-200 px-0 py-4 focus:outline-none focus:border-indigo-600 transition-all font-bold text-slate-800 text-lg resize-none" placeholder={t('hire_common.project_desc')} />
                                        <button type="submit" className="px-12 py-5 bg-indigo-600 text-white font-black text-lg uppercase tracking-widest hover:bg-slate-900 transition-all rounded-xl shadow-xl">
                                            {t('hire_common.submit_message')}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HirePhp;
