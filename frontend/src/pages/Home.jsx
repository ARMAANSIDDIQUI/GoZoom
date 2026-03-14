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

        // Auto-scroll Snap Logic
        let lastScrollY = window.scrollY;
        let isTransitioning = false;

        const handleScroll = (e) => {
            const currentScrollY = e.scrollY;
            const aboutSection = document.getElementById('about-section');
            if (!aboutSection || isTransitioning) {
                lastScrollY = currentScrollY;
                return;
            }

            const sectionTop = aboutSection.offsetTop;
            
            // AGGRESSIVE SNAP DOWN: If we are on Hero and scroll DOWN even a tiny bit
            if (currentScrollY > 10 && currentScrollY < sectionTop - 100 && currentScrollY > lastScrollY) {
                isTransitioning = true;
                lenis.scrollTo('#about-section', {
                    offset: -50,
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth custom easing
                    onComplete: () => {
                        setTimeout(() => { isTransitioning = false; }, 500);
                    }
                });
            }
            
            // AGGRESSIVE SNAP UP: If we are at the very top of About and scroll UP
            if (currentScrollY < sectionTop && currentScrollY > sectionTop - 100 && currentScrollY < lastScrollY) {
                isTransitioning = true;
                lenis.scrollTo(0, {
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    onComplete: () => {
                        setTimeout(() => { isTransitioning = false; }, 500);
                    }
                });
            }
            lastScrollY = currentScrollY;
        };

        // Sync with Lenis scroll
        lenis.on('scroll', handleScroll);

        return () => {
            lenis.destroy();
        };
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            window.scrollTo({ top: aboutSection.offsetTop - 50, behavior: 'smooth' });
        }
    };

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

    return (
        <div className="w-full font-sans relative">
            {/* Hero Parallax Globe */}
            <Hero onScrollNext={scrollToAbout} />

            {/* We are Gozoom Technologies */}
            <section id="about-section" className="pb-20 pt-12 -mt-12 bg-gray-50 overflow-hidden relative z-10">
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
                                <p className="text-sm text-gray-600">Extensive experience in delivering IT Solutions & Services.</p>
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

            {/* Workforce Solutions Section */}
            <section className="py-20 bg-white overflow-hidden relative border-t border-gray-100">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <span className="text-cyan-600 uppercase tracking-widest text-sm font-bold block mb-4">Talent & Acquisition</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Workforce Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We help enterprises build and manage high-performing teams globally. From contingent staffing and direct hire to global payroll compliance, our workforce solutions are designed to scale your operations seamlessly.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Contingent Staffing',
                                    'Direct Hire',
                                    'Global Payroll',
                                    'Nearshore/Offshore',
                                    'RPO Solutions',
                                    'SOW Management'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <span className="text-gray-700 font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/workforce-solutions" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-cyan-600 transition-all gap-3 group">
                                View Workforce Services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Workforce Solutions"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white text-2xl font-bold">Scaling Global Teams</p>
                                    <p className="text-white/80">Tailored recruitment & management</p>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full blur-3xl -z-10 animate-pulse"></div>
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10 animate-pulse"></div>
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
