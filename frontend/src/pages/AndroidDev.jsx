import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const AndroidDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Banner Section */}
            {/* Hero Section */}
            <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-24 pb-20 bg-[#0a1f0a] overflow-hidden">
                {/* Android Decorative Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 -ml-40 -mt-20 w-96 h-96 rounded-full bg-green-500/30 blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 -mr-40 -mb-20 w-96 h-96 rounded-full bg-emerald-600/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4ade80 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="w-full lg:flex-1 text-center flex flex-col items-center" data-aos="fade-right">
                            <span className="inline-block py-1 px-4 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">Android Development</span>
                            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-tight uppercase">
                                Leading Android App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Experts</span>
                            </h1>
                            <p className="text-hero-desc text-slate-300 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium">
                                Build powerful, native Android experiences that engage users and drive business growth through innovative engineering.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-black text-center text-base lg:text-lg hover:shadow-2xl hover:shadow-green-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-white/5 text-white font-black text-center text-base lg:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 p-6 sm:p-10 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] sm:rounded-[4rem] border border-white/10 backdrop-blur-md w-full max-w-[300px] lg:max-w-[360px] shadow-2xl flex items-center justify-center animate-float">
                                <img src="/images/android.svg" alt="Android Specialist" className="w-full h-auto drop-shadow-[0_25px_60px_rgba(74,222,128,0.4)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                <div className="container relative z-10 block">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-green-50 text-green-600 font-bold text-sm mb-4">Our Approach</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                                Assisting Businesses in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Transforming Ideas</span> into Amazing Android Experiences.
                            </h2>
                            <div className="space-y-5">
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-green-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                    Java is one of the most prominent and essential programming languages, fueling a significant portion of the mobile app ecosystem. With millions of apps built using Java, it stands as the preferred choice for feature-rich Android app development.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Our <strong>team of experienced Android application developers</strong> deliver stable and efficient code that empowers clients worldwide. Collaborating with GoZooms ensures access to top-notch, tailored, and innovative Android app solutions. Leveraging a refined process honed over years of experience, we minimize development time and costs while maximizing quality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specializes Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-green-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(74,222,128,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16,185,129,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Expertise</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Our Android Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Specializes In...</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="100">
                            <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <img src="../images/phpsnowflake.svg" className="w-10 h-10" alt="Minimized Cost" />
                            </div>
                            <p className="text-slate-200 leading-relaxed">
                                Providing exceptional, customized, and distinctive Android app development solutions with a proven development process that <strong className="text-white">minimizes time and cost.</strong>
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="200">
                            <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <img src="../images/phpdiamond.svg" className="w-10 h-10" alt="Robust Infrastructure" />
                            </div>
                            <p className="text-slate-200 leading-relaxed">
                                Adhering to dominant and flawless core Android development practices, employing robust infrastructure and flexible models to craft outstanding Android applications.
                            </p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="300">
                            <div className="w-20 h-20 mx-auto mb-6 bg-teal-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <img src="../images/phpplane.svg" className="w-10 h-10" alt="Rapid Development" />
                            </div>
                            <p className="text-slate-200 leading-relaxed">
                                Accelerating the development of Android mobile apps and interfaces by implementing more efficient coding techniques, resulting in reduced development time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-24 bg-slate-50 relative" id="learnMore">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">Why Choose Us</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why You Should Work with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Android Developers</span></h3>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4" data-aos="fade-right">
                            {[
                                { title: 'Profound Expertise', desc: 'Our profound expertise ensures unparalleled efficiency in Android development.' },
                                { title: 'Optimal Performance', desc: 'We consistently deliver optimal performance, yielding exceptional results for our Android clients.' },
                                { title: 'MVC Architecture', desc: 'Our utilization of Model-View-Controller architecture streamlines Android app development.' },
                                { title: 'Competitive Rates', desc: 'We are dedicated to providing efficient solutions at competitive rates, maximizing value for our Android partners.' },
                                { title: 'Flawless Code', desc: 'Years of hands-on experience enable us to produce precise and flawless Android code.' },
                                { title: 'Unwavering Support', desc: 'We offer unwavering customer support and technical guidance through various channels for our Android projects.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">{item.title}</p>
                                        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center" data-aos="fade-left">
                            <div className="glass-card bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 inline-block">
                                <img src="../images/androidboy2.jpg" className="w-40 h-52 mx-auto mb-6 rounded-2xl object-cover shadow-lg" alt="Android Developers" />
                                <p className="text-2xl font-bold text-slate-800 mb-6">Ask our Android Experts<br /><span className="text-green-600">about their services today!</span></p>
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-1">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AndroidDev;
