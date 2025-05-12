import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag, BiUserCircle } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import img from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const navigate=useNavigate()
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalItems } = useSelector((state) => state.cart);
const handleLogout=()=>{
localStorage.setItem('token',' ')
navigate('/Login')

}
  return (
    
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out font-poppins ${
          isSticky
            ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md border-b border-gray-700"
            : "bg-gradient-to-r from-gray-800 to-gray-700 text-white"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo Text (Typography) */}
          <div className="logo">
            <h1
              className="text-4xl font-bold tracking-wide"
              style={{ fontFamily: "'Pacifico', cursive", color: "white" }}
            >
              Local Market 
            </h1>
          </div>

          {/* Navigation */}
          <ul className="flex space-x-8 text-lg font-semibold uppercase">
            {navbar.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.path}
                  className={`transform transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300`}
                >
                  {nav.nav}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
         {/* Icons Section */}
<div className="flex items-center space-x-6">
  {/* Search Icon */}
  {/* <Link className="text-2xl text-white hover:text-gray-300 transition-transform transform hover:scale-105">
    <BiSearch />
  </Link> */}

  {/* Bag Icon with Badge */}
  {/* <div className="relative">
    <Link
      onClick={toggleSidebar}
      className="text-2xl text-white hover:text-gray-300 transition-transform transform hover:scale-105"
    >
      <BiShoppingBag />
    </Link>
    <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {totalItems}
    </div>
  </div> */}

  {/* Sign in + Heart + Cart */}
  <div className="flex items-center space-x-4">
    <button
      onClick={handleLogout}
      className="text-white hover:bg-gray-600 hover:rounded-full px-3 py-2 transition"
    >
      Logout
    </button>
    
    <Link
      to="/cart"
      className="text-2xl text-white hover:text-gray-300 transition-transform transform hover:scale-105"
    >
      <BsCart4 />
    </Link>
  </div>

  {/* User Icon */}
  <Link
    to="/Login"
    className="text-3xl text-white hover:text-gray-300 transition-transform transform hover:scale-105"
  >
    <BiUserCircle />
  </Link>
</div>

      </div>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
