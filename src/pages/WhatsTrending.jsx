import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds.jsx";
import SearchInput from "../Components/ui/KeywordInput/SearchInput.jsx";
import useKeywordData from "../hooks/useKeywordData.js";
import Loader from "../Components/Loading/Loader.jsx";
import Bargraph from "../Components/ui/Graphs/Bargraph.jsx";

const WhatsTrending = () => {
  const [keywordData, setKeywordData] = useState(null);
  const [graphData, setGraphData] = useState([]); // State for graph data
  const [loadingState, setLoading] = useState(false);

  const { data: data3, loading } = useKeywordData();

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
    setLoading(true);

    const requestBody = {
      keywords: [searchTerm],
      country: "US",
      currency: "USD",
    };

    try {
      const response = await fetch("https://keyword-research3.onrender.com/api/keywords/keyword-Everywhere-Volume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);

      if (result.data && result.data.length > 0) {
        const keywordInfo = result.data[0]; // Extract the first keyword data

        const formattedData = {
          keyword: keywordInfo.keyword,
          competition: keywordInfo.competition,
          cpc: keywordInfo.cpc.value, // Extract CPC value
          currency: keywordInfo.cpc.currency, // Extract currency
          volume: keywordInfo.vol, // Search volume
          trend: keywordInfo.trend, // Monthly trend data
          credits: result.credits, // Remaining credits
        };

        console.log("Formatted Data:", formattedData);
        setKeywordData(formattedData); // Store structured data in state
        setGraphData(formatTrendData(keywordInfo.trend)); // Set initial graph data
      } else {
        console.warn("No keyword data found.");
        setKeywordData(null);
      }
    } catch (error) {
      console.error("Error fetching keyword data:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatTrendData = (trendData) => {
    return trendData.map((item, index) => ({
      name: `Months ${index + 1}`,
      value: item.value || item, // Ensure the correct key is used
    }));
  };

  const handleTimeRangeChange = (timeRange) => {
    if (keywordData && keywordData.trend) {
      const trendData = keywordData.trend.slice(-timeRange);
      setGraphData(formatTrendData(trendData));
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-lg">
      <div className="w-full lg:min-w-[40rem]">
        <BannerAds />
      </div>
      <div className="w-full max-w-[895px] mx-auto   mt-2 rounded-lg">
        <div className="w-full lg:min-w-[40rem]">
          <SearchInput onSearch={handleSearch} />
        </div>
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
                        onClick={() => handleTimeRangeChange(8)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        Last 8 Months
                      </button>
                      <button
                        onClick={() => handleTimeRangeChange(10)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        Last 10 Months
                      </button>
                      <button
                        onClick={() => handleTimeRangeChange(12)}
                        className="p-2 font-bold text-md bg-white rounded-full pr-15 pl-15 hover:bg-[#E5590F] hover:text-white"
                      >
                        Last 12 Months
                      </button>
                    </div>
                  </div>
                  <div className="pl-4 pr-4 mt-4 lg:mt-0">
                    <div className="p-8 bg-[#12153D] rounded-lg text-white h-[330px] w-full lg:w-[300px] text-center lg:text-left">
                      <h1
                        className="text-md lg:text-3xl font-bold mb-2"
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
                    <div className="bg-gray-300 h-[250px] w-full lg:w-[300px] mt-4 rounded-md flex justify-center items-center">
                      <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                    </div>
                    <div className="mt-4"></div>
                  </div>
                  <div className="bg-gray-300 h-[600px] w-full lg:w-[120px] mt-4 lg:mt-0 rounded-md flex justify-center items-center">
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
