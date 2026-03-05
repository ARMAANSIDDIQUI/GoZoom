import React, { useEffect, useRef } from 'react';
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
  <div className="relative w-full max-w-[360px] h-[250px] inline-block m-[10px] mx-auto group overflow-hidden">
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

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

        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[90vh] lg:min-h-screen py-24">
          <div className="max-w-4xl text-center mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 animate-fade-down" data-aos="fade-down">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Our Story
            </div>
            <h1 className="text-hero-title text-white mb-8 leading-[1.05] tracking-tight" data-aos="fade-up" data-aos-delay="200">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">US</span>
            </h1>
            <p className="text-hero-desc text-slate-400 mb-12 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="400">
              Delivering Innovation and Excellence beyond Expectation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl py-[40px]">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image */}
            <div className="w-full md:w-1/2 px-[15px] pt-[55px]" data-aos="fade-right">
              <img src="/images/aboutusimage.webp" alt="About Us" className="w-full h-auto rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500" />
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 mt-[3rem]" data-aos="fade-left">
              <h3 className="text-[32px] font-semibold text-[#00a2fe] text-center md:text-left mb-[10px]">ABOUT US</h3>
              <p className="text-[17.5px] text-justify mb-4 text-gray-700 leading-relaxed">
                Welcome to Gozoom Technologies, your one-stop shop for all your retail and integration needs! At Gozoom Technologies, we are passionate about technology and helping businesses succeed. With over 3 years of experience in the IT industry, we have the expertise and knowledge to help you achieve your goals. Our team of experts specializes in retail and integration, providing a range of services to help you streamline your operations and improve your bottom line. Whether you need help with point of sale systems, inventory management, or e-commerce integration, we have you covered.
              </p>
              <p className="text-[17.5px] text-justify mb-4">
                We pride ourselves on delivering exceptional customer service and support, and we work closely with our clients to understand their unique needs and develop customized solutions that meet their specific requirements. We believe in building strong, long-lasting relationships with our clients, and we are committed to providing the highest level of service and support. At Gozoom Technologies, we are dedicated to staying on the cutting edge of technology, and we are constantly exploring new and innovative solutions to help our clients stay ahead of the competition. We are passionate about what we do, and we are committed to helping our clients succeed.
              </p>
              <p className="text-[17.5px] text-justify">
                Thank you for considering Gozoom Technologies for your retail and integration needs. We look forward to working with you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-16">
        <div className="px-[8%] pt-0 pb-0 mx-0">
          <div className="mb-[15px] w-[80%] mx-auto text-center" data-aos="fade-up">
            <h1 className="w-full text-[#00a2fe] text-[32px] font-bold mb-[15px] tracking-wide">WHAT WE STAND FOR</h1>
            <p className="text-[18px] text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Our company's leaders share a passion for developing innovative technology solutions that drive significant bottom-line value, enabling customers and partners to succeed and win. Our team works together in one environment committed to deliver nothing, but the best.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-12">
            <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-auto">
              <ValueCard
                img="/images/about_innovation.jpeg"
                title="INNOVATION"
                items={[
                  '+ To ideate better and innovative strategy',
                  '+ To create Now and future proof solutions',
                  '+ To adapt to changing trends effortlessly',
                  '+ To outplace and outpace your competitors',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="w-full md:w-auto">
              <ValueCard
                img="/images/commitment.png"
                title="COMMITMENTS"
                items={[
                  '+ To ensure all stakeholders are working',
                  '+ To communicate hassle-free',
                  '+ To drive better results',
                  '+ To enhance growth',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500" className="w-full md:w-auto">
              <ValueCard
                img="/images/excellence.webp"
                title="EXCELLENCE"
                items={[
                  '+ To be customer-driven more than ever',
                  '+ To deliver exceptional quality. Always!',
                  '+ To take real time and informed decisions',
                  '+ To enhance customer experience',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-0 mb-0 !pb-0 relative overflow-hidden bg-gradient-to-r from-slate-900 to-[#0a0f25]" data-aos="fade-up">
        <div className="text-center pt-16 pb-0 relative">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { prefix: '', value: '3', suffix: '', label: 'YEARS IN\nBUSINESS' },
                { prefix: '', value: '5', suffix: '+', label: 'OUTLETS\nINSTALLED' },
                { prefix: '', value: '8000', suffix: '+', label: 'TRANSACTIONS\nCAPTURED' },
                { prefix: '$', value: '1000', suffix: 'k+', label: 'TRANSACTION\nVALUE' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-[135px] mx-auto border-b-2 border-blue-400/50 h-[90px] mb-4 flex items-end justify-center pb-2 group-hover:border-blue-400 transition-colors">
                    <p className="text-white text-4xl md:text-5xl font-bold flex items-center">
                      {stat.prefix && <span className="text-3xl text-blue-400 mr-1">{stat.prefix}</span>}
                      {stat.value}
                      {stat.suffix && <span className="text-3xl text-blue-400 ml-1">{stat.suffix}</span>}
                    </p>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-bold tracking-widest leading-relaxed whitespace-pre-line group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
