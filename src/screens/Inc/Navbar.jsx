import React, { useState, useEffect } from "react";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-5 py-5 xl:py-0 lg:py-0 md:py-0 sm:py-5 w-full z-50 transition-all duration-300
        ${sticky ? "fixed top-0 left-0 bg-[#FFFBF5] shadow-md" : "relative"}
      `}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto xl:grid xl:grid-cols-3 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 sm:block">
        
        <a className="flex items-center justify-center text-[32px] font-semibold xl:order-2 md:order-2 lg:order-2 sm:order-1">
          GLOWVY
        </a>

        {/* Right Icons */}
        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 w-fit ml-auto">
          <img
            src={heart}
            alt="heart"
            className="hidden xl:block lg:block md:block xl:w-[32px] lg:w-[32px] md:w-[32px] sm:w-[20px] xl:mr-6 lg:mr-6 md:mr-6 sm:mr-3 sm:hidden"
          />

          <img
            src={cart}
            alt="cart"
            className="xl:w-[32px] lg:w-[32px] md:w-[32px] sm:w-[20px] xl:mr-10 lg:mr-10 md:mr-10 sm:mr-3"
          />

          <button className="text-white bg-[#28af58] px-3 py-0 xl:px-8 xl:py-3 md:px-8 md:py-3 lg:px-8 lg:py-3 sm:px-3 sm:py-0 rounded-[10px] text-[14px] xl:text-[16px]">
            Sign Up
          </button>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm rounded-[8px] md:hidden bg-[#28AF58] text-[#fff] ml-1"
          >
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>

        {/* MENU ITEMS */}
        <div
          className={`items-center justify-start w-full md:flex md:w-auto md:order-1 py-5 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
            <li>
              <a href="#" className="block py-2 text-[#222] hover:text-[#000] duration-300">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-[#222] hover:text-[#000] duration-300">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 text-[#222] hover:text-[#000] duration-300">
                Brands
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
