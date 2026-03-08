import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaUsers, FaChartPie, FaLightbulb, FaLaptopCode, FaProjectDiagram, FaBalanceScale, FaCheckCircle, FaClipboardCheck, FaRegHandshake } from 'react-icons/fa';

const ServiceConsulting = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-white overflow-hidden text-slate-900">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[0%] left-[50%] w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-teal-50 text-teal-600 font-bold text-sm mb-6 uppercase tracking-wider">Expert Guidance</span>
                            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-slate-800">
                                IT Strategy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Consulting</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-12 max-w-2xl font-medium leading-relaxed">
                                Navigate the complex digital landscape with our seasoned IT consultants. We align your technology stack with your core business objectives.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full mt-2">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-slate-900 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-slate-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Book a Session <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <img src="/images/business-people.webp" alt="Consulting Team" className="w-full max-w-[500px] rounded-3xl shadow-2xl z-10 relative" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-3xl mix-blend-overlay z-20"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consulting Services Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-800 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Consulting Offerings</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From high-level strategy to granular technical audits, our consultants provide actionable insights that drive real business value.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Digital Transformation', desc: 'Modernize legacy systems, migrate to the cloud, and adopt new technologies that drastically improve your operational efficiency.', icon: FaChartPie },
                            { title: 'IT Infrastructure Audits', desc: 'Comprehensive, unbiased review of your current tech stack identifying bottlenecks, security flaws, and cost-saving opportunities.', icon: FaClipboardCheck },
                            { title: 'Technology Strategy', desc: 'Aligning your IT investments directly with your business goals, providing a clear roadmap for future technology adoptions.', icon: FaProjectDiagram },
                            { title: 'Vendor Selection & RFP', desc: 'Expert guidance in evaluating third-party software vendors, managing the RFP process, and negotiating technical contracts.', icon: FaBalanceScale },
                            { title: 'Agile & DevOps Coaching', desc: 'Train your internal engineering teams in Agile methodologies and DevOps practices to accelerate your product delivery cycles.', icon: FaUsers },
                            { title: 'Fractional CTO Services', desc: 'Get executive-level technical leadership on a part-time basis to guide your startup or SME through critical growth phases.', icon: FaLaptopCode },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-teal-500/10 transition-shadow duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <item.icon className="w-10 h-10 text-teal-500 mb-4" />
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
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Partner With Us?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Decades of Experience', desc: 'Our senior consultants bring decades of hands-on experience across multiple industries, having navigated complex technological shifts.', icon: FaChartPie },
                            { title: 'Unbiased Recommendations', desc: 'We are completely technology-agnostic. We recommend tools and architectures based solely on what is best for your specific business case.', icon: FaBalanceScale },
                            { title: 'Actionable Roadmaps', desc: 'We don’t just deliver theoretical reports; we provide concrete, step-by-step implementation roadmaps with realistic timelines and budgets.', icon: FaClipboardCheck },
                            { title: 'Collaborative Approach', desc: 'We work as an extension of your team, fostering open communication and knowledge transfer ensuring long-term success.', icon: FaRegHandshake }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 font-bold text-lg shadow-sm border border-teal-100">
                                    <FaCheckCircle className="w-5 h-5" />
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
        </div >
    );
};

export default ServiceConsulting;
