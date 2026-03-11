import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaCheckCircle, FaStar } from 'react-icons/fa';

const WorkforceServiceLayout = ({ heroTitle, heroSubtitle, heroDesc, reasonsTitle, reasons, caseStudyTitle, caseStudyDesc }) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0f172a] overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none transition-transform duration-[15000ms] ease-out scale-100 group-hover:scale-110" style={{ backgroundImage: 'url("/images/20.png")' }}></div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-10">
                    {heroSubtitle && <span data-aos="fade-up" data-aos-delay="100" className="inline-block py-1.5 px-4 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold text-sm mb-6 uppercase tracking-widest">{heroSubtitle}</span>}
                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
                        {heroTitle}
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-lg text-slate-300 mb-10 leading-relaxed font-medium">{heroDesc}</p>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-[0_0_20px_rgba(8,145,178,0.4)] transition-all hover:-translate-y-1 uppercase tracking-wider relative overflow-hidden group/btn">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                            <span className="relative z-10 flex items-center gap-3">Request Service <FaArrowRight /></span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reasons / Advantages Section */}
            {reasons && reasons.length > 0 && (
                <section className="py-24 relative">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16" data-aos="fade-up">
                            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-100/50 text-blue-700 font-bold text-xs mb-4 uppercase tracking-wider border border-blue-200"><FaStar className="text-amber-500" /> Core Benefits</span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-800">{reasonsTitle}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reasons.map((reason, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 hover:border-cyan-100 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-cyan-50 rounded-xl flex items-center justify-center mb-6 transition-colors">
                                        <FaCheckCircle className="text-slate-400 group-hover:text-cyan-500 text-2xl transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-700 transition-colors">{reason.title}</h3>
                                    <p className="text-slate-600 text-sm leading-loose">{reason.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Case Study Section */}
            {caseStudyTitle && caseStudyDesc && (
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-2xl" data-aos="fade-up">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/30 blur-[100px] rounded-full mix-blend-screen"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/30 blur-[100px] rounded-full mix-blend-screen"></div>
                            <div className="relative z-10 md:w-3/4">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/30">Case Study</span>
                                <h2 className="text-3xl font-black text-white mb-6 leading-tight">{caseStudyTitle}</h2>
                                <p className="text-lg text-slate-300 mb-10 leading-relaxed">{caseStudyDesc}</p>
                                <Link to="/contact" className="inline-flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition-colors uppercase tracking-wider text-sm group">
                                    Discuss Your Project <span className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/40 transition-colors"><FaArrowRight /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default WorkforceServiceLayout;
