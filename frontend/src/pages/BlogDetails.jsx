import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
        <div className="pt-[80px] w-full bg-white font-sans">
            <div className="absolute w-full z-10 pt-48 flex justify-center pointer-events-none px-4">
                <h2 className="text-white text-3xl md:text-5xl font-light text-center drop-shadow-md">
                    {blog.title}
                </h2>
            </div>

            <section className="w-full min-h-[50vh] bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url("/images/20.png")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
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
