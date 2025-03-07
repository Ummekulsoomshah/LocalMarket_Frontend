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
                const response = await axios.get('http://localhost:3000/bussiness/categories')
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
            <ul className="w-full mx-auto min-h-screen flex items-center gap-10">
                {catagorieslist.map((catagory) => {

                    return (
                    <li className="bg-gradient-to-r from-blue-500 via-purple-500
               to-pink-500 p-6 h-48 border border-black justify-around flex ml-6 text-2xl w-full mx-auto bg-white rounded-xl shadow-lg items-center justify-center text-white"
               onClick={() => navigate(`/add-product/${catagory.name}`)}>
                        <div >{catagory.name}</div>
                    </li>)
                })}



            </ul>
        </div>
    )
}

export default CatagoryAd
