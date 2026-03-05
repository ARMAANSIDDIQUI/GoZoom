import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const MobileAppDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* Hero Banner — Purple Mobile colors */}
            {/* Hero Banner — Purple Mobile colors */}
            <section className="hero-premium">
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-pink-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 block py-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                                Mobile Development
                            </div>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
                                Top Mobile App Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Company</span>
                            </h1>
                            <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                                Crafting secure, dynamic solutions for iOS, Android, and Cross-Platform, ensuring robustness and performance.
                            </p>

                            {/* Stats Grid - Glassmorphism */}
                            <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="500">
                                {[
                                    { label: 'User Engagement', value: '100k' },
                                    { label: 'Featured Apps', value: '100+' },
                                    { label: 'Apps Published', value: '600+' },
                                ].map((stat, i) => (
                                    <div key={i} className="glass-card p-4 text-center">
                                        <p className="text-xl lg:text-2xl font-black text-white">{stat.value}</p>
                                        <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="700">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-12 py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-black text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider gap-3 group">Talk to Our Expert <FaArrowRight className="group-hover:translate-x-1 transition-transform" /></Link>
                                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-12 py-5 rounded-2xl bg-white/5 text-white text-center font-black text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider gap-3">Know More</Link>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center" data-aos="fade-left">
                            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[80px]"></div>
                            <img src="../images/app-mockup.png" alt="App development" className="w-full max-w-lg mx-auto relative z-10 animate-float drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
                <div className="container relative z-10 block">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 font-bold text-sm mb-4">We Are Gozoom Technologies</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Award</span> Winning App Development Company</h2>
                        <p className="text-xl text-slate-600 font-semibold mb-4">#1 Mobile App Company, Awarded for its Top Features/Editor Apps Delivered.</p>
                        <p className="text-lg text-slate-600 leading-relaxed">Gozoom Technologies is a leading global player in Web, App, and Digital Marketing services. Specializing in Web Design, App Development, Digital Marketing, Product Design, and Cloud Services, we prioritize affordability while delivering top-quality solutions.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { num: '3000+', label: 'Projects Delivered', color: 'purple' },
                            { num: '100+', label: 'Enterprise Clients', color: 'violet' },
                            { num: '30+', label: 'Expert Team', color: 'pink' },
                            { num: '7+', label: 'Success Years', color: 'fuchsia' },
                        ].map((stat, i) => (
                            <div key={i} className="glass-card bg-white p-6 rounded-2xl text-center shadow-xl border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <h3 className="text-3xl font-extrabold text-slate-800 mb-2">{stat.num}</h3>
                                <p className="text-slate-600 font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Types Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(147,51,234,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236,72,153,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Our Services</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">We build modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">mobile experiences</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { img: '../images/icons/android.svg', title: 'Android Development', desc: 'Elevate your business with our expert Android development services. We create cutting-edge apps for optimal performance and user satisfaction.', link: '/android-development', color: 'green' },
                            { img: '../images/icons/apple.svg', title: 'iOS Development', desc: 'Transform your vision into reality with our iOS development expertise. From concept to launch, we craft sleek, intuitive apps that captivate users.', link: '/ios-development', color: 'slate' },
                            { img: '../images/icons/cube.svg', title: 'Hybrid App Development', desc: 'Hybrid apps offer cost-effective solutions, reaching wider audiences with seamless performance across platforms, saving time and resources.', link: '#', color: 'indigo' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay={i * 150}>
                                <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src={item.img} alt={item.title} className="w-10 h-10" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm mb-5">{item.desc}</p>
                                <Link to={item.link} className="text-purple-400 font-bold hover:text-pink-400 inline-flex items-center gap-1 transition-colors">Read More <FaArrowRight className="text-sm" /></Link>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white">Hire World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Mobile App Developers</span></h3>
                        <Link to="/contact" className="flex-shrink-0 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:-translate-y-1 flex items-center gap-2">Hire Now <FaArrowRight /></Link>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-700 font-bold text-sm mb-4">Tech Stack</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">We Work With</span></h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
                        {[
                            { name: 'iOS', img: 'apple.svg' }, { name: 'Android', img: 'android.svg' }, { name: 'Flutter', img: 'flutterio-icon.svg' },
                            { name: 'Java', img: 'java.svg' }, { name: 'React Native', img: 'physics.svg' }, { name: 'Kotlin', img: '../kotlin.png', rel: true },
                            { name: 'Swift', img: 'swift.svg' }, { name: 'Dart', img: '../dart.png', rel: true }, { name: 'Java', img: 'java.svg' }
                        ].map((tech, i) => (
                            <div key={i} className="glass-card bg-white border border-slate-100 p-4 rounded-2xl text-center hover:bg-purple-50 hover:border-purple-200 hover:-translate-y-2 transition-all duration-300 group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 50}>
                                <div className="h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                                    <img src={tech.rel ? tech.img : `../images/icons/${tech.img}`} alt={tech.name} className="max-h-10 w-auto" />
                                </div>
                                <p className="font-semibold text-slate-700 group-hover:text-purple-600 text-xs">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileAppDev;
