import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [isbuyer, setIsbuyer] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        bname: '',
        bemail: '',
        bpassword: ''
    })
    const navigate = useNavigate()
    const usersubmitHandler = async (e) => {
        e.preventDefault()
        const userData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: 'personal'
        }
        try {
            const response = await axios.post('http://localhost:3000/user/signup', userData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            if (response.status == 200) {
                const token = response.data.token
                localStorage.setItem('token', token)
                navigate('/')
                console.log(response.data.message)
            }

        } catch (error) {
            console.log(error)

        }

        setFormData({ ...formData, name: '', email: '', password: '' })

    }
    const bussinesssubmitHandler = async (e) => {
        e.preventDefault()
        const bussinessData = {
            name: formData.bname,
            email: formData.bemail,
            password: formData.bpassword,
            role: 'bussiness'
        }
        console.log(bussinessData)
        try {
            const response = await axios.post('http://localhost:3000/bussiness/signup', bussinessData,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            if (response.status == 200) {
                const token = response.data.token
                localStorage.setItem('token', token)
                console.log(response.data.message)
                navigate('/CatagoryAd')
            }

        } catch (error) {
            console.log(error)

        }

        setFormData({ ...formData, bname: '', bemail: '', bpassword: '' })

    }


    return (
        <div>
            <div className="flex justify-center items-center mt-5">
                <div className="relative flex bg-gray-200 rounded-2xl p-1">
                    {/* Sliding background (indicator) */}
                    <div
                        className="absolute top-1 bottom-1 bg-black rounded-2xl transition-all duration-300 ease-in-out"
                        style={{
                            width: "50%",
                            left: isbuyer ? "0%" : "50%"
                        }}
                    ></div>

                    {/* Buttons */}
                    <button
                        className={`relative z-10 w-32 py-2 mx-5 text-center font-bold transition-colors duration-300 ${isbuyer ? "text-white" : "text-black"}`}
                        onClick={() => setIsbuyer(true)}
                    >
                        Personal account
                    </button>
                    <button
                        className={`relative z-10 w-32 py-2 mx-5 text-center font-bold transition-colors duration-300 ${!isbuyer ? "text-white" : "text-black"}`}
                        onClick={() => setIsbuyer(false)}
                    >
                        Business account
                    </button>
                </div>
            </div>

            {isbuyer ? (
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">

                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign up to Personal account
                                </h1>
                                <form onSubmit={(e) => { usersubmitHandler(e) }} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                        <input
                                            required
                                            value={isbuyer?formData.name:formData.bname}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'name':'bname']:e.target.value}) }}
                                            type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user" />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input
                                            required
                                            value={isbuyer?formData.email:formData.bemail}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'email':'bemail']:e.target.value}) }}  type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            required
                                            value={isbuyer?formData.password:formData.bpassword}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'password':'bpassword']:e.target.value}) }}  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                    <button type="submit" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>) : (
                <section class="bg-gray-50 dark:bg-gray-900">
                    <div class="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">

                        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign up to Bussiness account
                                </h1>
                                <form onSubmit={(e) => { bussinesssubmitHandler(e) }} class="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Bussiness name</label>
                                        <input
                                            required
                                            value={isbuyer?formData.name:formData.bname}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'name':'bname']:e.target.value}) }} type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user" />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Business email</label>
                                        <input
                                            required
                                            value={isbuyer?formData.email:formData.bemail}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'email':'bemail']:e.target.value}) }} type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            required
                                            value={isbuyer?formData.password:formData.bpassword}
                                            onChange={(e) => { setFormData({...formData,[isbuyer? 'password':'bpassword']:e.target.value}) }} 
                                            type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                                    <button type="submit" class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>)}


        </div>
    )
}

export default Signup
