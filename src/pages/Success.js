import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const Success = () => {
  useEffect(() => {
    const token=localStorage.getItem('token')
    const postSuccess = async () => {

      try {
        const result = await axios.post('http://localhost:3000/completeOrder',{token},
          {
            headers: {
              "Content-Type": "application/json",
              "authorization": `Bearer ${localStorage.getItem('token')}`
            }
          }
        )
        if (result.status == 200) {
          toast.success("Order Placed successfully", {
            position: "top-right",
          })
        } else {
          toast.error("Order could not Placed successfully", {
            position: "top-right",
          })
        }
      } catch (err) {
        console.log(err)
      }
    }
    postSuccess()
  })
  return (
    <div class='flex justify-center items-center m-50 pt-50'>

      <div class="max-w-sm p-6 justify-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Thankyou for shopping</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Continue Shopping</p>
        <Link to='/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-[#ffc300]">
          Go to Home
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>


  )
}

export default Success
