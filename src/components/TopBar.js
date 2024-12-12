import React, { useState } from "react";
import { MdLocalOffer } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopBar = () => {

  const [language, setLanguage] = useState("English");
  const [languages, setLanguages] = useState(["German", "French", "Italian", "Spanish"]);

  const [currency, setCurrency] = useState("USD");
  const [currencies, setCurrencies] = useState(["EUR", "EGP"]);

  const handleLanguageChange = (newLang) => {
    setLanguages([language, ...languages.filter((lang) => lang !== newLang)]);
    setLanguage(newLang);
  };


  const handleCurrencyChange = (newCurrency) => {
    setCurrencies([currency, ...currencies.filter((curr) => curr !== newCurrency)]);
    setCurrency(newCurrency);
  };

  return (
    <div className="px-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MdLocalOffer className="text-primary" />
        <p className="text-base text-gray-600">
          Get up to <span className="text-primary">35% Off</span> cashback on First Order
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <TbTruckDelivery className="text-primary" />
          <p className="text-base text-gray-600 after:content-['|'] after:text-gray-600 after:px-2">Track your Order</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex items-center group after:content-['|'] after:text-gray-600 after:px-2">
            <div className="flex items-center gap-2 text-base text-gray-600">
              <div className="p-1 ">{language}</div>
              <MdOutlineKeyboardArrowDown className="" />
            </div>
            <div className="absolute p-3 top-8 right-2 bg-white shadow hidden group-hover:block  z-50 ">
              <ul>
                {languages.map((lang, index) => (
                  <li
                    key={index}
                    className="p-2 w-36 bg-gray-300 my-2 uppercase hover:bg-white hover:border hover:border-black transition duration-300 cursor-pointer"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-2">
              <div className="p-1 text-base text-gray-600">{currency}</div>
              <MdOutlineKeyboardArrowDown />
            </div>
            <div className="absolute p-3 top-8 right-2  bg-white shadow hidden group-hover:block z-50">
              <ul>
                {currencies.map((curr, index) => (
                  <li
                    key={index}
                    className="p-2 w-36 bg-gray-300 my-2 uppercase hover:bg-white hover:border hover:border-black transition duration-300 cursor-pointer"
                    onClick={() => handleCurrencyChange(curr) }
                  >
                    {curr}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
