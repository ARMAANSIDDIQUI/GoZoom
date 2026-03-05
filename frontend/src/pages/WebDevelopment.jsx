import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const WebDevelopment = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { img: './images/PHP-logo.svg', title: 'PHP', desc: 'PHP is a popular general-purpose scripting language powering everything from your blog to the most popular websites in the world.', link: '/hire-php-developer', linkText: 'Hire PHP Developers' },
        { img: './images/laravel-icon.svg', title: 'Laravel', desc: 'Laravel is an accessible and powerful web application framework with expressive and elegant syntax.', link: '/laravel-development-company', linkText: 'Hire Laravel Developers' },
        { img: './images/angular-icon.svg', title: 'Angular', desc: 'Angular is an extensive platform for building expressive mobile and desktop web applications with compelling user interfaces.', link: '/hire-angular-developer', linkText: 'Hire Angular Developers' },
        { img: './images/react-js-icon.svg', title: 'React', desc: 'A flexible JavaScript library for building remarkable user interfaces for web applications and native mobile applications.', link: '/hire-react-developer', linkText: 'Hire React Developers' },
        { img: './images/html-icon.svg', title: 'HTML/CSS', desc: 'Convert your custom web designs to HTML with enhanced performance, rich user interfaces and a smooth user experience.', link: '/hire-html-developer', linkText: 'Hire Front-End Developers' },
        { img: './images/jquery-icon.svg', title: 'jQuery', desc: "jQuery is a popular, light-weight and easy-to-use JS library which allows developers to quickly learn and accomplish tasks faster.", link: '/hire-jquery-developers', linkText: 'Hire jQuery Developers' },
        { img: './images/mobile.png', title: 'Mobile Apps', desc: 'Provide the state of the art Technologies to develop the modern mobile apps, designed & powered by new emerging technologies.', link: '/mobile-application-development', linkText: 'Hire Mobile Developers' },
        { img: '/images/android-icon.svg', title: 'Android App', desc: 'Secure and scalable Android application development utilizing the latest architecture and Android SDKs.', link: '/android-development', linkText: 'Hire Android Developers' },
        { img: '/images/apple-icon.svg', title: 'iOS App', desc: 'Premium, native iOS application development tailored for enterprises and consumer markets.', link: '/ios-development', linkText: 'Hire iOS Developers' },
        { img: './images/chatbot-icon.svg', title: 'Chatbot', desc: 'Intelligent AI-powered bots that automate customer interaction and elevate the customer service experience.', link: '/chatbot', linkText: 'Hire Chatbot Developers' },
        { img: './images/seo.png', title: 'SEO & Marketing', desc: 'Are you ready to skyrocket your online presence and reach your target audience like never before?', link: '/expert-seo-services', linkText: 'Talk to SEO Experts' },
        { img: './images/kiosk-icon.svg', title: 'Kiosk Solutions', desc: 'Interactive kiosk software solutions that enhance customer experience and streamline operations.', link: '/kiosks', linkText: 'Explore Kiosks' },
        { img: './images/codeigniter-icon.svg', title: 'CodeIgniter', desc: 'A powerful PHP framework with a tiny footprint, built for developers who need a simple toolkit to create full-featured web apps.', link: '/hire-codeIgniter-developers', linkText: 'Hire CodeIgniter Developers' },
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

                <div className="container relative z-10 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-screen py-24">
                    <div className="max-w-4xl text-center mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            Web Development
                        </div>
                        <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
                            Web Development Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">You Can Trust</span>
                        </h1>
                        <p className="text-hero-desc text-slate-400 mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                            Creating powerful, effective, and engaging web experiences for businesses of all sizes
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="600">
                            <a href="#explore" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center font-black hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-1">Explore Services</a>
                            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] px-10 py-4 rounded-2xl bg-white/5 text-white text-center font-bold hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20">Enquire Now</Link>
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
                                <div className="h-20 flex items-center justify-center mb-5">
                                    <img src={svc.img} className="max-h-14 w-auto group-hover:scale-110 transition-transform" alt={svc.title} />
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
                                    'Custom web design and development methodology',
                                    'Recognized as an award-winning website development firm',
                                    'Affordable rates for website design and development expertise',
                                    'In-house front-end specialists: BA, UX/UI Design, Responsive Dev',
                                    'A friendly, open, communicative, and collaborative client approach',
                                    'Demonstrated history of successful project delivery',
                                    'Thorough quality assurance (QA) testing prior to launch',
                                    'Reduced development times leading to cost savings',
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 p-4 bg-white/5 rounded-xl hover:bg-blue-500/10 transition-colors">
                                        <div className="flex-shrink-0 w-6 h-6 bg-blue-500/30 rounded-lg flex items-center justify-center mt-0.5">
                                            <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-slate-300">{item}</span>
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
