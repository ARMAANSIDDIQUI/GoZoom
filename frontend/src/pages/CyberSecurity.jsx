import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaShieldAlt, FaLock, FaUserSecret, FaSearch, FaServer, FaEye } from 'react-icons/fa';

const CyberSecurity = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a0f18] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="red" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Uncompromising Defense</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight uppercase">
                                Cyber <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Security</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Protect your digital assets, secure your infrastructure, and ensure compliance with our enterprise-grade cybersecurity solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Secure Your Data <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-10 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md w-full shadow-2xl animate-float">
                                <FaShieldAlt className="text-red-500 w-full h-auto drop-shadow-[0_20px_60px_rgba(239,68,68,0.5)]" size={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer / Capabilities */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 font-bold text-sm mb-4">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">What We Build & Protect</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From offensive security testing to defensive architecture, we secure every layer.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Penetration Testing', desc: 'Ethical hacking services mimicking real-world attacks to identify vulnerabilities in your web apps, APIs, and networks.', icon: FaUserSecret },
                            { title: 'Vulnerability Assessments', desc: 'Comprehensive scanning and auditing of your entire IT infrastructure to proactively discover and patch security flaws.', icon: FaSearch },
                            { title: 'Cloud Security', desc: 'Securing AWS, Azure, and GCP environments with strict IAM policies, data encryption, and configuration management.', icon: FaServer },
                            { title: 'Compliance & Governance', desc: 'Mapping your security posture to industry standards like HIPAA, SOC2, PCI-DSS, and GDPR to guarantee compliance.', icon: FaLock },
                            { title: '24/7 Threat Monitoring', desc: 'Deploying advanced SIEM solutions and Security Operations Center (SOC) capabilities for round-the-clock vigilance.', icon: FaEye },
                            { title: 'Zero Trust Architectures', desc: 'Implementing modern security frameworks where every access request is strongly authenticated, authorized, and continuously validated.', icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-red-500/10 transition-shadow duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-red-600" />
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
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-800 font-bold text-sm mb-4">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why Choose Our Security Experts?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Elite Ethical Hackers', desc: 'Our team comprises certified professionals (OSCP, CISSP) who possess a deep understanding of attacker methodologies and evasion techniques.', icon: FaUserSecret },
                            { title: 'Proactive Threat Intelligence', desc: 'We don’t just react; we consume global threat feeds to anticipate zero-day vulnerabilities and apply patches before exploitation.', icon: FaSearch },
                            { title: 'DevSecOps Integration', desc: 'Security should not slow down development. We weave automated security gates directly into your CI/CD pipelines for frictionless deployment.', icon: FaServer },
                            { title: 'Rapid Incident Response', desc: 'In the event of a breach attempt, our rapid response team is on standby to isolate, contain, and remediate the threat immediately.', icon: FaShieldAlt }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 font-bold text-lg shadow-sm border border-red-100">
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

export default CyberSecurity;
