import React, { useRef, useState, useContext } from "react";
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
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import visiblePopupContext from "./CartPopupContext";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice/CartSlice";
const QuickViewPopup = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const { showPopup, visible } = useContext(visiblePopupContext);
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (product) => {
    dispatch(addItem({ item: product, quantity: Number(quantity) }));
    showPopup(product);
  };
  return (
    <div className="w-full h-full fixed top-0 left-0 z-40 bg-black bg-opacity-50 flex justify-center items-center ">
      <div className="relative w-4/5 h-4/5 bg-white shadow-md rounded py-6 ">
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-black text-white rounded-full p-1 z-50"
        >
          <GoXCircle size={30} />
        </button>

        <div className="w-full h-full flex flex-wrap justify-center overflow-y-auto">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="lg:!w-1/2 w-full flex justify-center mySwiper !border "
          >
            <SwiperSlide>
  <div
    className="flex justify-center items-center w-[90%] max-w-full  h-full"
    style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
  </div>
</SwiperSlide>
            <SwiperSlide>
  <div
    className="flex justify-center items-center w-[90%] max-w-full  h-full"
    style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
  </div>
</SwiperSlide>
          </Swiper>

          <div className="lg:!w-1/2 w-full p-5">
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
            <div className="flex items-center my-4">{product.sku}</div>
            <p className="text-gray-600 my-4">{product.description}</p>
            <div className="flex items-center gap-1">
              <div>
                <span className="text-sm text-black font-semibold mr-2">
                  qty
                </span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="px-2 py-1 text-sm border border-gray-300 rounded"
                />
              </div>
              <div
                onClick={() => handleAddToCart(product)}
                className="group flex items-center cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary"
              >
                <IoCartOutline
                  size={20}
                  className="text-gray-500 group-hover:text-white"
                />
                <p className="text-sm hidden md:block text-gray-500 group-hover:text-white">
                  Add to cart
                </p>
              </div>
              <div className="group flex items-center cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary">
                <GrCompare
                  size={20}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
              <div className="group flex items-center cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary">
                <LuHeart
                  size={20}
                  className="text-gray-500 group-hover:text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewPopup;
