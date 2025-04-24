import React from "react";
import { Card, CardContent } from "./SellerCard";
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
} from "recharts";

// Data
const barData = [
  { name: "Jan", Statistics: 2000 },
  { name: "Feb", Statistics: 3000 },
  { name: "Mar", Statistics: 4000 },
  { name: "Apr", Statistics: 5000 },
  { name: "May", Statistics: 6000 },
];

const pieData = [
  { name: "Products", value: 56, color: "#10B981" },
  { name: "Orders", value: 120, color: "#F43F5E" },
  { name: "Revenue", value: 4500, color: "#F59E0B" },
];

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
  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Seller Dashboard</h1>

      {/* Cards in a row */}
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <Card className="flex-1 min-w-[200px]"><CardContent className="text-center"><p>Total Products</p><p className="text-2xl font-bold text-blue-600">56</p></CardContent></Card>
        <Card className="flex-1 min-w-[200px]"><CardContent className="text-center"><p>Total Orders</p><p className="text-2xl font-bold text-green-600">120</p></CardContent></Card>
        <Card className="flex-1 min-w-[200px]"><CardContent className="text-center"><p>Pending Orders</p><p className="text-2xl font-bold text-yellow-600">18</p></CardContent></Card>
        <Card className="flex-1 min-w-[200px]"><CardContent className="text-center"><p>Total Revenue</p><p className="text-2xl font-bold text-red-600">$4,500</p></CardContent></Card>
      </div>

      {/* Graphs and Recent Orders in one row */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Bar Chart */}
        <Card className="flex-1">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3">Business Performance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Statistics" fill="#7DD3FC" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="flex-1">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3">Overall Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card className="flex-1">
          <CardContent>
            <h2 className="font-semibold text-lg mb-3">Recent Orders</h2>
            <ul className="space-y-2">
              {recentOrders.map((order) => (
                <li key={order.id} className="flex justify-between text-sm">
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
