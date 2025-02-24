import React from "react";
import { Link } from "react-router-dom";
import SidebarShop from "./SidebarShop";
import ShopProducts from "./ShopProducts";
import Footer from "./Footer";
const shop = () => {
  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            Shop
          </h1>
        </div>
        <h1>
          <Link to={"/"}>Home </Link>&gt; Shop
        </h1>
      </div>

      <div>
        <div className="flex px-6 my-8 gap-6 w-full flex-wrap justify-between ">
          <SidebarShop />
          <ShopProducts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default shop;

/*
{productsApi.map((product) => (
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
*/
