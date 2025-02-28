import React,{useState} from "react";
import MySvg from "../assets/releatedKI.svg"; // Import the SVG
import GeneralAds from "./Ads/GeneralAds";

const HoverFeatures = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="flex flex-col pl-4 w-full h-full rounded-lg mt-4 sm:mt-0">
        <div className="w-full h-full">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative"
          >
            <div
              className={`${
                isHovered ? "hidden" : "block"
              } w-full h-full transition-all duration-300 ease-in-out aspect-square transform`}
              id="first"
            >
              <img
                src={MySvg}
                alt="My SVG"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className={`${
                isHovered ? "block" : "hidden"
              } w-full h-full bg-[#12153D] text-white text-justify flex flex-col rounded-2xl transition-all duration-300 ease-in aspect-square transform`}
              id="sec"
            >
              <h1 className="w-full text-3xl font-bold pl-8 pt-8 ">
                What is it?
              </h1>
              <p className="p-8">
                <span className="text-orange-500">Related Words</span> are used
                for identifying search terms that people use in search
                engines.The goal is to use this information to improve your
                marketing.
              </p>
            </div>
          </div>  
          <GeneralAds/>        
        </div>
      </div>
    </div>
  );
};

export default HoverFeatures;
