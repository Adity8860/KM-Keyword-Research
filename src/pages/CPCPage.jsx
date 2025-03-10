import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import Loader from "../Components/Loading/Loader.jsx";
import CountrySelect from "../Components/ui/KeywordInput/CountrySelect.jsx"; // Import CountrySelect
import SelectCurrency from "../Components/ui/KeywordInput/SelectCurrency.jsx";

export const CPCPage = () => {
  const [keywordData, setKeywordData] = useState(null);
  const [loadingState, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("United States"); // Default country
  const [selectedCurrency, setSelectedCurrency] = useState("USD"); // Default currency

  const handleCountryChange = (country) => {
    setSelectedCountry(country.name);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency.symbol);
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

      console.log("selectedCurrency:", selectedCurrency);
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
        <div className="flex items-center lg:min-w-[40rem]">
          <SearchInput
            onSearch={handleSearch}
            onCountryChange={handleCountryChange}
            onCurrencyChange={handleCurrencyChange}
          />
        </div>

        {/* <CountrySelect onCountryChange={handleCountryChange} /> Add CountrySelect component */}
        <div>
          {loadingState ? (
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
                        Cost Per Click
                      </h1>
                      <div className="flex flex-col items-center justify-center mt-2 mb-4">
                        <p className="text-5xl text-[#12153d] font-bold font-sans">
                          {keywordData?.data[0]?.cpc?.currency}
                          {keywordData?.data[0]?.cpc?.value}
                        </p>
                      </div>
                    </div>
                    <div className="w-[435px] h-[140px] mt-4 rounded-lg bg-[#12153d] flex flex-col items-center justify-center">
                      <h3 className="text-white p-8 text-justify">
                        CPC for SEO depends entirely on your industry and
                        desired ROI, a good CPC allows you to achieve your
                        marketing goals while maintaining a positive ROI
                      </h3>
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
                        <span className="text-[#E5590F]">CPC</span> is
                        that's the highest amount that you're willing to pay for
                        a click on your ad  Your max. CPC is the most you'll be
                        charged for a click, but you'll often be charged less -
                        sometimes much less.
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
                    <a href="#" className="text-[#E5590F]">
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

export default CPCPage;
