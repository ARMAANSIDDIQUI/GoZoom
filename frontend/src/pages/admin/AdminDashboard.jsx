import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/admin');
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <nav className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
                <div className="font-bold text-xl">Gozoom Admin Dashboard</div>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold transition-colors">Logout</button>
            </nav>

            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded shadow-md border-t-4 border-blue-500">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Blogs Management</h2>
                        <p className="text-gray-600 mb-6">Manage all website blog contents, add new posts, and edit existing ones.</p>
                        <div className="flex gap-4">
                            <Link to="/admin/add-blog" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold transition-colors">Add New Blog</Link>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded font-semibold transition-colors disabled:opacity-50" disabled>Manage Blogs (WIP)</button>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md border-t-4 border-green-500">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Enquiries</h2>
                        <p className="text-gray-600 mb-6">View user contact forms and service enquiries submitted via the website.</p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold transition-colors disabled:opacity-50" disabled>View Enquiries (WIP)</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
