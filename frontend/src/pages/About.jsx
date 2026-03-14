import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const InteractiveGeometricBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };
    let particles = [];
    let clickShapes = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`;
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150 * (window.devicePixelRatio || 1);
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    class ClickShape {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 40 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.velocity = {
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4
        };
        this.points = Math.floor(Math.random() * 3) + 3; // Triangle to Pentagon
      }
      update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
        this.rotation += 0.02;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `rgba(96, 165, 250, ${this.alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i < this.points; i++) {
          const angle = (i * 2 * Math.PI) / this.points;
          const px = Math.cos(angle) * this.size;
          const py = Math.sin(angle) * this.size;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const numberOfLines = (canvas.width * canvas.height) / 15000;
      for (let i = 0; i < numberOfLines; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      clickShapes = clickShapes.filter(s => s.alpha > 0);
      clickShapes.forEach(s => {
        s.update();
        s.draw();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - (distance / 120)) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleClick = (e) => {
      for (let i = 0; i < 3; i++) {
        clickShapes.push(new ClickShape(e.clientX, e.clientY));
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleClick);

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-transparent cursor-crosshair active:scale-[0.99] transition-transform duration-300"
    />
  );
};

const ValueCard = ({ img, title, items }) => (
  <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[250px] inline-block m-[10px] mx-auto group overflow-hidden rounded-xl shadow-lg">
    <img src={img} alt={title} className="block w-full h-[250px] object-cover" />
    {/* Always-visible label bar */}
    <div className="flex justify-center items-center bg-black py-2">
      <h2 className="text-white text-[1rem] tracking-[4px]">{title}</h2>
    </div>
    {/* Hover overlay slides in from left */}
    <div className="absolute inset-0 bg-[#024e80] opacity-0 group-hover:opacity-100 w-0 group-hover:w-full transition-all duration-500 ease-in-out overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
        <h2 className="text-white text-[15px] font-bold mb-2">{title}</h2>
        <ul className="list-none text-left pl-[15px] pt-[10px] space-y-1">
          {items.map((item, i) => (
            <li key={i} className="text-white text-[13px] leading-[22px]">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const About = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();

    // Fetch active testimonials
    const fetchTestimonials = async () => {
      try {
        const apiUrl = process.env.NODE_ENV === 'production'
          ? 'https://gozoom-backend.onrender.com'
          : 'http://localhost:5001';

        const res = await axios.get(`${apiUrl}/api/testimonials`);
        setTestimonials(res.data);
      } catch (err) {
        console.error('Failed to fetch testimonials', err);
      } finally {
        setLoadingTestimonials(false);
      }
    };

    fetchTestimonials();
  }, []);

  const backendUrl = process.env.NODE_ENV === 'production'
    ? 'https://gozoom-backend.onrender.com'
    : 'http://localhost:5001';

  return (
    <div className="font-['Lato',sans-serif] overflow-x-hidden">

      <section className="hero-premium relative group overflow-hidden">
        {/* Interactive Canvas Animation */}
        <InteractiveGeometricBg />

        <div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("/images/about2.webp")' }}></div>
        {/* Layered Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[85vh] lg:min-h-screen py-16 lg:py-24">
          <div className="max-w-4xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              {t('about_page.hero.story')}
            </div>
            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
              {t('about_page.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t('about_page.hero.title2')}</span>
            </h1>
            <p className="text-hero-desc text-slate-400 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              {t('about_page.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[100px] -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
              <div className="absolute inset-0 bg-blue-500/20 translate-x-4 translate-y-4 rounded-3xl -z-10 blur-xl"></div>
              <img src="/images/aboutusimage.webp" alt="About Us" className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100 object-cover" />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 tracking-widest uppercase border border-blue-100">{t('about_page.journey.subtitle')}</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-8 leading-tight">
                {t('about_page.journey.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t('about_page.journey.title2')}</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  {t('about_page.journey.p1_start')}<span className="font-bold text-slate-800">{t('about_page.journey.p1_strong')}</span>{t('about_page.journey.p1_end')}
                </p>
                <p>
                  {t('about_page.journey.p2')}
                </p>
                <p className="font-medium text-slate-800 border-l-4 border-blue-500 pl-4 py-2 bg-slate-50 rounded-r-xl">
                  {t('about_page.journey.p3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center max-w-4xl mx-auto" data-aos="fade-up">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-4 tracking-widest uppercase border border-blue-200">{t('about_page.stand_for.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              {t('about_page.stand_for.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t('about_page.stand_for.title2')}</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t('about_page.stand_for.desc')}
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-12">
            <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-auto">
              <ValueCard
                img="/images/about_innovation.jpeg"
                title={t('about_page.stand_for.cards.innovation.title')}
                items={t('about_page.stand_for.cards.innovation.items', { returnObjects: true })}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-full md:w-auto">
              <ValueCard
                img="/images/commitment.png"
                title={t('about_page.stand_for.cards.commitments.title')}
                items={t('about_page.stand_for.cards.commitments.items', { returnObjects: true })}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="w-full md:w-auto">
              <ValueCard
                img="/images/excellence.webp"
                title={t('about_page.stand_for.cards.excellence.title')}
                items={t('about_page.stand_for.cards.excellence.items', { returnObjects: true })}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-[#0a0f25]" data-aos="fade-up">
        <div className="text-center py-20 relative">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { prefix: '', value: '3', suffix: '', label: t('about_page.stats.years') },
                { prefix: '', value: '5', suffix: '+', label: t('about_page.stats.outlets') },
                { prefix: '', value: '8000', suffix: '+', label: t('about_page.stats.transactions') },
                { prefix: '$', value: '1000', suffix: 'k+', label: t('about_page.stats.value') },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-[150px] md:w-[200px] mx-auto border-b-2 border-blue-400/50 h-[90px] mb-6 flex items-end justify-center pb-3 group-hover:border-blue-400 transition-colors">
                    <p className="text-white text-4xl md:text-5xl font-bold flex items-baseline justify-center whitespace-nowrap">
                      {stat.prefix && <span className="text-3xl text-blue-400 font-medium mr-1">{stat.prefix}</span>}
                      <span>{stat.value}</span>
                      {stat.suffix && <span className="text-3xl text-blue-400 font-medium ml-1">{stat.suffix}</span>}
                    </p>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-bold tracking-widest leading-relaxed whitespace-pre-line text-center group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-4 tracking-wider uppercase border border-blue-100">{t('about_page.testimonials.subtitle')}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800">{t('about_page.testimonials.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('about_page.testimonials.title2')}</span></h2>
          </div>

          {loadingTestimonials ? (
            <div className="flex justify-center items-center py-12">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t_item, idx) => (
                <div key={t_item._id} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <FaQuoteLeft className="text-4xl text-blue-200 mb-6 group-hover:text-blue-400 transition-colors" />
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed italic relative z-10">"{t_item.content}"</p>

                  <div className="flex items-center justify-between border-t border-slate-200 pt-6 mt-auto">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-200 p-1 flex items-center justify-center overflow-hidden">
                        {t_item.avatar ? (
                          <img src={`${backendUrl}${t_item.avatar}`} alt={t_item.authorName} className="w-full h-full object-cover rounded-full" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} />
                        ) : (
                          <div className="w-full h-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl rounded-full">
                            {t_item.authorName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">{t_item.authorName}</h4>
                        <p className="text-sm text-slate-500 font-medium">{t_item.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-amber-400 text-sm">
                      {[...Array(t_item.rating || 5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-100 max-w-2xl mx-auto">
              {t('about_page.testimonials.empty')}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default About;