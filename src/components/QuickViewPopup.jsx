import React, { useRef, useState } from "react";
import { GoXCircle } from "react-icons/go";
// Import Swiper React components
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StarRatings from "react-star-ratings";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
const QuickViewPopup = ({ product, onClose }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative w-4/5 h-4/5 bg-white shadow-md rounded">
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black text-white rounded-full p-1"
        >
          <GoXCircle size={30} />
        </button>

        <div className="w-full h-full flex justify-center">
          {/* عرض الصورة */}
          {/* <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-full max-h-full object-contain"
            />
          </div> */}
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="!w-1/2 h-full flex justify-center mySwiper"
          >
            <SwiperSlide className="w-full h-full">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide className="w-full h-full">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </SwiperSlide>
          </Swiper>

          <div className="w-1/2 p-5">
            <h2 className=" font-bold my-4">{product.title}</h2>
            <div className=" text-primary font-bold my-4">${product.price}</div>
            <div className="flex items-center gap-1 my-4">
              <StarRatings
                rating={product.rating}
                starDimension="17px"
                starSpacing="1px"
                starRatedColor="#fbbf24"
                numberOfStars={5}
                name="rating"
                starEmptyIcon={<MdOutlineStarBorder />}
                starHalfIcon={<TbStarHalfFilled />}
                starFullIcon={<BsFillStarFill />}
              />
            </div>
            <div className="my-4">
              {product.in_stock ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </div>
            <div className="flex items-center gap-2 my-4">
                {product.sku}
                </div>
            <p className="text-gray-600 my-4">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPopup;
