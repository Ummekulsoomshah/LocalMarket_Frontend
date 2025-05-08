
import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal, updateQuantity } from "../redux/cartSlice";
import { PiMinus, PiPlus } from "react-icons/pi";

// Dropdown component to show product reviews
const Dropdown = ({ isOpen, handleClose, productId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/${productId}`, { method: "GET" });

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    if (isOpen) {
      fetchReviews();
    }
  }, [isOpen, productId]);

  return (
    isOpen && (
      <div className="reviews-dropdown bg-white p-4 absolute z-50 rounded-lg shadow-lg w-full mt-2">
        <span onClick={handleClose} className="absolute top-0 right-0 p-4 cursor-pointer">
          <FaTimes />
        </span>
        <h2 className="text-2xl mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.review_id} className="review-item mb-4">
              <p className="text-xl font-semibold">{review.buyer_name}</p>
              <p>"{review.message}"</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    )
  );
};

// Modal component to display product details and handle cart actions
export const Model = ({ isModalOpen, data, handleClose }) => {
  const [qty, setQty] = useState(1);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const dispatch = useDispatch();

  // Add product to cart with quantity and price
  const addItemToCart = (item) => {
    let totalPrice = qty * item.price;
    const tempProduct = { ...item, quantity: qty, totalPrice };
    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
  };

  // Increase product quantity
  const increaseQuantity = () => setQty((prevQty) => prevQty + 1);

  // Decrease product quantity with a minimum of 1
  const decreaseQuantity = () => setQty((prevQty) => Math.max(prevQty - 1, 1));

  // Toggle reviews section visibility
  const handleReviewsToggle = () => setIsReviewsOpen(!isReviewsOpen);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay fixed inset-0 z-40">
          <div className="modal-content w-[800px] bg-white rounded-lg shadow-lg p-6 relative mt-16 mx-auto">
            <span onClick={handleClose} className="absolute top-4 right-4 p-4 cursor-pointer">
              <FaTimes />
            </span>
            <div className="flex">
              <div className="modal-poster w-[300px] h-[300px] overflow-hidden rounded-lg">
                <img
                  src={data.image} // Use the image URL from database
                  alt={data.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="modal-info ml-6 flex-1">
                <h2 className="text-3xl font-semibold">{data.title}</h2>
                <p className="mt-4 text-lg">{data.short_description}</p>
                <div className="relative mt-4">
                  <button
                    className="text-green-600 font-semibold"
                    onClick={handleReviewsToggle}
                  >
                    {isReviewsOpen ? "Hide Reviews" : "Show Reviews"}
                    {isReviewsOpen ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>
                  <Dropdown
                    isOpen={isReviewsOpen}
                    handleClose={handleReviewsToggle}
                    productId={data.id}
                  />
                </div>
                <p className="text-red-600 text-2xl mt-4">${data.price}</p>
                <p className="mt-4">{data.description}</p>

                <div className="mt-4">
                  <p className="font-bold">Size:</p>
                  <div className="size-buttons mt-2 font-semibold">
                    {["Small", "Medium", "Large", "Extra Large"].map((size) => (
                      <button
                        key={size}
                        className="btn pt-1 pb-1 pr-3 pl-3 mr-2"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex mr-3">
                    <button
                      className="border p-2"
                      onClick={decreaseQuantity}
                    >
                      <PiMinus />
                    </button>
                    <span className="border p-2">{qty}</span>
                    <button
                      className="border p-2"
                      onClick={increaseQuantity}
                    >
                      <PiPlus />
                    </button>
                  </div>
                  <button
                    className="btn bg-green-600 text-white p-3"
                    onClick={() => addItemToCart(data)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
