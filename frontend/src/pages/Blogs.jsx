import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaMicrochip, FaBrain, FaCube, FaLayerGroup } from 'react-icons/fa';
import ShootingStars from '../components/ShootingStars';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get('http://localhost:5001/api/blogs');
                if (data.success) {
                    setBlogs(data.data);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    const techInsights = [
        {
            title: "Spatial Computing",
            icon: FaCube,
            color: "text-cyan-400",
            desc: "Break the boundaries of flat screens. We build immersive 3D environments that blend digital content with physical space seamlessly."
        },
        {
            title: "Neural Interfaces",
            icon: FaBrain,
            color: "text-purple-400",
            desc: "The next frontier of interaction. Intuitive, thought-driven interfaces that anticipate user needs before they even click."
        },
        {
            title: "Quantum Rendering",
            icon: FaMicrochip,
            color: "text-blue-400",
            desc: "Photorealistic graphics rendered in milliseconds. Experience unparalleled visual fidelity powered by next-gen processing."
        },
        {
            title: "Holographic UI",
            icon: FaLayerGroup,
            color: "text-indigo-400",
            desc: "Interfaces that float in mid-air. Interact with data in a completely new dimension with our proprietary holographic engine."
        }
    ];

    return (
        <div className="font-['Lato',sans-serif] overflow-x-hidden bg-white">

            {/* Premium Hero Section */}
            <section className="hero-premium relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Zoom Animation */}
                <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay" 
                    style={{ backgroundImage: 'url("/images/20.png")' }}
                />

                {/* Physics Engine & Decorative Elements */}
                <ShootingStars />
                <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-blue-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-widest mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                        Insights & News
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-hero-title text-white font-extrabold leading-[1.05] tracking-tight drop-shadow-2xl"
                    >
                        Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Blogs</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-hero-desc text-slate-400 mt-8 max-w-2xl mx-auto font-medium"
                    >
                        Explore our collection of articles, insights, and updates on the latest trends in technology and innovation.
                    </motion.p>
                </div>
            </section>

            {/* Tech Insights Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider"
                        >
                            The Future of Tech
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white"
                        >
                            Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Next-Gen Solutions</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {techInsights.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <tech.icon className={`w-8 h-8 ${tech.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{tech.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Decorative background circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
            </section>

            {/* Blog Cards Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-2xl">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Our Articles</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Latest From The <span className="text-blue-600">Journal</span></h2>
                        </div>
                    </div>

                    {blogs.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 text-xl font-medium">No blogs published yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence>
                                {blogs.map((blog, index) => (
                                    <motion.div
                                        key={blog._id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden border border-gray-100 group"
                                    >
                                        <div className="h-72 overflow-hidden relative">
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-full h-full object-cover"
                                                src={blog.image_filename}
                                                alt={blog.title}
                                                onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                                            />
                                            <div className="absolute top-6 left-6">
                                                <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">Technology</span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h5 className="text-2xl font-extrabold text-gray-900 mb-4 line-clamp-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>{blog.title}</h5>
                                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                                {blog.introduction ? blog.introduction.substring(0, 120) : ''}...
                                            </p>
                                            <Link 
                                                to={`/blog/${blog._id}`} 
                                                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 self-start group/btn shadow-lg hover:shadow-blue-500/40"
                                            >
                                                Read More 
                                                <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
