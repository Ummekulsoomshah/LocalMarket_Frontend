import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag, BiUserCircle } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
      <div className="sticky top-0 z-50 bg-gray-700 shadow-lg transition-colors duration-300 ease-in-out">
        <div className="flex flex-wrap justify-between pt-3 pb-3 w-10/12 m-auto">
          {/* Logo */}
          <div className="logo ml-8">
          <img src="./images/logo3.jpg" alt="logo" className="w-40 h-20 object-contain" />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap text-xl font-medium uppercase text-white mt-7">
            {navbar.map((nav, index) => (
              <li className="mr-10" key={index}>
                <Link className="hover:text-white" to={nav.path}>
                  {nav.nav}
                </Link>
              </li>
            ))}
          </ul>

          
          <div className="flex items-center space-x-4 mr-8">
            {/* Search Icon */}
            <Link className="text-2xl text-white mt-3">
              <BiSearch />
            </Link>

            {/* Shopping Cart Icon */}
            <div className="relative mt-3">
              <Link className="text-2xl text-white" onClick={toggleSidebar}>
                <BiShoppingBag />
              </Link>
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </div>
            </div>

            {/* Login/Signup Icon */}
            <Link to="/SignupLogin" className="text-3xl text-white hover:text-gray-300 transition mt-2">
              <BiUserCircle />
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
