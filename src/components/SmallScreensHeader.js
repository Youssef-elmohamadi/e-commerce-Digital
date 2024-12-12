import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../images/logo-mobile.png";
const SmallScreensHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center px-4 bg-primary py-3">
        <div>
          <HiBars3 className="text-2xl text-white " size={35} />
        </div>
        <div>
          <img src={logo} alt="Logo" width={120} />
        </div>
        <div>
          <FiShoppingBag className="text-2xl text-white " size={35} />
        </div>
      </div>
    </>
  );
};

export default SmallScreensHeader;
