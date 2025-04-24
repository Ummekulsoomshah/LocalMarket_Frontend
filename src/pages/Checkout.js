// import React, { useState } from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PageHeading from "../components/PageHeading";

// const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

// // Sample cart items
// const initialCartItems = [
//   { id: 1, name: "Product 1", price: 50, quantity: 1, image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Product 2", price: 30, quantity: 2, image: "https://via.placeholder.com/150" },
// ];

// const Checkout = () => {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const handleIncrement = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleDecrement = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const handlePaymentSuccess = (details) => {
//     alert(`Transaction completed by ${details.payer.name.given_name}`);
//   };

//   return (
//     <div className="px-8 py-8 w-100">
//       <PageHeading home="Home" pagename="Checkout"  />
//       <div className="mx-auto max-w-screen-md  rounded-lg shadow-lg p-2 bg-gray-200">
//         <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">Checkout</h2>


//         {/* Personal Details */}
//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h3 className="text-3xl font-bold text-gray-300">01</h3>
//               <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
//             </div>
//             <div className="md:col-span-2">
//               <form>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">First Name</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your first name"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your last name"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Email Address</label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email address"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your phone number"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Shipping Address */}
//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h3 className="text-3xl font-bold text-gray-300">02</h3>
//               <h3 className="text-xl font-bold text-gray-800 mt-1">Shipping Address</h3>
//             </div>
//             <div className="md:col-span-2">
//               <form>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Street Address</label>
//                     <input
//                       type="text"
//                       placeholder="Street address"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">City</label>
//                     <input
//                       type="text"
//                       placeholder="City"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">State</label>
//                     <input
//                       type="text"
//                       placeholder="State"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">Zip Code</label>
//                     <input
//                       type="text"
//                       placeholder="Zip code"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="mt-8">
//         <h3 className="text-3xl font-bold text-gray-300">03</h3>
//           <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>
//           <div className="space-y-8">
        
            

//             {/* Stripe */}
//             <div>
//               <h4 className="text-lg font-bold text-gray-800 mb-2">Stripe</h4>
//               <Elements stripe={stripePromise}>
//                 <StripeForm />
//               </Elements>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const StripeForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentIntent } = await stripe.confirmCardPayment("client_secret_from_backend", {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (error) {
//       alert(error.message);
//     } else if (paymentIntent.status === "succeeded") {
//       alert("Payment successful!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
//           Credit or Debit Card
//         </label>
//         <CardElement className="mt-2 p-2 border border-gray-300 rounded-md" />
//       </div>
//       <button
//         type="submit"
//         disabled={!stripe}
//         className="px-4 py-2 text-white bg-gray-700 rounded-md w-full"
//       >
//         Pay Now
//       </button>
//     </form>
//   );
// };

// export default Checkout;



import React, { useState } from "react";
import PageHeading from "../components/PageHeading";

// Sample cart items
const initialCartItems = [
  { id: 1, name: "Product 1", price: 50, quantity: 1, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: 30, quantity: 2, image: "https://via.placeholder.com/150" },
];

const Checkout = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const generatePayFastPaymentData = () => {
    const amount = getTotalPrice();
    const payfastData = {
      merchant_id: 	"10038511",  // Replace with your PayFast Merchant ID
      merchant_key: 	"1sm0rpvn72ikk",  // Replace with your PayFast Merchant Key
      amount: amount.toFixed(2),  // The total amount to be paid
      item_name: "Order from your store",  // The name of the order
      item_description: "Product Purchase",  // A short description of the items
      return_url: "http://your-website.com/thank-you",  // The URL to redirect to after payment success
      cancel_url: "http://your-website.com/cancel",  // The URL to redirect to if payment is canceled
      notify_url: "http://your-website.com/payment-notification",  // URL for PayFast's IPN (Instant Payment Notification)
      email_address: "customer@example.com",  // Customer's email address
    };

    return payfastData;
  };

  const handlePaymentSuccess = () => {
    alert("Payment was successful!");
  };

  const handlePaymentFailure = () => {
    alert("Payment failed or was canceled.");
  };

  return (
    <div className="px-8 py-8 w-100">
      <PageHeading home="Home" pagename="Checkout" />
      <div className="mx-auto max-w-screen-md rounded-lg shadow-lg p-2 bg-gray-200">
        <h2 className="mb-4 text-4xl font-bold text-center text-gray-700">Checkout</h2>

        {/* Personal Details */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
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
            <div className="md:col-span-2">
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Street Address</label>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                    <input
                      type="text"
                      placeholder="Zip code"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-gray-300">03</h3>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>

          {/* PayFast Payment */}
          <div>
            <button
              onClick={() => window.location.href = `https://www.payfast.co.za/eng/process?${new URLSearchParams(generatePayFastPaymentData())}`}
              className="px-4 py-2 text-white bg-green-600 rounded-md w-full"
            >
              Pay Now via PayFast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
