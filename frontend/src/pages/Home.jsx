import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ServiceCollage from '../components/ServiceCollage';
import TechSpotlight from '../components/TechSpotlight';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Home = () => {
    React.useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();
    }, []);

    const slides = [
        {
            id: 1,
            tagline: 'Enterprise',
            title: 'Software Development <br/>Company',
            desc: 'Delivering software solutions to build intelligent <br/>enterprises with speed and agility',
            img: '/images/banner121.png',
        },
        {
            id: 2,
            tagline: 'Innovative',
            title: 'Website & Mobile App <br/>Development',
            desc: 'Transforming Ideas Into Digital Experiences & Empowering Your Presence Across Screens',
            img: '/images/banner33.png',
        },
        {
            id: 3,
            tagline: 'Offshore',
            title: 'Dedicated Development Team',
            desc: 'Fuel digital transformation initiatives and empower <br/>your business with expert team',
            img: '/images/banner22.png',
        },
        {
            id: 4,
            tagline: 'performance-driven',
            title: 'Digital Marketing <br/>Solutions',
            desc: 'Elevate your business to new heights <br/>with our unparalleled digital marketing expertise',
            img: '/images/banner4.png',
        },
        {
            id: 5,
            tagline: 'Enterprise',
            title: 'Software Development <br/>Company',
            desc: 'Delivering software solutions to build intelligent <br/>enterprises with speed and agility',
            img: '/images/banner121.png',
        },
    ];

    const services = [
        { title: 'Microsoft Technologies', desc: 'Gozoom specializes in Microsoft...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-microsoft-mbl.jpg?v1', link: '/web-development' },
        { title: 'Chatbot Development', desc: 'Gozoom provides chatbot development...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-chatbot-mbl.jpg?v1', link: '/chatbot' },
        { title: 'Cloud & DevOps', desc: 'Gozoom offers highly sophisticated cloud...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-clouds-mbl.jpg?v1', link: '/integration' },
        { title: 'Artificial Intelligence', desc: 'With a proficiency in Artificial Intelligence...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-prototype-mbl-new.jpg?v1', link: '/expert-seo-services' },
        { title: 'Web Application Development', desc: 'We have built secure web application...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-web-mbl-new.jpg?v1', link: '/hire-react-developer' },
        { title: 'Mobile App Development', desc: 'We leverage cutting-edge technologies...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-mobile-mbl.jpg?v1', link: '/mobile-application-development' }
    ];

    return (
        <div className="w-full font-sans">
            {/* Hero Banner with Swiper */}
            <section className="hero-premium">
                {/* Layered Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                </div>

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
                    className="w-full h-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="container min-h-[85vh] lg:min-h-screen py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
                                <div className="w-full lg:w-3/5 text-center z-10 flex flex-col items-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest mb-6" data-aos="fade-down">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                                        {slide.tagline}
                                    </div>
                                    <h1
                                        className="text-hero-title text-white mb-6 lg:mb-8 leading-[1.05] tracking-tight drop-shadow-sm"
                                        dangerouslySetInnerHTML={{ __html: slide.title }}
                                        data-aos="fade-up" data-aos-delay="200"
                                    />
                                    <p
                                        className="text-hero-desc text-slate-400 mb-8 max-w-2xl mx-auto font-medium"
                                        dangerouslySetInnerHTML={{ __html: slide.desc }}
                                        data-aos="fade-up" data-aos-delay="400"
                                    />
                                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 w-full" data-aos="fade-up" data-aos-delay="600">
                                        <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-center text-base lg:text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1 uppercase tracking-wider group">
                                            Get Started <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <Link to="/about" className="inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] gap-3 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl bg-white/5 text-white font-black text-center text-base lg:text-lg hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-md border border-white/20 uppercase tracking-wider">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full lg:w-2/5 relative flex justify-center items-center h-full">
                                    <div className="relative group w-full max-w-[300px] lg:max-w-none">
                                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[60px] lg:blur-[80px] group-hover:bg-blue-500/30 transition-all duration-700"></div>
                                        <img
                                            src={slide.img}
                                            alt="Hero Banner"
                                            className="w-full h-auto relative z-10 animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* We are Gozoom Technologies */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-7/12" data-aos="fade-right">
                            <span className="text-gray-500 uppercase tracking-wider text-sm font-semibold block mb-2">We are Gozoom Technologies</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">End-to-End Custom Software Development Company</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Gozoom Technologies is an offshore software development company with more than 3 years of experience in steering clients through digital transformation. We are a team of innovators and technologists offering futuristic software product development services to enterprises. As one of the leading software development companies, we have a proven track record of success and strive to stay ahead of the curve by constantly innovating and embracing the latest advancements in technology.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We are dedicated to helping businesses thrive in today's rapidly evolving markets by empowering them with software development & enterprise technology solutions that deliver measurable results.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors gap-2">
                                About Us <FaArrowRight className="ml-1" />
                            </Link>
                        </div>

                        <div className="lg:w-5/12 grid grid-cols-2 gap-8" data-aos="fade-left">
                            <div className="border-l-4 border-yellow-400 pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Years</span>
                                <span className="text-4xl font-bold text-gray-900 block my-2 group-hover:text-yellow-500 transition-colors">3+</span>
                                <p className="text-sm text-gray-600">Extensive experience in delivering IT solutions & services.</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Clients</span>
                                <span className="text-4xl font-bold text-gray-900 block my-2 group-hover:text-purple-500 transition-colors">100+</span>
                                <p className="text-sm text-gray-600">Clients across the globe testifying our quality & processes.</p>
                            </div>
                            <div className="border-l-4 border-blue-400 pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Awards</span>
                                <span className="text-4xl font-bold text-gray-900 block my-2 group-hover:text-blue-500 transition-colors">7+</span>
                                <p className="text-sm text-gray-600">Industry prestigious awards for excellence and innovation.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Experts</span>
                                <span className="text-4xl font-bold text-gray-900 block my-2 group-hover:text-green-500 transition-colors">30+</span>
                                <p className="text-sm text-gray-600">Team of qualified, skilled and committed professionals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Replace legacy services with Collage */}
            <ServiceCollage />

            {/* Build Environment / Tech Spotlight */}
            <TechSpotlight />
        </div>
    );
};

export default Home;
