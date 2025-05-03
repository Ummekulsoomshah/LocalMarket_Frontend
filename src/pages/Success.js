

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
        const response = await fetch(`http://localhost:3001/api/orders/${checkoutId}`);
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
    <div className="success-container">
      <div className="success-message">
        <h1>Payment Successful!</h1>
        <p>Your payment has been successfully processed.</p>
        {orderDetails && (
          <div className="order-details">
            <h2>Order Details:</h2>
            <p><strong>Order ID:</strong> {orderDetails.id}</p>
            <p><strong>Name:</strong> {orderDetails.first_name} {orderDetails.last_name}</p>
            <p><strong>Email:</strong> {orderDetails.email}</p>
            <p><strong>Amount Paid:</strong> ${orderDetails.amount}</p>
            <p><strong>Status:</strong> {orderDetails.payment_status}</p>
          </div>
        )}
        <button className="back-button" onClick={() => window.location.href = '/'}>Go to Homepage</button>
      </div>
    </div>
  );
};

export default Success;
