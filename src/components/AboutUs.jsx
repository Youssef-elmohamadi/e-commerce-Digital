import React, { useState, useContext } from "react";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "./Footer";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
const AboutAs = () => {
  const { testimonials } = useContext(ShopByCategoriesContext);
  console.log(testimonials);
  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            About Us
          </h1>
        </div>
        <h1>
          <Link to={"/"}>Home </Link>&gt; About As
        </h1>
      </div>
      <div className="flex px-8 my-8 gap-6 w-full flex-wrap justify-between">
        <div className="md:w-2/3 w-full">
          <div>
            <h1 className="text-lg my-4 font-semibold text-primary">
              Moments of Games
            </h1>
            <p className="text-black text-4xl font-bold my-4">
              It’s not just a game, <br /> it’s an infection.
            </p>
            <p className="text-gray-500 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
              Ut enim ad minim veniam
            </p>
          </div>
        </div>
        <div className="md:w-1/4 w-full">
          <div className="w-full flex justify-center">
            <img
              className="md:w-full w-1/2 h-full"
              src="./images/img-about.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex px-8 my-10 gap-6 w-full flex-wrap justify-around">
        <div className="flex md:w-2/6 lg:w-1/5 w-full px-3 py-4 border hover:bg-primary transition  rounded ">
          <div className="w-2/3">
            <img
              className="w-full h-full"
              src="./images/img-about.jpg"
              alt=""
            />
          </div>
          <div className="1/3 p-2">
            <h1 className="text-white">Worldwide Delivery</h1>
            <p className="text-white">Free Delivery with $50</p>
          </div>
        </div>
        <div className="flex md:w-2/6 lg:w-1/5 w-full px-3 py-4 border hover:bg-primary transition  rounded ">
          <div className="w-2/3 h-full">
            <img
              className="w-full h-full"
              src="./images/img-about.jpg"
              alt=""
            />
          </div>
          <div className="1/3 p-2">
            <h1>Worldwide Delivery</h1>
            <p>Free Delivery with $50</p>
          </div>
        </div>
        <div className="flex md:w-2/6 lg:w-1/5 w-full px-3 py-4 border hover:bg-primary transition  rounded ">
          <div className="w-2/3">
            <img
              className="w-full h-full"
              src="./images/img-about.jpg"
              alt=""
            />
          </div>
          <div className="1/3 p-2">
            <h1>Worldwide Delivery</h1>
            <p>Free Delivery with $50</p>
          </div>
        </div>
        <div className="flex md:w-2/6 lg:w-1/5 w-full px-3 py-4 border hover:bg-primary transition  rounded ">
          <div className="w-2/3">
            <img
              className="w-full h-full"
              src="./images/img-about.jpg"
              alt=""
            />
          </div>
          <div className="1/3 p-2">
            <h1>Worldwide Delivery</h1>
            <p>Free Delivery with $50</p>
          </div>
        </div>
      </div>
      <div className="flex px-6 py-8 my-8 gap-6 w-full flex-wrap justify-between bg-gray-100">
        <div className="md:w-1/4 w-full flex justify-center   ">
          <p className="text-4xl font-bold">
            What difference
            <br />
            when you shop
            <br />
            at Origin!
          </p>
        </div>
        <div className="md:w-2/4 w-full flex flex-wrap gap-4">
          <div className="w-full md:w-1/3">
            <h className="text-lg my-4 font-semibold text-primary">
              FULLY RESPONSIVE
            </h>
            <p className="text-gray-500 text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              blandit nisl ante.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h className="text-lg my-4 font-semibold text-primary">
              FULLY RESPONSIVE
            </h>
            <p className="text-gray-500 text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              blandit nisl ante.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h className="text-lg my-4 font-semibold text-primary">
              FULLY RESPONSIVE
            </h>
            <p className="text-gray-500 text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              blandit nisl ante.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h className="text-lg my-4 font-semibold text-primary">
              FULLY RESPONSIVE
            </h>
            <p className="text-gray-500 text-sm my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              blandit nisl ante.
            </p>
          </div>
        </div>
      </div>
      <div className="!mx-6 my-8 h-96">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          className="mySwiper !overflow-clip !overflow-y-visible overflow-x-clip "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide className="!d-block z-50 !p-6 !bg-gray-100 !rounded !rounded-tl-3xl relative !h-72 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-5 before:bg-primary before:rounded-tl-3xl ">
              <div className="w-full absolute top-9 left-4">
                <FaQuoteLeft size={40} className="text-gray-400" />
              </div>
              <div className="text-center">
                <div>
                  <div className="font-bold my-4">{testimonial.name}</div>
                  <div className="text-gray-500 text-base ">
                    {testimonial.role}
                  </div>
                </div>
                <div className="text-gray-800 text-sm my-4 ">
                  {testimonial.testimonial}
                </div>
                <div className="w-20 h-20 absolute z-50 -bottom-4 left-1/2  -translate-x-1/2">
                  <img
                    className="relative w-full h-full z-50 rounded-full"
                    src={testimonial.image_url}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default AboutAs;
