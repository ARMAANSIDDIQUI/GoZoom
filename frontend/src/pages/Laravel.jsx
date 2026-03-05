import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const Laravel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* EXACT MIGRATED CONTENT BEGIN */}





      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#1a0b0b] overflow-hidden">
        {/* Custom Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-red-600/25 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-rose-600/25 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-orange-500/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 font-bold text-sm mb-6 uppercase tracking-wider">Laravel Framework</span>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight uppercase">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Laravel</span> Development Company
              </h1>
              <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto font-medium">
                We provide dedicated Laravel developers for your company's projects — building robust, secure, and artisan-crafted applications.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-red-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                  Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-red-100 uppercase tracking-wider">
                  About Us
                </Link>
              </div>
            </div>
            <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-6 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl animate-float">
                <img src="/images/laravelboy1.svg" alt="Laravel Expert" className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Expert Solutions From an Expert Laravel Development Company</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>GoZoom offers a wide-range of flawless <strong>custom Laravel solutions</strong> to our clients. Laravel is an open source PHP based framework which offers a simple and robust structure making it very easy to use.</p>
                <p>Our Laravel developers provide top quality website structures. At GoZoom, we work closely with our clients to build scalable web applications making use of Laravel to elevate your business through high quality web applications.</p>
                <p>Want to move your existing project to the Laravel framework? We have years of experience <strong>migrating to Laravel</strong> from other frameworks or vanilla PHP. Laravel offers superior code foundations, easy maintainability and resilient features, it has proven its position amongst the <a href="#" className="text-red-500 font-bold hover:underline">best PHP frameworks available</a>.</p>
                <p>Our expert Laravel developers will help you structure a detailed approach for developing Laravel powered websites and applications for your business. Hire the #1 Laravel Development Company to get top quality solutions at competitive prices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <img src="../images/laravelb.svg" alt="Laravel" className="w-48 h-auto" />
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">What Our Laravel Developers Offer</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Fast and efficient Laravel development</li>
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Mobile application development</li>
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Complex Laravel integration</li>
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Laravel migrations and upgrades</li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Custom Laravel frameworks</li>
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Scalable and managed hosting solutions</li>
                    <li className="flex items-center text-slate-700 font-semibold"><div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div> Laravel consulting and strategy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 blur-[100px] rounded-full mix-blend-screen"></div>
        <div className="container relative z-10 block">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Choose Our <span className="text-red-400">Laravel Developers?</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold text-red-300 mb-4">Comprehensive Quality Assurance and Testing</h4>
              <p className="text-blue-100 leading-relaxed">We employ highly skilled professionals for our <strong>Laravel development services</strong> who deliver the highest quality work at all times. Our dedicated support team responds quickly to resolve issues and implement suggestions or improvements proposed by our clients.</p>
            </div>
            <div className="glass-card bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold text-red-300 mb-4">Get Laravel Experts at Competitive Rates</h4>
              <p className="text-blue-100 leading-relaxed">Over the years, we’ve encountered numerous challenging tasks when developing exceptional Laravel-based websites for different business needs. Our experience means that we can provide our best Laravel developers for your project at the most cost-effecive rates.</p>
            </div>
            <div className="glass-card bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold text-red-300 mb-4">Custom Laravel Solutions &amp; Project Methodology</h4>
              <p className="text-blue-100 leading-relaxed">GoZoom is the most comprehensive Laravel development company in India, New Zealand, Australia and USA for delivering excellent services to our clients. Our Laravel development team thinks outside the box to satisfy your business requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6 w-full lg:max-w-md">Get in touch with our expert Laravel developers today</h3>
                <img src="../images/laravelboy2.svg" alt="Laravel solutions" className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h3>
                <form action="../laravel.php" method="post" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input type="text" name="laravelName" placeholder="Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors" required />
                    </div>
                    <div>
                      <input type="text" name="laravelBusiness" placeholder="Business/Organization" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input type="email" name="laravelEmail" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors" required />
                    </div>
                    <div>
                      <input type="tel" name="laravelPhoneNo" placeholder="Phone No" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors" required />
                    </div>
                  </div>
                  <div>
                    <input type="text" name="laravelSubject" placeholder="Subject" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors" required />
                  </div>
                  <div>
                    <textarea name="laravelTextArea" rows="5" placeholder="Tell us more about your enquiry" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-colors resize-none" required></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start text-sm text-slate-600">
                      <input type="checkbox" name="AgreePrivacyPolicy" className="mt-1 mr-3 rounded text-red-500 focus:ring-red-500" required defaultChecked />
                      <span>I have read and agree to the <a href="#" className="text-red-500 hover:underline">Privacy Policy</a></span>
                    </label>
                    <label className="flex items-start text-sm text-slate-600">
                      <input type="checkbox" name="subscribeCheck" className="mt-1 mr-3 rounded text-red-500 focus:ring-red-500" defaultChecked />
                      <span>I would like to receive information about GoZooms’ products, services and newsletters.</span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 mb-6">
                      <strong>Why we collect this information and how we use it:</strong> We treat your information with respect, and we will never sell it to other companies. This information is collected out of necessity for basic account creation, billing, and support purposes. We will only email you for support.
                    </p>
                    <button type="submit" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-red-500/30 transition-all hover:-translate-y-1">
                      Submit Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>



















      {/* EXACT MIGRATED CONTENT END */}
    </div>
  );
};

export default Laravel;
