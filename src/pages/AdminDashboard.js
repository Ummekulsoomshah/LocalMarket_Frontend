import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [totalBusiness, settotalBusiness] = useState('');
    const [totalUsers, settotalUsers] = useState('');
    const [totalProducts, settotalProducts] = useState('');

    useEffect(() => {
        const fetchAnalytics = async () => {
             const response = await axios.get('http:localhost:3000/admin/dashboardAnalytics');
             if (response.status === 200) {
                 settotalBusiness(response.data.data.totalBusiness);
                 settotalUsers(response.data.data.totalUsers);
                 settotalProducts(response.data.data.totalProducts);
             }
         };
         fetchAnalytics();
    }, []);

    return (
        <div className="min-h-screen bg-white text-white p-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-4xl font-bold text-black">Admin Dashboard</h1>
                <Link
    to="/catagAddadmin"
    className="bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-lg text-lg px-6 py-3 shadow-md border-b border-gray-700"
>
    Add Category
</Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: 'Total Businesses', value: totalBusiness },
                    { title: 'Total Products', value: totalProducts },
                    { title: 'Total Orders', value: '789' },
                    { title: 'Total Users', value: totalUsers },
                    { title: 'Total Revenue', value: '$120K' },
                    { title: 'Total Reviews', value: '8,921' },
                ].map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#374151] text-white text-center p-8 rounded-xl shadow-lg border border-gray-700"
                    >
                        <h2 className="text-2xl font-semibold">{stat.title}</h2>
                        <p className="text-4xl font-bold mt-3">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {/* Bar Chart */}
                <div className="bg-[#111827] p-6 rounded-xl shadow-md border border-gray-700">
                    <h2 className="text-xl font-bold mb-4">Monthly Sales</h2>
                    <div className="relative w-full h-40 bg-gray-800 flex items-end">
                        {[40, 60, 90, 70, 100, 50].map((value, index) => (
                            <div
                                key={index}
                                className="w-1/6 mx-1 bg-yellow-400"
                                style={{ height: `${value}%` }}
                            ></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-sm mt-2 text-gray-300">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                </div>

                {/* Line Chart */}
                <div className="bg-[#111827] p-6 rounded-xl shadow-md border border-gray-700">
                    <h2 className="text-xl font-bold mb-4">Orders Growth</h2>
                    <svg viewBox="0 0 400 150" className="w-full h-40">
                        <polyline
                            fill="none"
                            stroke="#facc15"
                            strokeWidth="3"
                            points="20,130 70,100 120,60 170,80 220,50 270,40 320,30"
                        />
                    </svg>
                    <div className="flex justify-between text-sm mt-2 text-gray-300">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
