import React, { useState } from "react";
import useKeywordData from "../hooks/useKeywordData.js";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import KeywordContainer from "../Components/ui/LongTailKeyword/KeywordContainer.jsx"; // Updated import

export const KeywordResearch = () => {
  const [keywordData, setKeywordData] = useState(null);
  const { data: data3, loading } = useKeywordData();

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
                <div className="w-full lg:w-1/2">
                  <KeywordContainer keywordData={keywordData} />
                </div>
                <div className="w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0">
                  <div className="p-8 bg-[#12153D] rounded-lg text-white h-75 text-center lg:text-left">
                    <h1 className="text-md lg:text-2xl font-bold mb-2"  style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      What is it?
                    </h1>
                    <p className="text-justify">
                      <span className="text-orange-500">Content Ideas</span>{" "}
                      are phrases the user searches for when they’re at the
                      end stage of making a purchase.
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
                To find more information and get more insights check out {" "}
                <span className="text-orange-500">content ideas</span> to understand your local and global audience.
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

export default KeywordResearch;
