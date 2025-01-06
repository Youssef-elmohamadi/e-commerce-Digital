import React,{ useState,useContext } from "react";
import { useInView } from "react-intersection-observer";
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
import "./swiper.css";
import productsApi from "../products.json";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
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
const TrendingProducts = () => {
  const [showMore, setShowMore] =useState(false);
  const handleShowMore = () => setShowMore(!showMore);
  console.log(showMore)
  const { productsApi } = useContext(ShopByCategoriesContext);
  const columns = [];
  for (let i = 0; i < productsApi.length; i += 2) {
    columns.push(productsApi.slice(i, i + 2));
  }
  return (
    
      <>
      <div className="flex items-center w-full my-8">
        <h2 className="lg:text-2xl text-base  m-0 font-bold">Trending Products</h2>
        <div className="flex-1 h-[1px] mt-1 bg-gray-500 ml-4"></div>
        <div className="justify-between gap-3 px-2 hidden xl:flex">
          <h2 className="transition-all duration-200 ease-linear text-gray-500 text-sm cursor-pointer uppercase hover:bg-primary p-1 rounded hover:text-white ">
            SmartPhones
          </h2>
          <h2 className="transition-all duration-200 ease-linear text-gray-500 text-sm cursor-pointer uppercase hover:bg-primary p-1 rounded hover:text-white ">
            Computer&Laptop
          </h2>
          <h2 className="transition-all duration-200 ease-linear text-gray-500 text-sm cursor-pointer uppercase hover:bg-primary p-1 rounded hover:text-white ">
            DigitalCameras
          </h2>
          <h2 className="transition-all duration-200 ease-linear text-gray-500 text-sm cursor-pointer uppercase hover:bg-primary p-1 rounded hover:text-white ">
            SmartWatches
          </h2>
          <h2 className="transition-all duration-200 ease-linear text-gray-500 text-sm cursor-pointer uppercase hover:bg-primary p-1 rounded hover:text-white ">
            smarttelevision
          </h2>
        </div>
        <div className=" w-48 h-11 border relative  xl:hidden rounded " onClick={()=>{handleShowMore()}}>
                  <div className="flex items-center justify-around h-full cursor-pointer text-sm text-gray-500 uppercase " >smartphone
                    <IoMdArrowDropdown size={20}/>
                  </div>
                  <div
          className={`absolute top-14 z-20 left-0 w-full border bg-white p-2 ${showMore ? 'block' : 'hidden'}`}>
                  
                  <MdArrowDropUp className="w-11 h-6 stroke-gray-500 fill-gray-500 absolute -top-4 right-2" />
                    <ul>
                      <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer ">
                        SmartPhones
                      </li>
                      <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer ">
                        Computer&Laptop
                      </li>
                      <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer ">
                        DigitalCameras
                      </li>
                      <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer ">
                        SmartWatches
                      </li>
                      <li className="border-b last:border-b-0 px-3 py-2 uppercase text-sm text-gray-500 cursor-pointer ">
                        smarttelevision
                      </li>
                    </ul>
                  </div>
                </div>
      </div>
      <div className="w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper mt-7 border"
          breakpoints={{
            0: { slidesPerView: 1 },
            1280: { slidesPerView: 2 }
          }}
        >
          {columns.map((column, columnIndex) => (
            <SwiperSlide key={columnIndex} className="w-[23%] border-l">
              <div className="flex flex-col gap-4 w-full">
                {column.map((product, productIndex) => (
                  <div className="relative group/product border-b  last:border-b-0 overflow-hidden  ">
                    <div
                      key={productIndex}
                      className="w-full min-[480px]:flex-row flex-col flex flex-wrap  rounded p-3 "
                    >
                      <div className=" max-[480px]:w-full !min-[480px]:w-1/3 xl:w-1/2 h-auto">
                        <LazyImage
                          src={product.image}
                          alt={product.title}
                          className="w-full min-[480px]:h-1/4 object-cover align-middle"
                        />
                      </div>
                      <div className="flex flex-col mt-8">
                        
                      <h2 className="text-lg mb-2">{product.title}</h2>
                      <div className="flex flex-col justify-between gap-2 py-3">
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
                      <div>
                      <div className="flex items-center gap-2">
                          <div className="group flex items-center gap-2 cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary">
                            <IoCartOutline size={20} className="text-gray-500 group-hover:text-white" /> 
                            <p className="text-base lg:text-sm text-gray-500 group-hover:text-white">Add to cart</p>
                          </div>
                          <div className="group flex items-center gap-2 cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary">
                            <GrCompare size={20} className="text-gray-500 group-hover:text-white" /> 
                          </div>
                          <div className="group flex items-center gap-2 cursor-pointer border p-2 rounded transition-all duration-200 ease-linear hover:bg-primary">
                            <LuHeart size={20} className="text-gray-500 group-hover:text-white" /> 
                          </div>
                    </div>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </>

  );
};

export default TrendingProducts;
