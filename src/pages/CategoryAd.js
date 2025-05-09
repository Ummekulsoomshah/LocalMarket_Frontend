
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CategoryAd = () => {
    const [categoriesList, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);  // State to manage loading state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategory = async () => {
          try {
            const response = await axios.get('http://localhost:3002/categories');
            if (response.status === 200) {
              const categories = response.data.categories;
              console.log("Fetched Categories:", categories);
              setCategories(categories);
            } else {
              console.log('Error fetching categories');
            }
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false); // ← ADD THIS
          }
        };
        fetchCategory();
      }, []);
      
      return (
        <div className="min-h-screen bg-gray-100 pt-10 pb-32">
          {/* Heading */}
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Choose Ad Category
            </h1>
          </div>
      
          {/* Loading State */}
          {loading ? (
            <div className="flex justify-center items-center">
              <p className="text-lg text-gray-600">Loading categories...</p>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {categoriesList.length > 0 ? (
                categoriesList.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gradient-to-r from-gray-500 to-gray-700 text-white w-60 h-24 md:h-28 flex justify-center items-center rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-xl md:text-2xl font-semibold text-center"
                    onClick={() =>
                      navigate(`/add-product/${category.name}/${category.id}`)
                    }
                  >
                    {category.name}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No categories available.</p>
              )}
            </div>
          )}
        </div>
      );
};

export default CategoryAd;
