import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal, removeItem } from "../redux/cartSlice";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  const handleProceedToCheckout = () => {
    navigate("/Checkout");
  };

  return (
    <div className="font-poppins">
      {isSidebarOpen && (
        <div className="w-1/4 fixed top-0 right-0 bg-white shadow-lg h-screen z-50 transition-all duration-300 overflow-y-auto">
          <div className="border-b mb-4 relative">
            <h1 className="text-2xl font-semibold p-4">Your Cart Items</h1>
            <span
              className="absolute right-0 top-0 p-4 cursor-pointer text-gray-600 hover:text-black"
              onClick={closeSidebar}
            >
              <FaTimes />
            </span>
          </div>
          <div className="p-4">
            {cartProducts.length === 0 ? (
              <p className="text-xl font-medium capitalize">Your cart has no products.</p>
            ) : (
              <>
                {cartProducts.map((item) => (
                  <div key={item.id} className="mb-6 flex justify-between items-start">
                    <div className="flex">
                      <div className="relative">
                        <img src={item.img} alt={item.title} height={84} width={68} />
                        <span
                          className="absolute top-0 -mt-2 -ml-2 bg-red-600 text-white p-1 rounded-full cursor-pointer"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          <FaTimes size={12} />
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="text-base font-medium">{item.title}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-right">
                      <p className="text-sm font-medium">${item.price}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-gray-700 p-6 w-full text-white text-lg font-semibold">
                  <h2>
                    Sub Total: $<span>{totalAmount}</span>
                  </h2>
                </div>
                <div className="mt-6">
                  <button
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold text-lg"
                    onClick={handleProceedToCheckout}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
