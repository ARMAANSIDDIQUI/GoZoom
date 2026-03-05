import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const SeoServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* Hero Banner — Orange SEO colors */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #431407 50%, #0f172a 100%)' }}></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-orange-500/25 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-amber-600/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-yellow-500/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10 block">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">Digital Marketing</span>
            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight uppercase" data-aos="fade-up" data-aos-delay="200">
              Transform Your Online Presence with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Expert SEO Services</span>
            </h1>
            <p className="text-hero-desc text-slate-300 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              Unlock tailored solutions for your company's projects by engaging our dedicated SEO specialists. Elevated visibility and success with top-notch assistance.
            </p>
            <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-up" data-aos-delay="600">
              <Link to="/contact" className="px-12 py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider">Get Started</Link>
              <Link to="/about" className="px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 font-bold text-sm mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Optimize Your Online Impact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Professional SEO Services</span>
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  In the dynamic digital landscape, effective SEO is the key to unlocking unparalleled online visibility and success. Our expert SEO services are meticulously crafted to propel your business to new heights.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Harnessing the power of cutting-edge SEO strategies, we navigate the complexities of search algorithms, keyword optimization, and content enhancement. Our dedicated specialists work collaboratively with you to drive organic traffic, foster brand authority, and maximize your impact.
                </p>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-[80px] opacity-60"></div>
              <img src="../images/seo1.png" alt="SEO Mascot" className="w-full max-w-md mx-auto relative z-10 animate-float drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-orange-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(249,115,22,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245,158,11,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Expertise</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">What Our SEO Experts <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Offer</span></h3>
              <div className="grid grid-cols-2 gap-4">
                {['Strategic Keyword Research', 'Comprehensive On-Page Optimization', 'Quality Content Creation', 'Technical SEO Excellence', 'Local SEO Strategies', 'Strategic Link Building', 'Data-Driven Analytics', 'Transparent Reporting'].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-orange-500/10 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500/30 rounded-lg flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block" data-aos="fade-left">
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-[80px]"></div>
              <img src="../images/seo2.png" alt="SEO Features" className="w-full max-w-md mx-auto relative z-10 drop-shadow-xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 font-bold text-sm mb-4">Why Us</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SEO Experts?</span></h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4" data-aos="fade-right">
              {[
                { title: 'Proven Track Record', desc: 'Rely on our seasoned SEO experts with an extensive track record of successfully delivering measurable results.' },
                { title: 'Tailored Strategies', desc: 'Crafting personalized SEO strategies tailored to align with your unique business objectives, providing a distinct competitive advantage.' },
                { title: 'Cutting-Edge Expertise', desc: 'Stay at the forefront of industry trends and technologies, allowing us to optimize your digital footprint for sustained growth.' },
                { title: 'Transparent Reporting', desc: 'Get regular, clear reports on your campaign performance with data-driven insights to guide ongoing optimization.' },
                { title: 'Long-Term Growth', desc: 'We focus on sustainable, organic growth strategies that deliver lasting results and continuously improve your rankings.' },
                { title: 'Dedicated Support', desc: 'A committed team available to answer questions, provide updates, and refine strategies as your business evolves.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
                <img src="../images/laravelboy2.svg" className="w-40 mx-auto mb-6 animate-float" alt="SEO Experts" />
                <p className="text-2xl font-bold text-slate-800 mb-6">Get in touch with our<br /><span className="text-orange-600">SEO Experts Today!</span></p>
                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:-translate-y-1">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
