import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const [aemail, setAemail] = useState('');
    const [apassword, setApassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const admindata = {
            aemail,
            apassword
        };
        try {
            const response = await axios.post('http://localhost:3001/admin/login', admindata);
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log("Admin logged in successfully");
                navigate('/AdminDashboard');
            } else {
                console.log("Error in admin login");
            }
        } catch (err) {
            console.log(err);
        }
        setAemail('');
        setApassword('');
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 text-white flex justify-center items-center p-10">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                {/* Header */}
                <div className="flex justify-center items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Sign in to Admin Account</h2>
                </div>

                {/* Form */}
                <form onSubmit={submitHandler} className="space-y-6">
                    {/* Admin Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            value={aemail}
                            onChange={(e) => setAemail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                            placeholder="name@company.com"
                            required
                        />
                    </div>

                    {/* word */}
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input
                            value={apassword}
                            onChange={(e) => setApassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Sign in
                    </button>

                    {/* Signup Link */}
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Adminlogin;
