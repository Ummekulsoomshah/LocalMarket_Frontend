
// import React, { useState } from "react";
// import PageHeading from "../components/PageHeading";

// const Checkout = () => {
//   const [checkoutData, setCheckoutData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     street: "",
//     city: "",
//     state: "",
//     zip: "",
//     amount: 20.0, // Example amount
//     paymentStatus: "Pending",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCheckoutData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission for checkout details (non-PayFast)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:3001/api/checkout", { // Update API URL
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(checkoutData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Success:", data);
//         // Redirect to Thank You page
//         window.location.href = "http://your-website.com/thank-you";
//       } else {
//         console.error("Error:", data);
//       }
//     } catch (error) {
//       console.error("Checkout error:", error);
//     }
//   };

//   // Handle PayFast payment process
//   const handlePayFastPayment = async () => {
//     // Check if required fields are filled before proceeding
//     if (
//       !checkoutData.firstName ||
//       !checkoutData.lastName ||
//       !checkoutData.email ||
//       !checkoutData.amount
//     ) {
//       alert("Please fill all the required fields before proceeding.");
//       return;
//     }
  
//     try {
//       console.log("PayFast payment button clicked");
  
//       // Send request to the backend to generate PayFast URL
//       const response = await fetch("http://localhost:3001/api/payfast", { // Update API URL
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           amount: checkoutData.amount,
//           email: checkoutData.email,
//           firstName: checkoutData.firstName,
//           lastName: checkoutData.lastName,
//         }),
//       });
  
//       const data = await response.json();
//       console.log("Backend response data:", data); // Log response data
  
//       if (response.ok && data.url) {
//         // If response is successful and URL is returned, redirect the user
//         console.log("Redirecting to PayFast URL:", data.url);
//         window.location.href = data.url;
//       } else {
//         console.error("Failed to create PayFast payment link:", data);
//         alert("There was an issue creating the payment link.");
//       }
//     } catch (error) {
//       console.error("Payment error:", error);
//       alert("An error occurred during the payment process. Please try again.");
//     }
//   };
  
//   return (
//     <div className="px-8 py-8 w-full">
//       <PageHeading home="Home" pagename="Checkout" />

//       <div className="mx-auto max-w-screen-md rounded-lg shadow-lg p-2 bg-gray-200">
//         <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">Checkout</h2>

//         <form onSubmit={handleSubmit}>
//           {/* Personal Details */}
//           <div className="mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-300">01</h3>
//                 <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
//               </div>
//               <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* Personal Fields */}
//                 {["firstName", "lastName", "email", "phone"].map((field, index) => (
//                   <div key={index}>
//                     <label className="block text-sm font-medium text-gray-700 capitalize">
//                       {field.replace(/([A-Z])/g, " $1")}
//                     </label>
//                     <input
//                       type={field === "email" ? "email" : "text"}
//                       name={field}
//                       value={checkoutData[field]}
//                       onChange={handleChange}
//                       placeholder={`Enter your ${field}`}
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Shipping Address */}
//           <div className="mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-300">02</h3>
//                 <h3 className="text-xl font-bold text-gray-800 mt-1">Shipping Address</h3>
//               </div>
//               <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {/* Shipping Fields */}
//                 {["street", "city", "state", "zip"].map((field, index) => (
//                   <div key={index}>
//                     <label className="block text-sm font-medium text-gray-700 capitalize">
//                       {field.replace(/([A-Z])/g, " $1")}
//                     </label>
//                     <input
//                       type="text"
//                       name={field}
//                       value={checkoutData[field]}
//                       onChange={handleChange}
//                       placeholder={`Enter your ${field}`}
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Payment Method */}
//           <div className="mt-8">
//             <h3 className="text-3xl font-bold text-gray-300">03</h3>
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>

//             {/* Buttons */}
//             <div className="flex flex-col gap-4">
//               <button
//                 type="button"
//                 onClick={handlePayFastPayment}
//                 className="px-4 py-2 text-white bg-green-600 rounded-md w-full"
//               >
//                 Pay Now via PayFast
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import PageHeading from "../components/PageHeading";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    amount: 20.0,
    paymentStatus: "Pending",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle PayFast payment process
  const handlePayFastPayment = async () => {
    // Basic validation
    if (
      !checkoutData.firstName ||
      !checkoutData.lastName ||
      !checkoutData.email ||
      !checkoutData.amount
    ) {
      alert("Please fill all the required fields before proceeding.");
      return;
    }

    try {
      console.log("Creating checkout entry...");
      const response = await fetch("http://localhost:3001/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(checkoutData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("Checkout creation failed:", result);
        alert("Failed to create checkout entry.");
        return;
      }

      console.log("Checkout entry created:", result);

      // Now generate PayFast payment link using the returned checkoutId
      const payfastResponse = await fetch("http://localhost:3001/api/payfast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: checkoutData.amount,
          email: checkoutData.email,
          firstName: checkoutData.firstName,
          lastName: checkoutData.lastName,
          checkoutId: result.checkoutId, // IMPORTANT!
        }),
      });

      const payfastData = await payfastResponse.json();

      if (payfastResponse.ok && payfastData.url) {
        console.log("Redirecting to PayFast:", payfastData.url);
        window.location.href = payfastData.url;
      } else {
        console.error("Failed to generate PayFast link:", payfastData);
        alert("Could not generate PayFast link.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred. Please try again.");
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
