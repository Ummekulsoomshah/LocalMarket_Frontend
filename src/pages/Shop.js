// 

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { feateures } from "../data/Data";
// import { BiCart, BiGitCompare, BiHeart, BiSearch } from "react-icons/bi";
// import { Model } from "../components/Model";
// import PageHeading from "../components/PageHeading";

// const Shop = () => {
//   const [isModalOpen, setIsModalOpen] = useState(null);

//   const handleOpen = (productid) => {
//     setIsModalOpen(productid);
//   };
//   const handleClose = () => {
//     setIsModalOpen(null);
//   };

//   return (
//     <div>
//       <PageHeading home={"Home"} pagename={"Shop"} />
//       <div className="w-10/12 m-auto">
//         <div className="grid grid-cols-4 gap-8">
//           {feateures.map((val, key) => (
//             <div className="features flex gap-8 mt-8" key={key}>
//               <div className="overflow-hidden relative m-2">
//                 <div className="image-container relative">
//                   <img
//                     src={val.img}
//                     alt="womenmenaccessories"
//                     className="w-full h-64 object-cover"
//                   />
//                   <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 w-full text-center text-white pt-4 pb-4 transition-all">
//                     <div className="flex justify-center align-middle">
//                       <button className="text-2xl">
//                         <BiCart />
//                       </button>
//                       <button
//                         type="button"
//                         className="whitespace-nowrap uppercase"
//                         onClick={() => handleOpen(val.id)}
//                       >
//                         {val.btn}
//                       </button>
//                     </div>
//                   </div>
//                   <div className="tag absolute top-0 z-10">
//                     <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
//                       {val.tag}
//                     </p>
//                   </div>
//                   <div className="hidden absolute bg-white top-0 right-0 p-4 m-4">
//                     <div className="mb-4">
//                       <BiGitCompare />
//                     </div>
//                     <div className="mb-4">
//                       <BiSearch />
//                     </div>
//                     <div>
//                       <BiHeart />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="product-details text-center mt-2">
//                   <p className="mb-2">{val.short_description}</p>
//                   <p className="mb-2">{val.title}</p>
//                   <div className="flex justify-center mb-2 text-yellow-700">
//                     {val.rating &&
//                       val.rating.map((star, index) => (
//                         <p key={index}>{star.icon}</p>
//                       ))}
//                   </div>
//                   <p className="text-red-600">${val.price}</p>
//                 </div>
//                 <div className="flex justify-center mt-4">
//                   <Link
//                     to="/AddReview"
//                     style={{
//                       backgroundColor: "green",
//                       color: "white",
//                       padding: "0.25rem 0.5rem",
//                       borderRadius: "0.25rem",
//                       textAlign: "center",
//                       display: "inline-block",
//                       fontSize: "0.75rem",
//                     }}
//                   >
//                     Add Review
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Model
//         isModalOpen={isModalOpen !== null}
//         data={feateures.find((feature) => feature.id === isModalOpen)}
//         handleClose={handleClose}
//       />
//     </div>
//   );
// };


// export default Shop;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { feateures } from "../data/Data";
import { BiCart, BiGitCompare, BiHeart, BiSearch } from "react-icons/bi";
import { Model } from "../components/Model";
import PageHeading from "../components/PageHeading";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input

  const handleOpen = (productid) => {
    setIsModalOpen(productid);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  // Filter the products based on the search term (match category or title)
  const filteredFeatures = feateures.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.category.toLowerCase().includes(searchLower) ||
      item.title.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div>
      <PageHeading home={"Home"} pagename={"Shop"} />

      {/* Search Bar */}
      <div className="search-bar text-left mb-2 mt-10 ml-10">
        <input
          type="text"
          placeholder="Search by items "
          className="p-1 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
        />
      </div>

      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-4 gap-8">
          {filteredFeatures.map((val, key) => (
            <div className="features flex gap-8 mt-8" key={key}>
              <div className="overflow-hidden relative m-2">
                <div className="image-container relative">
                  <img
                    src={val.img}
                    alt="product"
                    className="w-full h-64 object-cover"
                  />
                  <div className="hidden absolute bottom-0 bg-red-700 opacity-65 hover:opacity-100 w-full text-center text-white pt-4 pb-4 transition-all">
                    <div className="flex justify-center align-middle">
                      <button className="text-2xl">
                        <BiCart />
                      </button>
                      <button
                        type="button"
                        className="whitespace-nowrap uppercase"
                        onClick={() => handleOpen(val.id)}
                      >
                        {val.btn}
                      </button>
                    </div>
                  </div>
                  <div className="tag absolute top-0 z-10">
                    <p className="bg-green-600 m-2 rounded-full w-12 h-12 grid place-items-center text-white">
                      {val.tag}
                    </p>
                  </div>
                  <div className="hidden absolute bg-white top-0 right-0 p-4 m-4">
                    <div className="mb-4">
                      <BiGitCompare />
                    </div>
                    <div className="mb-4">
                      <BiSearch />
                    </div>
                    <div>
                      <BiHeart />
                    </div>
                  </div>
                </div>
                <div className="product-details text-center mt-2">
                  <p className="mb-2">{val.short_description}</p>
                  <p className="mb-2">{val.title}</p>
                  <div className="flex justify-center mb-2 text-yellow-700">
                    {val.rating &&
                      val.rating.map((star, index) => (
                        <p key={index}>{star.icon}</p>
                      ))}
                  </div>
                  <p className="text-red-600">${val.price}</p>
                </div>
                <div className="flex justify-center mt-4">
                  <Link
                    to="/AddReview"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "0.25rem",
                      textAlign: "center",
                      display: "inline-block",
                      fontSize: "0.75rem",
                    }}
                  >
                    Add Review
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Model
        isModalOpen={isModalOpen !== null}
        data={feateures.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;
