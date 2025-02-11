import React, { createContext, useEffect, useState } from "react";

const visiblePopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(5);
  const [productName, setProductName] = useState(""); 

  useEffect(() => {
    let interval;
    if (visible && counter > 0) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else if (counter === 0) {
      setVisible(false);
    }
    return () => clearInterval(interval);
  }, [visible, counter]);

  const showPopup = (product) => {
    setProductName(product.title);
    setCounter(5);
    setVisible(true);
  };

  return (
    <visiblePopupContext.Provider
      value={{ visible, setVisible, showPopup, counter, productName , setProductName}}
    >
      {children}
    </visiblePopupContext.Provider>
  );
};

export default visiblePopupContext;
