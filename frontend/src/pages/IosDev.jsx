import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const IosDev = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    return (
        <div>
            {/* EXACT MIGRATED CONTENT BEGIN */}




            <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../images/ios1.webp')" }}></div>
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

                <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-500/25 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-cyan-500/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-sky-400/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="container relative z-10 block">
                    <div className="max-w-3xl text-center mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">iOS Development</span>
                        <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase" data-aos="fade-up" data-aos-delay="200">
                            Get iOS Expert for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Enterprises</span>
                        </h1>
                        <p className="text-hero-desc text-blue-100 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
                            Our expert iOS developers help you build custom, scalable, and secure applications that deliver premium user experiences.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
                            <Link to="/contact" className="px-12 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider">Enquire Now</Link>
                            <Link to="/about" className="px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">About Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container relative z-10 block">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="space-y-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-2">iOS Development</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">We Provide Full <span className="text-gradient">iOS App</span> Development Support</h2>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                                    Streamline iOS app development with Swift, a versatile and intuitive programming language.
                                    Swift's syntax simplifies coding tasks, from UI design to backend functionality, enhancing
                                    app performance and user experience. Leverage Swift's robust capabilities for seamless
                                    integration, creating dynamic and engaging native iOS applications tailored to your unique
                                    requirements.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    At GoZooms, we focused to <strong>Elevate your digital presence with our comprehensive iOS app development services.</strong> Our seasoned team leverages Swift, Apple's powerful programming language, to craft cutting-edge mobile solutions tailored to your business objectives. From concept ideation to app store deployment, we guide you through every step of the development process.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    With a focus on <strong>user-centric design and robust backend integration,</strong> we deliver engaging and intuitive iOS applications that captivate audiences and drive results. Partner with us to bring your app vision to life and stay ahead in today's competitive market.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-60"></div>
                            <img src="../images/apple-ios-app-store-seeklogo.svg" className="w-full max-w-sm mx-auto relative z-10 animate-float drop-shadow-2xl" alt="iOS App Development" />
                        </div>
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
                        <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why Should You <span className="text-gradient">Choose Us?</span></h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/expertises.png" className="w-8 h-8" alt="Customized experience" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Customized Experiences</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Our specialized iOS development process utilizes the latest stable iOS
                                version along with the best practices to provide extended functionality. This
                                way, we can provide the best tailored solutions for your business.
                            </p>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/guarantees.png" className="w-8 h-8" alt="Satisfaction Guarantee" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Satisfaction Guarantee</h4>
                            <p className="text-slate-600 leading-relaxed">
                                For us, customer satisfaction is of the utmost importance. We will provide you
                                with <strong>dedicated iOS developers</strong> as well as a project manager
                                to ensure that all the aspects of your project run smoothly.
                            </p>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/collectives.png" className="w-8 h-8" alt="Collective Collaboration" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Collective Collaboration</h4>
                            <p className="text-slate-600 leading-relaxed">
                                We aim to shape the right engagement model for your custom solution right from
                                the beginning. As a team we develop unique App solutions according to your needs
                                and help promote your online market presence.
                            </p>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/rockets.png" className="w-8 h-8" alt="Fast Development" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Fast Development</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Having developers that have strong time management skills is our specialty. You
                                can trust us to efficiently deliver results for your project while being
                                completed on time and on budget.
                            </p>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/discounts.png" className="w-8 h-8" alt="Competitive Pricing" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">Competitive Pricing</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Looking to hire an expert iOS developer or consultant? Be sure you contact us
                                as we have some of the most competitive rates on the market for dedicated
                                development professionals.
                            </p>
                        </div>

                        <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group">
                            <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <img src="../images/telephones.png" className="w-8 h-8" alt="Support icon" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4">18/5 Technical Support</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Our dedicated support team and strong technical assistance helps your business
                                through any issues via email, Skype, phone or other chat platforms!
                            </p>
                        </div>
                    </div>
                </div>
            </section>















            {/* EXACT MIGRATED CONTENT END */}
        </div>
    );
};

export default IosDev;
