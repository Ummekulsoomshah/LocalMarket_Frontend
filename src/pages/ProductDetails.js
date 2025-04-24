import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { prodId } = useParams();
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/getProductDetails/${prodId}`)
                if (response.status === 200) {
                    console.log('response', response.data)
                    await setProduct(response.data)
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
        <div className='grid grid-cols-2 gap-2 w-auto-full m-10'>
            <div className="row-span-3 max-w-sm h-96 bg-gray-200 justify-center items-center border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center items-center h-full">
                    <img className="rounded-t-lg h-full object-cover" src={product.image} alt="Product" />
                </div>
            </div>

            <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Rs. {product.price}
                    </h5>
                    <p className="text-slate-600 leading-normal font-light">
                        {product.title}
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Details
                    </h5>
                    <div className=' grid grid-cols-2'>
                        {Object.entries(product.fields).map(([key, value], index) => (
                            <div class='flex gap-2 bg-gray-100 pt-2 pb-2 p-2 border rounded-lg justify-between' key={index}>
                                <p className="text-sm">{key}</p>
                                <p className="text-sm">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="p-4">
                    <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                        Description
                    </h5>
                    <p className="text-slate-600 leading-normal font-light">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
