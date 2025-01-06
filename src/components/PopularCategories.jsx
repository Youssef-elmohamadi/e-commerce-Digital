import React,{ useState,useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { useInView } from "react-intersection-observer";
import "./swiper.css";
import "./popularCategories.css"

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
const PopularCategories = () => {
  const { popular_categories } = useContext(ShopByCategoriesContext);
  console.log(popular_categories);
  
  return (
    <div className='my-8'>
      <div className="flex-grow w-full">
        <div className="flex items-center w-full">
          <h2 className="lg:text-2xl text-base  m-0 font-bold">Popular Categories</h2>
          <div className="flex-1 h-[1px] mt-1 bg-gray-500 ml-4"></div>
        </div>
      </div>
      <div className="h-48 mt-6">
      <Swiper
              slidesPerView={1}
              spaceBetween={5}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper "
            >
              
                {popular_categories.map ((category) => (
                  <SwiperSlide className=" slide !bg-gray-200 flex flex-col rounded transition-all duration-200 ease-linear hover:!bg-gray-100  hover:border hover:border-primary ">
                    <div className="flex  items-center gap-2 px-3 ">
                    <LazyImage src={category.image} alt={category.name} className="w-full h-full" />
                    </div>
                    <h2 className="font-semibold text-base">{category.name}</h2>
                    <p className ="font-semibold text-sm text-gray-500">{category.available_devices} Devices</p>
                  </SwiperSlide>
          ))}

              
            </Swiper>
      </div>
    </div>
  )
}

export default PopularCategories