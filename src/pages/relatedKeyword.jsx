import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import KeywordContainer from "../Components/ui/LongTailKeyword/KeywordContainer.jsx";
import SVG1 from "../assets/releatedKI.svg";
import SearchEngine from "../Components/ui/KeywordInput/SearchEngine.jsx";

export const KeywordResearch = () => {
  const [keywordData, setKeywordData] = useState(null); 
  const [hover, setHover] = useState(false);
  const [searchEngine, setSearchEngine] = useState("google"); // Default to Bing
  const [searchLoading, setSearchLoading] = useState(false); // Loader state

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm, "Engine:", searchEngine);
    setSearchLoading(true); // Start loading

    try {
      const response = await fetch(
        `http://localhost:5000/api/scraper/scrape?query=${searchTerm}&engine=${searchEngine}`
      );
      const data = await response.json();

      if (data && data.keywords) {
        setKeywordData({ keyword: searchTerm, relatedKeywords: data.keywords });
      }
    } catch (error) {
      console.error("Error fetching keyword data:", error);
    } finally {
      setSearchLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto p-1 mt-2 rounded-lg">
        <div className="w-full lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
          <SearchEngine onSelectEngine={setSearchEngine} />
        </div>
        <div>
          {searchLoading ? (
            <div className="flex justify-center mt-4">
              <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : (
            keywordData && (
              <>
                <div className="flex flex-col lg:flex-row w-full mt-4">
                  <div className="w-full lg:w-1/2">
                    <KeywordContainer keywordData={keywordData} />
                  </div>
                  <div
                    className="mt-0 pr-2"
                    style={{ transform: "translateY(-19.5vh)" }}
                  >
                    <div
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      {hover ? (
                        <div className="h-[330px] w-full sm:w-[300px] p-8 bg-[#12153D] rounded-2xl text-white text-center lg:text-left">
                          <h1
                            className="text-md lg:text-3xl font-semibold mb-4"
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}
                          >
                            What is it?
                          </h1>
                          <p className="text-justify">
                            <span className="text-orange-500">
                              Related Words
                            </span>{" "}
                            are identifying search terms that people use in
                            search engines. The goal is to use this information
                            to improve your marketing.
                          </p>
                        </div>
                      ) : (
                        <img src={SVG1} alt="" className="w-full sm:w-auto" />
                      )}
                    </div>
                    <div className="bg-gray-300 h-[250px] w-full sm:w-[300px] mt-4 rounded-md flex justify-center items-center">
                      <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                    </div>
                    <div className="mt-4"></div>
                  </div>
                  <div
                    className="bg-gray-300 h-[600px] w-full sm:w-[120px] ml-0 sm:ml-4 rounded-md flex justify-center items-center"
                    style={{ transform: "translateY(-19.5vh)" }}
                  >
                    <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                  </div>
                </div>
                <div
                  className="bg-[#12153d] text-white mt-4 p-4 rounded-md text-center lg:text-left"
                  style={{ transform: "translateY(-19.5vh)" }}
                >
                  <p className="text-md lg:text-lg">
                    To find more information and get more insights check out{" "}
                    <a href="#" className="text-[#E5590F]">
                      content ideas
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

export default KeywordResearch;
