import React, { useContext } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import visiblePopupContext from "./CartPopupContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AddedToCompareAlert = () => {
  const { counter, visibleCompare, setVisibleCompare, productName } =
    useContext(visiblePopupContext);
  return (
    <>
      <div
        className={
          visibleCompare
            ? "fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-50 flex justify-center"
            : "hidden"
        }
      >
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="p-3 fixed top-0 w-3/4 min-h-40 bg-white !opacity-100 z-50"
        >
          <div className="flex justify-end p-2">
            <HiMiniXMark className="cursor-pointer" />
          </div>
          <div className="bg-green-100/100 flex justify-center items-center">
            <p className="text-base font-semibold text-gray-700 px-2 py-3">
              you added {productName} to your compare list
            </p>
          </div>
          <div className="flex justify-center gap-1 min-[500px]:gap-6 items-center flex-row max-[500px]:flex-col">
            <button
              onClick={() => setVisibleCompare(false)}
              className="bg-gray-600 text-white py-2 px-4 rounded mt-4 w-36"
            >
              Continue ({counter})
            </button>
            <button className="bg-gray-600 text-white py-2 px-4 rounded mt-4 w-36">
              <Link to="/profile/wishlist">Go to Compare</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AddedToCompareAlert;
