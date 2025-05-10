import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState(null)
  const [email, setEmail] = useState('')
const navigate=useNavigate()
  const handleCheckout = async () => {
    const totalAmount = calculateTotal();
    navigate("/checkout", { state: { amount: totalAmount, email } });
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
  const calculateTotal = () => {
    return cartItems?.reduce((total, item) => total + parseInt(item.price), 0) || 0;
  };

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


    </div>
  );
};

export default Cart;
