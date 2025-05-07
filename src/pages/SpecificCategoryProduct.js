import React, { useEffect, useState } from 'react'
import { BsCart4 } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SpecificCategoryProduct = () => {
    const { categId } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getCategoryProducts/${categId}`)
                if (response.status == 200) {
                    const data = await response.data.response
                    console.log(data)
                    await setProducts(data[0])
                } else {
                    console.log("error in fetching data")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    const handleCart = async (prodId) => {
        try {
            const result = await axios.post(`http://localhost:3000/addToCart/${prodId}`,{categId},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            if (result.status == 200) {
                toast.success("Product added into cart !", {
                    position: "top-right"
                  })
            } else {
                toast.error("Error into cart !", {
                    position: "top-right",
                  })
            }
        } catch (error) {
            console.log('error', error)
        }
    }
    console.log(products.length)
    if (products.length == 0) {
        return (
            <div class="flex justify-center items-center m-5 gap-3 p-4">
                <div class="mx-auto w-full max-w-lg rounded-lg border border-blue-300 p-8 shadow-lg">
                    <div class="flex animate-pulse space-x-6">
                        <div class="size-16 rounded-full bg-gray-200"></div>
                        <div class="flex-1 space-y-8 py-2">
                            <div class="h-4 rounded bg-gray-200"></div>
                            <div class="space-y-4">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-2 h-4 rounded bg-gray-200"></div>
                                    <div class="col-span-1 h-4 rounded bg-gray-200"></div>
                                </div>
                                <div class="h-4 rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-lg rounded-lg border border-blue-300 p-8 shadow-lg">
                    <div class="flex animate-pulse space-x-6">
                        <div class="size-16 rounded-full bg-gray-200"></div>
                        <div class="flex-1 space-y-8 py-2">
                            <div class="h-4 rounded bg-gray-200"></div>
                            <div class="space-y-4">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-2 h-4 rounded bg-gray-200"></div>
                                    <div class="col-span-1 h-4 rounded bg-gray-200"></div>
                                </div>
                                <div class="h-4 rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-lg rounded-lg border border-blue-300 p-8 shadow-lg">
                    <div class="flex animate-pulse space-x-6">
                        <div class="size-16 rounded-full bg-gray-200"></div>
                        <div class="flex-1 space-y-8 py-2">
                            <div class="h-4 rounded bg-gray-200"></div>
                            <div class="space-y-4">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-2 h-4 rounded bg-gray-200"></div>
                                    <div class="col-span-1 h-4 rounded bg-gray-200"></div>
                                </div>
                                <div class="h-4 rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div class='grid grid-cols-4 gap-3 m-2'>

            {products.map((product) => {
                return (
                    <div class="w-full max-w-sm bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/ProductDetails/${product.id}`}>
                            <img class=" rounded-t-lg w-full h-64 object-cover mb-3" src={product.image} alt="product image" />
                        </Link>
                        <div class="px-3 pb-3">
                            <a href="#">
                                <h5 class="text-1xl font-semibold tracking-tight text-gray-900 dark:text-white mb-1">{product.title}</h5>
                                <div class="h-8 overflow-hidden mb-4">
                                    <p class="text-sm text-gray-600">{product.description}</p>
                                </div>
                            </a>
                            {/* <div class="flex items-center mt-2.5 mb-2">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                    </div> */}
                            <button onClick={() => handleCart(product.id)} class="flex items-center justify-between ">
                                <span class="text-1xl font-bold text-gray-900 dark:text-white">Rs. {product.price}</span>
                                <p class="hover:bg-[#b0c4de] hover:rounded-full focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center text-2xl"><BsCart4 /></p>
                            </button>
                        </div>
                    </div>
                )

            })
            }

        </div>
    )
}


export default SpecificCategoryProduct;
