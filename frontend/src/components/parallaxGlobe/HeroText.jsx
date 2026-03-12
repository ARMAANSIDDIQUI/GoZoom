import { motion, useTransform } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function HeroText({ scrollYProgress }) {
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97]);

  const slides = [
      {
          id: 1,
          tagline: 'Enterprise',
          title: 'Software Development <br/>Company',
          desc: 'Delivering software solutions to build intelligent <br/>enterprises with speed and agility',
      },
      {
          id: 2,
          tagline: 'Innovative',
          title: 'Website & Mobile App <br/>Development',
          desc: 'Transforming Ideas Into Digital Experiences & Empowering Your Presence Across Screens',
      },
      {
          id: 3,
          tagline: 'Offshore',
          title: 'Dedicated Development Team',
          desc: 'Fuel digital transformation initiatives and empower <br/>your business with expert team',
      },
      {
          id: 4,
          tagline: 'performance-driven',
          title: 'Digital Marketing <br/>Solutions',
          desc: 'Elevate your business to new heights <br/>with our unparalleled digital marketing expertise',
      },
  ];

  return (
    <motion.div
      style={{ opacity, scale }}
      className="absolute top-16 inset-x-0 bottom-0 flex flex-col items-center justify-center text-center z-20 px-4 pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex flex-col items-center w-full max-w-5xl"
      >
        <Swiper
            modules={[EffectFade, Autoplay, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} !w-8 !h-1 !rounded-full transition-all duration-500 !bg-white/30 hover:!bg-white/60"></span>`;
                }
            }}
            className="w-full text-center pb-12"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="flex flex-col items-center justify-center pb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6">
                            {slide.tagline}
                        </div>
                        
                        <h1 
                            className="font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-300 mb-4 max-w-5xl mx-auto leading-tight"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                            dangerouslySetInnerHTML={{ __html: slide.title }}
                        />

                        <p 
                            className="text-sm sm:text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-6 sm:mb-10 font-light tracking-wide leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: slide.desc }}
                        />

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 w-full pointer-events-auto">
                            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] sm:min-w-[200px] gap-3 px-7 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-full bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-black text-center text-sm sm:text-base lg:text-lg hover:shadow-[0_0_40px_rgba(27,211,97,0.3)] transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] sm:min-w-[200px] gap-3 px-7 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-full bg-white/5 text-white font-black text-center text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
