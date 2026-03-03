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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
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
            alert('Blog published successfully!');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error("Error publishing blog:", error);
            alert("Failed to publish blog. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans p-8">
            <div className="container mx-auto max-w-4xl bg-white rounded shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Add New Blog Post</h2>
                    <Link to="/admin/dashboard" className="bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded text-sm font-semibold transition-colors">← Back to Dashboard</Link>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Title <span className="text-red-500">*</span></label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Introduction <span className="text-red-500">*</span></label>
                        <textarea name="introduction" value={formData.introduction} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500 h-24" required></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="border border-gray-200 p-4 rounded bg-gray-50">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2">Heading {num}</label>
                                    <input type="text" name={`heading${num}`} value={formData[`heading${num}`]} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">Paragraph {num}</label>
                                    <textarea name={`paragraph${num}`} value={formData[`paragraph${num}`]} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 outline-none focus:border-blue-500 h-24"></textarea>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Conclusion <span className="text-red-500">*</span></label>
                        <textarea name="conclusion" value={formData.conclusion} onChange={handleChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500 h-24" required></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Blog Cover Image <span className="text-red-500">*</span></label>
                        <input type="file" accept="image/jpeg, image/png, image/gif" onChange={handleImageChange} className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-500" required />
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-gray-200">
                        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition-colors">Publish Blog</button>
                        <Link to="/admin/dashboard" className="bg-gray-500 text-white font-bold py-2 px-6 rounded hover:bg-gray-600 transition-colors">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminAddBlog;
