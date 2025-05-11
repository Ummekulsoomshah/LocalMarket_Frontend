import { useParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AddProducts = () => {
  const { categoryName, categoryId } = useParams();
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [clothesSize, setClothesSize] = useState("");
  const [isUsed, setIsUsed] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [category, setCategory] = useState(categoryName || "");

  useEffect(() => {
    if (categoryName) setCategory(categoryName);
  }, [categoryName]);

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Input validation
    const validationErrors = {};
    if (!productName) validationErrors.productName = "Required";
    if (!description) validationErrors.description = "Required";
    if (!price) validationErrors.price = "Required";
    if (!quantity) validationErrors.quantity = "Required";
    if (!categoryId) validationErrors.category = "Invalid category";
    if (!image) validationErrors.image = "Image required";
    if (categoryName === "clothes" && !clothesSize) {
      validationErrors.size = "Size required for clothes";
    }
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    try {
      // Convert image to base64
      const base64Image = (await readFileAsBase64(image)).split(",")[1];
  
      const token = localStorage.getItem("token");
      if (!token) {
        alert("User not authenticated");
        return;
      }
  
      // Decode token to get userId
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;

      const productData = {
        title: productName,
        description,
        price,
        quantity,
        categId: categoryId,
        imageBase64: base64Image,
        isused: isUsed ? 1 : 0,
        userId,
      };
  
      if (categoryName === "clothes") {
        productData.size = clothesSize;
      }
  
      const response = await fetch("http://localhost:3002/api/products/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(productData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccessMessage("Product added successfully!");
        // Clear form
        setProductName("");
        setDescription("");
        setPrice("");
        setQuantity("");
        setImage(null);
        setClothesSize("");
        setIsUsed(false);
        setErrors({});
      } else if (response.status === 403) {
        alert("Unauthorized: User mismatch or missing userId.");
      } else {
        alert(result.message || "Failed to add product.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="px-4 py-8 bg-gray-100 min-h-screen">
      <PageHeading home="Home" pagename="Add Product" />
      <div className="mx-auto max-w-screen-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name Field */}
          <div>
            <label htmlFor="productName" className="block text-sm font-semibold text-gray-700">
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              placeholder="Enter product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.productName && <p className="text-sm text-red-500">{errors.productName}</p>}
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              placeholder="Product description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
          </div>

          {/* Image Upload Field */}
          <div>
            <label htmlFor="imageUpload" className="block text-sm font-semibold text-gray-700">
              Upload Image
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
            />
            {image && (
              <div className="mt-3">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-full max-h-64 object-contain border rounded-lg"
                />
              </div>
            )}
            {errors.image && <p className="text-sm text-red-500">{errors.image}</p>}
          </div>

          {/* Category Field */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
            >
              <option value="">Select Category</option>
              <option value="books">Books</option>
              <option value="handicrafts">Handicrafts</option>
              <option value="clothes">Clothes</option>
              <option value="cosmetic">Cosmetics</option>
              <option value="electronics">Electronics</option>
            </select>
            {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
          </div>

          {/* Clothes Size Field (Only for 'clothes' category) */}
          {category === "clothes" && (
            <div>
              <label htmlFor="clothesSize" className="block text-sm font-semibold text-gray-700">
                Size
              </label>
              <select
                id="clothesSize"
                value={clothesSize}
                onChange={(e) => setClothesSize(e.target.value)}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              {errors.clothesSize && <p className="text-sm text-red-500">{errors.clothesSize}</p>}
            </div>
          )}

          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-sm font-semibold text-gray-700">
              Price
            </label>
            <input
              id="price"
              type="text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
            />
            {errors.price && <p className="text-sm text-red-500">{errors.price}</p>}
          </div>

          {/* Quantity Field */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm"
            />
            {errors.quantity && <p className="text-sm text-red-500">{errors.quantity}</p>}
          </div>

          {/* Used Checkbox */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="isUsed"  checked={isUsed}  onChange={() => setIsUsed(!isUsed)}
            className="h-5 w-5 text-blue-600"/>
          <label htmlFor="isUsed" className="text-sm font-semibold text-gray-700">
          Is this product used?
          </label>
            </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none"
          >
          Add Product
          </button>
          </div>
          </form>

        {successMessage && (
        <div className="mt-6 text-green-500 font-semibold">{successMessage}</div>
        )}
        </div>
        </div>
);
};
export default AddProducts;