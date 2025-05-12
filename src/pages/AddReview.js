
import React, { useState } from "react";
import PageHeading from "../components/PageHeading";

const AddReview = () => {
  const [name, setName] = useState(""); // State for the reviewer's name
  const [review, setReview] = useState(""); // State for the review message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have the product_id stored somewhere or passed as a prop
    const product_id = "your_product_id_here"; // Replace with actual product_id logic

    const data = {
      message: review,
      product_id: product_id,
    };

    try {
      const response = await fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      alert("Review added successfully");
      // Optionally, you can redirect or update state after successful submission
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Failed to add review");
    }
  };

  return (
    <div className="px-6 py-12 bg-gray-100 font-poppins">
      <PageHeading home="Home" pagename="Add Review" />
      <div className="mx-auto max-w-screen-md rounded-lg shadow-lg p-8 bg-white border-2 border-gray-300">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Add Review
        </h2>
        <p className="mb-6 text-lg text-center text-gray-600">
          Share your thoughts and feedback on the product.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-gray-800"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="review"
              className="block text-sm font-bold text-gray-800"
            >
              Your Review
            </label>
            <textarea
              id="review"
              rows="4"  // Reduced height by changing rows
              className="mt-2 w-full p-2 text-sm border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:ring-none focus:border-gray-500 shadow-md"
              placeholder="Write your review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-8 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-lg focus:outline-none focus:ring-none focus:border-gray-500"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
