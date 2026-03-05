import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminAddBlog = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '', introduction: '',
        heading1: '', paragraph1: '',
        heading2: '', paragraph2: '',
        heading3: '', paragraph3: '',
        heading4: '', paragraph4: '',
        heading5: '', paragraph5: '',
        conclusion: ''
    });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach(key => {
            data.append(key, formData[key]);
        });
        if (image) {
            data.append('blog_image', image);
        }

        try {
            await axios.post('http://localhost:5001/api/blogs', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert('Optimization Complete: Blog Published Successfully!');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Error publishing blog:", error);
            alert("Sync Failed: Please check your connection and try again.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-200 pb-20">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5 px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/admin/dashboard" className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <h1 className="text-xl font-black tracking-tight text-white uppercase tracking-widest text-sm">Editor <span className="text-blue-500">Suite</span></h1>
                    </div>
                    <button onClick={handleSubmit} type="button" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl font-black text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
                        Quick Publish
                    </button>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto p-6 md:p-10 animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Hero Section of Blog */}
                    <div className="glass-card p-8 md:p-12 border-t-4 border-blue-500">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-blue-400 font-black uppercase tracking-widest text-xs">Primary Metadata</h3>
                                <div className="space-y-2">
                                    <label className="text-slate-400 font-bold text-xs uppercase ml-1">Article Title</label>
                                    <input
                                        type="text" name="title" value={formData.title} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-xl font-black outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
                                        placeholder="Enter a catchy title..." required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-slate-400 font-bold text-xs uppercase ml-1">Lede / Introduction</label>
                                    <textarea
                                        name="introduction" value={formData.introduction} onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-300 outline-none focus:border-blue-500 focus:bg-white/10 h-32 transition-all"
                                        placeholder="Write a compelling intro..." required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-blue-400 font-black uppercase tracking-widest text-xs">Cover Media</h3>
                                <div className="relative group">
                                    <div className="aspect-video bg-white/5 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-colors">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-center p-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                <p className="text-slate-600 text-xs font-bold uppercase">Click to upload image</p>
                                            </div>
                                        )}
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" required />
                                    </div>
                                    <p className="text-center text-[10px] text-slate-600 mt-3 uppercase tracking-tighter">Recommended: 1920x1080px • Max 2MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Chapters */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <hr className="flex-1 border-white/5" />
                            <h3 className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Article Structure</h3>
                            <hr className="flex-1 border-white/5" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="glass-card p-8 space-y-6 border-l-2 border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center font-black text-blue-500 text-xs">{num}</span>
                                        <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest">Chapter Segment</span>
                                    </div>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            name={`heading${num}`}
                                            value={formData[`heading${num}`]}
                                            onChange={handleChange}
                                            className="w-full bg-white/10 border-b border-white/10 px-0 py-2 text-white font-bold outline-none focus:border-blue-500 transition-all placeholder:text-slate-700"
                                            placeholder={`Sub-heading ${num}`}
                                        />
                                        <textarea
                                            name={`paragraph${num}`}
                                            value={formData[`paragraph${num}`]}
                                            onChange={handleChange}
                                            className="w-full bg-transparent text-slate-400 text-sm leading-relaxed outline-none h-32 resize-none placeholder:text-slate-800"
                                            placeholder="Expand on this topic..."
                                        ></textarea>
                                    </div>
                                </div>
                            ))}

                            <div className="glass-card p-8 bg-gradient-to-br from-indigo-500/10 to-transparent flex flex-col justify-end">
                                <h3 className="text-white font-black text-xl mb-4">Final Verdict</h3>
                                <textarea
                                    name="conclusion"
                                    value={formData.conclusion}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-slate-300 outline-none focus:border-indigo-500 h-40 transition-all"
                                    placeholder="Summarize the article..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Final Actions */}
                    <div className="flex flex-col md:flex-row gap-6 pt-10">
                        <button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] active:scale-[0.98] text-white font-black py-6 rounded-3xl shadow-2xl shadow-blue-500/20 transition-all duration-300">
                            Launch Article to Public
                        </button>
                        <Link to="/admin/dashboard" className="md:w-1/3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 font-bold py-6 rounded-3xl text-center transition-all duration-300">
                            Discard Draft
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AdminAddBlog;
