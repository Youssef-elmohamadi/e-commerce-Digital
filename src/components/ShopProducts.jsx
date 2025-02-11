import React, { useState, useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import StarRatings from "react-star-ratings";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice/CartSlice";
import visiblePopupContext from "./CartPopupContext";
import { addItemToCompare } from "./Redux/compareSlice/CompareSlice";

const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="spinner border-4 border-gray-300 border-t-4 border-t-primary rounded-full w-10 h-10 animate-spin"></div>
        </div>
      )}

      <img
        ref={ref}
        src={inView ? src : ""}
        alt={alt}
        className={`${className} transition-opacity duration-500 ease-in-out ${
          inView && !isLoading ? "opacity-100" : "opacity-0"
        }`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
const ShopProducts = () => {
  const { productsApi } = useContext(ShopByCategoriesContext);
  const { showPopup, visible } = useContext(visiblePopupContext);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    showPopup(product);
  };
  const handleAddToCompare = (product) => {
    dispatch(addItemToCompare(product));
  };
  return (
    <>
      <div className="md:w-3/6 lg:w-4/6 flex-grow w-full">
        <div className="flex items-center w-full my-6">
          <h2 className="lg:text-2xl text-base m-0 font-bold">Shopping Now</h2>
          <div className="flex-1 h-[1px] mt-4 bg-gray-500 ml-4 "></div>
        </div>
        <div className="flex flex-wrap gap-4 justify-between w-full">
          {productsApi.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[48%] lg:w-[31%] xl:w-[22%] relative group/product overflow-hidden  border rounded p-3"
            >
              <div className="w-full h-[300px]">
                <LazyImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <h2 className="text-sm font-semibold mb-2 text-black">
                {product.title}
              </h2>
              <div className="flex justify-between items-center gap-2 border-t py-3">
                <span className="text-primary font-semibold">
                  ${product.price}
                </span>
                <div className="flex items-center gap-1">
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
              </div>
              <div className="absolute top-20   -left-12  group-hover/product:left-3 transition-all duration-500 ease-in-out  flex-col items-center ">
                <div
                  onClick={() => handleAddToCart(product)}
                  className="border rounded p-2 mb-1 relative group"
                >
                  <IoCartOutline
                    className="text-gray-500 font-semibold group-hover:text-white  z-30 relative"
                    size={21}
                  />
                  <span className="bg-primary pl-4 py-1 top-0 left-0 h-full  -translate-x-16 group-hover:translate-x-0 text-sm text-white  w-32 flex scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out items-center justify-center rounded font-semibold absolute">
                    Add To Cart
                  </span>
                </div>

                <div
                  onClick={() => handleAddToCompare(product)}
                  className="border rounded p-2 mb-1 relative group"
                >
                  <GrCompare
                    className="text-gray-500 font-semibold group-hover:text-white  z-30 relative"
                    size={21}
                  />
                  <span className="bg-primary pl-6 pr-0 py-1 top-0 left-0 h-full  -translate-x-[82px] group-hover:translate-x-0 text-sm text-white  w-40 flex scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out items-center justify-center rounded font-semibold absolute">
                    Add To Compare
                  </span>
                </div>
                <div className="border rounded p-2 mb-1 relative hover:bg-primary transition-all duration-700 ease-in-out group">
                  <LuHeart
                    className="text-gray-500 font-semibold group-hover:text-white  z-30 relative"
                    size={21}
                  />
                  <span className="bg-primary pl-3 pr-0 py-1 top-0 left-0 h-full  -translate-x-[82px] group-hover:translate-x-0 text-sm text-white  w-40 flex scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out items-center justify-center rounded font-semibold absolute">
                    Add To Wish List
                  </span>
                </div>
                <div className="border rounded p-2 mb-1 relative group">
                  <FiEye
                    className="text-gray-500 font-semibold group-hover:text-white transition-all duration-700 ease-in-out  z-30 relative"
                    size={21}
                  />
                  <span className="bg-primary pl-4 py-1 top-0 left-0 h-full  -translate-x-16 group-hover:translate-x-0 text-sm text-white  w-32 flex scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out items-center justify-center rounded font-semibold absolute">
                    Quick View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopProducts;
