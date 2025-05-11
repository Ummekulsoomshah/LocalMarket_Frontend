
// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { shop } from "../data/Data";
// // // import { BiCart, BiGitCompare, BiHeart, BiSearch } from "react-icons/bi";
// // // import { Model } from "../components/Model";
// // // import PageHeading from "../components/PageHeading";

// // // const Shop = () => {
// // //   const [isModalOpen, setIsModalOpen] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState(""); // State for the search input

// // //   const handleOpen = (productid) => {
// // //     setIsModalOpen(productid);
// // //   };

// // //   const handleClose = () => {
// // //     setIsModalOpen(null);
// // //   };

// // //   // Filter the products based on the search term (match category or title)
// // //   const filteredFeatures = shop.filter((item) => {
// // //     const searchLower = searchTerm.toLowerCase();
// // //     return (
// // //       item.category.toLowerCase().includes(searchLower) ||
// // //       item.title.toLowerCase().includes(searchLower)
// // //     );
// // //   });

// // //   return (
// // //     <div>
// // //       <PageHeading home={"Home"} pagename={"Shop"} />

// // //       {/* Search Bar */}
// // //       <div className="search-bar text-left mb-2 mt-10 ml-10">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by items "
// // //           className="p-1 border rounded-lg"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
// // //         />
// // //       </div>

// // //       <div className="w-10/12 m-auto">
// // //         <div className="grid grid-cols-4 gap-8">
// // //           {filteredFeatures.map((val, key) => (
// // //             <div className="features flex gap-8 mt-8" key={key}>
// // //               <div className="overflow-hidden relative m-2">
// // //                 <div className="image-container relative">
// // //                   <img
// // //                     src={val.img}
// // //                     alt="product"
// // //                     className="w-full h-64 object-cover"
// // //                   />
// // //                   <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 w-full text-center text-white pt-4 pb-4 transition-all">
// // //                     <div className="flex justify-center align-middle">
// // //                       <button className="text-2xl">
// // //                         <BiCart />
// // //                       </button>
// // //                       <button
// // //                         type="button"
// // //                         className="whitespace-nowrap uppercase"
// // //                         onClick={() => handleOpen(val.id)}
// // //                       >
// // //                         {val.btn}
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                   <div className="tag absolute top-0 z-10">
// // //                     <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
// // //                       {val.tag}
// // //                     </p>
// // //                   </div>
// // //                   <div className="hidden absolute bg-white top-0 right-0 p-4 m-4">
// // //                     <div className="mb-4">
// // //                       <BiGitCompare />
// // //                     </div>
// // //                     <div className="mb-4">
// // //                       <BiSearch />
// // //                     </div>
// // //                     <div>
// // //                       <BiHeart />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="product-details text-center mt-2">
// // //                   <p className="mb-2">{val.short_description}</p>
// // //                   <p className="mb-2">{val.title}</p>
// // //                   <div className="flex justify-center mb-2 text-yellow-700">
// // //                     {val.rating &&
// // //                       val.rating.map((star, index) => (
// // //                         <p key={index}>{star.icon}</p>
// // //                       ))}
// // //                   </div>
// // //                   <p className="text-red-600">${val.price}</p>
// // //                 </div>
// // //                 <div className="flex justify-center mt-4">
// // //                   <Link
// // //                     to="/AddReview"
// // //                     style={{
// // //                       backgroundColor: "green",
// // //                       color: "white",
// // //                       padding: "0.25rem 0.5rem",
// // //                       borderRadius: "0.25rem",
// // //                       textAlign: "center",
// // //                       display: "inline-block",
// // //                       fontSize: "0.75rem",
// // //                     }}
// // //                   >
// // //                     Add Review
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <Model
// // //         isModalOpen={isModalOpen !== null}
// // //         data={shop.find((feature) => feature.id === isModalOpen)}
// // //         handleClose={handleClose}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Shop;




// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { shop } from "../data/Data";
// // // import { BiCart, BiGitCompare, BiHeart, BiSearch } from "react-icons/bi";
// // // import { Model } from "../components/Model";
// // // import PageHeading from "../components/PageHeading";

// // // const Shop = () => {
// // //   const [isModalOpen, setIsModalOpen] = useState(null);
// // //   const [searchTerm, setSearchTerm] = useState(""); // State for the search input

// // //   const handleOpen = (productid) => {
// // //     setIsModalOpen(productid);
// // //   };

// // //   const handleClose = () => {
// // //     setIsModalOpen(null);
// // //   };

// // //   // Filter the products based on the search term (match category or title)
// // //   const filteredFeatures = shop.filter((item) => {
// // //     const searchLower = searchTerm.toLowerCase();
// // //     return (
// // //       item.category.toLowerCase().includes(searchLower) ||
// // //       item.title.toLowerCase().includes(searchLower)
// // //     );
// // //   });

// // //   return (
// // //     <div>
// // //       <PageHeading home={"Home"} pagename={"Shop"} />

// // //       {/* Search Bar */}
// // //       <div className="search-bar text-left mb-2 mt-10 ml-10">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by items or category"
// // //           className="p-2 border rounded-lg shadow-md focus:outline-none"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
// // //         />
// // //       </div>

// // //       <div className="w-10/12 m-auto">
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // //           {filteredFeatures.map((val, key) => (
// // //             <div
// // //               className="feature-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
// // //               key={key}
// // //             >
// // //               <div className="image-container relative">
// // //                 <img
// // //                   src={val.img}
// // //                   alt="product"
// // //                   className="w-full h-64 object-cover rounded-lg"
// // //                 />
// // //                 <div className="overlay absolute bottom-0 bg-gradient-to-t from-black opacity-60 hover:opacity-100 w-full text-center text-white p-4 transition-all">
// // //                   <div className="flex justify-center gap-4">
// // //                     <button className="text-2xl hover:text-green-400">
// // //                       <BiCart />
// // //                     </button>
// // //                     <button
// // //                       type="button"
// // //                       className="text-lg hover:text-green-400 uppercase"
// // //                       onClick={() => handleOpen(val.id)}
// // //                     >
// // //                       {val.btn}
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //                 <div className="tag absolute top-0 left-2 bg-green-600 rounded-full w-12 h-12 grid place-items-center text-white">
// // //                   {val.tag}
// // //                 </div>
// // //               </div>

// // //               <div className="product-details text-center mt-4">
// // //                 <p className="text-sm text-gray-400 mb-2">{val.short_description}</p>
// // //                 <p className="text-xl font-semibold mb-2">{val.title}</p>
// // //                 <div className="flex justify-center mb-2 text-yellow-500">
// // //                   {val.rating &&
// // //                     val.rating.map((star, index) => (
// // //                       <p key={index}>{star.icon}</p>
// // //                     ))}
// // //                 </div>
// // //                 <p className="text-red-600 text-xl">${val.price}</p>
// // //               </div>

// // //               <div className="flex justify-center mt-4">
// // //                 <Link
// // //                   to="/AddReview"
// // //                   className="bg-gray-600 text-white py-2 px-6 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
// // //                 >
// // //                   Add Review
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <Model
// // //         isModalOpen={isModalOpen !== null}
// // //         data={shop.find((feature) => feature.id === isModalOpen)}
// // //         handleClose={handleClose}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Shop;



// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { shop } from "../data/Data";
// // import { BiCart } from "react-icons/bi";
// // import { Model } from "../components/Model";
// // import PageHeading from "../components/PageHeading";

// // const Shop = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const handleOpen = (productid) => {
// //     setIsModalOpen(productid);
// //   };

// //   const handleClose = () => {
// //     setIsModalOpen(null);
// //   };

// //   const filteredFeatures = shop.filter((item) => {
// //     const searchLower = searchTerm.toLowerCase();
// //     return (
// //       item.category.toLowerCase().includes(searchLower) ||
// //       item.title.toLowerCase().includes(searchLower)
// //     );
// //   });

// //   return (
// //     <div>
// //       <PageHeading home={"Home"} pagename={"Shop"} />

// //       {/* Search Filter */}
// //       <div className="flex justify-end w-11/12 mx-auto mt-8 mb-4">
// //         <input
// //           type="text"
// //           placeholder="Search by item or category"
// //           className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //         />
// //       </div>

// //       <div className="w-11/12 m-auto">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //           {filteredFeatures.map((val, key) => (
// //             <div
// //               className="feature-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
// //               key={key}
// //             >
// //               <div className="image-container relative">
// //                 <img
// //                   src={val.img}
// //                   alt="product"
// //                   className="w-full h-64 object-cover rounded-lg"
// //                 />
// //                 <div className="overlay absolute bottom-0 bg-gradient-to-t from-black opacity-60 hover:opacity-100 w-full text-center text-white p-4 transition-all">
// //                   <div className="flex justify-center gap-4">
// //                     <button className="text-2xl hover:text-green-400">
// //                       <BiCart />
// //                     </button>
// //                     <button
// //                       type="button"
// //                       className="text-lg hover:text-green-400 uppercase"
// //                       onClick={() => handleOpen(val.id)}
// //                     >
// //                       {val.btn}
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="tag absolute top-0 left-2 bg-green-600 rounded-full w-12 h-12 grid place-items-center text-white text-sm">
// //                   {val.tag}
// //                 </div>
// //               </div>

// //               <div className="product-details text-center mt-4">
// //                 <p className="text-sm text-gray-400 mb-2">{val.short_description}</p>
// //                 <p className="text-xl font-semibold mb-2">{val.title}</p>
// //                 <div className="flex justify-center mb-2 text-yellow-500">
// //                   {val.rating &&
// //                     val.rating.map((star, index) => (
// //                       <p key={index}>{star.icon}</p>
// //                     ))}
// //                 </div>
// //                 <p className="text-red-600 text-xl">${val.price}</p>
// //               </div>

// //               <div className="flex justify-center mt-4">
// //                 <Link
// //                   to="/AddReview"
// //                   className="bg-gray-600 text-white py-2 px-6 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
// //                 >
// //                   Add Review
// //                 </Link>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <Model
// //         isModalOpen={isModalOpen !== null}
// //         data={shop.find((feature) => feature.id === isModalOpen)}
// //         handleClose={handleClose}
// //       />
// //     </div>
// //   );
// // };

// // export default Shop;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { BiCart } from "react-icons/bi";
// import { Model } from "../components/Model";
// import PageHeading from "../components/PageHeading";
// import axios from "axios";

// const Shop = () => {
//   const [isModalOpen, setIsModalOpen] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [shopItems, setShopItems] = useState([]);

//   const handleOpen = (productid) => {
//     setIsModalOpen(productid);
//   };

//   const handleClose = () => {
//     setIsModalOpen(null);
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:3002/api/items")
//       .then((response) => {
//         setShopItems(response.data.items);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);
//   const filteredFeatures = shopItems.filter((item) => {
//     const searchLower = searchTerm.toLowerCase();
  
//     // Check title and fields (if fields exist)
//     return (
//       item.title.toLowerCase().includes(searchLower) ||
//       (item.fields && Object.values(item.fields).join(" ").toLowerCase().includes(searchLower))
//     );
//   });
//   return (
//     <div>
//       <PageHeading home={"Home"} pagename={"Shop"} />

//       {/* Search Filter */}
//       <div className="flex justify-end w-11/12 mx-auto mt-8 mb-4">
//         <input
//           type="text"
//           placeholder="Search by item or category"
//           className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="w-11/12 m-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {filteredFeatures.map((val) => (
//             <div
//               className="feature-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               key={val.id}
//             >
//               <div className="image-container relative">
//                 <img
//                   src={val.image}
//                   alt="product"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//                 <div className="overlay absolute bottom-0 bg-gradient-to-t from-black opacity-60 hover:opacity-100 w-full text-center text-white p-4 transition-all">
//                   <div className="flex justify-center gap-4">
//                     <button className="text-2xl hover:text-green-400">
//                       <BiCart />
//                     </button>
//                     <button
//                       type="button"
//                       className="text-lg hover:text-green-400 uppercase"
//                       onClick={() => handleOpen(val.id)}
//                     >
//                       Select Product
//                     </button>
//                   </div>
//                 </div>
//                 <div className="tag absolute top-0 left-2 bg-green-600 rounded-full w-12 h-12 grid place-items-center text-white text-sm">
//                   {val.isused === 1 ? "Used" : "New"}
//                 </div>
//               </div>

//               <div className="product-details text-center mt-4">
//                 <p className="text-sm text-gray-400 mb-2">{val.description}</p>
//                 <p className="text-xl font-semibold mb-2">{val.title}</p>
//                 <p className="text-red-600 text-xl">${val.price}</p>
//               </div>

//               <div className="flex justify-center mt-4">
//                 <Link
//                   to="/AddReview"
//                   className="bg-gray-600 text-white py-2 px-6 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
//                 >
//                   Add Review
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Model
//         isModalOpen={isModalOpen !== null}
//         data={shopItems.find((feature) => feature.id === isModalOpen)}
//         handleClose={handleClose}
//       />
//     </div>
//   );
// };

// export default Shop;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { Model } from "../components/Model";
import PageHeading from "../components/PageHeading";
import axios from "axios";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shopItems, setShopItems] = useState([]);

  const handleOpen = (productid) => {
    setIsModalOpen(productid);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  useEffect(() => {
    // Fetching the items data from your backend API
    axios
      .get("http://localhost:3002/api/items") // Replace with your API endpoint
      .then((response) => {
        setShopItems(response.data.items); // Assuming the data contains items with 'image' paths
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  // Filter items based on search term
  const filteredFeatures = shopItems.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      (item.fields &&
        Object.values(item.fields).join(" ").toLowerCase().includes(searchLower))
    );
  });

  // Function to determine if the image is a URL or local path
  const getImageUrl = (image) => {
    // If the image starts with "http" or "https", it's an external URL
    if (image.startsWith("http")) {
      return image;
    }
    // Otherwise, it's assumed to be a local file in the 'uploads' folder
    return `http://localhost:3002/${image}`;
  };

  return (
    <div>
      <PageHeading home={"Home"} pagename={"Shop"} />

      {/* Search Filter */}
      <div className="flex justify-end w-11/12 mx-auto mt-8 mb-4">
        <input
          type="text"
          placeholder="Search by item or category"
          className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-11/12 m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredFeatures.map((val) => (
            <div
              className="feature-item bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              key={val.id}
            >
              <div className="image-container relative">
                <img
                  src={getImageUrl(val.image)} // Dynamically determine the image URL
                  alt="product"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="overlay absolute bottom-0 bg-gradient-to-t from-black opacity-60 hover:opacity-100 w-full text-center text-white p-4 transition-all">
                  <div className="flex justify-center gap-4">
                    <button className="text-2xl hover:text-green-400">
                      <BiCart />
                    </button>
                    <button
                      type="button"
                      className="text-lg hover:text-green-400 uppercase"
                      onClick={() => handleOpen(val.id)}
                    >
                      Select Product
                    </button>
                  </div>
                </div>
                <div className="tag absolute top-0 left-2 bg-green-600 rounded-full w-12 h-12 grid place-items-center text-white text-sm">
                  {val.isused === 1 ? "Used" : "New"}
                </div>
              </div>

              <div className="product-details text-center mt-4">
                <p className="text-sm text-gray-400 mb-2">{val.description}</p>
                <p className="text-xl font-semibold mb-2">{val.title}</p>
                <p className="text-red-600 text-xl">${val.price}</p>
              </div>

              <div className="flex justify-center mt-4">
                <Link
                  to="/AddReview"
                  className="bg-gray-600 text-white py-2 px-6 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  Add Review
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Model
        isModalOpen={isModalOpen !== null}
        data={shopItems.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;
