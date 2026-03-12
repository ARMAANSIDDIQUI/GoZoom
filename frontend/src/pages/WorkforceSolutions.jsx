import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaUsers, FaUserTie, FaGlobeAmericas, FaFileSignature, FaMapMarkedAlt, FaSearchPlus, FaTasks, FaChartPie, FaRobot, FaCrown } from 'react-icons/fa';

const solutions = [
    { title: 'Contingent Staffing', desc: 'GoZoom offers contingent staffing solutions to build and manage a flexible, on-demand workforce seamlessly.', icon: FaUsers, link: '/workforce-solutions/contingent-staffing' },
    { title: 'Direct Hire', desc: 'We carefully screen and handpick the best candidates, matching top talent with the perfect job fit for long-term success.', icon: FaUserTie, link: '/workforce-solutions/direct-hire' },
    { title: 'Global Payroll & Compliance', desc: 'Trust our EOR/AOR services with seamless invoicing, compliance management, and payroll processing.', icon: FaGlobeAmericas, link: '/workforce-solutions/global-payroll' },
    { title: 'Statement Of Work (SOW)', desc: 'Top-notch services to streamline projects, define scope, outline deliverables, and manage resources on time and budget.', icon: FaFileSignature, link: '/workforce-solutions/statement-of-work' },
    { title: 'Nearshore and Offshore', desc: 'Flexible global delivery centers providing access to top talent, ensuring seamless collaboration and cost savings.', icon: FaMapMarkedAlt, link: '/workforce-solutions/nearshore-offshore' },
    { title: 'Direct Sourcing', desc: 'Harness our global network to connect directly with the best candidates, eliminating intermediaries and delays.', icon: FaSearchPlus, link: '/workforce-solutions/direct-sourcing' },
    { title: 'Recruitment Process Outsourcing (RPO)', desc: 'We handle every aspect of hiring, from sourcing to onboarding, saving you time and giving access to a larger talent pool.', icon: FaTasks, link: '/workforce-solutions/rpo' },
    { title: 'Diversity Spend Capture', desc: 'Consolidate workforce expenses to meet diversity goals with advanced data analytics and tailored compliance reporting.', icon: FaChartPie, link: '/workforce-solutions/diversity-spend' },
    { title: 'GCC BOT', desc: 'Our Build-Operate-Transfer (BOT) model helps you establish scalable operations and seamless transitions with reduced risk.', icon: FaRobot, link: '/workforce-solutions/gcc-bot' },
    { title: 'Master Vendor Program (MVP)', desc: 'A comprehensive solution eliminating the complexity of managing multiple vendors through a single, streamlined partnership.', icon: FaCrown, link: '/workforce-solutions/mvp' },
];

const WorkforceSolutions = () => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
        window.scrollTo(0, 0);
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return solutions;
        return solutions.filter(
            (s) =>
                s.title.toLowerCase().includes(q) ||
                s.desc.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <div>
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

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Comprehensive Talent Strategy</span>
                        <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight uppercase">
                            Workforce <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 font-medium leading-relaxed">
                            Empower your organization with our end-to-end workforce solutions. From contingent staffing and direct hire to global payroll and comprehensive vendor management, we optimize how you build and manage your teams.
                        </p>
                        <div className="w-full max-w-xl space-y-2 mb-6">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold text-white uppercase tracking-[0.15em] shadow-lg shadow-black/20 animate-wiggle-attn">
                                Search solutions
                            </span>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search workforce solutions (e.g., payroll, RPO, sourcing)..."
                                className="w-full rounded-2xl bg-white/10 border border-white/25 text-white placeholder-white/75 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
                            />
                            {/* <p className="text-white/70 text-xs font-medium">
                                Tip: try “payroll”, “RPO”, “sourcing”, or “vendor”.
                            </p> */}
                        </div>
                        <Link to="/contact" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                            Partner With Us <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20" data-aos="fade-up">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Workforce Ecosystem</span></h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">Discover the tailored solutions we offer to help you acquire, manage, and optimize the talent your business needs to thrive globally.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filtered.length === 0 && (
                            <div className="col-span-full text-center text-slate-500 text-lg">
                                No solutions match “{query}”. Try another keyword.
                            </div>
                        )}
                        {filtered.map((item, i) => (
                            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 group flex flex-col h-full" data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
                                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-cyan-500">
                                    <item.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                <Link to={item.link} className="inline-flex items-center gap-2 text-cyan-600 font-bold text-sm hover:text-cyan-800 transition-colors mt-auto">
                                    Explore Solution <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WorkforceSolutions;
