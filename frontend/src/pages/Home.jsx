import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import ServiceCollage from '../components/ServiceCollage';
import TechSpotlight from '../components/TechSpotlight';
import Hero from '../components/parallaxGlobe/Hero';
import { useScroll } from 'motion/react';
import { useTranslation } from 'react-i18next';

import AOS from 'aos';
import 'aos/dist/aos.css';
import WOW from 'wow.js';
import 'animate.css';

const Home = () => {
    const { t } = useTranslation();
    const lenisRef = useRef(null);
    const isTransitioningRef = useRef(false);
    const lastScrollYRef = useRef(0);
    const location = useLocation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        const wow = new WOW({ live: false });
        wow.init();

        const lenis = new Lenis({
            lerp: 0.05,
            wheelMultiplier: 1,
        });
        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        let cachedSectionTop = null;
        const getSectionTop = () => {
            if (cachedSectionTop === null) {
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                    cachedSectionTop = aboutSection.offsetTop;
                }
            }
            return cachedSectionTop;
        };

        const handleResize = () => {
            cachedSectionTop = null; // Invalidate cache on resize
        };
        window.addEventListener('resize', handleResize);

        // Binary Snap Logic (Discrete Hero transition)
        const handleScroll = (e) => {
            const currentScrollY = e.scrollY;
            const sectionTop = getSectionTop();
            
            if (sectionTop === null || isTransitioningRef.current) {
                lastScrollYRef.current = currentScrollY;
                return;
            }
            
            // BINARY SNAP DOWN: From Hero -> Snap all way to content
            if (currentScrollY > 5 && currentScrollY < sectionTop - 10 && currentScrollY > lastScrollYRef.current) {
                isTransitioningRef.current = true;
                lenis.scrollTo('#about-section', {
                    offset: -50,
                    duration: 1.0,
                    easing: (t) => 1 - Math.pow(1 - t, 4),
                    onComplete: () => {
                        setTimeout(() => { isTransitioningRef.current = false; }, 400);
                    }
                });
            }
            
            // BINARY SNAP UP: From top of content -> Snap all way to Hero top
            if (currentScrollY < sectionTop + 10 && currentScrollY > 5 && currentScrollY < lastScrollYRef.current) {
                isTransitioningRef.current = true;
                lenis.scrollTo(0, {
                    duration: 1.0,
                    easing: (t) => 1 - Math.pow(1 - t, 4),
                    onComplete: () => {
                        setTimeout(() => { isTransitioningRef.current = false; }, 400);
                    }
                });
            }
            lastScrollYRef.current = currentScrollY;
        };

        lenis.on('scroll', handleScroll);

        // Initial hash scroll
        if (window.location.hash) {
            setTimeout(() => {
                lenis.scrollTo(window.location.hash, {
                    offset: -50,
                    duration: 1.5,
                });
            }, 500);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current && location.hash) {
            lenisRef.current.scrollTo(location.hash, {
                offset: -50,
                duration: 1.2,
            });
        }
    }, [location.hash]);

    // Helper for internal Hero components
    const scrollToAbout = () => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo('#about-section', {
                offset: -50,
                duration: 1.2,
            });
        } else {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                window.scrollTo({ top: aboutSection.offsetTop - 50, behavior: 'smooth' });
            }
        }
    };

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    return (
        <div className="w-full font-sans relative">
            {/* Hero Parallax Globe */}
            <div id="hero">
                <Hero onScrollNext={scrollToAbout} />
            </div>

            {/* We are Gozoom Technologies */}
            <section id="about-section" className="pb-20 pt-12 -mt-12 bg-gray-50 overflow-hidden relative z-10">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-7/12" data-aos="fade-right">
                            <span className="text-gray-500 uppercase tracking-wider text-sm font-semibold block mb-2">{t('home.about.subtitle')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">{t('home.about.title')}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {t('home.about.p1')}
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {t('home.about.p2')}
                            </p>
                            <Link to="/about" className="inline-flex items-center text-[var(--color-gozoom-blue)] font-bold hover:text-blue-800 transition-colors gap-2">
                                {t('home.about.link')} <FaArrowRight className="ml-1" />
                            </Link>
                        </div>

                        <div className="lg:w-5/12 grid grid-cols-2 gap-8" data-aos="fade-left">
                            <div className="border-l-4 border-[var(--color-gozoom-blue)] pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">{t('home.about.stats.years')}</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-blue)] block my-2 transition-colors">{t('home.about.stats.years_val')}</span>
                                <p className="text-sm text-gray-600">{t('home.about.stats.years_desc')}</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-green)] pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">{t('home.about.stats.clients')}</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-green)] block my-2 transition-colors">{t('home.about.stats.clients_val')}</span>
                                <p className="text-sm text-gray-600">{t('home.about.stats.clients_desc')}</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-blue)] pl-4 py-2 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">{t('home.about.stats.awards')}</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-blue)] block my-2 transition-colors">{t('home.about.stats.awards_val')}</span>
                                <p className="text-sm text-gray-600">{t('home.about.stats.awards_desc')}</p>
                            </div>
                            <div className="border-l-4 border-[var(--color-gozoom-green)] pl-4 py-2 mt-8 lg:mt-0 lg:translate-y-8 hover:-translate-y-2 transition-transform duration-300 cursor-default bg-white shadow-sm p-4 rounded group">
                                <span className="text-gray-500 uppercase text-xs font-bold block">{t('home.about.stats.experts')}</span>
                                <span className="text-4xl font-bold text-[var(--color-gozoom-green)] block my-2 transition-colors">{t('home.about.stats.experts_val')}</span>
                                <p className="text-sm text-gray-600">{t('home.about.stats.experts_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workforce Solutions Section */}
            <section id="workforce-section" className="py-20 bg-white overflow-hidden relative border-t border-gray-100">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <span className="text-cyan-600 uppercase tracking-widest text-sm font-bold block mb-4">{t('home.workforce.subtitle')}</span>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                {t('home.workforce.title_premium')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">{t('home.workforce.title_solutions')}</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {t('home.workforce.desc')}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {[
                                    t('home.workforce.list.contingent'),
                                    t('home.workforce.list.direct'),
                                    t('home.workforce.list.payroll'),
                                    t('home.workforce.list.nearshore'),
                                    t('home.workforce.list.rpo'),
                                    t('home.workforce.list.sow')
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <span className="text-gray-700 font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/workforce-solutions" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-cyan-600 transition-all gap-3 group">
                                {t('home.workforce.link')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative" data-aos="fade-left">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/workforce_solutions_hero_realistic.png"
                                    alt="Workforce Solutions"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-white text-2xl font-bold">{t('home.workforce.img_title')}</p>
                                    <p className="text-white/80">{t('home.workforce.img_desc')}</p>
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
            <div id="services-section">
                <ServiceCollage />
            </div>

            {/* Build Environment / Tech Spotlight */}
            <div id="tech-section">
                <TechSpotlight />
            </div>
        </div>
    );
};

export default Home;