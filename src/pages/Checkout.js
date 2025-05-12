import React, { useState } from "react";
import PageHeading from "../components/PageHeading";
import axios from "axios";
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";


const Checkout = () => {
    const location = useLocation();


    const [checkoutData, setCheckoutData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        amount: location.state.amount,
        paymentStatus: "Pending",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckoutData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePayFastPayment = async () => {
        if (
            !checkoutData.firstName ||
            !checkoutData.lastName ||
            !checkoutData.email ||
            !checkoutData.amount
        ) {
            toast.error("Please fill all the fields", {
                position: "top-right",
            })
        }

        try {
            const response = await axios.post("http://localhost:3000/checkout",
                checkoutData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                },
            );
            console.log('response', response)
            if (response.status == 200) {
                const paymentData = {
                    amount: checkoutData.amount,
                    email: checkoutData.email,
                    firstName: checkoutData.firstName,
                    lastName: checkoutData.lastName,
                    checkoutId: response.data.checkoutId,
                }
                try {
                    const payfastResponse = await axios.post("http://localhost:3000/payment", paymentData,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "authorization": `Bearer ${localStorage.getItem('token')}`
                            }
                        }
                    );
                    if (payfastResponse.status==200) {
                        console.log("Redirecting to PayFast:", payfastResponse.data.url);
                        window.location.href = payfastResponse.data.url;
                    } else {
                        console.error("Failed to generate PayFast link:");
                    }
                } catch (err) {
                    console.log('err', err)
                }
            }
        } catch (error) {
            console.error("Payment error:", error);
        }
    };

    return (
        <div className="px-8 py-8 w-full">
            <PageHeading home="Home" pagename="Checkout" />

            <div className="mx-auto max-w-screen-md rounded-lg shadow-lg p-2 bg-gray-200">
                <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">Checkout</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Personal Details */}
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-300">01</h3>
                                <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["firstName", "lastName", "email", "phone"].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700 capitalize">
                                            {field.replace(/([A-Z])/g, " $1")}
                                        </label>
                                        <input
                                            type={field === "email" ? "email" : "text"}
                                            name={field}
                                            value={checkoutData[field]}
                                            onChange={handleChange}
                                            placeholder={`Enter your ${field}`}
                                            className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-300">02</h3>
                                <h3 className="text-xl font-bold text-gray-800 mt-1">Shipping Address</h3>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["street", "city", "state", "zip"].map((field, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700 capitalize">
                                            {field.replace(/([A-Z])/g, " $1")}
                                        </label>
                                        <input
                                            type="text"
                                            name={field}
                                            value={checkoutData[field]}
                                            onChange={handleChange}
                                            placeholder={`Enter your ${field}`}
                                            className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="mt-8">
                        <h3 className="text-3xl font-bold text-gray-300">03</h3>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>

                        <div className="flex flex-col gap-4">
                            <button
                                type="button"
                                onClick={handlePayFastPayment}
                                className="w-full px-4 py-2 text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-lg transition duration-300 ease-in-out font-semibold uppercase tracking-wide"
                            >
                                Pay Now via PayFast
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
