import React from 'react'
import { Link } from 'react-router-dom'
const AdminDashboard = () => {
    return (
        <div class="grid grid-cols-2 gap-6 p-4">
            <div class="bg-white shadow-lg rounded-2xl p-2 flex flex-col items-center justify-center">
                <Link to='/catagAddadmin' class="text-white bottom-2.5 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add catagory</Link>
            </div>
            <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold text-gray-700">Total Businesses</h3>
                <p class="text-3xl font-extrabold text-blue-600 mt-2">123</p>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold text-gray-700">Total Products</h3>
                <p class="text-3xl font-extrabold text-green-600 mt-2">456</p>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold text-gray-700">Total Orders</h3>
                <p class="text-3xl font-extrabold text-purple-600 mt-2">789</p>
            </div>

            <div class="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center">
                <h3 class="text-xl font-bold text-gray-700">Total Revenue</h3>
                <p class="text-3xl font-extrabold text-orange-600 mt-2">$50,000</p>
            </div>

        </div>

    )
}

export default AdminDashboard
