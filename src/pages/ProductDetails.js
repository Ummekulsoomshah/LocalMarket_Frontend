// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//     const { prodId } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//          const fetchProduct = async () => {
//              try {
//                  const response = await axios.get(`http:localhost:3000/getProductDetails/${prodId}`);
//                  if (response.status === 200) {
//                      console.log('response', response.data);
//                      setProduct(response.data);
//                  } else {
//                      console.log("Error fetching product details");
//                  }
//              } catch (error) {
//                  console.log(error);
//              }
//          };
//          fetchProduct();
//     }, []);

//     if (!product) {
//         return (
//             <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-600">
//                 <div className="w-full max-w-md rounded-lg border border-blue-300 p-8 shadow-lg bg-white">
//                     <div className="flex animate-pulse space-x-6">
//                         <div className="h-16 w-16 rounded-full bg-gray-300"></div>
//                         <div className="flex-1 space-y-4 py-2">
//                             <div className="h-4 rounded bg-gray-300 w-3/4"></div>
//                             <div className="space-y-2">
//                                 <div className="grid grid-cols-3 gap-4">
//                                     <div className="col-span-2 h-4 rounded bg-gray-300"></div>
//                                     <div className="col-span-1 h-4 rounded bg-gray-300"></div>
//                                 </div>
//                                 <div className="h-4 rounded bg-gray-300 w-1/2"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 py-12 px-4 md:px-10">
//             <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//                 {/* Product Image */}
//                 <div className="flex justify-center items-center border border-gray-300 rounded-xl shadow-md bg-white p-4">
//                     <img
//                         className="object-contain rounded-xl h-96 w-full"
//                         src={product.image}
//                         alt="Product"
//                     />
//                 </div>

//                 {/* Product Info */}
//                 <div className="flex flex-col bg-white border border-gray-300 rounded-xl shadow-md p-6 space-y-6">
//                     {/* Title & Price */}
//                     <div>
//                         <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
//                         <p className="text-xl text-green-600 font-semibold">Rs. {product.price}</p>
//                     </div>

//                     {/* Details */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Details</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             {Object.entries(product.fields).map(([key, value], index) => (
//                                 <div
//                                     key={index}
//                                     className="flex justify-between bg-gray-100 rounded-md px-3 py-2"
//                                 >
//                                     <span className="text-sm text-gray-600 capitalize">{key}</span>
//                                     <span className="text-sm text-gray-800 font-medium">{value}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Description */}
//                     <div>
//                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
//                         <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { prodId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
         const fetchProduct = async () => {
             try {
                 const response = await axios.get(`http://localhost:3000/getProductDetails/${prodId}`);
                 if (response.status === 200) {
                     console.log('response', response.data);
                     setProduct(response.data);
                 } else {
                     console.log("Error fetching product details");
                 }
             } catch (error) {
                 console.log(error);
             }
         };
         fetchProduct();
    }, [prodId]);

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-800 to-gray-600">
                <div className="w-full max-w-md rounded-lg border border-blue-300 p-8 shadow-lg bg-white">
                    <div className="flex animate-pulse space-x-6">
                        <div className="h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="flex-1 space-y-4 py-2">
                            <div className="h-4 rounded bg-gray-300 w-3/4"></div>
                            <div className="space-y-2">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-2 h-4 rounded bg-gray-300"></div>
                                    <div className="col-span-1 h-4 rounded bg-gray-300"></div>
                                </div>
                                <div className="h-4 rounded bg-gray-300 w-1/2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-600 py-12 px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Product Image */}
                <div className="flex justify-center items-center border border-gray-300 rounded-xl shadow-md bg-white p-4">
                    <img
                        className="object-contain rounded-xl h-96 w-full"
                        src={product.image}
                        alt="Product"
                    />
                </div>

                {/* Product Info */}
                <div className="flex flex-col bg-white border border-gray-300 rounded-xl shadow-md p-6 space-y-6">
                    {/* Title & Price */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h2>
                        <p className="text-xl text-green-600 font-semibold">Rs. {product.price}</p>
                    </div>

                    {/* Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Details</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(product.fields).map(([key, value], index) => (
                                <div
                                    key={index}
                                    className="flex justify-between bg-gray-100 rounded-md px-3 py-2"
                                >
                                    <span className="text-sm text-gray-600 capitalize">{key}</span>
                                    <span className="text-sm text-gray-800 font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
