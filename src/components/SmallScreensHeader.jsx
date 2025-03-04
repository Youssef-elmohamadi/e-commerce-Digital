import React, { useState, useEffect, useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { HiBars3 } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../images/logo-mobile.png";
import franceFlag from "../images/france.png";
import britainFlag from "../images/britain.png";
import spainFlag from "../images/spain.png";
import italyFlag from "../images/italy.png";
import germanFlag from "../images/germen.png";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CartPopup from "./CartPopup";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";
const SmallScreensHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [showMoreComputers, setShowMoreComputers] = useState(false);
  const { CategoriesData: categories, categoriesApi } = useContext(
    ShopByCategoriesContext
  );
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the click is outside the sidebar or cart
      if (
        !e.target.closest("#mobile-menu") &&
        !e.target.closest("#cart-popup") &&
        !e.target.closest(".cart-button")
      ) {
        setShowSideBar(false);
        setShowCart(false);
      }
    };

    if (showSideBar || showCart) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showSideBar, showCart]);

  const toggleMoreFeatures = () => {
    setShowMoreFeatures((prev) => !prev);
  };
  const toggleMoreComputers = () => {
    setShowMoreComputers((prev) => !prev);
  };

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the window
    setShowSideBar((prev) => !prev);
  };

  const handleTabClick = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? tabName : tabName)); // Toggle the active tab
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
  };
  useEffect(() => {
    // مراقبة حالة تسجيل الدخول
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsLoggedIn(!!currentUser); // إذا كان هناك مستخدم: true، وإلا: false
    });
  }, []);
  const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log("تم تسجيل الخروج بنجاح!");
    } catch (error) {
      console.error("خطأ في تسجيل الخروج:", error.message);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center px-4 bg-primary py-3">
        <button
          onClick={toggleMenu}
          aria-expanded={showSideBar}
          aria-controls="mobile-menu"
        >
          <HiBars3 className="text-2xl text-white" size={35} />
        </button>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
        <div className="flex items-center gap-2 relative">
          <FiShoppingBag
            className="text-2xl text-white cart-button"
            size={35}
            onClick={toggleCart}
          />
          <span className="text-white font-semibold bg-red-400 px-2 py-1 rounded">
            {useSelector((state) => state.cart.totalQuantity)}
          </span>
          {showCart && <CartPopup id="cart-popup" />}
        </div>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center bg-gray-200 px-4 py-1 relative"
      >
        <input
          type="text"
          className="w-full border outline-none px-2 py-2 rounded"
          placeholder="Search entry Store here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-5 top-1/2 transform -translate-y-1/2"
        >
          <FaSearch size={20} />
        </button>
      </form>

      {/* Menu */}
      {showSideBar && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ x: "-100%" }}
          id="mobile-menu"
          className="fixed top-0 px-4 left-0 h-screen py-5 bg-white z-50 w-[280px] overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside it
        >
          <nav className="flex gap-4 border-b border-gray-300">
            <h3
              className={`py-4 cursor-pointer font-semibold uppercase text-sm  ${
                activeTab === "menu"
                  ? "border-b border-black font-semibold uppercase text-sm "
                  : ""
              }`}
              onClick={() => handleTabClick("menu")}
            >
              Menu
            </h3>
            <h3
              className={` py-4 cursor-pointer font-semibold uppercase text-sm  ${
                activeTab === "account"
                  ? "border-b border-black font-semibold uppercase text-sm "
                  : ""
              }`}
              onClick={() => handleTabClick("account")}
            >
              Account
            </h3>
            <h3
              className={` py-4 cursor-pointer font-semibold uppercase text-sm   ${
                activeTab === "setting"
                  ? "border-b border-black font-semibold uppercase text-sm "
                  : ""
              }`}
              onClick={() => handleTabClick("setting")}
            >
              Setting
            </h3>
          </nav>
          {/*Menu content*/}
          {activeTab === "menu" && (
            <div>
              <ul>
                <li className="py-1 hover:text-primary">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary text-sm flex items-center  uppercase"
                        : "hover:text-primary text-sm flex items-center uppercase"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative">
                  <NavLink
                    className={
                      "hover:text-primary text-sm flex items-center uppercase"
                    }
                  >
                    Features
                    <span
                      className="ml-auto text-sm text-gray-500  group-hover/list:text-white group-hover/list:bg-primary"
                      onClick={() => toggleMoreFeatures()}
                    >
                      {showMoreFeatures ? (
                        <MdOutlineKeyboardArrowDown size={20} />
                      ) : (
                        <MdOutlineKeyboardArrowUp size={20} />
                      )}
                    </span>
                  </NavLink>
                  <motion.div
                    initial={{ y: -50 }}
                    animate={{
                      y: 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={
                      showMoreFeatures ? " bg-white block" : " bg-white hidden "
                    }
                  >
                    <div className="flex flex-col  ">
                      <div className="flex flex-col py-1 ">
                        <h2 className="text-sm font-semibold">Layouts</h2>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Home Layout 1
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Boxed Layout
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Right To Left
                        </Link>
                      </div>
                      <div className="flex flex-col py-1">
                        <h2 className="text-sm font-semibold">
                          Detail Layouts
                        </h2>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Product Detail - Full
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Product Detail - Left Sidebar
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Product Detail - Right Sidebar
                        </Link>
                      </div>
                      <div className="flex flex-col py-1">
                        <h2 className="text-sm font-semibold">
                          Listing Layouts
                        </h2>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Without Sidebar
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Lift Sidebar
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Right Sidebar
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Right-Left Sidebar
                        </Link>
                      </div>
                      <div className="flex flex-col py-1">
                        <h2 className="text-sm font-semibold">Tab Types</h2>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Vertical
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Horizontal
                        </Link>
                        <Link className="text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                          Accordion
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </li>
                <li className="py-1 hover:text-primary">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary text-sm flex items-center uppercase"
                        : "hover:text-primary text-sm flex items-center uppercase"
                    }
                  >
                    Shop
                  </NavLink>
                </li>

                <li className="py-1 hover:text-primary">
                  <NavLink
                    to="/blogs"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary text-sm flex items-center uppercase"
                        : "hover:text-primary text-sm flex items-center uppercase"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="py-1 hover:text-primary">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary text-sm flex items-center uppercase"
                        : "hover:text-primary text-sm flex items-center uppercase"
                    }
                  >
                    AboutUs
                  </NavLink>
                </li>
                <li className="py-1  hover:text-primary">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary flex items-center uppercase"
                        : "hover:text-primary flex items-center uppercase"
                    }
                  >
                    ContactUs
                  </NavLink>
                </li>
                {categories.map((category) => (
                  <li key={category.name} className=" py-1 ">
                    <NavLink className="hover:text-primary flex gap-2 text-sm items-center uppercase">
                      {category.icon}
                      {category.name}
                      {category.name === "Cameras & Photo" && (
                        <span
                          className="cursor-pointer ml-auto text-sm text-gray-500 "
                          onClick={() => toggleMoreComputers()}
                        >
                          {showMoreComputers ? (
                            <MdOutlineKeyboardArrowDown size={20} />
                          ) : (
                            <MdOutlineKeyboardArrowUp size={20} />
                          )}
                        </span>
                      )}
                    </NavLink>
                    {showMoreComputers &&
                      category.name === "Cameras & Photo" && (
                        <div
                          className={
                            showMoreComputers
                              ? " bg-white block pt-1"
                              : " bg-white hidden "
                          }
                        >
                          {categoriesApi.map((category) => (
                            <>
                              <h2>{category.name}</h2>
                              {category.subcategories.map((subcategory) => (
                                <>
                                  <Link className="flex flex-col text-sm text-gray-500 font-normal hover:text-primary py-1 ">
                                    {subcategory.name}
                                  </Link>
                                </>
                              ))}
                            </>
                          ))}
                        </div>
                      )}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "account" && (
            <>
              <div>
                <ul>
                  {isLoggedIn ? (
                    <>
                      <li className="py-1">
                        <Link
                          to="/profile"
                          className="text-sm text-black uppercase hover:text-primary
                                        "
                        >
                          My Account
                        </Link>
                      </li>
                      <li
                        className="text-sm py-2 hover:text-primary cursor-pointer"
                        onClick={logoutUser}
                      >
                        Sign Out
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="py-1">
                        <Link
                          to="/login"
                          className="hover:text-primary py-1   text-sm flex items-center uppercase"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="hover:text-primary py-1 text-sm flex items-center uppercase"
                        >
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </>
          )}
          {activeTab === "setting" && (
            <div>
              <ul className="py-2">
                <h2 className="text-sm font-semibold">Language</h2>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <img src={britainFlag} alt="" className="w-4" />
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    English
                  </Link>
                </li>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <img src={germanFlag} alt="" className="w-4" />
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    German
                  </Link>
                </li>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <img src={italyFlag} alt="" className="w-4" />
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    Italian
                  </Link>
                </li>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <img src={franceFlag} alt="" className="w-4" />
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    French
                  </Link>
                </li>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <img src={spainFlag} alt="" className="w-4" />
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    Spanish
                  </Link>
                </li>
              </ul>
              <ul className="">
                <h2 className="text-sm font-semibold">Currency</h2>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    EUR - Euro
                  </Link>
                </li>
                <li className="group/language py-1 flex items-center gap-2 ">
                  <Link className="group-hover/language:text-primary uppercase text-sm font-semibold text-gray-500">
                    USD
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default SmallScreensHeader;
