import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./Redux/compareSlice/CompareSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const Compare = () => {
  const dispatch = useDispatch();
  const compareItems = useSelector((state) => state.compare.items);
  console.log(compareItems);

  return (
    <div className="w-full border mt-2 rounded">
      <div className="bg-primary px-2 py-3 w-full rounded-t">
        <h2 className="font-semibold uppercase text-white">Compare Products</h2>
      </div>
      <div className="px-5 py-2">
        {compareItems.length === 0 ? (
          <p className="font-semibold text-gray-500 text-sm">
            You have no items to compare
          </p>
        ) : (
          compareItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-2 px-3 border-b last:border-b-0 py-2"
            >
              <h1 className="text-sm font-semibold text-black">{item.title}</h1>
              <RiDeleteBin6Line
                onClick={() => dispatch(removeItem(item.id))}
                className="cursor-pointer mt-1 text-red-500 hover:text-red-700"
              />
            </div>
          ))
        )}
        {compareItems.length > 0 && (
          <div className="flex justify-between gap-1">
            <button className="bg-primary text-white text-sm px-4 py-2 mt-4 rounded">
              Compare Now
            </button>
            <button className="bg-primary text-white text-sm px-4 py-2 mt-4 rounded">
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
