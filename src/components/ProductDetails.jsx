import React, { useRef, useState, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import Bestsellers from "./Bestsellers";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/cartSlice/CartSlice";
import { addItemToWishList } from "./Redux/wishListSlice/WishListSlice";
import { addItemToCompare } from "./Redux/compareSlice/CompareSlice";
import visiblePopupContext from "./CartPopupContext";
import Footer from "./Footer";
import AddedToCartAlert from "./AddedToCartAlert";
import AddedToWishListAlert from "./AddedToWishListAlert";
import AddedToCompareAlert from "./AddedToCompareAlert";

const ProductDetails = () => {
  const { productsApi } = useContext(ShopByCategoriesContext);
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    showPopupCart,
    showPopupWishlist,
    showPopupCompare,
    visibleCart,
    visibleWishlist,
    visibleCompare,
  } = useContext(visiblePopupContext);
  const [quantity, setQuantity] = useState(1);

  const product = useMemo(
    () => productsApi.find((item) => item.id === Number(id)),
    [productsApi, id]
  );

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addItem({ item: product, quantity: Number(quantity) }));
    showPopupCart(product);
  };

  const handleAddToWishList = () => {
    dispatch(addItemToWishList(product));
    showPopupWishlist(product);
  };

  const handleAddToCompare = () => {
    dispatch(addItemToCompare(product));
    showPopupCompare(product);
  };

  return (
    <>
      {visibleCart && <AddedToCartAlert />}
      {visibleWishlist && <AddedToWishListAlert />}
      {visibleCompare && <AddedToCompareAlert />}
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <h1 className="text-xl font-bold">{product.title}</h1>
      </div>
      <div className="flex px-6 my-8 gap-6 w-full flex-wrap justify-between">
        <div className="lg:w-1/6 w-full lg:flex-shrink-0 lg:min-w-60">
          <Bestsellers />
        </div>
        <div className="lg:w-3/5 flex-grow w-full h-full">
          <div className="w-full h-full flex flex-wrap justify-center overflow-y-auto">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="lg:!w-1/2 w-full flex justify-center mySwiper !border"
            >
              <SwiperSlide key={product.id}>
                <div
                  className="flex justify-center items-center w-[90%] max-w-full h-96 bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </SwiperSlide>
            </Swiper>

            <div className="lg:!w-1/2 w-full p-5">
              <h2 className="font-bold my-4">{product.title}</h2>
              <div className="text-primary font-bold my-4">
                ${product.price.toFixed(2)}
              </div>
              <div className="my-4">
                {product.in_stock ? (
                  <span className="text-green-500">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </div>
              <div className="my-4 text-gray-600">{product.description}</div>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="px-2 py-1 text-sm border border-gray-300 rounded"
                />
                <button
                  aria-label="Add to Cart"
                  onClick={handleAddToCart}
                  className="group flex items-center cursor-pointer border p-2 rounded hover:bg-primary"
                >
                  <IoCartOutline
                    size={20}
                    className="text-gray-500 group-hover:text-white"
                  />
                  <span className="text-sm hidden md:block text-gray-500 group-hover:text-white">
                    Add to cart
                  </span>
                </button>
                <button
                  aria-label="Add to Compare"
                  onClick={handleAddToCompare}
                  className="group flex items-center cursor-pointer border p-2 rounded hover:bg-primary"
                >
                  <GrCompare
                    size={20}
                    className="text-gray-500 group-hover:text-white"
                  />
                </button>
                <button
                  aria-label="Add to WishList"
                  onClick={handleAddToWishList}
                  className="group flex items-center cursor-pointer border p-2 rounded hover:bg-primary"
                >
                  <LuHeart
                    size={20}
                    className="text-gray-500 group-hover:text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
