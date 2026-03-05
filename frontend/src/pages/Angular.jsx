import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Angular = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#1a0b0b] overflow-hidden">
        {/* Geometric Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[5%] right-[5%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          {/* SVG Hexagon Grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
                <path d="M25 0 L50 14.4 L50 28.9 L25 43.3 L0 28.9 L0 14.4 Z" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Angular Framework</span>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
                Hire Dedicated <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Angular Developers</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                Everything you need to get your project started in 24 hours — architecture, speed, and reliability.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link to="/contact" className="px-12 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider">Get Started</Link>
                <Link to="/about" className="px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">About Us</Link>
              </div>
            </div>
            <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-8 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-xl w-full max-w-[400px] shadow-2xl">
                <img src="/images/angularboy.svg" alt="Angular Specialist" className="w-full h-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-[80px] -mr-40 -mt-40"></div>
        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-4">About Angular</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Enhance your project with our in-house talent, offering expertise in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Angular Development</span> services.
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-red-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  Angular is an open-source JavaScript framework that extends the functionality of HTML. The important use of Angular is to improve browser-based applications with the help of MVC capability. It makes front-end web development and testing easier using templates, command line tools, and IDEs.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  GoZooms employs specialized Angular developers experienced in Javascript to create real-time applications effortlessly. We are highly recognized as the best Angular development company for developing single page applications in an agile manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4">Our Strengths</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Dedicated and Skilled <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Angular Development</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-24 h-24 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/thought.png" className="w-14 h-14 object-contain" alt="5 years experience" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                5+ years of working with Angular has given us extensive knowledge and technical skills to deal with all types of projects.
              </p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 mx-auto mb-6 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/expertise.png" className="w-14 h-14 object-contain" alt="Experienced" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                We're an accomplished Angular development company working with enthusiasm and dedication to produce great results.
              </p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 mx-auto mb-6 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/performance.png" className="w-14 h-14 object-contain" alt="Efficiency" />
              </div>
              <p className="text-slate-600 leading-relaxed">
                Our efficiency means competitive rates and rapid delivery of Angular development services and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent"></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-last lg:order-first" data-aos="fade-right">
              <div className="absolute inset-0 bg-red-100 rounded-full blur-[80px] opacity-50"></div>
              <img className="w-full max-w-xs mx-auto relative z-10 drop-shadow-2xl animate-float" src="../images/angular-icon.svg" alt="Angular Services" />
            </div>
            <div data-aos="fade-left">
              <span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 font-bold text-sm mb-4">What We Offer</span>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">Our High Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Angular Development Services</span></h3>
              <div className="grid grid-cols-2 gap-4">
                {['Angular web app development', 'Angular dashboards and web portals', 'Angular mobile web app development', 'Angular single-page applications', 'Angular performance optimization', 'Angular eCommerce development', 'Angular cross-platform development', 'Angular plugin and widget development'].map((service, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-red-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-red-950/50 to-slate-900 relative overflow-hidden">
        <div className="container relative z-10 block">
          <div className="text-center mb-14">
            <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-4">Get In Touch</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Talk to GoZooms Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Angular Developers</span> Today</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['Get in touch with us', 'Discuss your project', 'Finalize the details', 'Project Begins'].map((step, i) => (
              <div key={i} className={`relative px-8 py-4 rounded-full font-bold text-white ${i === 0 ? 'bg-red-600' : i === 3 ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-white/10'} border border-white/20`}>
                <span className="absolute -top-2 -left-2 w-6 h-6 bg-white text-slate-800 rounded-full text-xs font-extrabold flex items-center justify-center">{i + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="text" placeholder="Business/Organization" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="email" placeholder="Email" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="tel" placeholder="Phone No." className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors" />
              <input type="text" placeholder="Subject" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors md:col-span-2" />
            </div>
            <textarea rows="5" placeholder="Tell us more about your enquiry" className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-red-400 transition-colors mb-6"></textarea>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded" />
                I have read and agree to the <a href="#" className="text-red-400 hover:underline">Privacy Policy</a>
              </label>
              <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1">Submit</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 font-bold text-sm mb-4">Why Us</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why Should You <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Choose Us?</span></h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/expertises.png" className="w-8 h-8" alt="Customer Satisfaction" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Customer Satisfaction</h4>
              <p className="text-slate-600 leading-relaxed">We take customer satisfaction seriously, providing you a dedicated account manager and project manager to make sure all aspects of your engagement with us run smoothly.</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/guarantees.png" className="w-8 h-8" alt="Extensive Experience" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Extensive Experience</h4>
              <p className="text-slate-600 leading-relaxed">GoZooms is a provider of efficient solutions for business big or small. We don't utilize off-the-shelf products but instead rely upon a fully integrated customized approach.</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/collectives.png" className="w-8 h-8" alt="Exceptional Collaboration" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Exceptional Collaboration</h4>
              <p className="text-slate-600 leading-relaxed">Our offshore developers will work with you for dedicated hours. We aim to shape the right engagement model for your custom solution to meet your needs on time and on budget.</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/rockets.png" className="w-8 h-8" alt="Fast Development" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Fast Development</h4>
              <p className="text-slate-600 leading-relaxed">We have refined our development process to result in applications being built quicker and more efficiently, so projects are completed on time and on budget.</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/discounts.png" className="w-8 h-8" alt="Competitive Pricing" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">Competitive Pricing</h4>
              <p className="text-slate-600 leading-relaxed">Hiring an expert Angular developer, designer, or consultant? Make sure you get a quote from us as we have some of the most competitive rates on the market.</p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <img src="../images/telephones.png" className="w-8 h-8" alt="Technical Support" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">18/5 Technical Support</h4>
              <p className="text-slate-600 leading-relaxed">Our open communication lines, dedicated support team, and strong technical assistance helps your business through any issues that you encounter.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Angular;
