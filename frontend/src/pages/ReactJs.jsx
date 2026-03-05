import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const ReactJs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const services = [
        { img: '../images/reactmy1.svg', title: 'React Web App Development', desc: 'Our React development and design experts can help you build fast, scalable and large web applications.' },
        { img: '../images/react2.png', title: 'React Native Mobile Apps', desc: "We can build, test, and launch your dream mobile app on Android and iOS. Let our React Native experts handle it!" },
        { img: '../images/react3.png', title: 'Static & Dynamic Websites', desc: 'We create powerful and scalable web applications with React using frameworks like Next.js and Gatsby.' },
        { img: '../images/react4.png', title: 'React UI Development', desc: 'Let GoZooms React specialists develop impeccable user interfaces that are flexible and interactive!' },
        { img: '../images/react5.jpg', title: 'Server-Side Development', desc: "Our React experts can deliver secure, next generation experiences through React's server-side rendering components." },
        { img: '../images/react6.svg', title: 'React Migration & Optimization', desc: 'Want to migrate to React from another JavaScript library? We can help you with that, as well as do optimization!' },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#0a192f] overflow-hidden">
                {/* Handcrafted Decorative Elements (matching Hire style) */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#61dafb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
                            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-6 uppercase tracking-wider">React Framework</span>
                            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] uppercase">
                                Hire Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">React Developers</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                                Build the future of web applications with GoZooms' React.js developers — performance-first and component-ready.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                    About Us
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-4 rounded-[40px] border border-white/10 backdrop-blur-sm shadow-2xl w-full max-w-[400px] animate-zoom-in-out">
                                <img src="/images/react2.png" alt="React Development" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
                <div className="container relative z-10 block">
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6 mt-12 lg:mt-0">
                            Next Level of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">ReactJS Development</span>
                        </h2>
                        <div className="space-y-5">
                            <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-cyan-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                GoZooms' developers use React to create impressively flexible user interfaces for web applications. Using React, we can help businesses build static or dynamic websites using frameworks like Next.js, React Native mobile apps, or even desktop apps using Electron.js!
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                With our expertise and knowledge with React, you don't need to look anywhere else for professional and dedicated React developers. Our React.js developers have experience with technology stacks like MERN, and adhere to strict architectural principles when building any React application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-cyan-950/50 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(6,182,212,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.5) 0%, transparent 50%)' }}></div>
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-4 uppercase tracking-wider" data-aos="fade-down">What We Build</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-white" data-aos="fade-up">Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">React JS Development Services</span></h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((svc, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-20 h-20 mx-auto mb-6 bg-cyan-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <img src={svc.img} className="w-12 h-12 object-contain" alt={svc.title} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{svc.title}</h4>
                                <p className="text-slate-300 leading-relaxed text-sm">{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1">Get Started</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-slate-50 relative">
                <div className="container relative z-10 block">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-4">Why Choose Us</span>
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">ReactJS Developers?</span></h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            { img: '../images/react11.png', title: 'Flexible Development Solutions', desc: 'Whether you want to build a web application or just want ongoing development support, you can hire our dedicated developers on our monthly or fixed pricing packages.' },
                            { img: '../images/react11.png', title: 'Expertise & Experience', desc: 'Our developers are chosen based on their knowledge not only with React, but with other JavaScript libraries, technology stacks and their ability to adhere to software principles.' },
                            { img: '../images/react12.png', title: 'Satisfaction Guarantee', desc: "We constantly strive for perfection in the solutions we deliver. We make sure you're kept in the loop during the development process, so your expectations are met." },
                            { img: '../images/react13.png', title: 'Quality With Affordability', desc: "With our in-house development team we ensure the quality of your project exceeds your expectations, not your budget. Let GoZooms take care of your React app development." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center">
                                    <img src={item.img} alt={item.title} className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-900 to-slate-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="container relative z-10 block">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-4">Get In Touch</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">Get Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">React Experts</span> Today!</h3>
                            <p className="text-slate-300 mt-4">Fill out the form below and our experts will get back to you shortly.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                <input type="tel" placeholder="Phone" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                                <input type="text" placeholder="Subject" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors" />
                            </div>
                            <textarea rows="4" placeholder="Tell us more about your project" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors mb-6"></textarea>
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
                                    <input type="checkbox" defaultChecked className="rounded" />
                                    I agree to the <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>
                                </label>
                                <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:-translate-y-1">Send Enquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReactJs;
