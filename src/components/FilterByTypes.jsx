import React from "react";
import { useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
const FilterByTypes = () => {
  const { productsApi } = useContext(ShopByCategoriesContext);
  const categoryCounts = productsApi.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.keys(categoryCounts);

  return (
    <>
      <div className="w-full border   mt-2 rounded">
        <div className="bg-primary px-2 py-3 w-full rounded-t  ">
          <h2 className="font-semibold uppercase   text-white">
            Product Types
          </h2>
        </div>
        <div className="px-5 py-2 ">
          {categories.map((category) => (
            <h3 className="font-semibold text-gray-500 text-sm">
              {category} ({categoryCounts[category]})
            </h3>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterByTypes;
