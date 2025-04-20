import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import img from '../assets/logo.png'
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
     
      <header>
        <nav class=" bg-white px-2 py-5 border-b border-black ">
          <div class="flex justify-between items-center gap-2">
          <img src={img} style={{ width: '150px' }} className="mr-3" alt="Flowbite Logo" />
            <div class="flex items-center justify-center" >
              <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Home</a>
              <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Trending</a>
              <a href="#" class="text-gray-800 dark:text-black hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Best seller</a>
            </div>
            <form class="border-2 border-black flex items-center  rounded-full w-96">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full flex rounded-full">
            
                <input type="text" id="simple-search" class="rounded-full bg-gray-50 text-gray-900 text-sm block w-full ps-10 p-2.5 pl-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
              <button type="submit" class="p-3 mr-3 m-1 ms-2 text-sm font-medium text-white bg-[#ffc300] rounded-full  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-orange-800">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
              </div>
            </form>
            <div class="flex items-center justify-center" >
              <Link to='/login' class="text-gray-800 dark:text-black hover:bg-[#b0c4de] hover:rounded-full focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-3 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign in</Link>
              <a href="#" class="text-gray-800 dark:text-black hover:bg-[#b0c4de] hover:rounded-full focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-3 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><FaRegHeart /></a>
              <Link to='/cart' class="text-gray-800 dark:text-black hover:bg-[#b0c4de] hover:rounded-full focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-3 mr-1 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><BsCart4 /></Link>
            </div>
          </div>
        </nav>
      </header>
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
