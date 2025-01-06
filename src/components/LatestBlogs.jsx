import React , { useContext, useState } from 'react'
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { useInView } from "react-intersection-observer";
import "./LatestBlog.css";

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
    
    <div className="relative h-[150px]">
   
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
const LatestBlogs = () => {
  const { blogs } = useContext(ShopByCategoriesContext);
  console.log(blogs);
  return (
    <>
    <div className="w-full border h-[450px] mt-2 rounded">
          <div className="w-full h-[380px]  rounded ">
            <h2 className="font-semibold rounded-t bg-primary uppercase px-2 py-3  text-white">
              Latest Blogs
            </h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={false}
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
                992: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper "
            >
              {blogs.filter ((blog) => blog.classification === "Trending").map((blog) => (
                
              <SwiperSlide className="w-full  flex-col p-4 !items-start !justify-start">
                <div className='w-full h-[150px]'>
                  <LazyImage
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="font-semibold text-sm py-1  ">{blog.title}</h2>
                <div className='w-full flex justify-between items-center'>
                <p className="text-sm text-gray-500 flex items-center gap-2 ">
                  <FaCalendarAlt /> {blog.published_date}
                </p>
                <p className="text-sm px-1">|</p>
                <p className="text-sm text-gray-500 flex items-center gap-1 truncate ">
                  <CiUser  className='shrink-0'/> <span className="truncate">{blog.author}</span>
                </p>
                </div>
                <p className="text-sm text-gray-500 py-2 h-auto line-clamp-5">{blog.content}</p>
              </SwiperSlide>
              ))}
              
            </Swiper>
          </div>
        </div>
    </>
  )
}

export default LatestBlogs