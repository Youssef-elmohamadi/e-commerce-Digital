import React, { createContext, useEffect, useState } from "react";

const visiblePopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [visibleCart, setVisibleCart] = useState(false);
  const [visibleWishlist, setVisibleWishlist] = useState(false);
  const [visibleCompare, setVisibleCompare] = useState(false);
  const [counter, setCounter] = useState(5);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    let interval;
    if (visibleCart || visibleWishlist || (visibleCompare && counter > 0)) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }
    if (counter === 0) {
      setVisibleCart(false);
      setVisibleWishlist(false);
      setVisibleCompare(false);
    }
    return () => clearInterval(interval);
  }, [visibleCart, visibleWishlist, visibleCompare, counter]);

  const showPopupCart = (product) => {
    setProductName(product.title);
    setCounter(5);
    setVisibleCart(true);
  };
  const showPopupWishlist = (product) => {
    setProductName(product.title);
    setCounter(5);
    setVisibleWishlist(true);
  };
  const showPopupCompare = (product) => {
    setProductName(product.title);
    setCounter(5);
    setVisibleCompare(true);
  };
  return (
    <visiblePopupContext.Provider
      value={{
        visibleCart,
        setVisibleCart,
        visibleWishlist,
        setVisibleWishlist,
        showPopupWishlist,
        showPopupCart,
        counter,
        productName,
        setProductName,
        visibleCompare,
        setVisibleCompare,
        showPopupCompare,
      }}
    >
      {children}
    </visiblePopupContext.Provider>
  );
};

export default visiblePopupContext;
