import React, { createContext, useState, useEffect } from "react";
import { IoHeadsetOutline } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiTransportationRings } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineSportsEsports } from "react-icons/md";
import { RiGpsFill } from "react-icons/ri";
import { GiSmartphone } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { BsDisplay } from "react-icons/bs";
import { ref, get } from "firebase/database";
import { database } from "../FirebaseConfig";

const ShopByCategoriesContext = createContext([]);

const CategoriesData = [
  { icon: <BsDisplay size={18} />, name: "Electronics & Digital" },
  { icon: <IoHeadsetOutline size={14} />, name: "Accessories" },
  { icon: <TbToolsKitchen2 size={14} />, name: "Home & Kitchen" },
  { icon: <GiTransportationRings size={14} />, name: "Sports & Outdoors" },
  { icon: <BsFillHeartPulseFill size={14} />, name: "Health & Beauty" },
  { icon: <FaCameraRetro size={14} />, name: "Cameras & Photo" },
  { icon: <HiMiniBuildingOffice2 size={14} />, name: "Office & School" },
  { icon: <MdOutlineSportsEsports size={14} />, name: "Toys & Kids" },
  { icon: <RiGpsFill size={14} />, name: "GPS & Navigation" },
  { icon: <GiSmartphone size={14} />, name: "Mobile Phones" },
  { icon: <FaComputer size={14} />, name: "Computers & Laptops" },
];

export const ShopByCategoriesProvider = ({ children }) => {
  const [categoriesApi, setCategoriesApi] = useState([]);
  const [productsApi, setProductsApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const dbRef = ref(database, "/");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCategoriesApi(data.categories || []); // تحقق من وجود categories
          setProductsApi(data.products || []); // تحقق من وجود categories
        } else {
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ShopByCategoriesContext.Provider
      value={{ CategoriesData, categoriesApi, loading, error, productsApi }}
    >
      {children}
    </ShopByCategoriesContext.Provider>
  );
};

export default ShopByCategoriesContext;
