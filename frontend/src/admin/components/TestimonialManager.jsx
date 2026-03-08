import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash, FaCheck, FaTimes, FaUserTie } from 'react-icons/fa';

const TestimonialManager = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        authorName: '',
        authorRole: '',
        content: '',
        rating: 5,
        isActive: true
    });
    const [avatarFile, setAvatarFile] = useState(null);

    // Fetch on mount
    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const apiUrl = process.env.NODE_ENV === 'production'
                ? 'https://gozoom-backend.onrender.com'
                : 'http://localhost:5001';

            const response = await axios.get(`${apiUrl}/api/testimonials/all`);
            setTestimonials(response.data);
            setError(null);
        } catch (err) {
            console.error('Error fetching testimonials:', err);
            setError('Failed to load testimonials. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setAvatarFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const apiUrl = process.env.NODE_ENV === 'production'
                ? 'https://gozoom-backend.onrender.com'
                : 'http://localhost:5001';

            const data = new FormData();
            data.append('authorName', formData.authorName);
            data.append('authorRole', formData.authorRole);
            data.append('content', formData.content);
            data.append('rating', formData.rating);
            data.append('isActive', formData.isActive);
            if (avatarFile) {
                data.append('avatar', avatarFile);
            }

            await axios.post(`${apiUrl}/api/testimonials`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reset form
            setFormData({
                authorName: '',
                authorRole: '',
                content: '',
                rating: 5,
                isActive: true
            });
            setAvatarFile(null);

            // Refresh list
            fetchTestimonials();

            alert('Testimonial added successfully!');
        } catch (err) {
            console.error('Error adding testimonial:', err);
            setError('Failed to add testimonial. ' + (err.response?.data?.message || err.message));
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleStatus = async (id) => {
        try {
            const apiUrl = process.env.NODE_ENV === 'production'
                ? 'https://gozoom-backend.onrender.com'
                : 'http://localhost:5001';

            await axios.put(`${apiUrl}/api/testimonials/${id}/toggle`);
            fetchTestimonials();
        } catch (err) {
            console.error('Error toggling status:', err);
            alert('Failed to update status.');
        }
    };

    const deleteTestimonial = async (id) => {
        if (!window.confirm('Are you sure you want to delete this testimonial?')) return;

        try {
            const apiUrl = process.env.NODE_ENV === 'production'
                ? 'https://gozoom-backend.onrender.com'
                : 'http://localhost:5001';

            await axios.delete(`${apiUrl}/api/testimonials/${id}`);
            fetchTestimonials();
        } catch (err) {
            console.error('Error deleting testimonial:', err);
            alert('Failed to delete testimonial.');
        }
    };

    const backendUrl = process.env.NODE_ENV === 'production'
        ? 'https://gozoom-backend.onrender.com'
        : 'http://localhost:5001';

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <FaUserTie className="text-indigo-500" />
                Manage Testimonials
            </h2>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm font-medium border border-red-100">
                    {error}
                </div>
            )}

            {/* Add New Testimonial Form */}
            <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <FaPlus className="text-indigo-400" /> Add New Testimonial
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-600 mb-1">Author Name *</label>
                            <input
                                type="text"
                                name="authorName"
                                value={formData.authorName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-600 mb-1">Author Role/Company</label>
                            <input
                                type="text"
                                name="authorRole"
                                value={formData.authorRole}
                                onChange={handleInputChange}
                                placeholder="e.g. CEO at Acme Corp"
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Testimonial Content *</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            required
                            rows="3"
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-600 mb-1">Avatar Image (Optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="w-full px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-600 mb-1">Rating (1-5)</label>
                            <input
                                type="number"
                                name="rating"
                                value={formData.rating}
                                onChange={handleInputChange}
                                min="1"
                                max="5"
                                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-indigo-500 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                        <input
                            type="checkbox"
                            id="isActive"
                            name="isActive"
                            checked={formData.isActive}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                        />
                        <label htmlFor="isActive" className="text-sm font-medium text-slate-600 cursor-pointer">
                            Active (Show on website immediately)
                        </label>
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Uploading...' : 'Save Testimonial'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Existing Testimonials List */}
            <div>
                <h3 className="text-lg font-bold text-slate-700 mb-4">Current Testimonials</h3>

                {loading ? (
                    <div className="text-center py-8 text-slate-500">Loading...</div>
                ) : testimonials.length === 0 ? (
                    <div className="text-center py-8 bg-slate-50 rounded-xl text-slate-500 border border-slate-100">
                        No testimonials found. Add your first one above!
                    </div>
                ) : (
                    <div className="space-y-4">
                        {testimonials.map((t) => (
                            <div key={t._id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-200 transition-colors shadow-sm gap-4">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 bg-slate-100 rounded-full flex-shrink-0 overflow-hidden border border-slate-200 flex items-center justify-center">
                                        {t.avatar ? (
                                            <img src={`${backendUrl}${t.avatar}`} alt={t.authorName} className="w-full h-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} />
                                        ) : (
                                            <FaUserTie className="text-slate-400 text-xl" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-slate-800 truncate">{t.authorName}</h4>
                                        <p className="text-xs text-slate-500 truncate">{t.authorRole || 'No role specified'} • {t.rating} Stars</p>
                                        <p className="text-sm text-slate-600 mt-1 line-clamp-1 italic">"{t.content}"</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => toggleStatus(t._id)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors flex items-center gap-1.5 ${t.isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100' : 'bg-slate-100 text-slate-500 border-slate-200 hover:bg-slate-200'}`}
                                    >
                                        {t.isActive ? <><FaCheck className="text-[10px]" /> Active</> : <><FaTimes className="text-[10px]" /> Hidden</>}
                                    </button>
                                    <button
                                        onClick={() => deleteTestimonial(t._id)}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete Testimonial"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestimonialManager;
