import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaApple, FaMobileAlt, FaTabletAlt, FaClock, FaTv, FaCodeBranch, FaCogs, FaShieldAlt, FaRocket, FaCheckCircle, FaUserTie } from 'react-icons/fa';

const IosDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}




            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0a112f] overflow-hidden">
                {/* iOS Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-cyan-500/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-sky-400/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">iOS Development</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight uppercase">
                                Get iOS Expert for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Enterprises</span>
                            </h1>
                            <p className="text-hero-desc text-blue-100 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium">
                                Our expert iOS developers help you build custom, scalable, and secure applications that deliver premium user experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-center text-base lg:text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-white/5 text-white font-black text-center text-base lg:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                    About Us
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-8 lg:p-12 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem] lg:rounded-[5rem] border border-white/10 backdrop-blur-xl w-full max-w-[300px] lg:max-w-[380px] shadow-2xl flex items-center justify-center group/ios hover:scale-105 transition-transform duration-500">
                                <img src="/images/apple-ios-app-store-seeklogo.svg" alt="iOS Specialist" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(14,165,233,0.3)] filter brightness-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1" data-aos="fade-right">
                            <div className="space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-2">iOS Development</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">We Provide Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">iOS App</span> Development Support</h2>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                    Streamline iOS app development with Swift, a versatile and intuitive programming language.
                                    Swift's syntax simplifies coding tasks, from UI design to backend functionality, enhancing
                                    app performance and user experience.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At GoZooms, we focus on <strong>elevating your digital presence with comprehensive iOS app development services.</strong> Our seasoned team leverages Swift, Apple's powerful programming language, to craft cutting-edge mobile solutions tailored to your business objectives. From concept ideation to app store deployment, we guide you through every step of the development process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14,165,233,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(56,189,248,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Expertise</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Our iOS Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Capabilities</span></h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'iPhone App Development', desc: 'Custom applications engineered from the ground up to utilize the full capabilities of modern iPhones and iOS features.', icon: FaMobileAlt },
                            { title: 'iPad App Development', desc: 'Tablet-optimized interfaces that take advantage of the larger screen real-estate for productivity and media consumption.', icon: FaTabletAlt },
                            { title: 'Apple Watch Apps', desc: 'Glanceable, highly-efficient watchOS companion applications for fitness, notifications, and rapid interactions.', icon: FaClock },
                            { title: 'Apple TV (tvOS) Apps', desc: 'Immersive media streaming and gaming applications designed specifically for the living room experience.', icon: FaTv },
                            { title: 'iOS UI/UX Design', desc: 'Human Interface Guidelines (HIG) compliant designs that feel natural, premium, and inherently Apple.', icon: FaApple },
                            { title: 'App Store Deployment', desc: 'End-to-end assistance slicing through the red tape of the Apple App Store review process for rapid publishing.', icon: FaRocket },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 mb-6 bg-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative py-32 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ "backgroundImage": "url(\"../images/hire_dedicated_ios_development_service_81065c6945.jpg\")" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="container relative z-10 block text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Hire <span className="text-gradient-cyan">iOS App Developer</span> for All your Needs</h2>
                    <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                        iOS app developers from GoZoom are known for their ability to come up with unique ideas and
                        develop feature-rich yet customer-centric applications using domain-oriented methodologies.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/contact" className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:-translate-y-1">Hire iOS Developer</Link>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">Why Us</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why Should You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Choose Us?</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Customized Experiences', desc: 'Our specialized iOS development process utilizes the latest stable iOS frameworks (SwiftUI) to provide extended functionality tailored for your business.', icon: FaCogs },
                            { title: 'Satisfaction Guarantee', desc: 'For us, customer satisfaction is of the utmost importance. We will provide you with dedicated iOS developers focused entirely on your project.', icon: FaCheckCircle },
                            { title: 'Uncompromising Security', desc: 'We implement the highest standards of data protection, utilizing Keychain and secure enclaves for enterprise-grade security.', icon: FaShieldAlt },
                            { title: 'Fast Development', desc: 'Having developers that possess strong time management skills is our specialty. You can trust us to efficiently deliver results on time and on budget.', icon: FaRocket },
                            { title: 'Premium Code Quality', desc: 'By strictly adhering to SOLID principles and Clean Architecture, we guarantee that your codebase remains stable and scalable for years.', icon: FaCodeBranch },
                            { title: '18/5 Technical Support', desc: 'Our dedicated support team and strong technical assistance helps your business through any issues via email, Slack, or direct calls.', icon: FaUserTie },
                        ].map((item, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-blue-500 group-hover:text-cyan-500 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>















            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default IosDev;
