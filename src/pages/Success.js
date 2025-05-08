
// export default Success;
import React, { useEffect, useState } from 'react';

const Success = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Assuming the success page URL includes the checkout_id as a query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const checkoutId = urlParams.get('checkout_id');

    // Fetch order details from the backend (you can implement this in your API)
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/orders/${checkoutId}`);
        const data = await response.json();
        setOrderDetails(data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    if (checkoutId) {
      fetchOrderDetails();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Your payment has been successfully processed.</p>
          {orderDetails && (
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Order Details:</h2>
              <p className="text-gray-600"><strong>Order ID:</strong> {orderDetails.id}</p>
              <p className="text-gray-600"><strong>Name:</strong> {orderDetails.first_name} {orderDetails.last_name}</p>
              <p className="text-gray-600"><strong>Email:</strong> {orderDetails.email}</p>
              <p className="text-gray-600"><strong>Amount Paid:</strong> ${orderDetails.amount}</p>
              <p className="text-gray-600"><strong>Status:</strong> {orderDetails.payment_status}</p>
            </div>
          )}
          <button
            className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
            onClick={() => window.location.href = '/'}
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
