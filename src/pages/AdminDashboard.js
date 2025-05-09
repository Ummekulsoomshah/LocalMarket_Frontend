import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    const [totalBusiness,settotalBusiness]=useState('')
    const [totalUsers,settotalUsers]=useState('')
    const [totalProducts,settotalProducts]=useState('')
    useEffect(() => {
        const fetchAnalytics = async () => {
            const response = await axios.get('http://localhost:3002/admin/dashboardAnalytics')
            if (response.status === 200) {
                console.log('Analytics Data:', response.data);
                await settotalBusiness(response.data.data.totalBusiness)
                await settotalUsers(response.data.data.totalUsers)
                await settotalProducts(response.data.data.totalProducts)
                console.log(totalBusiness,totalProducts,totalUsers)
                console.log(response.data.data.totalBusiness)
            }
        }
        fetchAnalytics()
    }, []);

    return (
        <div className="min-h-screen bg-green-50 p-10">
              {/* Header */}
    <div className="flex justify-between items-center mb-12">
        <div className="flex-grow text-center">
            <h1 className="text-3xl font-bold text-black">
                Admin Dashboard
            </h1>
        </div>
        <Link
            to="/categAddadmin"
            className="bg-gray-800 hover:to-purple-700 text-white font-semibold rounded-lg text-lg px-6 py-3 shadow-lg transition duration-300"
        >
            Add Category
        </Link>
    </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
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
                    className="bg-white text-gray-800 text-center p-6 rounded-xl shadow hover:shadow-xl transition duration-300 border border-gray-200"
                >
                    <h2 className="text-xl font-semibold">{stat.title}</h2>
                    <p className="text-4xl font-bold mt-3">{stat.value}</p>
                </div>
            ))}
        </div>
                        
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Sales</h2>
                    <div className="relative w-full h-40 bg-gray-200 flex items-end rounded-md">
                        {[40, 60, 90, 70, 100, 50, 65, 80, 55, 70, 95, 85].map((value, index) => (
                            <div
                                key={index}
                                className="w-1/12 mx-0.5 bg-yellow-500 rounded-t-md"
                                style={{ height: `${value}%` }}
                            ></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-sm mt-3 text-gray-600">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                            <span key={index}>{month}</span>
                        ))}
                    </div>
                </div>
    
                {/* Line Chart */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Orders Growth</h2>
                    <svg viewBox="0 0 400 150" className="w-full h-40">
                        <polyline
                            fill="none"
                            stroke="#facc15"
                            strokeWidth="3"
                            points="10,130 40,110 70,90 100,70 130,85 160,65 190,60 220,50 250,55 280,45 310,35 340,30"
                        />
                    </svg>
                    <div className="flex justify-between text-sm mt-3 text-gray-600">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                            <span key={index}>{month}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;