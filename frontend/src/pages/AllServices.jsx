import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaCloud, FaRobot, FaCode, FaArrowRight, FaCogs, FaProjectDiagram, FaUserTie, FaNetworkWired, FaServer, FaPaintBrush, FaShieldAlt, FaMobileAlt, FaDatabase, FaMagic, FaChartLine, FaDesktop, FaComments, FaSearch, FaAndroid, FaApple, FaTabletAlt, FaGlobe, FaPython, FaLayerGroup, FaJava } from 'react-icons/fa';

const AllServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const serviceCategories = [
        {
            title: "Cloud & Infrastructure",
            icon: <FaCloud className="w-8 h-8 text-cyan-500" />,
            description: "Scalable, secure, and robust cloud solutions tailored for modern enterprises.",
            services: [
                { name: "Cloud Services (AWS, Oracle, Google)", path: "/cloud-services", desc: "Comprehensive cloud migration and management.", icon: FaCloud },
                { name: "Kubernetes & Docker", path: "/devops-services", desc: "Containerization and orchestration solutions.", icon: FaServer },
                { name: "Service Consulting", path: "/service-consulting", desc: "Expert guidance on IT infrastructure and strategy.", icon: FaUserTie }
            ]
        },
        {
            title: "Artificial Intelligence",
            icon: <FaRobot className="w-8 h-8 text-fuchsia-500" />,
            description: "Cutting-edge AI solutions to automate and innovate your business processes.",
            services: [
                { name: "AI Powered Applications", path: "/ai-applications", desc: "Smart applications leveraging machine learning.", icon: FaRobot },
                { name: "Chatbot Development", path: "/chatbot", desc: "Intelligent conversational agents for customer support.", icon: FaComments },
                { name: "AI/Task Automation", path: "/ai-automation", desc: "Streamline operations with smart automation.", icon: FaCogs },
                { name: "Agentic Development", path: "/agentic-development", desc: "Building autonomous AI agents for complex tasks.", icon: FaProjectDiagram },
                { name: "AI Agent Customization", path: "/ai-agent-customization", desc: "Tailoring AI agents to specific business needs.", icon: FaMagic },
                { name: "AI Use Cases", path: "/use-cases", desc: "Explore how AI transforms various industries.", icon: FaChartLine }
            ]
        },
        {
            title: "Web, Mobile & Digital Solutions",
            icon: <FaCode className="w-8 h-8 text-indigo-500" />,
            description: "High-performance, responsive applications built with the latest technologies.",
            services: [
                { name: "Full-Stack Web Development", path: "/web-development", desc: "End-to-end custom web engineering solutions.", icon: FaGlobe },
                { name: "UI / UX Design", path: "/ui-ux-design", desc: "Human-centered, conversion-optimized interfaces and design systems.", icon: FaPaintBrush },
                { name: "Cyber Security", path: "/cyber-security", desc: "Enterprise-grade protection, pen testing, and zero trust architectures.", icon: FaShieldAlt },
                { name: "Mobile App Development", path: "/mobile-application-development", desc: "Cross-platform and native mobile apps.", icon: FaMobileAlt },
                { name: "React Native Apps", path: "/react-native-development", desc: "Cross-platform mobile apps with a single codebase.", icon: FaMobileAlt },
                { name: "Flutter Apps", path: "/flutter-development", desc: "Blazing fast native interfaces built by Google.", icon: FaLayerGroup },
                { name: "Swift iOS Apps", path: "/swift-development", desc: "Premium native Apple experiences built with Swift.", icon: FaApple },
                { name: "Android Development", path: "/android-development", desc: "Secure and scalable native Android applications.", icon: FaAndroid },
                { name: "iOS Development", path: "/ios-development", desc: "Premium iOS mobile experiences built with legacy architectures.", icon: FaApple },
                { name: "Django Development", path: "/django-development", desc: "High-level Python frameworks for robust backends.", icon: FaPython },
                { name: "Java Enterprise Apps", path: "/java-development", desc: "Highly robust, scalable backend enterprise applications.", icon: FaJava },
                { name: "React Development", path: "/react-development", desc: "Interactive and fast user interfaces.", icon: FaCode },
                { name: "Next.js Development", path: "/nextjs-development", desc: "Server-side rendered React applications.", icon: FaCode },
                { name: "Angular Development", path: "/angular-development", desc: "Dynamic single-page applications.", icon: FaCode },
                { name: "Laravel Development", path: "/laravel-development", desc: "Robust and secure PHP web applications.", icon: FaDesktop },
                { name: "SEO & Digital Marketing", path: "/expert-seo-services", desc: "Data-driven strategies to skyrocket your online presence.", icon: FaSearch },
                { name: "Kiosk Solutions", path: "/kiosks", desc: "Interactive kiosk software for enhanced customer autonomy.", icon: FaTabletAlt }
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0a112f] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-indigo-500/25 blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-cyan-500/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight uppercase" data-aos="zoom-in">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Services</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-indigo-100 max-w-3xl mb-10 font-medium" data-aos="fade-up" data-aos-delay="200">
                                Comprehensive digital solutions designed to propel your business forward. From AI and Cloud to robust Web Development.
                            </p>
                        </div>
                        <div className="flex-1 relative flex justify-center lg:justify-end w-full" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[450px] aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl flex items-center justify-center p-8 animate-float">
                                    <div className="grid grid-cols-3 gap-6 sm:gap-10 w-full h-full place-items-center">
                                        <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center"><FaCloud className="w-8 h-8 text-cyan-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center"><FaRobot className="w-8 h-8 text-fuchsia-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center"><FaCode className="w-8 h-8 text-indigo-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center"><FaMobileAlt className="w-8 h-8 text-rose-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center"><FaDatabase className="w-8 h-8 text-emerald-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center"><FaShieldAlt className="w-8 h-8 text-amber-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center"><FaServer className="w-8 h-8 text-blue-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center"><FaChartLine className="w-8 h-8 text-teal-400" /></div>
                                        <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center"><FaMagic className="w-8 h-8 text-purple-400" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-24 relative z-20 -mt-10">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {serviceCategories.map((category, idx) => (
                            <div key={idx} className="relative" data-aos="fade-up">
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800">{category.title}</h2>
                                        <p className="text-slate-500 mt-1">{category.description}</p>
                                    </div>
                                </div>

                                {/* Services Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.services.map((service, s_idx) => (
                                        <Link key={s_idx} to={service.path} className="group block h-full">
                                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                                                    <FaArrowRight className="text-indigo-500" />
                                                </div>
                                                <div className="w-14 h-14 mb-4 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300 delay-75">
                                                    {service.icon ? <service.icon className="w-7 h-7 text-indigo-500" /> : <FaCode className="w-7 h-7 text-indigo-500" />}
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{service.name}</h3>
                                                <p className="text-slate-600 flex-grow leading-relaxed">{service.desc}</p>
                                                <div className="mt-6 pt-4 border-t border-slate-50 relative overflow-hidden">
                                                    <span className="text-sm font-semibold text-indigo-500 flex items-center gap-2">Explore Service <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/HexPatterngrad4.jpg')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                    <p className="text-indigo-100 mb-10 text-lg">Let's discuss how our services can align with your strategic goals.</p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">Schedule a Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default AllServices;
