import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only hide if scrolling down significantly
      if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevScrollY.current = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ease-in-out bg-gray-900 bg-opacity-80 backdrop-blur-sm shadow-lg";
  const hiddenClass = "-translate-y-full";
  const visibleClass = "translate-y-0";

  const linkClasses = "relative text-gray-300 hover:text-white transition-colors duration-300 font-semibold before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-0.5 before:bg-purple-400 before:transition-all before:duration-300";

  return (
    <nav className={`${baseClasses} ${visible ? visibleClass : hiddenClass}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-400">
          GameX
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className={linkClasses}>
            Home
          </Link>
          <Link to="/products" className={linkClasses}>
            Products
          </Link>
          <Link to="/cart" className={linkClasses}>
            Cart
          </Link>
          <Link to="/account" className={linkClasses}>
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;