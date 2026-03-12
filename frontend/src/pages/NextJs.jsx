import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaTachometerAlt, FaSearchPlus, FaServer, FaCodeBranch, FaRocket, FaShieldAlt, FaMobileAlt, FaDraftingCompass, FaCogs } from 'react-icons/fa';

const NextJs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#fafafa] overflow-hidden">
                {/* Dark Grid Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px]"></div>
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 lg:px-16 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left mx-auto lg:mx-0">
                            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tight" data-aos="fade-up">
                                Next.js <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">Development</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 max-w-2xl font-medium" data-aos="fade-up" data-aos-delay="100">
                                Harness the power of React with server-side rendering. We build blazingly fast, SEO-optimized web applications utilizing the modern App Router and Edge compute capabilities.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="200">
                                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-black text-white font-black text-center text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                    Build With Next.js <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 relative flex justify-center w-full lg:justify-end" data-aos="zoom-in" data-aos-delay="300">
                            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-[3rem] bg-white border border-slate-200 shadow-2xl flex items-center justify-center animate-float">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[3rem]"></div>
                                <div className="w-32 h-32 sm:w-48 sm:h-48 bg-black rounded-full shadow-2xl flex items-center justify-center relative z-10 overflow-hidden group hover:scale-105 transition-transform duration-500">
                                    <svg fill="white" viewBox="0 0 100 100" className="w-16 h-16 sm:w-24 sm:h-24 text-white group-hover:scale-110 transition-transform duration-500">
                                        <path d="M69.8 85l-33.6-47.5v47.5h-8.8V15h9.7l33.6 47.5V15h8.8v70z" />
                                    </svg>
                                </div>
                                {/* Floating decorative blocks */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center animate-pulse-slow">
                                    <FaServer className="text-white w-8 h-8" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-xl flex items-center justify-center animate-pulse-slow" style={{ animationDelay: '1.5s' }}>
                                    <FaRocket className="text-slate-900 w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="p-10 border border-slate-200 rounded-3xl hover:border-black transition-colors duration-300" data-aos="fade-up">
                            <FaTachometerAlt className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Blazing Performance</h3>
                            <p className="text-slate-600">Static Site Generation (SSG) and Image Optimization ensures your site loads instantly, improving both user experience and Core Web Vitals.</p>
                        </div>
                        <div className="p-10 border border-slate-200 rounded-3xl hover:border-black transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
                            <FaSearchPlus className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">SEO Dominance</h3>
                            <p className="text-slate-600">Server-Side Rendering (SSR) means search engines can index your content immediately, guaranteeing massive SEO improvements over standard React SPA.</p>
                        </div>
                        <div className="p-10 border border-slate-200 rounded-3xl hover:border-black transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                            <FaServer className="w-10 h-10 text-slate-900 mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Full Stack Capabilities</h3>
                            <p className="text-slate-600">Utilize Next.js API Routes and Server Actions to build robust full-stack applications without needing a separate backend server.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Build Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container relative z-10 block px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-800 font-bold text-sm mb-4 border border-slate-300">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">What We Build with Next.js</h2>
                        <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">From high-traffic e-commerce storefronts to complex B2B SaaS platforms.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'E-commerce Platforms', desc: 'Lightning-fast, headless commerce frontends that integrate with Shopify or commercetools to boost conversion rates.', icon: FaRocket },
                            { title: 'SaaS Applications', desc: 'Complex, authenticated dashboards utilizing Server Actions for secure, instant mutations without heavy client-side JavaScript.', icon: FaTachometerAlt },
                            { title: 'Corporate Websites', desc: 'Static site generated (SSG) corporate pages that achieve 100/100 Lighthouse scores and dominate search engine rankings.', icon: FaSearchPlus },
                            { title: 'Dynamic Web Portals', desc: 'Real-time user portals that stream data dynamically from the server using React Suspense and Server Components.', icon: FaServer },
                            { title: 'Progressive Web Apps', desc: 'Installable, offline-capable Next.js applications that bring a native-like experience to the mobile web browser.', icon: FaMobileAlt },
                            { title: 'Custom CMS Frontends', desc: 'Decoupled presentation layers fetching content from headless CMSs (Sanity, Contentful) for ultimate editorial flexibility.', icon: FaDraftingCompass },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-800 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                                    <item.icon className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-800 font-bold text-sm mb-4 border border-slate-300">Why Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Why Choose Our Next.js Developers?</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { title: 'App Router Pioneers', desc: 'We utilize the latest Next.js App Router (app directory) paradigms, leveraging React Server Components for minimal client-side bundles.', icon: FaCodeBranch },
                            { title: 'Vercel Deployment Experts', desc: 'We optimize deployments specifically for Edge Networks, utilizing Edge Config and Middleware for millisecond global logic execution.', icon: FaServer },
                            { title: 'Uncompromising SEO', desc: 'Our developers implement perfect semantic HTML, dynamic Open Graph images, and optimal vital metrics to ensure search engine dominance.', icon: FaSearchPlus },
                            { title: 'Secure by Default', desc: 'By moving logic to Server Components and Server Actions, we protect your API keys and business logic from ever reaching the browser network tab.', icon: FaShieldAlt }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg border border-slate-200 shadow-sm">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
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

export default NextJs;
