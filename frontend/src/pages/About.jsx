import React, { useEffect } from 'react';

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
  return (
    <div className="font-['Lato',sans-serif] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/about2.webp")' }}>
        <div className="relative z-10 text-center">
          <h2 className="text-white text-[2.5rem] font-bold text-center">ABOUT US</h2>
          <p className="text-white text-[20px] tracking-[3px] font-medium text-center mt-3">
            Delivering Innovation and Excellence beyond Expectation
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-6xl py-[40px]">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Image */}
            <div className="w-full md:w-1/2 px-[15px] pt-[55px]">
              <img src="/images/aboutusimage.webp" alt="About Us" className="w-full h-auto" />
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 mt-[3rem]">
              <h3 className="text-[32px] font-semibold text-[#00a2fe] text-center mb-[10px]">ABOUT US</h3>
              <p className="text-[17.5px] text-justify mb-4">
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
      <section className="py-0">
        <div className="px-[8%] pt-0 pb-0 mx-0">
          <div className="mb-[15px] w-[80%] mx-auto">
            <h1 className="w-full text-center text-[#00a2fe] text-[32px] font-semibold mb-[10px]">WHAT WE STAND FOR</h1>
            <p className="text-[18px] text-center">
              Our company's leaders share a passion for developing innovative technology solutions that drive significant bottom-line value, enabling customers and partners to succeed and win. Our team works together in one environment committed to deliver nothing, but the best.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 mt-8">
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
      <section className="my-[70px]">
        <div className="bg-[#0a0f25] text-center py-0">
          <div className="container mx-auto px-4 py-[40px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { prefix: '', value: '3', suffix: '', label: 'YEARS IN\nBUSINESS' },
                { prefix: '', value: '5', suffix: '+', label: 'OUTLETS\nINSTALLED' },
                { prefix: '', value: '8000', suffix: '+', label: 'TRANSATIONS\nCAPTURED' },
                { prefix: '$', value: '1000', suffix: 'k+', label: 'TRANSACTION\nVALUE' },
              ].map((stat, i) => (
                <div key={i} className="my-[70px]">
                  <div className="w-[135px] mx-auto border-b-2 border-white h-[90px] mb-[15px] flex items-center justify-center">
                    <p className="text-white text-[30px] inline-block">
                      {stat.prefix && <span className="text-[30px] text-white">{stat.prefix}</span>}
                      {stat.value}
                      {stat.suffix && <span className="text-[30px] text-white">{stat.suffix}</span>}
                    </p>
                  </div>
                  <p className="text-white text-[18px] leading-[34px] whitespace-pre-line">{stat.label}</p>
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
