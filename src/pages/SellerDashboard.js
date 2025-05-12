
import React, { useEffect, useState } from "react";
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
import { Card, CardContent } from "./SellerCard";
import axios from 'axios'
import { Link } from "react-router-dom";


// Data
const barData = [
  { name: "Jan", Statistics: 2000 },
  { name: "Feb", Statistics: 3000 },
  { name: "Mar", Statistics: 4000 },
  { name: "Apr", Statistics: 5000 },
  { name: "May", Statistics: 6000 },
  { name: "Jun", Statistics: 7000 },
  { name: "Jul", Statistics: 8000 },
  { name: "Aug", Statistics: 6500 },
  { name: "Sep", Statistics: 7200 },
  { name: "Oct", Statistics: 8000 },
  { name: "Nov", Statistics: 8500 },
  { name: "Dec", Statistics: 9000 },
];


const pieColors = ["#10B981", "#F43F5E", "#F59E0B"];

const recentOrders = [
  { id: "#12345", status: "Completed" },
  { id: "#12346", status: "Pending" },
  { id: "#12347", status: "Cancelled" },

];

const statusColor = {
  Completed: "text-green-600",
  Pending: "text-yellow-500",
  Cancelled: "text-red-600",
};

export default function SellerDashboard() {
  const [totalProducts, settotalProducts] = useState('')
  const [totalPlacedOrders, settotalPlacedOrders] = useState('')
  const [totalRevenew, settotalRevenew] = useState('')
  const [totalpendingOrders, settotalpendingOrders] = useState('')
  const [todaysSales, setTodaysSales] = useState([]);

  useEffect(() => {
    const fetchSellerStats = async () => {
      try {
        const result = await axios.get('http://localhost:3000/bussiness/SellerdashboardAnalytics', {
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = result.data
        console.log(data)
        settotalProducts(data.result.totalProducts)
        settotalPlacedOrders(data.result.totalPlacedOrders)
        settotalRevenew(data.result.totalRevenew)
        settotalpendingOrders(data.result.totalpendingOrders)
        setTodaysSales(data.result.monthlySales)

      } catch (error) {
        console.log(error)
      }
    }
    fetchSellerStats()
  }, [])
  const pieData = [
    { name: "Products", value: totalProducts },
    { name: "Orders", value: totalPlacedOrders },
    { name: "Revenue", value: totalRevenew },
  ];
  console.log('todaysSales',todaysSales)
  return (
    <div className="p-6 bg-green-50 min-h-screen">

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-black">Seller Dashboard</h1>
        <Link
          to="/CatagoryAd"
          className="bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium rounded-lg text-lg px-6 py-3 shadow-md border-b border-gray-700"
        >
          Add Product
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="flex flex-wrap justify-between gap-4 mb-8">
        <Card className="flex-1 min-w-[220px]">
          <CardContent className="text-center">
            <p className="text-gray-700">Total Products</p>
            <p className="text-2xl font-bold text-blue-600">{totalProducts}</p>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[220px]">
          <CardContent className="text-center">
            <p className="text-gray-700">Total Orders</p>
            <p className="text-2xl font-bold text-green-600">{totalPlacedOrders}</p>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[220px]">
          <CardContent className="text-center">
            <p className="text-gray-700">Pending Orders</p>
            <p className="text-2xl font-bold text-yellow-600">{totalpendingOrders}</p>
          </CardContent>
        </Card>
        <Card className="flex-1 min-w-[220px]">
          <CardContent className="text-center">
            <p className="text-gray-700">Total Revenue</p>
            <p className="text-2xl font-bold text-red-600">PKR. {totalRevenew}</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Orders */}
      <div className="flex flex-wrap gap-6 mb-8">
        {/* Bar Chart */}
        <Card className="flex-1 min-w-[300px]">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3 text-center text-black">
              This Month's
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={todaysSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="days of month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>

        </Card>

        {/* Donut Pie Chart */}
        <Card className="flex-1 min-w-[300px]">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3 text-center text-black">
              Sales Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="flex-1 min-w-[300px]">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3 text-center text-black">
              Recent Orders
            </h2>
            <ul className="space-y-3">
              {recentOrders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between text-sm font-medium border-b pb-2"
                >
                  <span>{order.id}</span>
                  <span className={statusColor[order.status]}>{order.status}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
