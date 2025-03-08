import React, { useState } from "react";
import useKeywordData from "../hooks/useKeywordData.js";
import BannerAds from "../Components/BannerAds/BannerAds.jsx";
import SearchInput from "../Components/KeywordInput/SearchInput.jsx";
import MySvg from "../assets/releatedKI.svg"; // Import the SVG


export const KeywordResearch = () => {
  const [keywordData, setKeywordData] = useState(null);
  const { data: data3, loading } = useKeywordData();
  const [spamData, setSpamData] = useState(getSpamRiskData("apple", data3));
  const [isHovered, setIsHovered] = useState(false);

  const normalizedScore = Math.max(0, Math.min(100, spamData.spamRisk));
  const level =
    normalizedScore < 33 ? "low" : normalizedScore < 66 ? "medium" : "high";

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    const result = data3.find(
      (item) => item.keyword.toLowerCase() === searchTerm.toLowerCase()
    );
    console.log("Search result:", result);
    setKeywordData(result);
    if (result) {
      setSpamData(getSpamRiskData(result.keyword, data3));
    }
  };

  function getSpamRiskData(searchKeyword, data) {
    const exactMatch = data.find(
      (item) => item.keyword.toLowerCase() === searchKeyword.toLowerCase()
    );
    return (
      exactMatch || {
        keyword: searchKeyword,
        spamRisk: Math.floor(Math.random() * 100),
      }
    );
  }

  return (
    <div className="w-full bg-white grid p-5 rounded-lg">
      <BannerAds />
      <SearchInput onSearch={handleSearch} />
      <div className="w-full max-w-[80rem] mx-auto p-1 mt-2 rounded-lg flex flex-col sm:flex-row items-center">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          keywordData && (
            <>
              <div className="w-full flex flex-col items-center">
                <div className="flex flex-col sm:flex-row w-full h-full items-center">
                  <div
                    className="w-full sm:w-[95%] lg:w-4/5 h-full sm:h-auto border-1 border-gray-500 p-3 rounded-lg"
                    id="longTail"
                  >
                    <div className="p-4 shadow-lg rounded-lg">
                      <h1 className="text-lg sm:text-xl text-bold">
                        {keywordData.relatedKeywordsCount} result for{" "}
                        {keywordData.keyword}
                      </h1>
                    </div>
                    <ol className="p-4 max-h-130 overflow-y-auto">
                      {keywordData.relatedKeywords.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm md:text-base"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="flex flex-col pl-4 w-full sm:w-[95%] lg:w-4/5 h-full rounded-lg mt-4 sm:mt-0">
                    <div className="w-full flex flex-col justify-center">
                      <div
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="relative w-full h-full transition-all duration-300 ease-in"
                      >
                        <div
                          className={`${
                            isHovered ? "hidden" : "block"
                          } w-full h-full transition-opacity duration-300 ease-in-out`}
                        >
                          <img
                            src={MySvg}
                            alt="My SVG"
                            className="w-full sm:w-75"
                          />{" "}
                          {/* Use the SVG */}
                        </div>
                        <div
                          className={`${
                            isHovered ? "block" : "hidden"
                          } w-full sm:w-75 h-full sm:h-82.5 bg-[#12153D] text-white text-justify flex flex-col rounded-2xl transition-opacity duration-300 ease-in`}
                        >
                          <h1 className="w-full text-3xl font-bold pl-8 pt-8 ">
                            What is it?
                          </h1>
                          <p className="p-8">
                            <span className="text-orange-500">
                              Related Words
                            </span>{" "}
                            are used for identifying search terms that people
                            use in search engines.The goal is to use this
                            information to improve your marketing.
                          </p>
                        </div>
                      </div>
                      <div className="flex bg-gray-300 flex-col p-4 justify-center items-center mt-4 w-full sm:w-75 h-[250px] rounded-lg">
                        <h1 className="text-5xl font-bold">ADS</h1>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-300 flex justify-center items-center w-full sm:w-60 h-148 rounded-md mt-4 sm:mt-0">
                    <h1>ADS</h1>
                  </div>
                </div>
              </div>
            </>
          )
        )}
       
      </div>

    </div>
  );
};

export default KeywordResearch;
