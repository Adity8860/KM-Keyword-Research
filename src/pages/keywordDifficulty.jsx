import React, { useState } from "react";
import BannerAds from "../Components/ui/Ads/BannerAds";
import SearchInput from "../Components/ui/KeywordInput/SearchInput";
import useKeywordData from "../hooks/useKeywordData";
import Difficultycircle from "../Components/ui/Graphs/Difficultycircle";
import Loader from "../Components/Loading/Loader";


const KeywordDifficulty = () => {
  const [keywordData, setKeywordData] = useState(null);

  const { data: data3, loading } = useKeywordData();

  const handleSearch = async (searchTerm) => {
    console.log("Searching for:", searchTerm);
  
    try {
      // Fetch keyword difficulty from the API
      const response = await fetch("https://keyword-research3.onrender.com/api/gemini/get-keyword-difficulty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ keyword: searchTerm }),
      });
  
      const apiResult = await response.json();
      console.log("API Response:", apiResult);
  
      if (response.ok) {
        // Store only API response in state
        setKeywordData(apiResult.analysisResult);
      } else {
        console.error("Error fetching keyword difficulty:", apiResult);
      }
    } catch (error) {
      console.error("API request failed:", error);
    }
  };
  

  // const renderDifficultyCircle = (percentage) => {
  //   const rotation = (percentage / 100) * 360;
  //   return (
  //     <div className="relative w-55 h-55 mx-auto">
  //       {/* Background circle */}
  //       <div className="absolute inset-0 rounded-full border-32 border-orange-500 bg-white" />
  
  //       {/* Progress circle with rotation animation */}
  //       <div
  //         className="absolute inset-0 flex items-center justify-center"
  //         style={{
  //           transform: `rotate(${rotation}deg) translate(0, -42%)`,
  //         }}
  //       >
  //         <div className="w-1 h-8 bg-black rounded-full" />
  //       </div>
  
  //       {/* Center content */}
  //       <div className="absolute inset-0 flex items-center justify-center">
  //         <span className="text-lg font-medium">{percentage}%</span>
  //       </div>
  //     </div>
  //   );
  // };
  
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
          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : keywordData ? (
            <>
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap');
              </style>
              <div className="flex flex-col lg:flex-row w-full mt-4 justify-start">
                <div className="w-full flex flex-col lg:w-1/2">
                  <div className="p-4 flex flex-col justify-center items-center bg-white rounded-lg border border-gray-500">
                    <div className="space-y-6">
                      <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-orange-500">
                          Competition
                        </h2>
                        <p className="text-2xl font-semibold">
                          {keywordData.keyword_difficulty}%
                        </p>
                      </div>
                      {/* <Difficultycircle /> */}
                      <Difficultycircle 
                        percentage={keywordData.keyword_difficulty} 
                        // description={keywordData.difficulty_description} 
                      />
                    </div>
                  </div>
                  <div className="p-4  bg-[#12153D] rounded-lg text-white text-center lg:text-left mt-4">
                    <h1 className="text-xl p-8">
                      {keywordData.difficulty_description}
                      {/* this is the hardest keyword and has a lot of competition. */}
                    </h1>
                  </div>
                </div>
                <div className="pr-4 pl-4">
                  <div className="p-8 bg-[#12153D] rounded-lg text-white h-[330px] w-[300px] text-center lg:text-left">
                    <h1
                      className="text-md lg:text-2xl font-bold mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      What is it?
                    </h1>
                    <p className="text-justify">
                      <span className="text-orange-500">Competition</span> estimates how difficult it is to rank for a
                      keyword. The higher the keyword difficulty, the larger the competition.
                    </p>
                  </div>
                  <div className="bg-gray-300 h-[250px] w-[300px] mt-4 rounded-md flex justify-center items-center">
                    <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                  </div>
                </div>
                <div className="bg-gray-300 h-[600px] w-[120px] p-14 rounded-md flex justify-center items-center">
                  <h1 className="text-md lg:text-2xl font-bold">AD</h1>
                </div>
              </div>
              <div className="bg-[#12153d] text-white mt-4 p-8 rounded-md text-center lg:text-left">
                <p
                  className="text-md lg:text-lg"
                  style={{ wordSpacing: "0.5px", letterSpacing: "1.5px" }}
                >
                  To find more information and get more insights check out{" "}
                  <a href="#" className="text-orange-500">cancel score</a> to lower your risk of getting cancelled.
                </p>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 mt-4">
              No data available. Try searching for a keyword.
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default KeywordDifficulty;
