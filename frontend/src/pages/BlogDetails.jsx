import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ShootingStars from '../components/ShootingStars';

const BlogDetails = () => {
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

    if (error) return <div className="text-center py-20 text-2xl text-red-500">Blog not found.</div>;
    if (!blog) return <div className="text-center py-20 text-2xl">Loading...</div>;
    return (
        <div className="w-full bg-white font-sans">
            <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("/images/20.png")' }}></div>
                <ShootingStars />
                <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 text-center pt-[72px] px-4 max-w-4xl">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Blog Post</span>
                    <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold text-center drop-shadow-lg leading-tight">
                        {blog.title}
                    </h2>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blogs" className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        &larr; Back to Blogs
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{blog.title}</h1>

                    <p className="text-gray-500 italic mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Published on: {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <div className="w-full relative rounded-xl overflow-hidden shadow-lg mb-12 bg-gray-100 flex justify-center items-center h-[50vh] md:h-[60vh]">
                        <img
                            src={blog.image_filename}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                        />
                    </div>

                    <div className="prose max-w-none text-gray-700 leading-relaxed text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Introduction</h2>
                        <p className="mb-8 text-justify">{blog.introduction}</p>

                        {[1, 2, 3, 4, 5].map(i => {
                            const heading = blog[`heading${i}`];
                            const paragraph = blog[`paragraph${i}`];
                            if (!heading && !paragraph) return null;

                            return (
                                <React.Fragment key={i}>
                                    {heading && <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4">{heading}</h3>}
                                    {paragraph && <p className="mb-6 text-justify">{paragraph}</p>}
                                </React.Fragment>
                            );
                        })}

                        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4 border-b pb-2">Conclusion</h2>
                        <p className="text-justify">{blog.conclusion}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default BlogDetails;
