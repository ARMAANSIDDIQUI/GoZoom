import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaAngular, FaShieldAlt, FaCogs, FaRocket, FaCode, FaChartLine, FaUsers, FaTools, FaMicrochip, FaCube } from 'react-icons/fa';
import { SiTypescript, SiReactivex } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const HireAngular = () => {
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

    const strengths = (t('hire_pages.angular.strengths', { returnObjects: true }) || []).map((item, i) => ({
        ...item,
        icon: [<FaCogs />, <FaCube />, <SiTypescript />][i]
    }));

    const advantageFeatures = (t('hire_pages.angular.advantageFeatures', { returnObjects: true }) || []).map((item, idx) => ({
        ...item,
        icon: [<FaMicrochip />, <FaTools />, <FaRocket />][idx]
    }));

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Enterprise Hero */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#fafafa]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dd0031 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-red-600 text-white font-black text-xs mb-8 uppercase tracking-[0.4em] shadow-xl shadow-red-500/20">
                                <FaAngular className="text-lg" /> {t('hire_common.reliable_enterprise_solutions')}
                            </div>
                            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                                {t('hire_pages.angular.heroTitle').split('Angular')[0]}<span className="text-[#dd0031] italic">Angular</span>{t('hire_pages.angular.heroTitle').split('Angular')[1]}
                            </h1>
                            <p className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed font-black italic">
                                "{t('hire_pages.angular.heroDesc')}"
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                                <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#dd0031] text-white font-black text-lg rounded-2xl shadow-2xl shadow-red-500/30 hover:scale-105 transition-all group uppercase tracking-wider">
                                    {t('hire_common.enquire_now')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#enterprise" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white border border-slate-200 text-slate-800 font-black text-lg rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-wider">
                                    {t('hire_common.our_capabilities')}
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-4 bg-white rounded-[4rem] shadow-4xl border border-slate-100 w-full max-w-[420px] animate-float">
                                <img src="/images/software-developers.webp" alt="Angular Expert" className="w-full h-auto rounded-[3.5rem] grayscale-[0.3] contrast-125" />
                            </div>

                            <div className="relative w-full max-w-[420px] bg-slate-900 p-8 rounded-3xl shadow-3xl text-white flex items-center gap-6 group hover:scale-[1.02] transition-all duration-300">
                                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform shadow-lg shadow-red-500/40">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <p className="font-black text-2xl leading-none italic uppercase">{t('hire_common.architecture')}</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-2">{t('hire_common.enterprise_grade')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strength Grid */}
            <section id="enterprise" className="py-40 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="max-w-4xl mx-auto text-center mb-28" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none italic">{t('hire_pages.angular.playbookTitle').split('Angular')[0]} <span className="text-[#dd0031]">Angular</span></h2>
                        <div className="w-32 h-2 bg-[#dd0031] mx-auto rounded-full mb-10 shadow-lg shadow-red-500/20"></div>
                        <p className="text-xl text-slate-500 font-bold italic max-w-2xl mx-auto leading-relaxed">{t('hire_pages.angular.fleetDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {strengths.map((item, i) => (
                            <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-4xl transition-all duration-500 hover:-translate-y-3" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-4xl text-[#dd0031] mb-8 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Advantage */}
            <section className="py-40 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="relative" data-aos="fade-right">
                            <div className="absolute -inset-10 bg-red-600/10 rounded-[5rem] blur-3xl"></div>
                            <img src="/images/software-bg.webp" alt="Angular Excellence" className="relative z-10 rounded-[4rem] w-full h-auto shadow-4xl filter contrast-110" />
                        </div>
                        <div data-aos="fade-left">
                            <span className="text-[#dd0031] font-black uppercase tracking-[0.5em] text-sm mb-10 block">{t('hire_common.core_strengths')}</span>
                            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 uppercase leading-[0.8] tracking-tighter">{t('hire_pages.angular.advantageTitle').split('Angular')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dd0031] to-red-400 italic">Angular</span> {t('hire_pages.angular.advantageTitle').split('Angular')[1]}</h2>

                            <div className="space-y-12">
                                {advantageFeatures.map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-[#dd0031] text-3xl group-hover:bg-[#dd0031] group-hover:text-white transition-all duration-500 flex-shrink-0">
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

            {/* Enterprise CTA */}
            <section className="pb-40 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="relative rounded-[4rem] bg-slate-900 p-16 lg:p-32 text-center text-white shadow-4xl overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl lg:text-7xl font-black mb-10 uppercase leading-tight italic tracking-tighter">{t('hire_pages.angular.fleetTitle').split('Scale')[0]}<span className="text-red-500">Scale</span>{t('hire_pages.angular.fleetTitle').split('Scale')[1]}</h2>
                            <p className="text-xl text-slate-400 mb-16 font-black uppercase tracking-widest italic">{t('hire_pages.angular.transmission_sub')}</p>
                            <div className="flex justify-center">
                                <Link to="/contact" className="px-14 py-6 bg-[#dd0031] text-white font-black text-xl rounded-full shadow-2xl hover:scale-110 transition-transform uppercase tracking-widest">
                                    {t('hire_common.start_consultation')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireAngular;
