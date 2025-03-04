import React, { useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./Redux/wishListSlice/WishListSlice";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { addItem } from "./Redux/cartSlice/CartSlice";
import visiblePopupContext from "./CartPopupContext";
import { addItemToCompare } from "./Redux/compareSlice/CompareSlice";
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { FiEye } from "react-icons/fi";
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
const WishList = () => {
  const { showPopupCart, showPopupWishlist, visibleCart, visibleWishlist } =
    useContext(visiblePopupContext);
  const [quantity, setQuantity] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  const handleAddToCart = (product) => {
    dispatch(addItem({ item: product, quantity: Number(quantity) }));
    showPopupCart(product);
  };
  const handleAddToCompare = (product) => {
    dispatch(addItemToCompare(product));
  };
  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    console.log(product);
    showPopupCart(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };
  const handleRemoveFromWishList = (id) => {
    dispatch(removeItem(id));
    
  };
  return (
    <>

      <div className="md:w-3/6 lg:w-4/6 flex-grow w-full">
        <div className="flex flex-wrap gap-4 justify-start w-full">
          {wishList.items.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[48%] lg:w-[31%] xl:w-[22%]  relative group/product overflow-hidden  border rounded p-3"
            >
              <div className="w-5/6 md:w-full h-[300px]">
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
              <div onClick={() => handleRemoveFromWishList(product.id)}>
                <button className="uppercase bg-gray-400 w-full text-sm text-white py-2 rounded mt-4 hover:bg-gray-600 transition-all duration-300 ease-in-out">
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WishList;
