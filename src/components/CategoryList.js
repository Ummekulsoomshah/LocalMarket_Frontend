import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const CategoryList = () => {
    const [categorieslist, setCategories] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        try {
            const fetchCategory = async () => {
                const response = await axios.get('http://localhost:3002/categories')
                if (response.status === 200) {
                    const data = response.data.categories[0]
                    console.log("data", data)
                    console.log(data.length)
                    setCategories(data)
                    console.log("categorieslist", categorieslist)
                    console.log(categorieslist.length)

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
        <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
            <h1 className="text-2xl font-bold text-black">Categories</h1>
        </div>

        <ul className="flex flex-wrap justify-center items-center gap-3 px-4 py-2">
            {categorieslist.map((category) => {
                return (
                    <li
                        key={category.name}
                        className="p-2 border cursor-pointer hover:bg-[#b0c4de] hover:border-none hover:rounded-full border-black flex justify-center items-center text-1xl bg-white rounded-xl shadow-lg text-black w-40"
                        onClick={() => navigate(`/SpecificCategoryProduct/${category.id}`)}
                    >
                        <div>{category.name}</div>
                    </li>
                );
            })}
        </ul>
    </div>
    
    )
}

export default CategoryList;
