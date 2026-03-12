import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ServiceCollage from '../components/ServiceCollage';
import TechSpotlight from '../components/TechSpotlight';
import Hero from '../components/parallaxGlobe/Hero';
import { useScroll, useMotionValue, useSpring } from 'motion/react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();

        const lenis = new Lenis({
            lerp: 0.05,
            wheelMultiplier: 1,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const services = [
        { title: 'Microsoft Technologies', desc: 'Gozoom specializes in Microsoft...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-microsoft-mbl.jpg?v1', link: '/web-development' },
        { title: 'Chatbot Development', desc: 'Gozoom provides chatbot development...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-chatbot-mbl.jpg?v1', link: '/chatbot' },
        { title: 'Cloud & DevOps', desc: 'Gozoom offers highly sophisticated cloud...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-clouds-mbl.jpg?v1', link: '/integration' },
        { title: 'Artificial Intelligence', desc: 'With a proficiency in Artificial Intelligence...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-prototype-mbl-new.jpg?v1', link: '/expert-seo-services' },
        { title: 'Web Application Development', desc: 'We have built secure web application...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-web-mbl-new.jpg?v1', link: '/hire-react-developer' },
        { title: 'Mobile App Development', desc: 'We leverage cutting-edge technologies...', img: 'https://img.hiddenbrains.com/public/local-cdn/images/home-service-mobile-mbl.jpg?v1', link: '/mobile-application-development' }
    ];

    return (
        <div className="w-full font-sans relative">
            {/* Hero Parallax Globe */}
            <Hero />

            {/* We are Gozoom Technologies */}
            <section id="about-section" className="pb-20 pt-8 bg-gray-50 overflow-hidden relative z-10">
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
                            <Link to="/about" className="inline-flex items-center text-[var(--color-gozoom-blue)] font-bold hover:text-blue-800 transition-colors gap-2">
                                About Us <FaArrowRight className="ml-1" />
                            </Link>
                        </div>

                        <div className="lg:w-5/12 grid grid-cols-2 gap-8" data-aos="fade-left">
                            <div className="border-l-4 border-[var(--color-gozoom-blue)] pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Years</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-blue)] block my-2 transition-colors">3+</span>
                                <p className="text-sm text-gray-600">Extensive experience in delivering IT solutions & services.</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-green)] pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Clients</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-green)] block my-2 transition-colors">100+</span>
                                <p className="text-sm text-gray-600">Clients across the globe testifying our quality & processes.</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-blue)] pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Awards</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-blue)] block my-2 transition-colors">7+</span>
                                <p className="text-sm text-gray-600">Industry prestigious awards for excellence and innovation.</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-green)] pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">Experts</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-green)] block my-2 transition-colors">30+</span>
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
