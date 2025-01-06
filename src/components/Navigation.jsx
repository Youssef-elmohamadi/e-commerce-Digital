import React from "react";
import LargeScreensNavigation from "./LargeScreensNavigation";
import SmallScreensHeader from "./SmallScreensHeader";
const Navigation = () => {
  return (
    <>
      <div className="hidden lg:block">
        <LargeScreensNavigation />
      </div>
      <div className="block lg:hidden">
        <SmallScreensHeader />
      </div>
    </>
  );
};

export default Navigation;
