import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds";
import SearchInput from "../Components/ui/KeywordInput/SearchInput";
import useKeywordData from "../hooks/useKeywordData";
import { renderSpamRiskCircle } from "../Components/ui/Graphs/SpamRiskCircle";

const SpamScore = () => {
  const [keywordData, setKeywordData] = useState(null);

  const { data: data3, loading } = useKeywordData();

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const result = data3.find(
      (item) => item.keyword.toLowerCase() === trimmedSearchTerm
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
                  <div className="w-full lg:w-1/2">
                    <div className="p-8 mx-auto bg-white rounded-lg border-1 border-gray-500">
                      <div className="space-y-6">
                        <div className="text-center ">
                          <h2 className="text-2xl font-bold text-gray-900">
                            Spam Score
                          </h2>
                          <p className="text-2xl font-semibold">
                            {keywordData.spamRiskScore}
                          </p>
                        
                    
                        </div>
                        <div>
                          {renderSpamRiskCircle(keywordData.spamRiskScore * 10)}
                        </div>
                      </div>
                    </div>
                    <div className="p-19 bg-[#12153D] rounded-lg text-white text-center lg:text-left mt-4">
                      <h1 className="text-xl">
                        This word appears in engines which might raise a red
                        flag.
                      </h1>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0">
                    <div className="p-8 bg-[#12153D] rounded-lg text-white h-75 text-center lg:text-left">
                      <h1
                        className="text-md lg:text-3xl font-bold mb-2"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        What is it?
                      </h1>
                      <p className="text-justify">
                        <span className="text-orange-500">Spam score</span> is used to measure a website's likelihood of
                        getting cancelled by search engines for being spam.
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
                  <p
                    className="text-md lg:text-lg"
                    style={{ wordSpacing: "0.5px", letterSpacing: "1.5px" }}
                  >
                    To find more information and get more insights check out{" "}
                    <a href="#" className="text-orange-500">
                      audience volume
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

export default SpamScore;
