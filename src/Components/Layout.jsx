import React from "react";
import Sidepanel from "./SidePanel/sidePanel"; //
import Navbar from "./Navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
       <Navbar />
      <div className="flex flex-col-2 w-full h-full  ">
        <Sidepanel />
        <div className=" flex flex-col justify-between">{children}</div>
        <div>ADS</div>
      </div>
    </div>
  );
};

export default Layout;
