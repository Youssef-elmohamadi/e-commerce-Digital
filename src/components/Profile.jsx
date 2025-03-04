import React from "react";
import SidebarProfile from "./SidebarProfile";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const location = useLocation();

  return (
    <>
      <div className="bg-banner bg-auto bg-no-repeat flex flex-col justify-center items-center h-40 w-full text-white">
        <div>
          <h1 className="text-xl font-bold flex justify-center items-center">
            Profile
          </h1>
        </div>
      </div>
      <div className="flex px-6 my-8 gap-6 w-full flex-wrap justify-between">
        <SidebarProfile />
        {location.pathname === "/profile" && (
          <p className="text-gray-500 md:w-3/6 lg:w-4/6 flex-grow w-full">
            Manage your account settings and view your order history.
          </p>
        )}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
