import React from "react";
import { useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
const ManufacturerFilter = () => {
  const { productsApi } = useContext(ShopByCategoriesContext);
  const manufacturerCounts = productsApi.reduce((acc, product) => {
    acc[product.manufacturer] = (acc[product.manufacturer] || 0) + 1;
    return acc;
  }, {});
  const manufacturers = Object.keys(manufacturerCounts);

  return (
    <>
      <div className="w-full border   mt-2 rounded">
        <div className="bg-primary px-2 py-3 w-full rounded-t  ">
          <h2 className="font-semibold uppercase   text-white">
          Manufacturer
          </h2>
        </div>
        <div className="px-5 py-2 ">
          {manufacturers.map((manufacturer) => (
            <h3 className="font-semibold text-gray-500 text-sm">
              {manufacturer} ({manufacturerCounts[manufacturer]})
            </h3>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManufacturerFilter;
