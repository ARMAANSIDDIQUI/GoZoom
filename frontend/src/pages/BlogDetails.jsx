import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import ShootingStars from '../components/ShootingStars';

const BlogDetails = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const { data } = await axios.get(`http://localhost:5001/api/blogs/${id}`);
                if (data.success) {
                    setBlog(data.data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError(true);
            }
        };
        fetchBlog();
    }, [id]);

    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-red-500 mb-4">{t('blog_details_page.not_found.title')}</h2>
                <Link to="/blogs" className="text-blue-600 font-bold hover:underline">{t('blog_details_page.not_found.return')}</Link>
            </div>
        </div>
    );

    if (!blog) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-medium">{t('blog_details_page.loading')}</p>
            </div>
        </div>
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="w-full bg-white font-['Lato',sans-serif]">
            {/* Premium Hero Section */}
            <section className="hero-premium relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: 'url("/images/20.png")' }}
                />

                <ShootingStars />
                <div className="absolute top-[-10%] right-[-5%] w-[clamp(400px,60vw,800px)] h-[clamp(400px,60vw,800px)] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-indigo-600/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 text-center pt-24 px-4 max-w-5xl">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 font-black text-xs mb-6 uppercase tracking-widest"
                    >
                        {t('blog_details_page.hero.subtitle')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white text-4xl md:text-6xl lg:text-7xl font-black text-center drop-shadow-2xl leading-[1.1] tracking-tight"
                    >
                        {blog.title}
                    </motion.h2>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-12"
                    >
                        <Link to="/blogs" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold transition-all group" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> {t('blog_details_page.content.back')}
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-12"
                    >
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{blog.title}</h1>

                            <div className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-widest text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                                    <FaCalendarAlt className="text-blue-600" />
                                    {new Date(blog.date).toLocaleDateString(t('common.date_locale', { defaultValue: 'en-US' }), { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                                <span className="bg-blue-600/10 text-blue-600 px-3 py-1.5 rounded-lg">{t('blog_details_page.content.read_time')}</span>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="aspect-video relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 group"
                        >
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.8 }}
                                src={blog.image_filename}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <div className="relative">
                                <span className="absolute -left-4 top-0 w-1 h-full bg-blue-600 rounded-full opacity-50 hidden md:block"></span>
                                <h2 className="text-3xl font-black text-gray-900 mb-6 border-b border-gray-100 pb-4">{t('blog_details_page.content.summary')}</h2>
                                <p className="text-xl text-gray-600 leading-loose text-justify font-medium italic">{blog.introduction}</p>
                            </div>

                            {[1, 2, 3, 4, 5].map(i => {
                                const heading = blog[`heading${i}`];
                                const paragraph = blog[`paragraph${i}`];
                                if (!heading && !paragraph) return null;

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        className="pt-8"
                                    >
                                        {heading && <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-4">
                                            <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-black">{i}</span>
                                            {heading}
                                        </h3>}
                                        {paragraph && <p className="text-lg text-gray-600 leading-[1.8] text-justify">{paragraph}</p>}
                                    </motion.div>
                                );
                            })}

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 p-10 bg-slate-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]"></div>
                                <h2 className="text-3xl font-black mb-6 relative z-10">{t('blog_details_page.content.conclusion')}</h2>
                                <p className="text-lg text-slate-300 leading-relaxed text-justify relative z-10">{blog.conclusion}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
export default BlogDetails;