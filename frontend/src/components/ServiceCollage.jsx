import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaPalette, FaCube, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServiceCollage = () => {
    const { t } = useTranslation();

    const services = [
        {
            title: t('home.services_collage.services.web.title'),
            desc: t('home.services_collage.services.web.desc'),
            icon: <FaCode />,
            link: "/web-development",
            image: "/images/web_development_collage_realistic_premium.png",
            size: "md:col-span-2",
            color: "from-blue-600/20 to-indigo-600/20"
        },
        {
            title: t('home.services_collage.services.branding.title'),
            desc: t('home.services_collage.services.branding.desc'),
            icon: <FaPalette />,
            link: "/about",
            image: "/images/branding_design_collage_realistic_premium.png",
            size: "md:col-span-1",
            color: "from-teal-500/20 to-[var(--color-gozoom-green)]/20"
        },
        {
            title: t('home.services_collage.services.software_ai.title'),
            desc: t('home.services_collage.services.software_ai.desc'),
            icon: <FaRobot />,
            link: "/expert-seo-services",
            image: "/images/software_ai_collage_realistic_premium.png",
            size: "md:col-span-1",
            color: "from-[var(--color-gozoom-blue)]/20 to-[var(--color-gozoom-green)]/20"
        },
        {
            title: t('home.services_collage.services.animation.title'),
            desc: t('home.services_collage.services.animation.desc'),
            icon: <FaCube />,
            link: "/mobile-application-development",
            image: "/images/three_d_animation_collage.png",
            size: "md:col-span-1",
            color: "from-cyan-600/20 to-blue-600/20"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-8 md:px-16">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        {t('home.services_collage.title')} <br />
                        <span className="text-gray-400">{t('home.services_collage.subtitle')}</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        {t('home.services_collage.desc')}
                    </p>
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-bold rounded-full hover:shadow-xl transition-all">
                            {t('home.services_collage.cta_work')}
                        </Link>
                        <Link to="/services" className="text-gray-900 font-bold flex items-center gap-2 group">
                            {t('home.services_collage.cta_explore')} <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[340px]">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/5 min-h-[400px] md:min-h-0 ${srv.size}`}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${srv.color} backdrop-blur-[2px]`} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xl mb-6">
                                        {srv.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-3">{srv.title}</h3>
                                    <p className="text-white/70 max-w-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                                        {srv.desc}
                                    </p>
                                </div>

                                <Link to={srv.link} className="inline-flex items-center gap-2 text-white font-bold group/btn">
                                    {t('home_page.hero.slides.0.cta_learn')} <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* Centered Small Card "Everything in One Place" */}
                    <div className="col-span-1 bg-black rounded-[2rem] flex items-center justify-center text-center p-8 shadow-2xl shadow-blue-500/10 min-h-[200px] md:min-h-0">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{t('home.services_collage.everything.title')}</h3>
                            <p className="text-gray-400 text-lg md:text-xl font-medium">{t('home.services_collage.everything.subtitle')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCollage;
