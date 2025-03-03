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
  const [keywordVolumeData, setKeywordVolumeData] = useState(null);
  const [loadingVolume, setLoadingVolume] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
    setKeywordData(searchTerm);
    setLoadingVolume(true);
    setError(null);

    try {
      const response = await fetch(
        "https://keyword-research3.onrender.com/api/keywords/keyword-Everywhere-Volume",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            keywords: [searchTerm],
            country: "in",
            currency: "USD",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch keyword volume data");
      }

      const data = await response.json();
      console.log("Keyword Volume Data:", data);
      setKeywordVolumeData(data);
    } catch (error) {
      console.error("Error fetching keyword volume:", error);
      setError("Failed to fetch keyword data. Please try again.");
    } finally {
      setLoadingVolume(false);
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto p-1 mt-2 rounded-lg">
        <div className="flex items-center lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
          <CountrySelect />
        </div>

        {error && (
          <div className="text-red-500 mt-2 text-center">{error}</div>
        )}

        {loadingVolume ? (
          <div className="flex justify-center mt-4">
            <div className="loader">Loading keyword data...</div>
          </div>
        ) : (
          keywordData && (
            <div className="flex flex-col lg:flex-row w-full mt-4">
              <div className="w-full lg:w-1/2 pr-4">
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-500 p-8">
                  <h1 className="text-2xl text-[#12153d] font-bold">
                    Audience Volume
                  </h1>
                  <div className="flex items-center justify-center mt-2 mb-4">
                    <p className="text-4xl text-[#12153d] font-bold">
                      {keywordVolumeData?.data?.[0]?.vol
                        ? `${(keywordVolumeData.data[0].vol / 1000).toFixed(
                            1
                          )}k`
                        : "N/A"}
                    </p>

                    <img className="w-12 h-8 ml-4" src={AV} alt="Volume Icon" />
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
                      <h1 className="text-md lg:text-3xl font-semibold mb-4">
                        What is it?
                      </h1>
                      <p className="text-justify">
                        <span className="text-orange-500">Related Words</span>{" "}
                        are identifying search terms that people use in search
                        engines. The goal is to use this information to improve
                        your marketing.
                      </p>
                    </div>
                  ) : (
                    <img src={AV} alt="Illustration" className="w-full sm:w-auto" />
                  )}
                </div>

                <div className="bg-gray-300 h-[250px] w-full sm:w-[300px] mt-4 rounded-md flex justify-center items-center">
                  <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                </div>
              </div>

              <div className="bg-gray-300 h-[600px] w-full sm:w-[120px] ml-0 sm:ml-4 rounded-md flex justify-center items-center">
                <h1 className="text-md lg:text-2xl font-bold">AD</h1>
              </div>
            </div>
          )
        )}

        <div className="bg-[#12153d] text-white mt-4 p-4 rounded-md text-center lg:text-left">
          <p className="text-md lg:text-lg">
            To find more information and get more insights check out{" "}
            <a href="#" className="text-[#E5590F]">
              content ideas
            </a>{" "}
            to understand your local and global audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceVolume;
