import React from "react";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TopBar from "./TopBar";
import Header from "./Header";

const NavigationBar = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="flex px-4 py-4 items-center justify-between gap-2">
        <div className="flex w-2/12 items-center gap-2 cursor-pointer">
          <HiBars3 className="text-xl" />
          <p className="text-base font-semibold leading-4">
            Shop By
            <br /> Categories
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ul className="flex items-center justify-between gap-5">
            <li className="font-semibold  hover:text-primary">
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
            <li className="font-semibold">
              <NavLink className="hover:text-primary flex items-center gap-1">
                Features <MdOutlineKeyboardArrowDown />
              </NavLink>
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
            <li className="font-semibold">
              <NavLink
                to="/smartphones"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Smartphones
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary" : "hover:text-primary"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="font-semibold">
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
