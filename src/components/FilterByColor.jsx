import React from "react";

const FilterByColor = () => {
  return (
    <>
      <div className="w-full border   mt-2 rounded ">
        <div className="bg-primary px-2 py-3 w-full rounded-t  ">
          <h2 className="font-semibold uppercase   text-white">Color</h2>
        </div>
        <div className="flex items-center justify-center gap-2 px-3 py-2 ">
          <div className="w-7 h-7 rounded bg-primary"></div>
          <div className="w-7 h-7 rounded bg-green-600"></div>
          <div className="w-7 h-7 rounded bg-black"></div>
          <div className="w-7 h-7 rounded bg-orange-500"></div>
          <div className="w-7 h-7 rounded bg-teal-500"></div>
        </div>
      </div>
    </>
  );
};

export default FilterByColor;
