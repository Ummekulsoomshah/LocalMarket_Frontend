import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CatagoryAd = () => {
    const [catagorieslist, setCatagories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const fetchCategory = async () => {
                const response = await axios.get('http://localhost:3000/categories')
                if (response.status === 200) {
                    const data = response.data.categories[0]
                    console.log("data", data)
                    console.log(data.length)
                    setCatagories(data)
                    console.log("catagorieslist", catagorieslist)
                    console.log(catagorieslist.length)

                } else {
                    console.log('error')
                }
            }
            fetchCategory()
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div>
            <div class='flex justify-center items-center'
            ><h1 class='text-2xl mt-5 font-bold text-black'>Choose AD catagory</h1></div>
            <ul className="flex flex-wrap justify-center items-center gap-3 px-4 py-2">

                {catagorieslist.map((catagory) => {

                    return (
                        <div key={catagory.name} onClick={() => navigate(`/add-product/${catagory.name}/${catagory.id}`)} class="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 shadow-md">
                            <div class="w-48 h-48 rounded-full bg-white flex items-center justify-center mb-4">
                                <img class="w-full h-full rounded-full bg-cover bg-center" src={catagory.image} />
                            </div>
                            <h2 class="text-xl font-semibold text-gray-800">{catagory.name}</h2>
                        </div>
                    )
                })}



            </ul>
        </div>
    )
}

export default CatagoryAd
