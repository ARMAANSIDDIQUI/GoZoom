import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';
import { FaArrowRight } from 'react-icons/fa';

const GeometricBackground = () => {
  const shapes = [
    { type: 'square', size: 'w-12 h-12', top: '20%', delay: '0s', duration: '20s' },
    { type: 'circle', size: 'w-16 h-16', top: '60%', delay: '5s', duration: '28s' },
    { type: 'triangle', size: 'w-10 h-10', top: '40%', delay: '2s', duration: '24s' },
    { type: 'square', size: 'w-8 h-8', top: '80%', delay: '12s', duration: '30s' },
    { type: 'circle', size: 'w-20 h-20', top: '10%', delay: '8s', duration: '35s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute animate-geometric border border-sky-400/30 ${shape.size} ${shape.type === 'circle' ? 'rounded-full' : ''}`}
          style={{
            top: shape.top,
            left: '-100px',
            animationDelay: shape.delay,
            animationDuration: shape.duration,
            transform: shape.type === 'triangle' ? 'rotate(45deg)' : 'none'
          }}
        />
      ))}
    </div>
  );
};

const ConstellationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        // Systemic drift to the right
        this.vx = (Math.random() * 0.8) + 0.5;
        this.vy = (Math.random() - 0.5) * 0.4;
        // Orbital revolving parameters
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.015;
        this.orbitRadius = Math.random() * 3 + 2;
        this.color = `rgba(14, 165, 233, ${Math.random() * 0.4 + 0.3})`;

        // Pixel positions for drawing
        this.px = this.x;
        this.py = this.y;
      }
      update() {
        // Move base position linearly (drift)
        this.x += this.vx;
        this.y += this.vy;

        // Add orbital revolution on top of drift
        this.angle += this.angularSpeed;
        this.px = this.x + Math.cos(this.angle) * this.orbitRadius;
        this.py = this.y + Math.sin(this.angle) * this.orbitRadius;

        // Wrap around vertically
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;

        // Wrap around horizontally for continuous left-to-right movement
        if (this.x > canvas.width + 100) {
          this.x = -100;
          this.y = Math.random() * canvas.height;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.px, this.py, this.size, 0, Math.PI * 2);
        ctx.fill();
        // Removed expensive shadowBlur from per-particle draw
      }
    }

    const init = () => {
      particles = [];
      // Reduced density for performance (O(n^2) complexity optimization)
      const density = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < density; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Optimized distance checks
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;

          // Fast distance squared check first
          const distSq = dx * dx + dy * dy;
          if (distSq < 22500) { // 150*150
            const distance = Math.sqrt(distSq);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${(1 - distance / 150) * 0.2})`;
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
};

const Integration = () => {
  const { t } = useTranslation();

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
      <section className="hero-premium">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url("/images/20.png")' }}></div>

        {/* Geometric Background Layer (Lightweight) */}
        <GeometricBackground />

        {/* Constellation Canvas Animation */}
        <ConstellationBackground />

        {/* Layered Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-sky-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-blue-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[85vh] lg:min-h-screen py-16 lg:py-24">
          <div className="max-w-4xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-black uppercase tracking-widest mb-6 lg:mb-8 animate-fade-down" data-aos="fade-down">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
              {t('integration_page.hero.subtitle')}
            </div>
            <h1 className="text-hero-title text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight uppercase" data-aos="fade-up" data-aos-delay="200">
              {t('integration_page.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">{t('integration_page.hero.title2')}</span>
            </h1>
            <p className="text-hero-desc text-slate-400 mb-8 lg:mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              {t('integration_page.hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="600">
              <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black text-center text-base lg:text-lg shadow-2xl shadow-sky-500/20 hover:shadow-sky-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                {t('integration_page.hero.button_connect')} <FaArrowRight className="group-hover:translate-x-1 transition-transform ml-2" />
              </Link>
              <a href="#capabilities" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-white/5 border border-white/20 text-white font-black text-center text-base lg:text-lg hover:bg-white/10 transition-all backdrop-blur-md uppercase tracking-wider">
                {t('integration_page.hero.button_capabilities')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Expertise Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="container relative z-10 block">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-sky-50 text-sky-700 font-bold text-sm mb-4">{t('integration_page.expertise.subtitle')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">{t('integration_page.expertise.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">{t('integration_page.expertise.title2')}</span></h2>
            <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">{t('integration_page.expertise.desc1')}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 sm:gap-4 mb-12">
            {partners.map((p, i) => (
              <div key={i} className="glass-card bg-white border border-slate-100 p-3 sm:p-4 rounded-2xl text-center hover:bg-sky-50 hover:border-sky-200 hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 60}>
                <div className="h-12 sm:h-16 flex items-center justify-center mb-2">
                  <img src={p.img} alt={p.name} className="max-h-8 sm:max-h-12 w-auto group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-[10px] sm:text-xs font-semibold text-slate-600 group-hover:text-sky-600">{p.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-lg">{t('integration_page.expertise.desc2')}</p>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-sky-950/50 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(14,165,233,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.5) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 block">
          <div className="grid lg:grid-cols-2 gap-16">
            <div data-aos="fade-right">
              <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold text-sm mb-4 uppercase tracking-wider">{t('integration_page.apart.subtitle')}</span>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">{t('integration_page.apart.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">{t('integration_page.apart.title2')}</span></h3>
              <div className="space-y-5">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {t('integration_page.apart.p1')}
                </p>
                <p className="text-slate-300 text-lg leading-relaxed">
                  {t('integration_page.apart.p2')}
                </p>
                <Link to="/contact" className="inline-block px-8 py-4 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white transition-all font-bold">{t('integration_page.apart.button')}</Link>
              </div>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              {[
                { title: t('integration_page.apart.cards.card1.title'), desc: t('integration_page.apart.cards.card1.desc') },
                { title: t('integration_page.apart.cards.card2.title'), desc: t('integration_page.apart.cards.card2.desc') },
                { title: t('integration_page.apart.cards.card3.title'), desc: t('integration_page.apart.cards.card3.desc') },
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
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-700 font-bold text-sm mb-4 uppercase tracking-wider">{t('integration_page.partners.subtitle')}</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-800">{t('integration_page.partners.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">{t('integration_page.partners.title2')}</span></h3>
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