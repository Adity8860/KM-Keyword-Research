import React from "react";
import Sidepanel from "./SidePanel/sidePanel";
import Navbar from "./Navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full">
        <Sidepanel className="hidden md:block" />
        <div className="flex flex-col justify-between w-full md:w-auto">
          {children}
        </div>
        <div className="hidden md:block p-4 ml-4">ADS</div>
      </div>
    </div>
  );
};

export default Layout;
