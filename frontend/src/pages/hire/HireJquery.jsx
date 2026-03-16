import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaBolt, FaArrowRight, FaJsSquare, FaMousePointer, FaCode, FaRocket, FaExchangeAlt, FaShieldAlt, FaLayerGroup, FaHistory, FaTools } from 'react-icons/fa';
import { SiJquery, SiJavascript } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const HireJquery = () => {
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

    const strengths = (t('hire_pages.jquery.strengths', { returnObjects: true }) || []).map((item, i) => ({
        ...item,
        icon: [<FaRocket />, <FaTools />, <FaShieldAlt />][i]
    }));

    const reasons = (t('hire_pages.jquery.reasons', { returnObjects: true }) || []).map((item, i) => ({
        ...item,
        icon: [<FaHistory />, <FaBolt />, <FaCode />][i]
    }));

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#071624]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0769ad 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-xs mb-8 uppercase tracking-[0.4em]">
                                <SiJquery className="text-lg" /> {t('hire_common.lightweight_dom_mastery')}
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                                {t('hire_pages.jquery.heroTitle').split('Efficient DOM')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Efficient DOM</span> {t('hire_pages.jquery.heroTitle').split('Efficient DOM')[1]}
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-black mx-auto italic">
                                "{t('hire_pages.jquery.heroDesc')}"
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-5 bg-blue-600 text-white font-black text-center text-lg rounded-2xl shadow-2xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all group uppercase tracking-wider">
                                    {t('hire_common.enquire_now')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#capabilities" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-10 py-5 bg-white/5 border border-white/20 text-white font-black text-center text-lg rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-wider">
                                    {t('hire_common.jquery_toolset')}
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-4 bg-gradient-to-tr from-white/10 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] mx-auto animate-float">
                                <img src="/images/software-developers.webp" alt="jQuery Expert" className="w-full h-auto rounded-[3.5rem] shadow-4xl filter grayscale-[0.2]" />
                            </div>

                            <div className="relative w-full max-w-[400px] mx-auto mt-8 bg-white border border-slate-100 p-6 rounded-3xl shadow-2xl flex items-center gap-4 group hover:shadow-blue-500/10 transition-all duration-300">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl text-blue-600 group-hover:scale-110 transition-transform">
                                    <FaMousePointer />
                                </div>
                                <div>
                                    <p className="font-black text-lg text-slate-900 uppercase leading-none">{t('hire_common.write_less_do_more')}</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{t('hire_common.performance_layer')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section id="capabilities" className="py-40 bg-slate-50 relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">{t('hire_pages.jquery.fleetTitle').split('Interactivity')[0]} <span className="text-blue-600 italic">Interactivity</span></h2>
                        <div className="w-32 h-2 bg-blue-600 mx-auto rounded-full mb-10 shadow-lg shadow-blue-500/30"></div>
                        <p className="text-xl text-slate-500 font-bold italic max-w-2xl mx-auto">{t('hire_pages.jquery.fleetDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {strengths.map((item, i) => (
                            <div key={i} className="group p-12 bg-white rounded-[3.5rem] border border-slate-200 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-4 transition-all duration-500" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-blue-600 mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Hire Veterans */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div data-aos="fade-right">
                            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>
                            <img src="/images/jqueryboy1.svg" alt="Legacy Maintenance" className="relative z-10 w-full h-auto drop-shadow-3xl" />
                        </div>
                        <div data-aos="fade-left">
                            <span className="text-blue-600 font-black uppercase tracking-[0.5em] text-sm mb-6 block">{t('hire_common.standard_features')}</span>
                            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 uppercase leading-[0.9] tracking-tighter">{t('hire_pages.jquery.reasonsTitle').split('Library Veterans')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">Veterans</span></h2>

                            <div className="space-y-12">
                                {reasons.map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-500 font-bold leading-relaxed">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legacy CTA */}
            <section className="pb-40 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="relative rounded-[4rem] bg-[#071624] p-16 lg:p-32 text-center text-white shadow-4xl overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl lg:text-7xl font-black mb-10 uppercase leading-tight italic tracking-tighter">{t('hire_pages.jquery.heroTitle').split('Legacy Support')[0]} <span className="text-blue-400">Reliable Support</span></h2>
                            <p className="text-xl text-slate-400 mb-16 font-bold uppercase tracking-widest">{t('hire_pages.jquery.heroSubtitle')}</p>
                            <div className="flex justify-center">
                                <Link to="/contact" className="px-14 py-6 bg-blue-600 text-white font-black text-xl rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.5)] hover:scale-110 transition-transform uppercase tracking-widest">
                                    {t('hire_common.enquire_now')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireJquery;
