import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const AdmincatagoryAdd = () => {
    const [catagName, setCatagName] = useState('')
    const [description, setdescription] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
        const catagorydata = {
            catagName,
            description
        }
        try {
            const response = await axios.post('http://localhost:3000/admin/catagory', catagorydata)
            if (response.status == 200) {
                console.log("catagory added successfully")
            } else {
                console.log("error in adding catagory")
            }
        } catch (err) {
            console.log(err)
        }
        setCatagName('')
        setdescription('')
    }
    return (
        <div>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">

                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Add Catagory
                            </h1>
                            <form onSubmit={(e) => { submitHandler(e) }} class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="catagory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Catagory</label>
                                    <input
                                        value={catagName}
                                        onChange={(e) => { setCatagName(e.target.value) }}
                                        type="text" name="catagory" id="catagory" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input
                                        value={description}
                                        onChange={(e) => { setdescription(e.target.value) }}
                                        type="text" name="description" id="description" placeholder="abccccc" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add to Catagory List</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdmincatagoryAdd
