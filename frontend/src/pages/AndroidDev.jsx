import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaAndroid, FaMobileAlt, FaLayerGroup, FaTachometerAlt, FaGamepad, FaRobot, FaCheckCircle, FaShieldAlt, FaRocket, FaHandshake } from 'react-icons/fa';

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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Native Android Performance', desc: 'Crafting apps in Kotlin to squeeze out every drop of performance from Android hardware without cross-platform lag.', icon: FaTachometerAlt },
                            { title: 'Android TV & Wearables', desc: 'Extending your brand’s reach by deploying optimized interfaces for Wear OS devices, smartwatches, and Android TV.', icon: FaMobileAlt },
                            { title: 'Legacy App Modernization', desc: 'Migrating outdated Java codebases safely to modern Kotlin architectures featuring Coroutines and Jetpack Compose.', icon: FaLayerGroup },
                            { title: 'AR/VR Integration', desc: 'Utilizing ARCore to build deeply immersive augmented reality experiences for retail, education, and gaming apps.', icon: FaGamepad },
                            { title: 'Machine Learning On-Device', desc: 'Integrating TensorFlow Lite to empower your app with image recognition and NLP directly on the user’s phone.', icon: FaRobot },
                            { title: 'Enterprise Mobility', desc: 'Secure, MDM-compliant internal applications designed exclusively for your specialized corporate workforce.', icon: FaShieldAlt },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 mb-6 bg-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 text-green-400 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Work With Us Section */}
            <section className="py-24 bg-white relative" id="learnMore">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">Why You Should Work with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Android Experts</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'Jetpack Compose Mastery', desc: 'We utilize Modern UI toolkits to drastically cut down iteration speed, providing buttery smooth, reactive user interfaces faster than ever before.', icon: FaAndroid },
                            { title: 'Google Play Store Specialists', desc: 'We handle the entire publishing pipeline for you, ensuring your application strictly adheres to the newest Google developer policies and metadata rules.', icon: FaCheckCircle },
                            { title: 'Automated CI/CD Pipelines', desc: 'Using tools like Fastlane and GitHub Actions, we ship daily builds to your testing teams ensuring rapid feedback loops.', icon: FaRocket },
                            { title: 'Ongoing Retainer Support', desc: 'Android OS updates can break apps overnight. We offer SLA-backed maintenance to ensure your app is instantly compatible with new OS drops.', icon: FaHandshake }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 font-bold text-lg shadow-sm border border-green-100">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
            </section>
        </div>
    );
};

export default AndroidDev;
