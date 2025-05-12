import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const AdminDashboard = () => {
    const [totalBusiness, settotalBusiness] = useState('');
    const [totalUsers, settotalUsers] = useState('');
    const [totalProducts, settotalProducts] = useState('');
    const [totalOrders, settotalOrders] = useState('')
    const [totalpendingOrders, settotalpendingOrders] = useState('')
    const [totalRevenew,settotalRevenew]=useState('')
    const [userGrowth, setUserGrowth] = useState([]);
    const [Comparativesales,setComparativesales]=useState([])

    useEffect(() => {
        const fetchAnalytics = async () => {

            try {
                const response = await axios.get('http://localhost:3000/admin/dashboardAnalytics');
                if (response.status === 200) {
                    const data = response.data
                    console.log(data)
                    settotalBusiness(data.data.totalBusiness);
                    settotalUsers(data.data.totalUsers);
                    settotalProducts(data.data.totalProducts);
                    settotalOrders(data.data.totalOrders)
                    settotalpendingOrders(data.data.totalpendingOrders)
                    settotalRevenew(data.data.totalRevenew)
                    await setUserGrowth(data.data.userGrowth[0])
                    setComparativesales(data.data.sales[0])

                }
                // console.log('userGrowth',userGrowth)
            } catch (err) {
                console.log('err', err)
            }
        };
        fetchAnalytics();
    }, []);
useEffect(() => {
  console.log('Updated userGrowth', userGrowth);
}, [userGrowth]);
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
                    { title: 'Total Orders', value: totalOrders },
                    { title: 'Total Users', value: totalUsers },
                    { title: 'Total Pending orders', value: totalpendingOrders },
                    { title: 'Total Revenue', value: `PKR. ${totalRevenew}` },
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
                <ResponsiveContainer width="100%" height={300}>
  <BarChart data={userGrowth}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="total_users" fill="#10B981" />
  </BarChart>
</ResponsiveContainer>


                {/* Line Chart */}
                <ResponsiveContainer width="100%" height={300}>
  <BarChart data={Comparativesales}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="total_orders" fill="#3B82F6" name="Orders" />
    <Bar dataKey="total_revenue" fill="#F59E0B" name="Revenue" />
  </BarChart>
</ResponsiveContainer>

            </div>
        </div>
    );
};

export default AdminDashboard;
