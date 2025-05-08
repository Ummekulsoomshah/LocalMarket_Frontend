// // import React from 'react';

// // const Cancel = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
// //         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Payment Cancelled</h1>
// //         <p className="text-gray-600 mb-6">Your payment has been cancelled. Please try again or contact support for assistance.</p>
// //         <button
// //           className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
// //           onClick={() => window.location.href = '/'}
// //         >
// //           Go to Homepage
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cancel;
// // src/pages/Cancel.js
// import React from 'react';

// const Cancel = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Payment Cancelled</h1>
//         <p className="text-gray-600 mb-6">Your payment has been cancelled. Please try again or contact support for assistance.</p>
//         <button
//           className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
//           onClick={() => window.location.href = '/'}
//         >
//           Go to Homepage
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cancel;
import React, { useEffect, useState } from "react";

const Cancel = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Assuming the cancel page URL includes the checkout_id as a query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const checkoutId = urlParams.get("checkout_id");

    // Fetch order details from the backend (you can implement this in your API)
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/orders/${checkoutId}`);
        const data = await response.json();
        setOrderDetails(data);

        // Check payment status, if 'Cancelled' then you can force redirect to Cancel page
        if (data.payment_status === "Cancelled") {
          window.location.href = "/payment/cancel";  // Redirect to Cancel page after payment failure
        }
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
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">
          Your payment has been cancelled. Please try again or contact support for assistance.
        </p>
        <button
          className="mt-6 px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 focus:outline-none"
          onClick={() => (window.location.href = "/")}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Cancel;
