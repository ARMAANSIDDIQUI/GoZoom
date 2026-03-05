import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaHtml5, FaCss3Alt, FaPaintBrush, FaExpandArrowsAlt, FaMobileAlt, FaSearchDollar, FaPenNib, FaPencilRuler } from 'react-icons/fa';
import { SiFigma, SiAdobexd, SiSketch } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireHtml = () => {
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

    const designToCode = [
        { icon: <SiFigma />, title: 'Figma to HTML', desc: 'Transforming complex Figma prototypes into pixel-perfect, clean, and semantic HTML5.' },
        { icon: <FaMobileAlt />, title: 'Responsive Design', desc: 'Crafting fluid layouts that adapt beautifully across all device breakpoints.' },
        { icon: <FaPaintBrush />, title: 'CSS3 Magic', desc: 'Implementing advanced animations, transitions, and modern styling solutions.' },
        { icon: <FaSearchDollar />, title: 'SEO Semantics', desc: 'Writing clean, accessible HTML that search engines love and understand.' },
    ];

    return (
        <div className="bg-white overflow-hidden font-['Lato',sans-serif]">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#160d01]">
                {/* Creative Amber Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    {/* SVG Pixels Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center" data-aos="fade-right">
                            <div className="inline-flex items-center gap-3 py-2 px-6 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 font-black text-xs mb-8 uppercase tracking-[0.4em]">
                                <FaHtml5 className="text-lg" /> Pixel-Perfect Engineering
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
                                Design to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Reality</span> with HTML5 Artisans
                            </h1>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-black mx-auto">
                                Hire front-end HTML/CSS specialists who bridge the gap between stunning designs and rock-solid, production-ready code.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 bg-orange-500 text-white font-black text-center text-lg rounded-2xl shadow-2xl shadow-orange-500/20 hover:scale-105 transition-all group uppercase tracking-wider">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#design" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 border border-white/20 text-white text-center font-black text-lg rounded-2xl hover:bg-white/5 transition-all uppercase tracking-wider backdrop-blur-md">
                                    Our Portfolio
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl animate-float">
                                <img src="/images/software-developers.webp" alt="HTML Specialists" className="w-full h-auto rounded-[3.5rem] shadow-4xl filter saturate-[1.2]" />
                            </div>

                            {/* Integrated Info Badge */}
                            <div className="relative w-full max-w-[400px] bg-white border border-slate-100 p-6 rounded-3xl shadow-3xl flex items-center gap-4 group hover:shadow-orange-500/10 transition-all duration-300">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl text-orange-500 group-hover:scale-110 transition-transform">
                                    <FaPencilRuler />
                                </div>
                                <div>
                                    <p className="font-black text-lg text-slate-900 uppercase leading-none">Precision Code</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">100% W3C Valid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design to Code Grid */}
            <section id="design" className="py-32 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="text-center mb-24" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">From <span className="text-orange-500">Design</span> to Production</h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-8 shadow-lg shadow-orange-500/30"></div>
                        <p className="text-lg text-slate-500 font-bold max-w-2xl mx-auto uppercase tracking-widest">Pixel-perfect. Accessible. Modern.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {designToCode.map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 hover:shadow-orange-500/5 hover:-translate-y-4 transition-all duration-500 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="text-5xl text-orange-500 mb-8 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why HTML Section */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                            <div className="absolute inset-0 bg-amber-500/10 rounded-[4rem] blur-[80px]"></div>
                            <img src="/images/webdevbg.webp" alt="UI Design" className="relative z-10 w-full h-auto rounded-[3rem] shadow-4xl contrast-125" />
                        </div>
                        <div className="order-1 lg:order-2" data-aos="fade-left">
                            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 uppercase leading-none tracking-tighter italic">The GoZoom <span className="text-orange-500 italic">Standard</span></h2>
                            <div className="space-y-12">
                                {[
                                    { icon: <FaCss3Alt />, title: 'Modern Flex & Grid Mastery', text: 'Building complex, complex-ready layouts that work seamlessly across all screen sizes.' },
                                    { icon: <FaExpandArrowsAlt />, title: 'Cross-Device Precision', text: 'Meticulous testing on real devices to ensure perfect rendering from iPhone to Ultrawide.' },
                                    { icon: <FaPenNib />, title: 'Animation Perfection', text: 'Bringing static designs to life with smooth, high-performance CSS3 keyframe animations.' }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 bg-white border border-slate-100 shadow-xl rounded-2xl flex items-center justify-center text-orange-500 text-3xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-500 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{feature.title}</h4>
                                            <p className="text-slate-500 font-bold leading-relaxed">{feature.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design-Focused CTA */}
            <section className="py-32">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="relative rounded-[4rem] bg-[#160d01] p-16 lg:p-32 text-center text-white shadow-4xl overflow-hidden" data-aos="zoom-in">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-5xl lg:text-7xl font-black mb-10 uppercase leading-tight italic tracking-tighter">Your <span className="text-orange-400">Masterpiece</span> Deserves Better Code</h2>
                            <p className="text-xl text-slate-400 mb-16 font-bold uppercase tracking-[0.3em]">Pixel-Perfect. Production-Ready.</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/contact" className="px-14 py-6 bg-orange-500 text-white font-black text-xl rounded-full shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:scale-110 transition-transform uppercase tracking-widest">
                                    Start Converting
                                </Link>
                                <div className="flex items-center gap-5 text-slate-500 border-l border-white/10 pl-10 hidden md:flex font-black uppercase text-xs tracking-[0.3em] italic">
                                    <SiAdobexd className="text-3xl text-orange-300" />
                                    <span className="text-left text-orange-200">PSD / FIGMA / XD<br />Compatible</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireHtml;
