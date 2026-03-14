import { motion, useTransform } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function HeroText({ scrollYProgress, onScrollNext }) {
  // Match the reference parallax behavior: text drifts up and fades early while the globe takes over.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-150%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const slides = [
      {
          id: 1,
          tagline: 'Enterprise',
          titleLines: [
            [{ text: 'Software', accent: false }],
            [{ text: 'Development', accent: true }, { text: ' Company', accent: false }],
          ],
          descLines: [
            'Delivering software solutions to build intelligent',
            'enterprises with speed and agility.',
          ],
      },
      {
          id: 2,
          tagline: 'Innovative',
          titleLines: [
            [{ text: 'Websites', accent: false }, { text: ' & ', accent: false }, { text: 'Mobile', accent: true }],
            [{ text: 'App Development', accent: false }],
          ],
          descLines: [
            'Transforming ideas into digital experiences and',
            'powering your presence across screens.',
          ],
      },
      {
          id: 3,
          tagline: 'Offshore',
          titleLines: [
            [{ text: 'Dedicated', accent: false }],
            [{ text: 'Development', accent: false }, { text: ' Team', accent: true }],
          ],
          descLines: [
            'Fuel digital transformation initiatives and empower',
            'your business with an expert team.',
          ],
      },
      {
          id: 4,
          tagline: 'performance-driven',
          titleLines: [
            [{ text: 'Digital', accent: false }],
            [{ text: 'Marketing', accent: true }, { text: ' Solutions', accent: false }],
          ],
          descLines: [
            'Elevate your business to new heights with',
            'unparalleled digital marketing expertise.',
          ],
      },
  ];

  return (
    <motion.div
      style={{ y, opacity, scale }}
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
                    <div className="flex flex-col items-center justify-center pb-6 space-y-3 sm:space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-black uppercase tracking-[0.25em] mb-6 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            {slide.tagline}
                        </div>
                        
                        <h1
                          className="hero-script-title text-white/90 mb-5 max-w-5xl mx-auto leading-[1.03] drop-shadow-[0_14px_40px_rgba(0,0,0,0.48)]"
                          style={{ fontSize: 'clamp(2.4rem, 4.6vw, 4.25rem)' }}
                        >
                          {slide.titleLines.map((line, lineIndex) => (
                            <span key={`${slide.id}-l-${lineIndex}`} className="block">
                              {line.map((part, partIndex) => (
                                <span
                                  key={`${slide.id}-p-${lineIndex}-${partIndex}`}
                                  className={part.accent ? 'text-white' : 'text-white/85'}
                                >
                                  {part.text}
                                </span>
                              ))}
                            </span>
                          ))}
                        </h1>

                        <p className="hero-body-copy text-sm sm:text-base md:text-lg text-white/55 max-w-2xl mx-auto mb-6 sm:mb-10 font-light">
                          {slide.descLines.map((line, i) => (
                            <span key={`${slide.id}-d-${i}`} className="block">
                              {line}
                            </span>
                          ))}
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 w-full pointer-events-auto">
                            <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] sm:min-w-[200px] gap-3 px-7 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-full bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-black text-center text-sm sm:text-base lg:text-lg hover:shadow-[0_0_40px_rgba(27,211,97,0.3)] transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] sm:min-w-[200px] gap-3 px-7 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-full bg-white/5 text-white font-black text-center text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm border border-white/20 uppercase tracking-wider">
                                Learn More
                            </Link>
                            {/* <button
                              type="button"
                              onClick={onScrollNext}
                              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] sm:min-w-[200px] gap-3 px-7 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 rounded-full bg-white/0 text-white/80 font-black text-center text-sm sm:text-base lg:text-lg hover:text-white transition-all hover:-translate-y-1 border border-white/15 hover:border-white/25 uppercase tracking-wider group"
                            >
                              Scroll <FaChevronDown className="group-hover:translate-y-0.5 transition-transform" />
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
}
