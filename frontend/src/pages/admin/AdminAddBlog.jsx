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
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
            {/* Header / Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link to="/admin/dashboard" className="w-10 h-10 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </Link>
                        <div className="flex items-center gap-3">
                            <img src="/images/logo2.png" alt="Logo" className="h-7 object-contain" />
                            <h1 className="text-xl font-black tracking-tight text-slate-900 uppercase tracking-widest text-[10px]">Editor <span className="text-blue-600">Suite</span></h1>
                        </div>
                    </div>
                    <button onClick={handleSubmit} type="button" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-2.5 rounded-xl font-black text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-transform">
                        Publish Article
                    </button>
                </div>
            </nav>

            <main className="max-w-5xl mx-auto p-6 md:p-10 animate-fade-in">
                <form onSubmit={handleSubmit} className="space-y-10">

                    {/* Hero Section of Blog */}
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm border-t-4 border-blue-500">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-8">
                                <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs ml-1">Metadata Configuration</h3>
                                <div className="space-y-3">
                                    <label className="text-slate-500 font-black text-[10px] uppercase tracking-wider ml-1">Article Title</label>
                                    <input
                                        type="text" name="title" value={formData.title} onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 text-xl font-bold outline-none focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                                        placeholder="Enter a compelling title..." required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-slate-500 font-black text-[10px] uppercase tracking-wider ml-1">Introductory Summary</label>
                                    <textarea
                                        name="introduction" value={formData.introduction} onChange={handleChange}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-700 outline-none focus:border-blue-500 focus:bg-white h-36 transition-all shadow-sm leading-relaxed"
                                        placeholder="Write an engaging opening..." required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-blue-600 font-bold uppercase tracking-widest text-xs ml-1">Featured Image</h3>
                                <div className="relative group">
                                    <div className="aspect-[4/3] bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center overflow-hidden group-hover:border-blue-500/50 transition-colors shadow-inner">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="text-center p-8">
                                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                                </div>
                                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Select Cover</p>
                                            </div>
                                        )}
                                        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" required />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 shadow-sm group-hover:text-blue-500 group-hover:border-blue-200 transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Structure */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <h3 className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] whitespace-nowrap">Article Segments</h3>
                            <hr className="flex-1 border-slate-200" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-black text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-500">{num}</span>
                                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Chapter Content</span>
                                    </div>
                                    <div className="space-y-6">
                                        <input
                                            type="text"
                                            name={`heading${num}`}
                                            value={formData[`heading${num}`]}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b-2 border-slate-100 px-0 py-3 text-slate-900 font-black text-lg outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
                                            placeholder={`Sub-heading ${num}`}
                                        />
                                        <textarea
                                            name={`paragraph${num}`}
                                            value={formData[`paragraph${num}`]}
                                            onChange={handleChange}
                                            className="w-full bg-slate-50/50 rounded-2xl p-6 text-slate-600 text-sm leading-relaxed outline-none h-44 resize-none focus:bg-white border border-transparent focus:border-slate-200 transition-all placeholder:text-slate-400"
                                            placeholder="Expand your thoughts here..."
                                        ></textarea>
                                    </div>
                                </div>
                            ))}

                            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-10 rounded-[2.5rem] shadow-xl shadow-indigo-500/20 flex flex-col justify-between">
                                <div className="mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="text-white font-black text-2xl">Final Conclusion</h3>
                                    <p className="text-indigo-100 text-sm mt-2 font-medium">Summarize the key takeaways and call-to-action.</p>
                                </div>
                                <textarea
                                    name="conclusion"
                                    value={formData.conclusion}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-white outline-none focus:bg-white focus:text-slate-900 h-44 transition-all placeholder:text-white/40 leading-relaxed"
                                    placeholder="Final wrap-up..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Final Submission */}
                    <div className="flex flex-col md:flex-row gap-8 pt-10">
                        <button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-[1.02] active:scale-[0.98] text-white font-black py-8 rounded-[2.5rem] shadow-2xl shadow-blue-500/30 transition-all duration-300 text-lg uppercase tracking-widest">
                            Review & Distribute Article
                        </button>
                        <Link to="/admin/dashboard" className="md:w-1/3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-400 font-bold py-8 rounded-[2.5rem] text-center transition-all duration-300 shadow-sm uppercase tracking-widest text-sm">
                            Save as Draft
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AdminAddBlog;
