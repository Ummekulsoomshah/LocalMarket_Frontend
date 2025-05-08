import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag, BiUserCircle } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
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
              Locale Market 
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
          <div className="flex items-center space-x-6">
            <Link className="text-2xl transform transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300">
              <BiSearch />
            </Link>

            <div className="relative">
              <Link
                onClick={toggleSidebar}
                className="text-2xl transform transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300"
              >
                <BiShoppingBag />
              </Link>
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </div>
            </div>

            <Link
              to="/SignupLogin"
              className="text-3xl transform transition-transform duration-300 hover:scale-105 text-white hover:text-gray-300"
            >
              <BiUserCircle />
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
