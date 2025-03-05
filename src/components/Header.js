import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { totalItems } = useSelector((state) => state.cart);

  return (
    <>
      <div
       className="sticky top-0 z-50 bg-red-700 shadow-lg transition-colors duration-300 ease-in-out"

      >
        <div className="flex flex-wrap justify-between pt-3 pb-3 w-10/12 m-auto">
          <div className="logo">
            {/* <img src="./images/logo_w.png" alt="logo" /> */}
          </div>
          <ul className="flex flex-wrap text-xl font-medium uppercase text-black">
            {navbar.map((nav, index) => (
              <li className="mr-5" key={index}>
                <Link className="hover:text-white" to={nav.path}>
                  {nav.nav}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap text-2xl">
            <Link className="mr-4 mt-2 text-2xl hover:text-white">
              <BiSearch />
            </Link>
            <div className="relative mt-2">
              <Link className="text-2xl  hover:text-white" onClick={toggleSidebar}>
                <BiShoppingBag />
              </Link>
              <div className="items_count">
                <span className="text-white">{totalItems}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
