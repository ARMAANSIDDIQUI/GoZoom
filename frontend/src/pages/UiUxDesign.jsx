import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaPaintBrush, FaMobileAlt, FaDesktop, FaRegLightbulb, FaUserCheck, FaLayerGroup } from 'react-icons/fa';

const UiUxDesign = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-rose-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fb7185 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Human-Centered Design</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight uppercase">
                                UI / UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">Design Agency</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                                We craft intuitive, engaging, and utterly beautiful digital experiences that convert users into loyal brand advocates.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-rose-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Start Designing <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-10 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full shadow-2xl animate-float">
                                <img src="/images/app-mockup.png" alt="UI UX Design" className="w-full h-auto rounded-3xl" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/800x600?text=UI+UX+Design"; }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer / Capabilities */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-800 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">Our design philosophy merges aesthetics with rigorous user empathy.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'UX Research & Strategy', desc: 'Conducting deep user interviews, persona mapping, and journey creation to ensure your product solves real problems.', icon: FaRegLightbulb },
                            { title: 'Web Interface Design', desc: 'Creating breathtaking, pixel-perfect web interfaces that are responsive, accessible, and optimized for high conversion rates.', icon: FaDesktop },
                            { title: 'Mobile App UX/UI', desc: 'Designing intuitive native iOS and Android experiences aligned with Human Interface Guidelines and Material Design.', icon: FaMobileAlt },
                            { title: 'Brand Identity', desc: 'Developing cohesive visual languages, typography pairs, and color palettes that make your brand memorable.', icon: FaPaintBrush },
                            { title: 'Prototyping & Testing', desc: 'Building high-fidelity interactive Figma prototypes to validate assumptions before a single line of code is written.', icon: FaUserCheck },
                            { title: 'Design Systems', desc: 'Constructing robust, scalable component libraries ensuring design consistency across all your enterprise platforms.', icon: FaLayerGroup },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-pink-500/10 transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-pink-500" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-800 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose Our Designers?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Empathy-Driven Process', desc: 'We don’t guess; we research. Our designs are rooted in deep understanding of your end-users’ psychographics and behavioral patterns.', icon: FaRegLightbulb },
                            { title: 'Collaborative Figma Workflows', desc: 'Enjoy full transparency as we invite you into our iterative Figma files, providing feedback loops every step of the way.', icon: FaLayerGroup },
                            { title: 'Developer-Ready Assets', desc: 'Our designers speak code. We hand off meticulously organized files with design tokens, making implementation a breeze for engineers.', icon: FaDesktop },
                            { title: 'Conversion Focused', desc: 'Beautiful design means nothing if it doesn’t sell. Our UX audits specifically target friction points to maximize your application’s ROI.', icon: FaUserCheck }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 font-bold text-lg shadow-sm border border-pink-100">
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
        </div>
    );
};

export default UiUxDesign;
