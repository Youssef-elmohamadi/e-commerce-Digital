import React, { useState } from "react";

const FilterByPrice = () => {
  const [minValue, setMinValue] = useState(0); // قيمة الحد الأدنى
  const [maxValue, setMaxValue] = useState(400); // قيمة الحد الأقصى

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="w-full border   mt-2 rounded">
      <div className="bg-primary px-2 py-3 w-full rounded-t  ">
        <h2 className="font-semibold uppercase   text-white">Color</h2>
      </div>
      <div className="px-4 py-4">
        <div className="relative w-full">
          <div className="absolute top-5 transform -translate-y-1/2 h-2 bg-gray-500 rounded left-0 w-full px-3"></div>
          <div
            className="absolute top-1 transform -translate-y-1/2 h-2 bg-primary rounded mt-4   "
            style={{
              left: `${(minValue / 500) * 100}%`,
              right: `${100 - (maxValue / 500) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min={0}
            max={500}
            value={minValue}
            onChange={handleMinChange}
            className="range-slider absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-20"
          />

          {/* الشريط الثاني (الحد الأقصى) */}
          <input
            type="range"
            min={0}
            max={500}
            value={maxValue}
            onChange={handleMaxChange}
            className="range-slider absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-10"
          />
        </div>
      </div>

      <div className="flex justify-between mt-8 text-sm px-3 py-3">
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
    </div>
  );
};

export default FilterByPrice;
