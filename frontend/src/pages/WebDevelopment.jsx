import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaCode, FaMobileAlt, FaApple, FaAndroid, FaRobot, FaSearch, FaDesktop, FaCheckCircle, FaRocket, FaShieldAlt, FaComments } from 'react-icons/fa';
import { SiPhp, SiLaravel, SiAngular, SiReact, SiHtml5, SiJquery, SiCodeigniter } from 'react-icons/si';

const WebDevelopment = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { icon: SiPhp, color: 'text-indigo-400', title: 'PHP', desc: 'A popular general-purpose scripting language powering everything from blogs to the most popular websites globally.', link: '/hire-php-developer', linkText: 'Hire PHP Developers' },
        { icon: SiLaravel, color: 'text-red-500', title: 'Laravel', desc: 'An accessible and powerful web application framework with expressive and elegant syntax for modern artisans.', link: '/laravel-development-company', linkText: 'Hire Laravel Developers' },
        { icon: SiAngular, color: 'text-red-600', title: 'Angular', desc: 'An extensive platform for building expressive mobile and desktop web applications with compelling interfaces.', link: '/hire-angular-developer', linkText: 'Hire Angular Developers' },
        { icon: SiReact, color: 'text-cyan-400', title: 'React', desc: 'A flexible JavaScript library for building remarkable, highly-responsive user interfaces and SPA web applications.', link: '/hire-react-developer', linkText: 'Hire React Developers' },
        { icon: SiHtml5, color: 'text-orange-500', title: 'HTML/CSS', desc: 'Convert your custom web designs to responsive HTML with enhanced performance and smooth user experiences.', link: '/hire-html-developer', linkText: 'Hire Front-End Developers' },
        { icon: SiJquery, color: 'text-blue-500', title: 'jQuery', desc: "A fast, small, and feature-rich JS library which allows developers to quickly learn and accomplish structural tasks.", link: '/hire-jquery-developers', linkText: 'Hire jQuery Developers' },
        { icon: FaMobileAlt, color: 'text-slate-600', title: 'Mobile Apps', desc: 'State-of-the-art technologies to develop modern mobile apps, designed & powered by emerging cross-platform stacks.', link: '/mobile-application-development', linkText: 'Hire Mobile Developers' },
        { icon: FaAndroid, color: 'text-green-500', title: 'Android App', desc: 'Secure and scalable Android application development utilizing the latest Kotlin architectures and Android SDKs.', link: '/android-development', linkText: 'Hire Android Developers' },
        { icon: FaApple, color: 'text-slate-800', title: 'iOS App', desc: 'Premium, native iOS application development tailored for enterprises and consumer markets using Swift.', link: '/ios-development', linkText: 'Hire iOS Developers' },
        { icon: FaComments, color: 'text-purple-500', title: 'Chatbot', desc: 'Intelligent AI-powered bots that automate customer interaction and radically elevate the customer service experience.', link: '/chatbot', linkText: 'Hire Chatbot Developers' },
        { icon: FaSearch, color: 'text-yellow-500', title: 'SEO & Marketing', desc: 'Data-driven white-hat SEO strategies ready to skyrocket your online presence and reach your target audience natively.', link: '/expert-seo-services', linkText: 'Talk to SEO Experts' },
        { icon: FaDesktop, color: 'text-blue-400', title: 'Kiosk Solutions', desc: 'Interactive point-of-sale kiosk software solutions that enhance customer autonomy and streamline retail operations.', link: '/kiosks', linkText: 'Explore Kiosks' },
        { icon: SiCodeigniter, color: 'text-orange-600', title: 'CodeIgniter', desc: 'A powerful PHP framework with a tiny footprint, built for developers needing a simple toolkit for full-featured web apps.', link: '/hire-codeIgniter-developers', linkText: 'Hire CodeIgniter Developers' },
    ];

    const testimonials = [
        { name: 'Aditya Rathor', company: 'Maison Infra', text: "We engaged with Gozoom Web Development for our company's website overhaul, and the results were exceptional. Their team exhibited profound technical expertise, delivering a modern and user-friendly website." },
        { name: 'Rishabh', company: 'Bucket Bun', text: "Working with Gozoom Web Development was a game-changer for our business. Their team of developers demonstrated unparalleled skill and creativity in bringing our vision to life." },
        { name: 'Himanshu Singh', company: 'Exon SAHA', text: "We partnered with Gozoom Web Development to revamp our company's online presence, and the outcome exceeded our expectations. Their technical prowess and innovative approach transformed our website." },
        { name: 'Ravi Kumar', company: 'Sokkiefy', text: "Hiring Gozoom Web Development was one of the best decisions we made for our e-commerce venture. Their expertise in web development and e-commerce solutions helped us create a robust online store." },
    ];

    return (
        <div>
            {/* Hero Banner — Blue Web colors */}
            <section className="hero-premium">
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="container relative z-10 min-h-[85vh] lg:min-h-screen py-16 lg:py-24 flex items-center">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                Web Development
                            </div>
                            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
                                Web Development Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">You Can Trust</span>
                            </h1>
                            <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl font-medium" data-aos="fade-up" data-aos-delay="400">
                                Creating powerful, effective, and engaging web experiences for businesses of all sizes
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="600">
                                <a href="#explore" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-black hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">Explore Services</a>
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-10 py-4 rounded-2xl bg-white/5 text-white text-center font-bold hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20">Enquire Now</Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative w-full max-w-[450px] aspect-square animate-float">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[3rem] blur-3xl"></div>
                                <div className="relative z-10 w-full h-full bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md shadow-2xl p-8 flex flex-col items-center justify-center gap-8">
                                    <div className="grid grid-cols-2 gap-8 w-full place-items-center">
                                        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center shadow-lg border border-cyan-500/20"><SiReact className="w-10 h-10 text-cyan-400" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center shadow-lg border border-red-500/20"><SiAngular className="w-10 h-10 text-red-500" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center shadow-lg border border-indigo-500/20"><SiPhp className="w-10 h-10 text-indigo-400" /></div>
                                        <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center shadow-lg border border-orange-500/20"><SiLaravel className="w-10 h-10 text-orange-500" /></div>
                                    </div>
                                    <div className="w-1/2 h-1 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-full mt-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="explore" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4">What We Offer</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">Our Website <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Development Services</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group text-center" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="h-20 w-20 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    <svc.icon className={`w-10 h-10 ${svc.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                                <Link to={svc.link} className="text-blue-600 font-bold hover:text-indigo-600 inline-flex items-center gap-1 transition-colors">
                                    {svc.linkText} <FaArrowRight className="text-sm" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(37,99,235,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99,102,241,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Why Choose Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Why Brands Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Gozoom</span> for Web Development</h2>
                            <div className="space-y-4">
                                {[
                                    { text: 'Custom web design and development methodology', icon: FaCode },
                                    { text: 'Recognized as an award-winning website development firm', icon: FaCheckCircle },
                                    { text: 'Affordable rates for website design and development expertise', icon: FaRocket },
                                    { text: 'In-house front-end specialists: BA, UX/UI Design, Responsive Dev', icon: FaDesktop },
                                    { text: 'A friendly, open, communicative, and collaborative client approach', icon: FaComments },
                                    { text: 'Demonstrated history of successful project delivery', icon: FaShieldAlt },
                                    { text: 'Thorough quality assurance (QA) testing prior to launch', icon: FaSearch },
                                    { text: 'Reduced development times leading to massive cost savings', icon: FaAndroid },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/10 transition-colors">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500/30 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <span className="text-slate-300 flex items-center">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">Get In Touch</Link>
                            </div>
                        </div>
                        <div className="relative hidden lg:block" data-aos="fade-left">
                            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-[40px]"></div>
                            <img src="/images/web-client.png" alt="Web Clients" className="w-full relative z-10 rounded-3xl shadow-2xl animate-float" />
                        </div>
                    </div>
                </div>
            </section>

            {/* In-House Team Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
                        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Our Team</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">In-House Developers</span></h3>
                                <p className="text-slate-300 text-lg italic mb-4">Have peace of mind knowing we'll deliver outstanding solutions with affordability in mind!</p>
                                <p className="text-slate-400 mb-6">Our team of web development professionals is ready to bring your dream website, online store, or custom web application to life with speed and precision.</p>
                                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">Get Developers Today</Link>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { num: '3000+', label: 'Projects Delivered', color: 'blue' },
                                    { num: '100+', label: 'Enterprise Clients', color: 'indigo' },
                                    { num: '300+', label: 'Expert Developers', color: 'sky' },
                                    { num: '7+', label: 'Years Experience', color: 'cyan' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                                        <p className="text-3xl font-extrabold text-white mb-1">{stat.num}</p>
                                        <p className="text-slate-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4 uppercase tracking-wider">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Clients Say!</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((t, i) => (
                            <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-blue-600">{t.name[0]}</span>
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-slate-800">{t.name}</h5>
                                        <span className="text-slate-500 text-sm">{t.company}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic">"{t.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopment;
