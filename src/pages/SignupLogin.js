import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupLogin = () => {
    const [isBuyer, setIsBuyer] = useState(true);
    const [isSignup, setIsSignup] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    // Handle Input Changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isSignup
            ? isBuyer ? '/user/signup' : '/business/signup'
            : isBuyer ? '/user/login' : '/business/login';

        try {
            const response = await axios.post(`http://localhost:3000${endpoint}`, formData);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate(isBuyer ? '/' : '/CategoryAd');
                console.log(response.data.message);
            }
        } catch (error) {
            console.error(error);
        }

        // Reset Form
        setFormData({ name: '', email: '', password: '' });
    };

    return (
        <div className="flex flex-col items-center mt-5">
            {/* Toggle Account Type */}
            <div className="relative flex bg-gray-200 rounded-2xl p-1 w-80">
                <div
                    className="absolute top-1 bottom-1 bg-gray-700 rounded-2xl transition-all duration-300"
                    style={{ width: "50%", left: isBuyer ? "0%" : "50%" }}
                ></div>
                <button
                    className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${isBuyer ? "text-white" : "text-black"}`}
                    onClick={() => setIsBuyer(true)}
                >
                    Personal
                </button>
                <button
                    className={`relative z-10 w-1/2 py-2 font-bold transition-colors duration-300 ${!isBuyer ? "text-white" : "text-black"}`}
                    onClick={() => setIsBuyer(false)}
                >
                    Business
                </button>
            </div>

            {/* Signup/Login Form */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md mt-5 p-6">
                <h1 className="text-xl font-bold text-gray-900 text-center">
                    {isSignup ? (isBuyer ? "Sign up for Personal Account" : "Sign up for Business Account")
                             : "Login to Your Account"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    {isSignup && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                {isBuyer ? "Your Name" : "Business Name"}
                            </label>
                            <input
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md"
                                placeholder={isBuyer ? "John Doe" : "Business XYZ"}
                            />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="••••••••"
                        />
                    </div>
                    <button type="submit" className="w-full bg-gray-800 text-white py-2 rounded-md">
                        {isSignup ? "Sign Up" : "Login"}
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                        {isSignup ? "Already have an account?" : "Don't have an account?"} 
                        <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
                            {isSignup ? "Login" : "SignUp"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupLogin;
