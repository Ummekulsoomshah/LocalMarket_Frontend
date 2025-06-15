import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const { prodId } = useParams();
    const {categId}=useParams()
    const [product, setProduct] = useState(null)
    const [similarProducts, setSimilarProducts] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getProductDetails/${prodId}`)
                if (response.status === 200) {
                    console.log('response', response.data)
                    await setProduct(response.data.details)
                    await setSimilarProducts(response.data.similarProducts)
                    console.log('poduct', product)
                } else {
                    console.log("Error fetching product details")
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct()
    }, [])
    const handleCart = async (prodId) => {
        try {
            const result = await axios.post(`http://localhost:3000/addToCart/${prodId}`, { categId },
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
    if (!product) {
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
            </div>

        )
    }
    return (
        <>

        <div class="flex md:flex-row gap-8 p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
            <div class="flex-shrink-0 w-1/2 md:w-1/2">
                <img src={product.image} alt="Fullway Tires HP108" class="rounded-lg w-full object-contain" />
            </div>

            <div class="flex flex-col w-full md:w-1/2 space-y-4">
                <h1 class="text-2xl font-semibold">{product.title}</h1>

                <div class="flex items-center text-sm text-gray-600">
                    <span class="text-yellow-500 mr-1">★★★★★</span>
                    <a href="#" class="underline hover:text-blue-600">4.84 1454 product ratings</a>
                </div>

                <div class="text-sm text-blue-600">
                    <a href="#" class="hover:underline">Priority_Tire (485676) - 99.6% positive feedback</a>
                </div>

                <div class="text-3xl font-bold text-gray-800">PKR. {product.price}</div>

                <div class="text-sm text-gray-600">
                    <p><strong>Returns:</strong> 60 days returns. Buyer pays for return shipping. If you use an localmarket shipping label, it will be deducted from your refund amount.</p>
                </div>
                <div class="text-sm">
                    {Object.entries(product.fields).map(([key, value], index) => (

                        <p><strong>{key}:</strong> {value}</p>
                    ))}
                </div>

                <div class="text-sm text-gray-700">
                    <p>{product.description}</p>
                </div>

                <a href="#" class="text-blue-600 underline text-sm hover:text-blue-800">See full description</a>

                <button onClick={() => handleCart(product.id)} class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-lg">
                    Buy It Now
                </button>
            </div>
        </div>
        <div class="max-w-6xl mx-auto align-center mt-8">
            <h2 class="text-xl font-semibold mb-4">Similar Products</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {similarProducts.map((item, index) => (
                    
                    <div key={index} class="bg-white rounded-lg shadow-md p-4">
                        <Link to={`/ProductDetails/${categId}/${item.product.id}`}>
                        <img src={item.product.image} alt={item.product.title} class="w-full h-48 object-cover rounded-t-lg mb-4" />
                        </Link>
                        <h3 class="text-lg font-semibold">{item.product.title}</h3>
                        <p class="text-gray-600">PKR. {item.product.price}</p>
                        <button onClick={() => handleCart(item.product.id)} class="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>


        </>

    )
}

export default ProductDetails