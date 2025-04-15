import React from "react";
import PageHeading from "../components/PageHeading";

const Cart = () => {
  return (
    <div class="max-w-6xl mx-auto flex bg-white p-6 rounded-lg shadow-md gap-6">
      <div class='flex-1'>
        <h2 class="text-2xl font-bold mb-4">Order Summary</h2>

        <div class="space-y-4">
          <div class="flex gap-4 items-center border-b pb-4">
            <img src="https://via.placeholder.com/80x100.png?text=Red" alt="Red T-Shirt" class="w-20 h-20 object-cover rounded" />
            <div class="flex-1">
              <h3 class="font-semibold">Chair</h3>
              <p><span class="font-medium">Furniture</span></p>
            
            </div>
            <div class="text-right">
              <p class="text-blue-600 font-semibold">$60.00</p>
             
            </div>
          </div>
        </div>

      </div>

      <div class='flex-1'>
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
          <input class="w-full border p-2 rounded" placeholder="City" value="Rajkot" />
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

          <div class="flex gap-4">
            <button class="w-full bg-gray-200 text-black py-2 rounded">Cancel</button>
            <button class="w-full bg-gray-900 text-white py-2 rounded">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
