import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaBolt, FaSync, FaCogs, FaProjectDiagram, FaDesktop, FaDatabase, FaRegLightbulb, FaShieldAlt } from 'react-icons/fa';

const AiAutomation = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-amber-500/20 rounded-full blur-[100px] animate-ping" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] animate-pulse"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Efficiency Redefined</span>
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
                                AI / Task <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Automation</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                                Eliminate bottlenecks. Accelerate workflows. Deploy intelligent automation agents that handle repetitive tasks with zero errors.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Automate Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex items-center justify-center lg:justify-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative w-full max-w-[480px]">
                                <img src="/images/Home Page - retail.png" alt="Automation Dashboard" className="w-full h-auto rounded-3xl shadow-[0_20px_60px_rgba(245,158,11,0.2)] border border-white/5" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-4">Operations</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Smarter <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Workflows</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-xl shadow-slate-200/50 p-8 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up">
                            <FaBolt className="w-12 h-12 text-amber-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Rapid Execution</h3>
                            <p className="text-slate-600">Reduce manual data entry and processing from days down to seconds.</p>
                        </div>
                        <div className="bg-white shadow-xl shadow-slate-200/50 p-8 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
                            <FaSync className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Continuous Sync</h3>
                            <p className="text-slate-600">Keep platforms, CRMs, and databases perfectly aligned in real-time without human intervention.</p>
                        </div>
                        <div className="bg-white shadow-xl shadow-slate-200/50 p-8 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
                            <FaCogs className="w-12 h-12 text-yellow-500 mb-6" />
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Custom Pipelines</h3>
                            <p className="text-slate-600">Tailored automation pipelines that map exactly to your unique organizational processes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Automate</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From back-office operations to customer-facing interactions, we build intelligent pipelines.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Data Entry Automation', desc: 'OCR and NLP models that read invoices, extract key-value pairs, and insert them directly into your database.', icon: FaDatabase },
                            { title: 'Customer Support Triaging', desc: 'AI agents that categorize incoming tickets, route them to the correct department, and draft initial responses.', icon: FaRegLightbulb },
                            { title: 'Workflow Integrations', desc: 'Connecting disjointed SaaS platforms (Stripe, Salesforce, Slack) to trigger actions seamlessly across your entire stack.', icon: FaProjectDiagram },
                            { title: 'Report Generation', desc: 'Automated scraping of analytics tools to generate weekly, beautifully formatted executive summaries.', icon: FaDesktop },
                            { title: 'Inventory Management', desc: 'Smart scripts that monitor stock levels, predict depletion rates, and automatically trigger re-order processes.', icon: FaCogs },
                            { title: 'Security Auditing', desc: 'Automated compliance checks and vulnerability scans running constantly to ensure infrastructure integrity.', icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-orange-500/10 transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-orange-500" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose Our AI Automation Experts?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Error-Free Precision', desc: 'Humans get tired; code does not. Our automation scripts ensure 100% accuracy in repetitive, high-volume tasks.', icon: FaShieldAlt },
                            { title: 'Massive Cost Reduction', desc: 'By replacing thousands of hours of manual labor with efficient serverless functions, your operational overhead plummets.', icon: FaBolt },
                            { title: 'Scalability on Demand', desc: 'Whether you need to process ten documents a day or ten million, our cloud-native automation scales instantly.', icon: FaSync },
                            { title: 'Seamless Legacy Integration', desc: 'We specialize in writing connective tissue that allows modern AI platforms to interact securely with legacy, on-premise databases.', icon: FaProjectDiagram }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 font-bold text-lg shadow-sm border border-amber-100">
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

export default AiAutomation;
