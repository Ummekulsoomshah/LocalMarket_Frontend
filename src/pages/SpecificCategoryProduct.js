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
                          
                            <div  class="flex items-center justify-between ">
                                <span class="text-1xl font-bold text-gray-900 dark:text-white">Rs. {product.price}</span>
                                <button onClick={() => handleCart(product.id)} class="hover:bg-[#b0c4de] hover:rounded-full focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center text-2xl"><BsCart4 /></button>
                            </div>
                        </div>
                    </div>
                )

            })
            }

        </div>
    )
}


export default SpecificCategoryProduct
