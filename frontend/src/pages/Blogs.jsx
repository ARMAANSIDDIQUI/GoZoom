import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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

    return (
        <div className="font-['Lato',sans-serif] overflow-x-hidden bg-white">

            <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: 'url("/images/20.png")' }}></div>

                {/* Physics Engine Animation */}
                <ShootingStars />
                <div className="absolute top-0 right-0 -mr-40 -mt-20 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 text-center pt-[72px]">
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold text-sm mb-4 uppercase tracking-wider">Insights & News</span>
                    <h2 className="text-white text-[2.5rem] md:text-6xl font-extrabold text-center drop-shadow-lg">
                        Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Blogs</span>
                    </h2>
                </div>
            </section>

            {/* Blog Cards Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    {blogs.length === 0 ? (
                        <p className="text-center text-gray-500 text-xl py-20">No blogs published yet. Check back soon!</p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map(blog => (
                                <div key={blog._id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full overflow-hidden border border-gray-100">
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                            src={blog.image_filename}
                                            alt="Blog"
                                            onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h5 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{blog.title}</h5>
                                        <p className="text-gray-600 mb-5 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {blog.introduction ? blog.introduction.substring(0, 100) : ''}...
                                        </p>
                                        <Link to={`/blog/${blog._id}`} className="inline-block bg-[#007bff] hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition-colors duration-200 mt-auto self-start">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
