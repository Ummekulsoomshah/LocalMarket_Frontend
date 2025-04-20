import axios from "axios";
import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Link } from "react-router-dom";
const stripePromise = loadStripe('pk_test_51RFUtHHOzNr3RhtKYfyceqLji2Pg9ToxkrnLPGgzEz8Yadx6mCZavZqSLzbYiCNiOiSxS229WdXlgr7JssvUJCtt00pPEeMxpd'); // Use your Stripe publishable key

const Cart = () => {
  const [cartItems, setCartItems] = useState(null)
  const [email, setEmail] = useState('')

  const handleCheckout = async () => {
    console.log("checkout");
    try {
      const result = await axios.post(
        'http://localhost:3000/create-checkout-session',
        {
          cartItems,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
  
      if (result.status === 200) {
        const stripe = await stripePromise;
        const session = result.data;
  
        if (session && session.url) {
          window.location.href = session.url; 
        } else {
          console.error("Session URL missing:", session);
        }
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const result = await axios.get('http://localhost:3000/getCart',
          {
            'headers': {
              "Content-Type": "application/json",
              "authorization": `Bearer ${localStorage.getItem('token')}` // Add your token here
            }
          })
        if (result.status == 200) {
          const cartItemsdata = result.data.data
          console.log(cartItemsdata)
          setCartItems(cartItemsdata)
          console.log('caritems', cartItems)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchCart()
  }, [])
  return (
    <div class="max-w-6xl mx-auto flex bg-white p-6 rounded-lg shadow-md gap-6">
      <div class='flex-1'>
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

        {cartItems &&
          cartItems.map((item) => {
            return (
              <div class="space-y-4">
                <div class="flex gap-4 items-center border-b pb-4">
                  <img src={item.image} alt="Red T-Shirt" class="w-20 h-20 object-cover rounded" />
                  <div class="flex-1">
                    <h3 class="font-semibold">{item.title}</h3>
                    <p class="text-gray-600">{item.description}</p>

                  </div>
                  <div class="text-right">
                    <p class="text-blue-600 font-semibold">Rs. {item.price}</p>

                  </div>
                </div>
              </div>
            )
          })
        }


      <div class="flex gap-4">
        <Link to='/' class="w-full bg-gray-200 text-center text-black py-2 rounded">Cancel</Link>
        <button onClick={handleCheckout} class="w-full bg-gray-900 text-white py-2 rounded">Order</button>
      </div>
      </div>

      {/* <div class='flex-1'>
        <h2 class="text-2xl font-bold mb-4 flex justify-between items-center">
          Shopping Cart <span class="text-blue-600 text-lg font-semibold">3 Items</span>
        </h2>

        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <div class="flex justify-between mb-2">
            <span>Subtotal:</span><span class="font-semibold">$360.00</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Delivery:</span><span class="font-semibold">$0</span>
          </div>
          <div class="flex justify-between text-lg font-bold">
            <span>Total:</span><span>$360.00</span>
          </div>
        </div>

        <div class="space-y-4">
          <input class="w-full border p-2 rounded" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input class="w-full border p-2 rounded" placeholder="Promo Code" value="Nov 01, 2023" />
          <input class="w-full border p-2 rounded" placeholder="Address" value="Alpha Plus, Near Raiya Telephone exchange." />

          <div class="space-y-2">
            <p class="font-semibold">Payment</p>
            <div class="space-y-2">
              <label class="block"><input type="radio" name="payment" /> Payment Delivery</label>
              <label class="block"><input type="radio" name="payment" checked /> Card Payment</label>
              <label class="block"><input type="radio" name="payment" /> PayPal Payment</label>
            </div>

            <button class="mt-2 text-blue-600 underline">+ Add Credit Card</button>
          </div>

          <input class="w-full border p-2 rounded" placeholder="Phone Number" />
          <input class="w-full border p-2 rounded" placeholder="Expiry Date" value="Dec, 2025" />
          <input class="w-full border p-2 rounded" placeholder="CVV" value="Rajkot" />

        </div>
      </div> */}
    </div>
  );
};

export default Cart;
