import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link, Links } from "react-router-dom";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import logo from "../images/logo.svg";
import { FaSearch } from "react-icons/fa";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import CartPopup from "./CartPopup";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig";

const Header = () => {
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const wishlistQuantity = useSelector((state) => state.wishList.items.length);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { categoriesApi: categories } = useContext(ShopByCategoriesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/shop?search=${encodeURIComponent(
        searchTerm
      )}&category=${encodeURIComponent(selectedCategory)}`
    );
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false); // تخزين حالة تسجيل الدخول

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
      <div className="flex items-center justify-around  gap-5 w-full  bg-[#121212]  px-3 ">
        <div className="flex items-center w-1/4 gap-2 py-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-1/3 bg-dark py-4">
          <form
            onSubmit={handleSubmit}
            className="flex relative items-center overflow-hidden w-full rounded  "
          >
            <input
              type="text"
              className="focus:outline-none p-2 w-full rounded text-sm"
              placeholder="Enter keywords to search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex">
              <div className="flex items-center gap-2 text-base text-gray-600">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="focus:outline-none text-sm text-gray-600 p-2 w-32 bg-white absolute right-24"
                >
                  <option value="" className="text-gray-600">
                    All Categories
                  </option>

                  {categories.map((category, categoryIndex) => (
                    <optgroup key={categoryIndex} label={category.name}>
                      {category.subcategories.map(
                        (subcategory, subcategoryIndex) =>
                          subcategory.subcategories ? (
                            <optgroup
                              key={subcategoryIndex}
                              label={`-- ${subcategory.name}`}
                            >
                              {subcategory.subcategories.map(
                                (subSubcategory, subSubIndex) => (
                                  <option
                                    key={subSubIndex}
                                    value={subSubcategory.name}
                                  >
                                    {subSubcategory.name}
                                  </option>
                                )
                              )}
                            </optgroup>
                          ) : (
                            <option
                              key={subcategoryIndex}
                              value={subcategory.name}
                            >
                              {subcategory.name}
                            </option>
                          )
                      )}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="flex items-center gap-2 absolute  py-1 px-2 rounded  text-white  bg-primary right-1"
              >
                <FaSearch className="text-white" />
                Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center gap-2 ">
            {isLoggedIn ? (
              <>
                <div className="group/account items-center hidden xl:flex gap-2 relative py-4">
                  <CiUser size={28} className="mx-2 text-slate-50" />
                  <Link
                    to="/profile"
                    className="text-sm text-slate-100 uppercase hover:text-primary
                  "
                  >
                    My Account
                  </Link>
                  <div className="absolute hidden group-hover/account:block z-50 top-14 p-2 rounded right-0 bg-white  w-40 h-40">
                    <ul>
                      <Link
                        to="/profile/orders"
                        className="text-sm py-2 hover:text-primary cursor-pointer"
                      >
                        Orders
                      </Link>
                      <br />
                      <Link
                        to="/profile/wishlist"
                        className="text-sm py-2 hover:text-primary cursor-pointer"
                      >
                        Wishlist
                      </Link>
                      <li
                        className="text-sm py-2 hover:text-primary cursor-pointer"
                        onClick={logoutUser}
                      >
                        sign out
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <ul className="flex items-center gap-2 py-4">
                <li className=" text-slate-50">
                  <CiUser size={26} className="ms-2 " />
                </li>
                <li className="text-sm text-slate-50">
                  <Link
                    to="/login"
                    className="hover:text-primary after:content-['/'] after:px-2 after:text-slate-50"
                  >
                    Login
                  </Link>
                </li>
                <li className="text-sm pt-10  text-slate-50">
                  <Link to="/register" className="hover:text-primary -ms-5">
                    Register
                  </Link>
                </li>
              </ul>
            )}
            <div className=" items-center hidden xl:flex gap-2 relative py-4">
              <CiHeart size={28} className="mx-2 text-slate-50" />
              <div className="w-5 h-5 bg-primary rounded-full text-white absolute text-sm top-1  right-[90px] flex items-center justify-center">
                {wishlistQuantity}
              </div>
              <p className="text-sm text-slate-50 uppercase">
                <Link to="/profile/wishlist">Wishlist</Link>-
              </p>
            </div>
            <div className="flex items-center gap-2 relative  group/cart py-4 ">
              <IoCartOutline size={28} className="mx-2 text-slate-50" />
              <div className="w-5 h-5 bg-primary rounded-full text-white absolute text-sm top-1  right-[115px] flex items-center justify-center">
                {totalQuantity}
              </div>
              <p className="text-sm text-slate-50 uppercase">My Cart-</p>
              <p className="text-sm uppercase font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </p>
              <CartPopup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
