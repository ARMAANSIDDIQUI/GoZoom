import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Chatbot = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <div>
      {/* EXACT MIGRATED CONTENT BEGIN */}





      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 bg-[#140b25] overflow-hidden">
        {/* Chatbot Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 -ml-40 -mt-20 w-96 h-96 rounded-full bg-violet-600/30 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 -mr-40 -mb-20 w-96 h-96 rounded-full bg-fuchsia-600/30 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#8b5cf6 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center flex flex-col items-center" data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold text-sm mb-6 uppercase tracking-wider">AI-Powered Solutions</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight uppercase">
                Hire Experienced <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Chatbot Developers</span>
              </h1>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                Elevate user engagement with our adept chatbot developers, crafting seamless conversational experiences that enhance your business's interaction and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full">
                <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-black text-center text-lg hover:shadow-2xl hover:shadow-fuchsia-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                  Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[220px] gap-3 px-12 py-5 rounded-2xl bg-white/5 text-white font-black text-center text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex-1 relative flex flex-col items-center lg:items-end gap-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative z-10 p-10 bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] border border-white/10 backdrop-blur-md w-full max-w-[400px] shadow-2xl flex items-center justify-center group/bot hover:scale-105 transition-all duration-500 animate-float">
                <img src="/images/chatbot1.svg" alt="Chatbot Expert" className="w-full h-auto drop-shadow-[0_20px_60px_rgba(139,92,246,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="container relative z-10 block">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div data-aos="fade-right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                  Helping Businesses Transform Their Customers Engagement into <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Amazing Experiences</span>
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed">
                  At GoZoom Technologies, we pride ourselves on housing a team of highly skilled chatbot developers dedicated to transforming your ideas into intelligent, interactive solutions. Our developers leverage cutting-edge technologies to build sophisticated chatbots tailored to meet your business needs.
                </p>
                <div className="p-6 bg-slate-50 border-l-4 border-violet-500 rounded-r-2xl">
                  <p className="text-lg text-slate-700 italic font-medium">
                    Whether it's streamlining customer support, automating tasks, or enhancing user engagement, our team excels in creating robust and user-friendly chatbot solutions.
                  </p>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  With a focus on innovation and efficiency, our chatbot development process is characterized by a client-centric approach. We collaborate closely with you to understand your unique requirements and objectives, ensuring the delivery of customized chatbot solutions that seamlessly integrate into your existing systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(139,92,246,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217,70,239,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Expertise</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white">Our Chatbot Developers <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Specialize In...</span></h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 mx-auto mb-6 bg-violet-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpsnowflake.svg" className="w-10 h-10" alt="Conversational UX" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Conversational UX Design:</strong> Crafting natural and intuitive chatbot interactions for enhanced user engagement.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 mx-auto mb-6 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpdiamond.svg" className="w-10 h-10" alt="Integration" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">Integration Expertise:</strong> Seamlessly integrating chatbots into your existing systems for streamlined operations.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="../images/phpplane.svg" className="w-10 h-10" alt="AI Solutions" />
              </div>
              <p className="text-slate-200 leading-relaxed">
                <strong className="text-white block mb-2 text-lg">AI-Powered Solutions:</strong> Harnessing the power of artificial intelligence for intelligent and adaptive chatbot functionalities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-slate-50 relative" id="learnMore">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 font-bold text-sm mb-4">Why Choose Us</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Why You Should Choose our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500">Chatbot Experts.</span></h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4" data-aos="fade-right">
              {[
                { title: 'Expertise Matters', desc: 'Our experienced team ensures precision in chatbot development, bringing in-depth knowledge to every project.' },
                { title: 'Tailored Solutions', desc: 'Custom chatbot development catering to your unique business needs ensures optimal performance and user satisfaction.' },
                { title: 'Agile Development', desc: 'Embracing an agile approach, we deliver chatbot solutions that evolve with your business, ensuring long-term relevance.' },
                { title: 'Scalability', desc: 'Our chatbots are designed for scalability, adapting seamlessly to growing user interactions and expanding business requirements.' },
                { title: 'Security Focus', desc: 'Implementing robust security measures to protect user data, ensuring trust and compliance with industry standards.' },
                { title: 'Continuous Support', desc: 'Post-deployment, our team provides ongoing support, updates, and improvements to keep your chatbot at peak performance.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
                <img src="../images/chatbot2.svg" className="w-48 mx-auto mb-6" alt="Chatbot Experts" />
                <p className="text-2xl font-bold text-slate-800 mb-6">Ask our Chatbot Experts<br /><span className="text-violet-600">about their services today!</span></p>
                <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-bold hover:shadow-lg hover:shadow-violet-500/30 transition-all hover:-translate-y-1">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>













      {/* EXACT MIGRATED CONTENT END */}
    </div>
  );
};

export default Chatbot;
