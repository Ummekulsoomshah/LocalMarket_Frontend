
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, getCartTotal } from "../redux/cartSlice";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartProducts, totalAmount } = useSelector((s) => s.cart);

  const removeItemFromCart = (id) => {
    dispatch(removeItem({ id }));
    dispatch(getCartTotal());
  };

  return isSidebarOpen ? (
    <div className="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg z-50 overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
        <FaTimes className="cursor-pointer" onClick={closeSidebar} />
      </div>
      <div className="p-4">
        {cartProducts.length === 0 ? (
          <p>Your cart has no products.</p>
        ) : (
          cartProducts.map((item) => (
            <div key={item.id} className="flex justify-between items-start mb-6">
              <div className="flex">
                <div className="relative">
                  <img
                    src={item.image} // Use the image URL from database
                    alt={item.title}
                    width={68}
                    height={84}
                    className="rounded"
                  />
                  <FaTimes
                    size={12}
                    className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full cursor-pointer"
                    onClick={() => removeItemFromCart(item.id)}
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-600">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold">${item.price}</p>
            </div>
          ))
        )}
        {cartProducts.length > 0 && (
          <>
            <div className="bg-gray-800 text-white p-4 rounded mb-4">
              Subtotal: ${totalAmount}
            </div>
            <button
              onClick={() => navigate("/Checkout")}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default Sidebar;
