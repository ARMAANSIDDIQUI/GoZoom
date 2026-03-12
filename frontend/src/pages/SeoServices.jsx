import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight, FaSearch, FaCode, FaPenNib, FaTasks, FaMapMarkerAlt, FaLink, FaChartLine, FaEye, FaTrophy, FaCogs, FaRocket, FaChartPie, FaChartArea, FaHeadset } from 'react-icons/fa';

const SeoServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* Hero Banner — Orange SEO colors */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#160d01] overflow-hidden">
        {/* Creative Amber Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-yellow-500/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          {/* SVG Pixels Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#f59e0b 2px, transparent 2px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 text-center flex flex-col items-center lg:items-start lg:text-left" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Digital Marketing</span>
              <h1 className="text-hero-title text-white mb-6 leading-tight uppercase">
                Transform Your Online Presence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Expert SEO Services</span>
              </h1>
              <p className="text-hero-desc text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
                Unlock tailored solutions for your company's projects by engaging our dedicated SEO specialists. Elevated visibility and success with top-notch assistance.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-center text-base sm:text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                  Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[180px] gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-white/5 text-white font-black text-center text-base sm:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl">
                <img src="/images/seo1.png" alt="SEO Specialist" className="w-full h-auto rounded-[3.5rem] shadow-4xl filter saturate-[1.2]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 font-bold text-sm mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Optimize Your Online Impact with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Professional SEO Services</span>
              </h2>
              <div className="space-y-5">
                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-orange-500 pl-4 bg-slate-50 py-2 rounded-r-lg">
                  In the digital landscape, effective SEO is the key to unlocking unparalleled online visibility and success. Our expert SEO services are meticulously crafted to propel your business to new heights.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Harnessing the power of cutting-edge SEO strategies, we navigate the complexities of search algorithms, keyword optimization, and content enhancement. Our dedicated specialists work collaboratively with you to drive organic traffic, foster brand authority, and maximize your impact.
                </p>
              </div>
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
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'Strategic Keyword Research', desc: 'Identifying high-value, intent-driven search terms to capture your target audience effectively.', icon: FaSearch },
                  { title: 'On-Page Optimization', desc: 'Enhancing meta tags, headers, and internal linking structures for maximum search engine crawlability.', icon: FaCode },
                  { title: 'Quality Content Creation', desc: 'Producing engaging, SEO-rich blogs, articles, and landing pages that rank and convert.', icon: FaPenNib },
                  { title: 'Technical SEO Excellence', desc: 'Fixing site speed, mobile responsiveness, and schema markup to meet Core Web Vitals criteria.', icon: FaTasks },
                  { title: 'Local SEO Strategies', desc: 'Dominating local packs and Maps through optimized Google Business Profiles and localized citations.', icon: FaMapMarkerAlt },
                  { title: 'Strategic Link Building', desc: 'Acquiring high-authority backlinks from reputable domains to massively boost your domain rating.', icon: FaLink },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/10 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mt-1">
                      <feature.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <span className="text-white text-base font-bold block mb-1">{feature.title}</span>
                      <span className="text-slate-400 text-sm leading-relaxed">{feature.desc}</span>
                    </div>
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
                { title: 'Proven Track Record', desc: 'Rely on our seasoned SEO experts with an extensive track record of successfully delivering measurable results.', icon: FaTrophy },
                { title: 'Tailored Strategies', desc: 'Crafting personalized SEO strategies tailored to align with your unique business objectives, providing a distinct competitive advantage.', icon: FaCogs },
                { title: 'Cutting-Edge Expertise', desc: 'Stay at the forefront of industry trends and technologies, allowing us to optimize your digital footprint for sustained growth.', icon: FaRocket },
                { title: 'Transparent Reporting', desc: 'Get regular, clear reports on your campaign performance with data-driven insights to guide ongoing optimization.', icon: FaChartPie },
                { title: 'Long-Term Growth', desc: 'We focus on sustainable, organic growth strategies that deliver lasting results and continuously improve your rankings.', icon: FaChartLine },
                { title: 'Dedicated Support', desc: 'A committed team available to answer questions, provide updates, and refine strategies as your business evolves.', icon: FaHeadset },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-50 rounded-2xl flex items-center justify-center border border-orange-200">
                    <item.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center" data-aos="fade-left">
              <div className="glass-card bg-white rounded-3xl p-10 shadow-2xl border border-slate-100 inline-block overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 blur-xl"></div>
                <img src="../images/seo1.png" className="w-40 mx-auto mb-6 animate-float drop-shadow-xl filter saturate-150" alt="SEO Experts" />
                <p className="text-2xl font-bold text-slate-800 mb-6 relative z-10">Get in touch with our<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">SEO Experts Today!</span></p>
                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 relative z-10">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
