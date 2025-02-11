import React from "react";
import { Link } from "react-router-dom";
import SidebarShop from "./SidebarShop";
import ShopProducts from "./ShopProducts";
import Footer from "./Footer";
const shop = () => {
  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            Shop
          </h1>
        </div>
        <h1>
          <Link to={"/"}>Home </Link>&gt; Shop
        </h1>
      </div>

      <div>
        <div className="flex px-6 my-8 gap-6 w-full flex-wrap justify-between ">
          <SidebarShop />
          <ShopProducts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default shop;
