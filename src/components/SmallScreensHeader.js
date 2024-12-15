import React, { useState, useEffect } from "react";
import { HiBars3 } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../images/logo-mobile.png";
import { FaSearch } from "react-icons/fa";
import { motion } from "motion/react";

const SmallScreensHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleOutsideClick = () => {
      setShowMenu(false);
    };

    if (showMenu) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the window
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 bg-primary py-3">
        <button
          onClick={toggleMenu}
          aria-expanded={showMenu}
          aria-controls="mobile-menu"
        >
          <HiBars3 className="text-2xl text-white" size={35} />
        </button>
        <div>
          <img src={logo} alt="Logo" width={120} />
        </div>
        <div>
          <FiShoppingBag className="text-2xl text-white" size={35} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center bg-gray-200 px-4 py-1 relative">
        <input
          type="text"
          className="w-full border outline-none px-2 py-2 rounded"
          placeholder="Search entry Store here..."
        />
        <FaSearch className="absolute right-4 text-gray-500" />
      </div>

      {/* Menu */}
      {showMenu && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ x: "-100%" }}
          id="mobile-menu"
          className="fixed top-0 left-0 h-screen bg-slate-400 z-50 w-1/2"
          onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside it
        >
          <h1 className="p-4 text-white">Small Screens Header</h1>
        </motion.div>
      )}
    </>
  );
};

export default SmallScreensHeader;
