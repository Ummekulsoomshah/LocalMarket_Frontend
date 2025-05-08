import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);
  const [email, setEmail] = useState('');
  const [cartVisible, setCartVisible] = useState(true);  // New state to control cart visibility

  const handleCheckout = async () => {
    console.log("checkout");
    try {
      const result = await axios.post(
        'http://localhost:3002/create-checkout-session',
        {
          cartItems,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}` // Add your token here
          }
        }
      );

      if (result.status === 200) {
        console.log("Checkout session created:", result.data);
        setCartVisible(false);  // Hide the cart after checkout is initiated
      } else {
        console.log('Error during checkout');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const result = await axios.get('http://localhost:3002/getCart',
          {
            headers: {
              "Content-Type": "application/json",
              "authorization": `Bearer ${localStorage.getItem('token')}` // Add your token here
            }
          });
        if (result.status === 200) {
          const cartItemsData = result.data.data;
          console.log(cartItemsData);
          setCartItems(cartItemsData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCart();
  }, []);

  // If cart is not visible, return null (this hides the cart)
  if (!cartVisible) {
    return null;
  }

  return (
    <div className="cart-container">
      <div className="max-w-6xl mx-auto flex bg-white p-6 rounded-lg shadow-md gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div className="space-y-4" key={item.id}>
                <div className="flex gap-4 items-center border-b pb-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-600 font-semibold">Rs. {item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Your cart is empty.</div>  // Display a message if cart is empty
          )}

          <div className="flex gap-4">
            <Link to='/' className="w-full bg-gray-200 text-center text-black py-2 rounded">Cancel</Link>
            <button onClick={handleCheckout} className="w-full bg-gray-900 text-white py-2 rounded">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
