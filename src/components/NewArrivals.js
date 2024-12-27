import React from "react";
import StarRatings from "react-star-ratings";
import { BsFillStarFill } from "react-icons/bs";
import { TbStarHalfFilled } from "react-icons/tb";
import { MdOutlineStarBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { LuHeart } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css";
import "swiper/css";

//offline products
import productsApi from "../products.json";
import ShopByCategoriesContext from "./ShopByCategoriesContext";
import ads1 from "../images/item-3.jpg";
import ads2 from "../images/item-4.jpg";
import testimonials1 from "../images/testi1.jpg";

const NewArrivals = () => {
  // const { productsApi } = useContext(ShopByCategoriesContext);

  const columns = [];

  for (let i = 0; i < productsApi.length; i += 2) {
    // Increment i by 2
    columns.push(productsApi.slice(i, i + 2)); // Push a slice of 2 items
  }

  console.log(columns);

  return (
    <div className="flex px-6 my-8 gap-4 w-full flex-wrap justify-between ">
      <div className="lg:w-1/6 w-full ">
        <div className="hidden lg:block relative group overflow-hidden mt-2">
          <div className="absolute top-0 left-[-200%] z-10 w-[200%] h-full bg-gradient-to-r from-white to-transparent opacity-30 transform scale-x-[0.5] skew-x-12 transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]"></div>
          <img src={ads1} alt="New arrival advertisement" className="w-full" />
        </div>
        {/*############# Bestsellers #############*/}
        <div className="w-full border   mt-2 rounded">
          <div className="bg-primary px-2 py-3 w-full rounded ">
            <h2 className="font-semibold uppercase  text-white">Bestsellers</h2>
          </div>
          {productsApi
            .filter((product) => product.classification === "Top Sales")
            .map((product) => (
              <div className="flex items-center gap-2 px-3 ">
                <div className="flex items-center   gap-2 w-full border-b">
                  <div className="lg:w-1/4 w-1/3 border my-2">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-3/4 flex flex-col py-2 gap-2">
                    <h3 className="font-semibold">{product.title}</h3>
                    <div className="text-primary font-semibold">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/*############# Testimonials #############*/}
        <div className="hidden lg:block relative group overflow-hidden mt-2">
          <div className="absolute top-0 left-[-200%] z-10 w-[200%] h-full bg-gradient-to-r from-white to-transparent opacity-30 transform scale-x-[0.5] skew-x-12 transition-transform duration-500 ease-in-out group-hover:translate-x-[150%]"></div>
          <img src={ads2} alt="New arrival advertisement" className="w-full" />
        </div>
        <div className="border flex flex-col gap-4 p-3 rounded mt-4">
          <div className="flex items-center gap-2  mt-2">
            <div
              className="bg-emerald-400 p-3 text-white relative 
          transition duration-1000 ease-in-out rounded 
          hover:rounded-full hover:scale-105"
            >
              <TbTruckDelivery size={30} />
            </div>
            <div>
              <h3 className="font-semibold">Free delivery</h3>
              <p className="text-sm text-gray-500">from $50</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div
              className="bg-rose-500 p-3 text-white relative 
          transition duration-1000 ease-in-out rounded 
          hover:rounded-full hover:scale-105"
            >
              <MdOutlineSupportAgent size={30} />
            </div>
            <div>
              <h3 className="font-semibold">Support 24/7</h3>
              <p className="text-sm text-gray-500">OnLine 24 hours</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div
              className="bg-yellow-400 p-3 text-white relative 
          transition duration-1000 ease-in-out rounded 
          hover:rounded-full hover:scale-105"
            >
              <GiReceiveMoney size={30} />
            </div>
            <div>
              <h3 className="font-semibold">Free Return Money</h3>
              <p className="text-sm text-gray-500">365 days</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div
              className="bg-indigo-500 p-3 text-white relative 
          transition duration-1000 ease-in-out rounded 
          hover:rounded-full hover:scale-105"
            >
              <RiSecurePaymentLine size={30} />
            </div>
            <div>
              <h3 className="font-semibold">Payment Method</h3>
              <p className="text-sm text-gray-500">Secure Payment</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div
              className="bg-blue-500 p-3 text-white relative 
          transition duration-1000 ease-in-out rounded 
          hover:rounded-full hover:scale-105"
            >
              <RiSecurePaymentFill size={30} />
            </div>
            <div>
              <h3 className="font-semibold">Get Promotion</h3>
              <p className="text-sm text-gray-500">Secure Payment</p>
            </div>
          </div>
        </div>
        <div className="w-full border   mt-2 rounded">
          <div className="bg-primary px-2 py-3 w-full rounded ">
            <h2 className="font-semibold uppercase  text-white">
              Testimonials
            </h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
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
              className="mySwiper"
            >
              <SwiperSlide className="w-full">
                <div>
                  <img
                    src={testimonials1}
                    alt="New arrival advertisement"
                    className="w-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="lg:w-4/5 w-full">
        <div className="flex items-center w-full">
          <h2 className="text-2xl  m-0 font-bold">New Arrivals</h2>
          <div className="flex-1 h-[1px] mt-1 bg-gray-500 ml-4"></div>
          <div className="justify-between gap-3 px-2 hidden lg:flex">
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
                    <div className="relative group/product overflow-hidden ">
                      <div
                        key={productIndex}
                        className="w-full border rounded p-3"
                      >
                        <div className="w-full h-[300px]">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-[350px]"
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
                        <div className="border rounded p-2 mb-1 relative group">
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
                        <div className="border rounded p-2 mb-1 relative group">
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
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
