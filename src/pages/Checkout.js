// import React, { useState } from "react";
// import PageHeading from "../components/PageHeading";

// // Sample cart items
// const initialCartItems = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 50,
//     quantity: 1,
//     image: "https://via.placeholder.com/150"
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 30,
//     quantity: 2,
//     image: "https://via.placeholder.com/150"
//   }
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

//   return (
//     <div className="px-4 py-8">
//       <PageHeading home="Home" pagename="Checkout" />
//       <div className="mx-auto max-w-screen-md bg-gray-100 rounded-lg shadow-lg p-2">
//         <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">
//           Checkout
//         </h2>

//         {/* Cart Items */}
//         <div className="mb-8">
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Cart</h3>
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
//                 <div className="flex-1 mx-4 ">
//                   <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
//                   <p className="text-sm text-gray-600">${item.price} each</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleDecrement(item.id)}
//                     className="px-3 py-1 text-lg font-bold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l-lg"
//                   >
//                     -
//                   </button>
//                   <span className="px-4 py-1 text-lg font-bold text-gray-800 bg-white border-t border-b border-gray-300">
//                     {item.quantity}
//                   </span>
//                   <button
//                     onClick={() => handleIncrement(item.id)}
//                     className="px-3 py-1 text-lg font-bold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r-lg"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="mt-4 text-right text-lg font-bold text-gray-800">
//             Total: ${getTotalPrice()}
//           </div>
//         </div>

//         {/* Personal Details */}
//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h3 className="text-3xl font-bold text-gray-300">01</h3>
//               <h3 className="text-xl font-bold text-gray-800 mt-1">
//                 Personal Details
//               </h3>
//             </div>
//             <div className="md:col-span-2">
//               <form>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your first name"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter your last name"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email address"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Phone Number
//                     </label>
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
//               <h3 className="text-xl font-bold text-gray-800 mt-1">
//                 Shipping Address
//               </h3>
//             </div>
//             <div className="md:col-span-2">
//               <form>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Street Address
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Street address"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       City
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="City"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       State
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="State"
//                       className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 rounded-md focus:border-blue-500 outline-none"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700">
//                       Zip Code
//                     </label>
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

//         {/* Payment Method */}
//         <div className="mt-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div>
//               <h3 className="text-3xl font-bold text-gray-300">03</h3>
//               <h3 className="text-xl font-bold text-gray-800 mt-1">
//                 Payment Method
//               </h3>
//             </div>
//             <div className="md:col-span-2">
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="flex items-center">
//                   <input
//                     type="radio"
//                     className="w-5 h-5 cursor-pointer"
//                     id="cash"
//                     checked
//                   />
//                   <label
//                     htmlFor="cash"
//                     className="ml-4 cursor-pointer"
//                   >
//                     Cash on Delivery
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payment Buttons */}
//         <div className="flex justify-end mt-12 space-x-4">
//           <button
//             type="button"
//             className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Pay Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PageHeading from "../components/PageHeading";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

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

  const handlePaymentSuccess = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
  };

  return (
    <div className="px-4 py-8">
      <PageHeading home="Home" pagename="Checkout" />
      <div className="mx-auto max-w-screen-md bg-gray-100 rounded-lg shadow-lg p-2">
        <h2 className="mb-4 text-4xl font-extrabold text-center text-gray-900">Checkout</h2>

        {/* Cart Items */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Cart</h3>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-200 rounded-lg shadow-md">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded" />
                <div className="flex-1 mx-4">
                  <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">${item.price} each</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    className="px-3 py-1 text-lg font-bold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-lg font-bold text-gray-800 bg-white border-t border-b border-gray-300">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="px-3 py-1 text-lg font-bold text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right text-lg font-bold text-gray-800">Total: ${getTotalPrice()}</div>
        </div>

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
          <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h3>
          <div className="space-y-8">
            {/* PayPal */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">PayPal</h4>
              <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [{ amount: { value: getTotalPrice().toString() } }],
                    });
                  }}
                  onApprove={handlePaymentSuccess}
                />
              </PayPalScriptProvider>
            </div>

            {/* Stripe */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Stripe</h4>
              <Elements stripe={stripePromise}>
                <StripeForm />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment("client_secret_from_backend", {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      alert(error.message);
    } else if (paymentIntent.status === "succeeded") {
      alert("Payment successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">
          Credit or Debit Card
        </label>
        <CardElement className="mt-2 p-2 border border-gray-300 rounded-md" />
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="px-4 py-2 text-white bg-blue-600 rounded-md w-full"
      >
        Pay Now
      </button>
    </form>
  );
};

export default Checkout;

