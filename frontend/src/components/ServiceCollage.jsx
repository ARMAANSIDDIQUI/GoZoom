import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCode, FaPalette, FaCube, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCollage = () => {
    const services = [
        {
            title: "Web Development",
            desc: "Transform concepts into high-performance experiences. Engineering story-driven websites and premium digital products.",
            icon: <FaCode />,
            link: "/web-development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            size: "col-span-2 row-span-1",
            color: "from-blue-600/20 to-indigo-600/20"
        },
        {
            title: "Branding",
            desc: "We build strategic identities designed to secure a premium market position.",
            icon: <FaPalette />,
            link: "/about",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
            size: "col-span-1 row-span-2",
            color: "from-teal-500/20 to-[var(--color-gozoom-green)]/20"
        },
        {
            title: "Software / AI",
            desc: "Everything in One Place. We replace manual processes with intelligent software tailored to your specific operations.",
            icon: <FaRobot />,
            link: "/expert-seo-services",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            size: "col-span-1 row-span-2",
            color: "from-[var(--color-gozoom-blue)]/20 to-[var(--color-gozoom-green)]/20"
        },
        {
            title: "3D Animation",
            desc: "We build cinematic 3D assets designed to give your brand a premium feel.",
            icon: <FaCube />,
            link: "/mobile-application-development",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
            size: "col-span-1 row-span-1",
            color: "from-cyan-600/20 to-blue-600/20"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-8 md:px-16">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        The full spectrum of <br />
                        <span className="text-gray-400">core capabilities</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We replace the need for multiple vendors. From brand identity to custom software, we build the entire ecosystem your business runs on.
                    </p>
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-[var(--color-gozoom-blue)] to-[var(--color-gozoom-green)] text-white font-bold rounded-full hover:shadow-xl transition-all">
                            Work With Us
                        </Link>
                        <Link to="/web-development" className="text-gray-900 font-bold flex items-center gap-2 group">
                            Explore our services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className={`relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-black/5 ${srv.size}`}
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
                                    See More <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* Centered Small Card "Everything in One Place" */}
                    <div className="col-span-1 row-span-1 bg-black rounded-[2rem] flex items-center justify-center text-center p-8 shadow-2xl shadow-blue-500/10">
                        <div>
                            <h3 className="text-4xl font-black text-white mb-2">Everything</h3>
                            <p className="text-gray-400 text-xl font-medium">in One Place</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceCollage;
