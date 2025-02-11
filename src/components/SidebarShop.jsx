import React from "react";
import FilterByColor from "./FilterByColor";
import FilterByPrice from "./FilterByPrice";
import FilterByTypes from "./FilterByTypes";
import Advertise from "./Advertise";
import ads1 from "../images/item-3.jpg";
import ManufacturerFilter from "./ManufacturerFilter";
import Compare from "./Compare";
const SidebarShop = () => {
  return (
    <>
      <div className="md:w-2/6 lg:w-1/6 w-full lg:flex-shrink-0 lg:min-w-60 ">
        <Advertise src={ads1} />
        <FilterByColor />
        <FilterByPrice />
        <ManufacturerFilter />
        <FilterByTypes />
        <Compare />
      </div>
    </>
  );
};

export default SidebarShop;
