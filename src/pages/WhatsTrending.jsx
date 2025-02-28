import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import useKeywordData from "../hooks/useKeywordData.js";
import Bargraph, {
  dataWeek,
  dataMonth,
  dataYear,
} from "../Components/ui/Graphs/Bargraph.jsx"; // Import data

const WhatsTrending = () => {
  const [keywordData, setKeywordData] = useState(null);
  const [graphData, setGraphData] = useState(dataWeek); // State for graph data

  const { data: data3, loading } = useKeywordData();

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    const result = data3.find(
      (item) => item.keyword.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log("Search result:", result);
    setKeywordData(result);
  };

  return (
    <div className="w-full bg-white grid p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[60rem] mx-auto p-1 mt-2 rounded-lg">
        <div className="w-full lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
        </div>
        <div>
          {loading ? (
            <div className="flex justify-center">
              <div className="loader">Loading...</div>
            </div>
          ) : (
            keywordData && (
              <>
                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');
                </style>
                <div className="flex flex-col lg:flex-row w-full mt-4">
                  <div className="w-full lg:w-1/2 border-1 border-gray-500 rounded-lg ">
                    <div className="flex flex-col justify-center items-center mt-6">
                      <h1
                        className="text-2xl font-bold text-[#12153D] flex flex-col justify-center items-center"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        What's Trending
                      </h1>
                      <Bargraph data={graphData} />{" "}
                      {/* Pass graphData as prop */}
                    </div>
                    <div className="bg-[#12153d] rounded-lg p-8 flex flex-col justify-center items-center space-y-2 mt-13.5">
                      <button
                        onClick={() => setGraphData(dataWeek)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        last Week
                      </button>
                      <button
                        onClick={() => setGraphData(dataMonth)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        last Month
                      </button>
                      <button
                        onClick={() => setGraphData(dataYear)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        last Year
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0">
                    <div className="p-8 bg-[#12153D] rounded-lg text-white h-75 text-center lg:text-left">
                      <h1
                        className="text-md lg:text-2xl font-bold mb-2"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        What is it?
                      </h1>
                      <p className="text-justify text-semibold">
                        <span className="text-[#E5590F]">What’s Trending</span> shows you popularity of specific
                        keywords over time. These trends show you what topics
                        are gaining interest and which are fading.
                      </p>
                    </div>
                    <div className="bg-gray-300 h-71 mt-4 rounded-md flex justify-center items-center">
                      <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                    </div>
                    <div className="mt-4"></div>
                  </div>
                  <div className="bg-gray-300 h-150 p-14 ml-4 rounded-md flex justify-center items-center">
                    <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                  </div>
                </div>
                <div className="bg-[#12153d] text-white mt-4 p-4 rounded-md text-center lg:text-left">
                  <p className="text-md lg:text-lg">
                    To find more information and get more insights check out{" "}
                    <a href="" className="text-[#E5590F]">
                      SEO difficulty
                    </a>{" "}
                    to understand your local and global audience.
                  </p>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatsTrending;
