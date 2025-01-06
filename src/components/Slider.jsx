import React from "react";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpg";
import slider3 from "../images/slider3.jpg";
const LazyImage = ({ src, alt, className }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });

  return (
    <img
      ref={ref}
      src={inView ? src : ""}
      alt={alt}
      className={`${className} transition-opacity duration-500 ease-in-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};
const Slider = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={5}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LazyImage src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <LazyImage src={slider3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
