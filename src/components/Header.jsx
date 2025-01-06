import React, { useState, useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import logo from "../images/logo.svg";
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("All Categories");
  function handleSearch(item) {
    setSearchTerm(item);
  }
  const { categoriesApi: categories } = useContext(ShopByCategoriesContext);
  return (
    <>
      <div className="flex items-center justify-around  gap-5 w-full  bg-[#121212] py-4 px-3 ">
        <div className="flex items-center w-1/4 gap-2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="w-1/3 bg-dark">
          <form className="flex relative items-center overflow-hidden w-full rounded  ">
            <input
              type="text"
              className="focus:outline-none p-2 w-full rounded text-sm"
              placeholder="Enter keywords to search..."
            />
            <div className="flex">
              <div className="flex items-center gap-2 text-base text-gray-600">
                <select className="focus:outline-none text-sm text-gray-600 p-2 w-32 bg-white absolute right-24">
                  <option value="" className="text-gray-600">
                    {searchTerm}
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
              <button className="flex items-center gap-2 absolute  py-1 px-2 rounded  text-white  bg-primary right-1">
                <FaSearch className="text-white" />
                Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-2">
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
            <div className=" items-center hidden xl:flex gap-2 relative">
              <CiHeart size={28} className="mx-2 text-slate-50" />
              <div className="w-5 h-5 bg-primary rounded-full text-white absolute text-sm -top-2  right-[90px] flex items-center justify-center">
                0
              </div>
              <p className="text-sm text-slate-50 uppercase">My Wishlist</p>
            </div>
            <div className="flex items-center gap-2 relative">
              <IoCartOutline size={28} className="mx-2 text-slate-50" />
              <div className="w-5 h-5 bg-primary rounded-full text-white absolute text-sm -top-2  right-[110px] flex items-center justify-center">
                0
              </div>
              <p className="text-sm text-slate-50 uppercase">My Cart-</p>
              <p className="text-sm uppercase font-bold text-primary">$00.0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
