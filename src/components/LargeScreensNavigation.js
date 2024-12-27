import React, { useState, useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { NavLink, Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TopBar from "./TopBar";
import Header from "./Header";
import { RiArrowDropRightLine } from "react-icons/ri";
const NavigationBar = () => {
  const { CategoriesData: categories, categoriesApi } = useContext(
    ShopByCategoriesContext
  );
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  return (
    <>
      <TopBar />
      <Header />
      <div className="flex px-4 items-center justify-between gap-2">
        <div className="flex w-2/12 items-center gap-2 py-4 cursor-pointer relative group/item">
          <HiBars3 className="text-xl" size={32} />
          <p className="text-base font-semibold leading-4">
            Shop By
            <br /> Categories
          </p>
          <div className="absolute top-[63px]  border-t left-0 w-80 z-50  group-hover/item:block hidden bg-white shadow-lg rounded">
            {categories
              .slice(0, categories.length - 3)
              .map((category, index) => {
                if (category.name === "Cameras & Photo") {
                  return (
                    <div
                      key={index}
                      className="w-full py-2 px-4  group/list relative  flex items-center gap-2 text-gray-500 hover:bg-primary hover:text-white"
                    >
                      {category.icon}
                      {category.name}

                      <span className="ml-auto text-sm text-gray-500  group-hover/list:text-white group-hover/list:bg-primary">
                        <RiArrowDropRightLine size={20} />
                      </span>
                      <div className="absolute w-[700px] py-4 px-4 border -top-[200px] left-80 z-50 hidden group-hover/list:block bg-white shadow-lg rounded">
                        {categoriesApi.map((category, index) => {
                          if (category.name === "Computer & Laptop") {
                            const columns = [[], []];
                            category.subcategories.forEach((subCategory, i) => {
                              columns[i % 2].push(subCategory);
                            });
                            return (
                              <div className="flex gap-4">
                                {columns.map((column, colIndex) => (
                                  <div key={colIndex} className="w-1/3">
                                    {column.map((subCategory, subIndex) => (
                                      <div key={subIndex} className="mb-4">
                                        <h2 className="text-black">
                                          {subCategory.name}
                                        </h2>
                                        {subCategory.subcategories &&
                                          subCategory.subcategories.map(
                                            (subSubCategory, subSubIndex) => (
                                              <div
                                                key={subSubIndex}
                                                className="text-gray-600"
                                              >
                                                {subSubCategory.name}
                                              </div>
                                            )
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="w-full py-2 px-4 flex items-center gap-2 text-gray-500 hover:bg-primary hover:text-white"
                    >
                      {category.icon}
                      {category.name}
                    </div>
                  );
                }
              })}

            <div
              className="w-full"
              onClick={() => setShowMoreCategories(!showMoreCategories)}
            >
              {showMoreCategories && (
                <div className="">
                  {categories
                    .slice(categories.length - 3)
                    .map((category, index) => (
                      <div
                        key={index}
                        className="w-full py-2 px-4 flex items-center gap-2 text-gray-500 hover:bg-primary hover:text-white"
                      >
                        {category.icon}
                        {category.name}
                      </div>
                    ))}
                </div>
              )}
              {showMoreCategories ? (
                <div className="flex justify-between py-2 px-4 items-center gap-2">
                  Close Menu
                  <CiSquareMinus size={23} />
                </div>
              ) : (
                <div className="flex justify-between  py-2 px-4 items-center border-t gap-2">
                  Show More
                  <CiSquarePlus size={23} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center   ">
          <ul className="flex items-center justify-between gap-8">
            <li className="font-semibold   py-4 hover:text-primary">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-primary flex items-center gap-2"
                    : "hover:text-primary flex items-center gap-2"
                }
              >
                <FaHome />
                Home
              </NavLink>
            </li>
            <li className="font-semibold relative py-4 group">
              <NavLink className="hover:text-primary flex items-center gap-1">
                Features <MdOutlineKeyboardArrowDown />
              </NavLink>
              <div className="absolute hidden  p-6 gap-20 border-t bg-white shadow-lg group-hover:flex min-w-[600px] top-[60px] -left-10 z-50">
                <div className=" flex flex-col justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-sm">Layouts</h2>
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
                  <div className="flex flex-col">
                    <h2 className="text-sm">Detail Layouts</h2>
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
                </div>
                <div className=" flex flex-col justify-between gap-y-5">
                  <div className="flex flex-col">
                    <h2 className="text-sm">Listing Layouts</h2>
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
                  <div className="flex flex-col">
                    <h2 className="text-sm">Tab Types</h2>
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
              </div>
            </li>

            <li className="font-semibold">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="font-semibold py-4">
              <NavLink
                to="/smartphones"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Smartphones
              </NavLink>
            </li>
            <li className="font-semibold py-4">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="font-semibold py-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="font-semibold py-4">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
