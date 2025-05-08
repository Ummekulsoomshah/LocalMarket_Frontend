// // // import React, { useEffect } from 'react'
// // // import axios from 'axios'
// // // import { useState } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // const CatagoryAd = () => {
// // //     const [catagorieslist, setCatagories] = useState([])
// // //     const navigate = useNavigate()
// // //     useEffect(() => {
// // //         try {
// // //             const fetchCategory = async () => {
// // //                 const response = await axios.get('http://localhost:3002/categories')
// // //                 if (response.status === 200) {
// // //                     const data = response.data.categories[0]
// // //                     console.log("data", data)
// // //                     console.log(data.length)
// // //                     setCatagories(data)
// // //                     console.log("catagorieslist", catagorieslist)
// // //                     console.log(catagorieslist.length)

// // //                 } else {
// // //                     console.log('error')
// // //                 }
// // //             }
// // //             fetchCategory()
// // //         } catch (error) {
// // //             console.log(error)
// // //         }
// // //     }, [])
// // //     return (
// // //         <div>
// // //             <div class='flex justify-center items-center'
// // //             ><h1 class='text-2xl mt-5 font-bold text-black'>Choose AD catagory</h1></div>
// // //             <ul className="w-full mx-auto min-h-screen flex items-center gap-10">
// // //                 {catagorieslist.map((catagory) => {

// // //                     return (
// // //                     <li className="bg-gradient-to-r from-blue-500 via-purple-500
// // //                to-pink-500 p-6 h-48 border border-black justify-around flex ml-6 text-2xl w-full mx-auto bg-white rounded-xl shadow-lg items-center justify-center text-white"
// // //                onClick={() => navigate(`/add-product/${catagory.name}/${catagory.id}`)}>
// // //                         <div >{catagory.name}</div>
// // //                     </li>)
// // //                 })}



// // //             </ul>
// // //         </div>
// // //     )
// // // }

// // // export default CatagoryAd;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const CategoryAd = () => {
// //     const [categoriesList, setCategories] = useState([]);
// //     const navigate = useNavigate();

// //     useEffect(() => {
// //         const fetchCategory = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:3002/categories');
// //                 if (response.status === 200) {
// //                     const categories = response.data.categories;
// //                     console.log("Fetched Categories:", categories);
// //                     setCategories(categories);
// //                 } else {
// //                     console.log('Error fetching categories');
// //                 }
// //             } catch (error) {
// //                 console.log(error);
// //             }
// //         };
// //         fetchCategory();
// //     }, []);

// //     return (
// //         <div>
// //             <div className='flex justify-center items-center'>
// //                 <h1 className='text-2xl mt-5 font-bold text-black'>Choose AD category</h1>
// //             </div>
// //             <ul className="w-full mx-auto min-h-screen flex items-center gap-10">
// //                 {categoriesList.map((category) => (
// //                     <li
// //                         key={category.id} // Added key for uniqueness
// //                         className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 h-48 border border-black justify-around flex ml-6 text-2xl w-full mx-auto bg-white rounded-xl shadow-lg items-center justify-center text-white"
// //                         onClick={() => navigate(`/add-product/${category.name}/${category.id}`)}
// //                     >
// //                         <div>{category.name}</div>
// //                     </li>
// //                 ))}
// //             </ul>
// //         </div>
// //     );
// // };

// // export default CategoryAd;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const CategoryAd = () => {
//     const [categoriesList, setCategories] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchCategory = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3002/categories');
//                 if (response.status === 200) {
//                     const categories = response.data.categories;
//                     console.log("Fetched Categories:", categories);
//                     setCategories(categories);
//                 } else {
//                     console.log('Error fetching categories');
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchCategory();
//     }, []);

//     return (
//         <div>
//             <div className="flex justify-center items-center">
//                 <h1 className="text-2xl mt-5 font-bold text-black">Choose AD category</h1>
//             </div>
//             <ul className="w-full mx-auto min-h-screen flex items-center gap-10">
//                 {categoriesList.map((category) => (
//                     <li
//                         key={category.id}
//                         className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 h-48 border border-black justify-around flex ml-6 text-2xl w-full mx-auto bg-white rounded-xl shadow-lg items-center justify-center text-white transition-all duration-300 hover:scale-105"
//                         onClick={() => navigate(`/add-product/${category.name}/${category.id}`)}
//                     >
//                         <div>{category.name}</div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default CategoryAd;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CategoryAd = () => {
    const [categoriesList, setCategories] = useState([]);
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
            }
        };
        fetchCategory();
    }, []);

    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="text-2xl mt-5 font-bold text-black">Choose AD category</h1>
            </div>
            <ul className="w-full mx-auto min-h-screen flex items-center gap-10">
                {categoriesList.map((category) => (
                    <li
                        key={category.id}
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 h-48 border border-black justify-around flex ml-6 text-2xl w-full mx-auto bg-white rounded-xl shadow-lg items-center justify-center text-white transition-all duration-300 hover:scale-105"
                        onClick={() => navigate(`/add-product/${category.name}/${category.id}`)}
                    >
                        <div>{category.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryAd;
