import React, { useState } from "react";
import useKeywordData from "../hooks/useKeywordData.js";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import AV from "../assets/AV.svg";
import CountrySelect from "../Components/ui/KeywordInput/CountrySelect.jsx";

export const AudienceVolume = () => {
  const [keywordData, setKeywordData] = useState(null);
  const { data: data3, loading } = useKeywordData();
  const [hover, setHover] = useState(false);

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
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto p-1 mt-2 rounded-lg">
        <div className="flex  items-center   lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
          <CountrySelect />
         
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
                  <div className="w-full lg:w-1/2 pr-4">
                    <div className="flex flex-col items-center justify-center rounded-lg border-1 border-gray-500 p-8">
                      <h1 className="text-2xl text-[#12153d] font-bold">
                        Audience Volume
                      </h1>
                      <div className="flex items-center justify-center mt-2 mb-4">
                        <p className="text-4xl text-[#12153d] font-bold font-sans">
                          135k
                        </p>
                        <img
                        className="w-12 h-8 ml-4"
                          src="https://s3-alpha-sig.figma.com/img/9452/5f21/18c3b54cc189ab8fb5154c322a47a361?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NrppVflQpNZpjXkwf9-ganuKUxkkQu3EAhmFhCLlPrZODIqfMyyp8HR3jmdi1h0aZdV4lgdSN0QOdDAx5bDJesdLzfSzw193ZYkIT1VmzXPSsk2EFC~gxW56TmmJV0efq8yP4FTVm-4lFRniZplwGWVQWjHgpCbYeCijTGTPOR8Unc~PI3Na6zWcTisToTzAoJoU4qaR7xwKn9eSe3l-HmPdMTS2lx~zLjOdcauWtgJKACTCssJKl4kYpwYLXbmhLl05t0CQhfW6kek26pMFVkgIiw8cbo1ACVuu0P04WPwjVQzakOgNw6fbiWz2iqnqBF405~KSrXezWo3uJpLksA__"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-0 pr-2">
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
                        <img src={AV} alt="" className="w-full sm:w-auto" />
                      )}
                    </div>
                    <div className="bg-gray-300 h-[250px] w-full sm:w-[300px] mt-4 rounded-md flex justify-center items-center">
                      <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                    </div>
                    <div className="mt-4"></div>
                  </div>
                  <div className="bg-gray-300 h-[600px] w-full sm:w-[120px] ml-0 sm:ml-4 rounded-md flex justify-center items-center">
                    <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                  </div>
                </div>
                <div className="bg-[#12153d] text-white mt-4 p-4 rounded-md text-center lg:text-left">
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

export default AudienceVolume;
