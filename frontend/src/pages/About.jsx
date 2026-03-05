import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

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

      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] bg-slate-900 bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url("/images/about2.webp")' }}>
        <div className="absolute inset-0 bg-black/50 mix-blend-overlay"></div>
        {/* Animated Blobs */}
        <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[120px] animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-indigo-500/25 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 text-center pt-[72px] px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-6 uppercase tracking-wider" data-aos="fade-down">Our Story</span>
          <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold text-center drop-shadow-lg mb-4" data-aos="fade-up" data-aos-delay="200">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">US</span>
          </h2>
          <p className="text-blue-100 text-xl md:text-2xl font-medium text-center max-w-2xl mx-auto drop-shadow-md" data-aos="fade-up" data-aos-delay="400">
            Delivering Innovation and Excellence beyond Expectation
          </p>
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
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-12" data-aos="fade-up" data-aos-delay="200">
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
      </section>

      {/* Stats Counter Section */}
      <section className="mt-10 mb-20 relative overflow-hidden" data-aos="fade-up">
        <div className="bg-gradient-to-r from-slate-900 to-[#0a0f25] text-center py-16 relative">
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
