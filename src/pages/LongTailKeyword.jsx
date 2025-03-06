import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import KeywordContainer from "../Components/ui/LongTailKeyword/KeywordContainer.jsx";
import Loader from "../Components/Loading/Loader.jsx";
 

const LongTailKeywordPage = () => {
  const [keywordData, setKeywordData] = useState(null);
  const [searchEngine, setSearchEngine] = useState("google"); // Default to Google
  const [loading, setLoading] = useState(false); // Loader state

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm, "Engine:", searchEngine);
    setLoading(true);

    try {
      const response = await fetch(
        `https://keyword-research3.onrender.com/api/scraper/scrape?query=${searchTerm}&engine=${searchEngine}`
      );
      const data = await response.json();

      if (data && data.keywords) {
        // Filter keywords to show only those with 3 or more words
        const filteredKeywords = data.keywords.filter(
          (keyword) => keyword.trim().split(/\s+/).length > 3
        );

        setKeywordData({
          keyword: searchTerm,
          relatedKeywords: filteredKeywords,
        });
      }
    } catch (error) {
      console.error("Error fetching keyword data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto mt-2 rounded-lg">
        <div className="w-full lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
          
        </div>
        <div>
          {loading ? (
            <div className="flex justify-center mt-4">
              {/* <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div> */}
              <Loader />
            </div>
          ) : (
            keywordData && (
              <>
                <div className="flex flex-col lg:flex-row w-full mt-4">
                  <div className="w-full lg:w-1/2">
                    {keywordData && keywordData.relatedKeywords.length > 0 && (
                      <KeywordContainer keywordData={keywordData} />
                    )}
                  </div>
                  <div
                    className="w-full lg:w-1/2 lg:ml-4 mt-4 lg:mt-0"
                   
                  >
                    <div className="p-8 bg-[#12153D] rounded-lg text-white h-75 text-center lg:text-left">
                      <h1 className="text-md lg:text-2xl font-bold mb-2">
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
                  </div>
                  <div
                    className="bg-gray-300 h-150 p-14 ml-4 rounded-md flex justify-center items-center"
                    
                  >
                    <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                  </div>
                </div>
                <div
                  className="bg-[#12153d] text-white mt-4 p-4 rounded-md text-center lg:text-left"
                  
                >
                  <p className="text-md lg:text-lg">
                    To find more information and get more insights, check out{" "}
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

export default LongTailKeywordPage;
