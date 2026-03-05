import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaCheckCircle } from 'react-icons/fa';

const Integration = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  const partners = [
    { name: 'Azure', img: 'images/msazure.png' },
    { name: 'Boomi', img: 'images/boomi.png' },
    { name: 'Tibco', img: 'images/tibco.png' },
    { name: 'Mulesoft', img: 'images/mulesoft.png' },
    { name: 'Pega', img: 'images/pega.png' },
    { name: 'IBM', img: 'images/IBM.png' },
    { name: 'SAP', img: 'images/sap.png' },
    { name: 'Dynamics', img: 'images/Dynamics.png' },
    { name: 'Workato', img: 'images/workato.png' },
  ];

  return (
    <div>
      {/* Hero Banner — Sky Blue Integration colors */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/20.png")' }}></div>
        <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-sky-500/25 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-cyan-400/15 blur-[60px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container relative z-10 block">
          <div className="max-w-3xl text-center mx-auto">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">Enterprise Integration</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
              INTEGRATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
              Fueled by extensive knowledge, thorough research, and broad industry experience — connecting your enterprise systems seamlessly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="600">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-sky-500/30 transition-all hover:-translate-y-1">Discover More</Link>
              <Link to="/about" className="px-8 py-4 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Expertise Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-50 text-sky-700 font-bold text-sm mb-4">Our Expertise</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">GZ Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Expertise</span></h2>
            <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">Our proficiency in integration is evidenced by our experience of over 1800 cross-consulting hours, working with all major integration tools, whether on-premises or in the cloud.</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 mb-12">
            {partners.map((p, i) => (
              <div key={i} className="glass-card bg-white border border-slate-100 p-4 rounded-2xl text-center hover:bg-sky-50 hover:border-sky-200 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="h-16 flex items-center justify-center mb-2">
                  <img src={p.img} alt={p.name} className="max-h-12 w-auto group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-xs font-semibold text-slate-600 group-hover:text-sky-600">{p.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-lg">We excel in seamlessly integrating all major ERP and business systems, encompassing SAP, Salesforce, ServiceNow, Oracle ERP, SuccessFactors, Workday, Coupa, and Concur.</p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14,165,233,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Differentiators</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">What <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Sets Us Apart?</span></h3>
              <div className="space-y-5">
                <p className="text-slate-300 text-lg leading-relaxed">
                  As organizations go through transformational phases, such as expansion through organic growth or mergers and acquisitions, they often require new systems to be added to their IT landscape.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Our commitment lies in aiding organizations in guaranteeing business continuity, harnessing the full potential of data, seamless system integration, and leveraging technology for transformation.
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white transition-all font-bold">Discover More</Link>
              </div>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              {[
                { title: 'Harness your Current IT Landscape', desc: 'We offer solutions that capitalize on your current IT landscape investments, facilitating transformation to a scalable and agile application landscape.' },
                { title: 'Experience Powerful Integrations', desc: 'System integration is a comprehensive process — whether it involves a small number of interfaces or a large-scale integration project with extensive connection points.' },
                { title: 'Attain Your Desired Business Results', desc: 'We go beyond your objectives — examining your existing obstacles, previous attempts, and overarching aspirations to deliver optimal outcomes for your enterprise.' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-all">
                  <h4 className="text-sky-400 text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 font-bold text-sm mb-4 uppercase tracking-wider">Partners</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">Partners</span></h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { img: 'images/shadani.png', name: 'Shadani' },
              { img: 'images/rajdhani.png', name: 'Rajdhani' },
              { img: 'images/maisoninfra.png', name: 'Maison Infra' },
              { img: 'images/cornitos.png', name: 'Cornitos' },
            ].map((p, i) => (
              <div key={i} className="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform duration-300 flex items-center justify-center" data-aos="fade-up" data-aos-delay={i * 100}>
                <img src={p.img} alt={p.name} className="h-24 w-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integration;
