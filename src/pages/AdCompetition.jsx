import React, { useState } from "react"; 
import useKeywordData from "../hooks/useKeywordData.js";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import IndicatorScale from "../Components/ui/Graphs/IndicatorScale.jsx";
import GoogleIcon from "../assets/googleIcon.svg";
import Loader from "../Components/Loading/Loader.jsx";
import CountrySelect from "../Components/ui/KeywordInput/CountrySelect.jsx"; // Import CountrySelect

export const AdCompetition = () => {
  const [keywordData, setKeywordData] = useState(null);
  const { data: data3, loading } = useKeywordData();
  const [hover, setHover] = useState(false);
  const [loadingState, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States"); // Default country
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default currency

  // const handleCountryClick = (countryCode) => {
  //   setSelectedCountry({ code: countryCode, flag: countryFlags[countryCode] });
  // };

  const handleCountryChange = (country) => {
    setSelectedCountry(country.name);
  };

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
    setLoading(true);

    try {
      const response = await fetch(
        "https://keyword-research3.onrender.com/api/keywords/keyword-Everywhere-Volume",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            keywords: [searchTerm],
            country: selectedCountry,
            currency: selectedCurrency,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch data");

      console.log("selectedCountry:", selectedCountry);

      const result = await response.json();
      console.log("Search result:", result);
      setKeywordData(result);
    } catch (error) {
      console.error("Error fetching keyword data:", error);
      setKeywordData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto  mt-2 rounded-lg">
        <div className="flex  items-center   lg:min-w-[40rem]">
          <SearchInput
            onSearch={handleSearch}
            onCountryChange={handleCountryChange}
          />{" "}
          {/* Pass handleServerChange */}
        </div>
        {/* <CountrySelect onCountryChange={handleCountryChange} /> Add CountrySelect component */}
        <div>
          {loading ? (
            <div className="flex justify-center">
              <Loader />
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
                    <div className="flex flex-col items-center justify-center   rounded-lg border-1 border-gray-500 w-[435px] h-[140px]">
                      <h1 className="text-2xl text-[#12153d] font-bold">
                        Ad Competition
                      </h1>
                      <div className="flex flex-col items-center justify-center mt-2 mb-4">
                        <p className="text-5xl text-[#12153d] font-bold font-sans">
                          {keywordData?.data[0]?.competition}
                        </p>
                      </div>
                    </div>
                    <div className="w-[435px] h-[140px] p-8 pt-4 pb-4  mt-4 rounded-lg bg-[#12153d] flex flex-col items-center justify-center">
                      <h3 className="text-white mt-3 text-justify">
                        Scale: Measured on a scale of 0 to 1, with higher
                        numbers indicating more competition
                      </h3>
                      <IndicatorScale value={keywordData?.data[0]?.competition} />
                    </div>
                    <div className="w-[336px] h-[280px] bg-gray-400 mt-4 rounded-lg flex flex-col items-center justify-center ml-25">
                      <h4 className="flex flex-col justify-center items-center text-2xl font-bold">
                        AD
                      </h4>
                    </div>
                  </div>
                  <div className="mt-0 pl-2">
                    <div className="    rounded-lg bg-[#12153d] w-[300px] h-[330px] p-8 text-white   ">
                      <h1
                        className="text-3xl "
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        What is it?
                      </h1>
                      <p className="text-md mt-4">
                        <span className="text-[#E5590F]">Ad Competition</span>{" "}
                        is a measure of how much competition there is for a
                        product, keyword, or market. It can help businesses
                        understand how to position themselves in a competitive
                        market. 
                      </p>
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
                    <span className="text-[#E5590F]">SEO difficulty</span> to
                    understand your local and global audience.
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

export default AdCompetition;
