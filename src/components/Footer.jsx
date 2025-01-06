import React from "react";
import { Link } from "react-router-dom";
import { FaMap } from "react-icons/fa6";
import { MdWifiCalling } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
  RiTwitterFill,
} from "react-icons/ri";
import google_play from "../images/google-play.png"; // Import Google play
import app_store from "../images/app-store.png"; // Import Google play
import item_1 from "../images/item-1.png";
import item_2 from "../images/item-2.png";
import item_3 from "../images/item-3.png";
import item_4 from "../images/item-4.png";
import payment_footer from "../images/payment-footer.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#212121] h-auto py-2 pt-10">
        <div className="flex justify-between  flex-wrap after:content-[''] after:w-full after:h-[1px] after:bg-gray-500">
          <div className="my-3 xl:w-2/12 px-2 sm:w-4/12 w-full ">
            <h1 className='text-white uppercase after:content-[""] after:w-[30px] after:border-b-[3px] after:border-primary after:border-dotted after:block  '>
              Information
            </h1>
            <ul className="mt-2">
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Caps & Hats
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Hoodies & Sweatshirts
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Jacket & Coats
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Jacket & Coats
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Shoes, Boots & Trainers
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Underwear & Socks
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-3 xl:w-2/12 px-2 sm:w-4/12 w-full ">
            <h1 className='text-white uppercase after:content-[""] after:w-[30px] after:border-b-[3px] after:border-primary after:border-dotted after:block  '>
              Customer Service
            </h1>
            <ul className="mt-2">
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Customer Services
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Shipping & Returns
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Track Your Order
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Help Center
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Store Location
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Customer Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-3 xl:w-2/12 px-2 sm:w-4/12 w-full ">
            <h1 className='text-white uppercase after:content-[""] after:w-[30px] after:border-b-[3px] after:border-primary after:border-dotted after:block  '>
              Store Location
            </h1>
            <ul className="mt-2">
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Los Angeles - USA
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  New York - USA
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  California - USA
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Bangkok - Thailand
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  Paris - France
                </Link>
              </li>
              <li className="text-white py-2 ">
                <Link className="relative inline-block hover:after:block hover:ml-1 after:border-b-[3px] after:border-primary after:border-dotted text-sm text-gray-300 transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out ">
                  London - England
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-3 xl:w-3/12 px-2 md:w-5/12 w-full">
            <h1 className='text-white uppercase after:content-[""] after:w-[30px] after:border-b-[3px] after:border-primary after:border-dotted after:block  '>
              Contact Us
            </h1>
            <ul className="mt-2">
              <li className="text-gray-300 py-2 flex gap-2 text-sm">
                <FaMap className="pt-1 text-primary" size={36} />
                4331 Dominion St, Burnaby, BC V5G 1C7, Canada 7X4V+M2 Burnaby,
                British Columbia, Canada
              </li>
              <li className="text-gray-300 py-2 flex gap-2  text-sm">
                <MdWifiCalling className="pt-1 text-primary" size={24} />
                (+80)123 456 789 - (+80)123 456 789
              </li>
              <li className="text-gray-300 py-2 flex gap-2 text-sm">
                <FaMessage className="pt-1 text-primary" size={24} />
                Support@MagenTech.com - Sale@MagenTech.com
              </li>
              <li className="text-gray-300 py-2 flex  text-sm">
                <div className="flex gap-3">
                  <div>
                    <RiFacebookFill
                      size={38}
                      className="text-white bg-blue-800 p-1 rounded hover:translate-y-[-5px] hover:bg-primary transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <RiTwitterFill
                      size={38}
                      className="text-white bg-cyan-400 p-1 rounded hover:translate-y-[-5px] hover:bg-primary transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <RiYoutubeFill
                      size={38}
                      className="text-white bg-red-600 p-1 rounded hover:translate-y-[-5px] hover:bg-primary transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <RiInstagramFill
                      size={38}
                      className="text-white bg-fuchsia-600 p-1 rounded hover:translate-y-[-5px] hover:bg-primary transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <RiLinkedinFill
                      size={38}
                      className="text-white bg-blue-800 p-1 rounded hover:translate-y-[-5px] hover:bg-primary transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="my-3 xl:w-3/12 px-2 md:w-5/12 w-full">
            <h1 className='text-white uppercase after:content-[""] after:w-[30px] after:border-b-[3px] after:border-primary after:border-dotted after:block  '>
              Newsletter subscribe
            </h1>
            <ul className="mt-2">
              <li className="text-gray-300 text-sm py-2 ">
                Get all the best deals, sales and offers from the best online
                shopping store in UAE. Sign up now !
              </li>
              <li className="text-white py-4 relative ">
                <input className='" focus:outline-none border-none text-gray-300 bg-[#4d4d4d] xl:w-3/4 w-4/5 py-1 px-2 rounded text-sm"' />
                <button className="flex items-center gap-2 absolute  py-1 px-2 rounded top-4 rounded-s-none text-white  bg-primary right-16">
                  subscribe
                </button>
              </li>
              <li className="text-white py-2 ">
                <div className="flex gap-3">
                  <div>
                    <a>
                      <img src={google_play} />
                    </a>
                  </div>
                  <div>
                    <a>
                      <img src={app_store} />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center my-6 gap-2 w-full after:content-[''] after:w-full after:h-[1px] after:bg-gray-500">
          <div className="flex items-center justify-center flex-wrap gap-2 my-3">
            <img className="my-1" src={item_1} alt="" />
            <img className="my-1" src={item_2} alt="" />
            <img className="my-1" src={item_3} alt="" />
            <img className="my-1" src={item_4} alt="" />
          </div>
          <ul className="flex items-center justify-center flex-wrap gap-2 text-sm text-gray-300">
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>About Us</Link>
            </li>
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>Customer Service</Link>
            </li>
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>Privacy Policy</Link>
            </li>
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>Site Map</Link>{" "}
            </li>
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>Orders and Returns</Link>
            </li>
            <li className="px-2 my-1 border-e last:border-e-0 hover:text-primary">
              <Link>Contact Us</Link>
            </li>
          </ul>
          <div className="w-3/4">
            <p className="text-sm text-center text-gray-300 w-full my-3">
              **$50 off orders $350+ with the code BOO50. $75 off orders $500+
              with the code BOO75. $150 off orders $1000+ with the code BOO150.
              Valid from October 28, 2016 to October 31, 2016. Offer may not be
              combined with any other offers or promotions, is non-exchangeable
              and non-refundable. Offer valid within the US only.
            </p>
          </div>
          <div className="my-3">
            <img src={payment_footer} alt="" />
          </div>
        </div>
        <div className="text-center text-sm text-gray-300 my-3">
          SM Digital © 2025 Demo Store. All Rights Reserved. Designed by
          Y-ElMohammadi❤
        </div>
      </div>
    </>
  );
};

export default Footer;
