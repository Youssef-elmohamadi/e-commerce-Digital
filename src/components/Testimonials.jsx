import React,{ useState } from 'react'
import { useInView } from "react-intersection-observer";
import testimonials1 from "../images/testi1.jpg";
import testimonials2 from "../images/testi2.jpg";
import testimonials3 from "../images/testi3.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./testimonials.css";

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
const Testimonials = () => {
  return (
    <>
    <div className="w-full border h-[380px] mt-2 rounded">
          <div className="w-full h-[330px]  rounded ">
            <h2 className="font-semibold rounded-t bg-primary uppercase px-2 py-3  text-white">
              Testimonials
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
              <SwiperSlide className="w-full  flex-col p-3">
                <div className="rounded-full w-[100px] h-[100px] p-1 shadow-md border">
                  <img
                    src={testimonials1}
                    alt="New arrival advertisement "
                    className="w-full rounded-full"
                  />
                </div>
                <h3 className="font-semibold mt-2">John Doe</h3>
                <p className="text-sm text-gray-500">Web Developer</p>
                <FaQuoteLeft className="text-3xl self-start text-primary" />
                <p className="text-sm mt-2 text-gray-500 line-clamp-3 w-full h-16 ">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ea eos natus. lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas ea eos natus. lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quas ea eos natus.
                </p>
              </SwiperSlide>
              <SwiperSlide className="w-full  flex-col p-3">
                <div className="rounded-full w-[100px] h-[100px] p-1 shadow-md border">
                  <img
                    src={testimonials2}
                    alt="New arrival advertisement "
                    className="w-full rounded-full"
                  />
                </div>
                <h3 className="font-semibold mt-2">John Doe</h3>
                <p className="text-sm text-gray-500">Web Developer</p>
                <FaQuoteLeft className="text-3xl self-start text-primary" />
                <p className="text-sm mt-2 text-gray-500 line-clamp-3 w-full h-16 ">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ea eos natus. lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas ea eos natus. lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quas ea eos natus.
                </p>
              </SwiperSlide>
              <SwiperSlide className="w-full  flex-col p-3">
                <div className="rounded-full w-[100px] h-[100px] p-1 shadow-md border">
                  <img
                    src={testimonials3}
                    alt="New arrival advertisement "
                    className="w-full rounded-full"
                  />
                </div>
                <h3 className="font-semibold mt-2">John Doe</h3>
                <p className="text-sm text-gray-500">Web Developer</p>
                <FaQuoteLeft className="text-3xl self-start text-primary" />
                <p className="text-sm mt-2 text-gray-500 line-clamp-3 w-full h-16 ">
                  lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ea eos natus. lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quas ea eos natus. lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quas ea eos natus.
                </p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
    </>
  )
}

export default Testimonials