import React from "react";
import { Link } from "react-router-dom";
import Advertise from "./Advertise";
import ads1 from "../images/item-3.jpg";
const SidebarProfile = () => {
  return (
    <div className="md:w-2/6 lg:w-1/6 w-full lg:flex-shrink-0 lg:min-w-60 ">
      <div className="w-full border h-[380px] mt-2 rounded">
        <div className="w-full h-[330px]  rounded ">
          <h2 className="font-semibold rounded-t bg-primary uppercase px-2 py-3  text-white">
            Profile Settings
          </h2>
          <div className="px-5 py-2">
            <div>
              <Link
                to="/profile/account"
                className="font-semibold text-gray-500 text-sm"
              >
                Account
              </Link>
            </div>
            <div>
              <Link
                to="/profile/orders"
                className="font-semibold text-sm text-gray-500"
              >
                Orders
              </Link>
            </div>
            <div>
              <Link
                to="/profile/wishlist"
                className="font-semibold text-gray-500 text-sm"
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Advertise src={ads1} />
    </div>
  );
};

export default SidebarProfile;
