import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setShowForm }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center justify-between 
      px-6 md:px-12 lg:px-24 xl:px-32 py-3 
      text-gray-600 relative transition-all overflow-x-hidden
      ${location.pathname === "/" && "bg-white"}
      `}
    >
      <img src={assets.logo} alt="logo" className="h-15" />

      <div
        className={`
          fixed sm:static top-16 right-0
          max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:border-borderColor mt-5
          flex flex-col sm:flex-row
          items-start sm:items-center
          gap-5 sm:gap-8 md:gap-10
          max-sm:p-4 z-50 transition-all duration-300

          ${location.pathname === "/" ? "bg-white" : "bg-white"}
          ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}
        `}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} className="menu-links sm:whitespace-nowrap">
            {link.name}
          </Link>
        ))}

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center 
    gap-3 sm:gap-4 md:gap-5"
        >
          <button
            className="
      cursor-pointer 
      px-6 py-2                     
      sm:px-7 sm:py-2              
      md:px-6 md:py-2                
      lg:px-8 lg:py-2                
      border border-[#FF3E54] 
      bg-white text-[#FF3E54] 
      rounded-[5px]
      whitespace-nowrap 
      text-sm 
      transition-all
    "
            id="login-btn"
          >
            Log in
          </button>

          <button
            className="
      cursor-pointer
      px-6 py-2                    
      sm:px-7 sm:py-2               
      md:px-6 md:py-2              
      lg:px-8 lg:py-2                
      bg-[#FF3E54] text-white 
      hover:bg-[#ff5775] 
      rounded-[5px]
      whitespace-nowrap 
      text-sm sm:text-base
      transition-all
    "
            id="signup-btn"
            onClick={() => setShowForm(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img src={open ? assets.closeIcon : assets.menuIcon} alt="menu" />
      </button>
    </div>
  );
};

export default Navbar;
