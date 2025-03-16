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
    <div>
      {isSidebarOpen && (
        <div className="w-1/4 fixed top-0 right-0 bg-white shadow-lg h-screen z-50 transition-all duration-300 overflow-y-auto">
          <div className="border-b mb-4 relative">
            <h1 className="text-3xl p-4">Your Cart Items</h1>
            <span
              className="absolute right-0 top-0 p-4 cursor-pointer"
              onClick={closeSidebar}
            >
              <FaTimes />
            </span>
          </div>
          <div className="p-4">
            {cartProducts.length === 0 ? (
              <p className="text-3xl font-bold capitalize">Your cart has no products.</p>
            ) : (
              <>
                {cartProducts.map((item) => (
                  <div key={item.id} className="mb-4 flex justify-between">
                    <div className="flex">
                      <div className="relative">
                        <img src={item.img} alt={item.title} height={84} width={68} />
                        <span
                          className="absolute top-0 -mt-2 -ml-2 bg-red-600 text-white cursor-pointer"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          <FaTimes />
                        </span>
                      </div>
                      <div className="ml-4">
                        <p>{item.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <p>${item.price}</p>
                      </div>
                      <div>
                        <p>Qty: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-gray-700 p-6 w-full text-white">
                  <h2>
                    Sub Total: $<span>{totalAmount}</span>
                  </h2>
                </div>
                <div className="mt-4">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
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
