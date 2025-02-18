import React, { useState, useContext } from "react";
import StarRatings from "react-star-ratings";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useInView } from "react-intersection-observer";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import QuickViewPopup from "./QuickViewPopup";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice/CartSlice";
import visiblePopupContext from "./CartPopupContext";
import AddedToCartAlert from "./AddedToCartAlert";
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
    <div className="relative h-[300px]">
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

const FeaturedProducts = () => {
  const { showPopup, visible } = useContext(visiblePopupContext);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => setShowMore(!showMore);
  const { productsApi } = useContext(ShopByCategoriesContext);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    showPopup(product);
  };

  const columns = [];
  for (let i = 0; i < productsApi.length; i += 2) {
    columns.push(productsApi.slice(i, i + 2));
  }

  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    console.log(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <>
      {visible && <AddedToCartAlert />}
      <div className="my-8">
        <div className="flex items-center w-full ">
          <h2 className="lg:text-2xl text-base m-0 font-bold">
            Featured Products
          </h2>
          <div className="flex-1 h-[1px] mt-1 bg-gray-500 ml-4"></div>
          <div
            className="w-48 h-11 border relative xl:hidden rounded"
            onClick={handleShowMore}
          >
            <div className="flex items-center justify-around h-full cursor-pointer text-sm text-gray-500 uppercase">
              Smartphone
              <IoMdArrowDropdown size={20} />
            </div>
            <div
              className={`absolute top-14 z-20 left-0 w-full border bg-white p-2 ${
                showMore ? "block" : "hidden"
              }`}
            >
              <MdArrowDropUp className="w-11 h-6 stroke-gray-500 fill-gray-500 absolute -top-4 right-2" />
              <ul>
                <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer">
                  SmartPhones
                </li>
                <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer">
                  Computer&Laptop
                </li>
                <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer">
                  DigitalCameras
                </li>
                <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer">
                  SmartWatches
                </li>
                <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer">
                  SmartTelevision
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="mySwiper mt-7"
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {columns.map((column, columnIndex) => (
              <SwiperSlide key={columnIndex} className="w-[23%]">
                <div className="flex flex-col gap-4 w-full">
                  {column.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="relative group/product overflow-hidden"
                    >
                      <div className="w-full border rounded p-3">
                        <div className="w-full h-[300px]">
                          <LazyImage
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="text-lg mb-2">{product.title}</h2>
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

                        <div className="border rounded p-2 mb-1 relative group">
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
                        <div
                          onClick={() => handleQuickView(product)}
                          className="border rounded p-2 mb-1 relative group"
                        >
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
              </SwiperSlide>
            ))}
          </Swiper>
          {quickViewProduct && (
            <QuickViewPopup
              product={quickViewProduct}
              onClose={handleCloseQuickView}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
