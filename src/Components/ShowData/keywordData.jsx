import React, { useState } from "react";
import data3 from "../../assets/data3.js";
// import { Bar } from 'react-chartjs-2'; // Removed Bar import

const KeywordData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keywordData, setKeywordData] = useState(null);

  const handleSearch = () => {
    const result = data3.find(
      (item) => item.keyword.toLowerCase() === searchTerm.toLowerCase()
    );
    setKeywordData(result);
  };

  // Removed chart options and data

  return (
    <>
      <div className="w-full bg-white grid grid-cols-1 p-6 rounded-lg animate-fade-in">
        <div className="grid bg-gradient-to-r shadow-md from-orange-500 to-blue-600 p-5 rounded-lg text-white mx-auto w-full max-w-full">
          <div className="p-9 sm:pl-4 md:pl-10">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl mb-4 font-sans font-extrabold">
              Why do you need SEO?
            </h1>
            <ul className="list-disc list-inside mt-2">
              <li className="text-xs sm:text-sm md:text-base">
                Guaranteed consistent growth
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                Leads for ideas and content
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                Insights on marketing trends
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-full mt-4 mx-auto shadow-sm p-1 rounded-lg flex items-center border-1 border-gray-500">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Keyword"
            className="w-full p-2 border-none outline-none bg-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleSearch}
            className="h-6 w-6 ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 18l6-6m0 0l-6-6m6 6H3"
            />
          </svg>
        </div>
        <div className="w-full max-w-[65rem] mx-auto p-1 mt-2 rounded-lg flex flex-col sm:flex-row items-center">
          {keywordData && (
            <div className="flex flex-col sm:flex-row w-full h-full">
              <div className="w-full h-full border-1 border-gray-500 p-4 rounded-lg">
                <div className="p-4 shadow-lg rounded-lg">
                  <h1 className="text-lg sm:text-xl text-bold">
                    {keywordData.relatedKeywordsCount} result for {searchTerm}
                  </h1>
                </div>
                <ol className="p-4 max-h-100 overflow-y-auto">
                  {keywordData.relatedKeywords.map((item, index) => (
                    <li key={index} className="text-xs sm:text-sm md:text-base">{item}</li>
                  ))}
                </ol>
              </div>
              <div className="w-full sm:pl-3 mt-4 sm:mt-0">
                <div className="flex min-h-[9rem] border-1 border-gray-500 rounded-lg justify-between items-center bg-gray-300 p-4">
                  <h1 className="text-center text-xs sm:text-sm md:text-base">ADS</h1>
                </div>
                <div className="mt-4">
                  <div className="h-25 bg-indigo-900 text-white text-center pt-5 rounded-t-lg">
                    <h1 className="text-lg sm:text-xl">Keyword volume</h1>
                    <p className="text-lg sm:text-xl font-bold">{keywordData.volume}</p>
                  </div>
                  <div className="w-full relative h-25 border-t-none">
                    <div className="absolute rounded-b-lg h-full inset-0 flex items-center justify-center border-1 border-gray-500 text-white text-lg transition-opacity duration-300 ease-in-out z-10 opacity-100 hover:opacity-0">
                      <div className="">
                        <p className="text-black text-lg sm:text-2xl p-4 font">
                          what does it mean?
                        </p>
                      </div>
                    </div>
                    <div className="absolute rounded-b-lg inset-0 flex items-center justify-center bg-indigo-900 text-white text-lg transition-opacity duration-500 ease-in-out z-20 opacity-0 hover:opacity-100">
                      <div className="flex flex-col items-center p-4">
                        <h1 className="text-sm sm:text-lg text-bold">
                          Keyword volume is the estimated{" "}
                          <span className="text-orange-500">No of times</span> a
                          specific{" "}
                          <span className="text-orange-500">
                            keyword is searched
                          </span>{" "}
                          in a given time period
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-25 bg-indigo-900 text-white text-center pt-5 rounded-t-lg">
                    <h1 className="text-lg sm:text-xl">Keyword Difficulty</h1>
                    <p className="text-lg sm:text-xl font-bold">{keywordData.difficulty} %</p>
                  </div>
                  <div className="w-full relative h-25 border-t-none">
                    <div className="absolute rounded-b-lg h-full inset-0 flex items-center justify-center border-1 border-gray-500 text-white text-lg transition-opacity duration-300 ease-in-out z-10 opacity-100 hover:opacity-0">
                      <div className="">
                        <p className="text-black text-lg sm:text-2xl p-4 font">
                          what does it mean?
                        </p>
                      </div>
                    </div>
                    <div className="absolute rounded-b-lg inset-0 flex items-center justify-center bg-indigo-900 text-white text-lg transition-opacity duration-500 ease-in-out z-20 opacity-0 hover:opacity-100">
                      <div className="flex flex-col items-center p-4">
                        <h1 className="text-sm sm:text-lg text-bold">
                          Keyword volume is the estimated{" "}
                          <span className="text-orange-500">No of times</span> a
                          specific{" "}
                          <span className="text-orange-500">
                            keyword is searched
                          </span>{" "}
                          in a given time period
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full relative h-30 mt-4" id="hover">
          <div className="absolute rounded-lg h-full inset-0 flex items-center justify-center border-1 border-gray-500 text-white text-lg transition-opacity duration-300 ease-in-out z-10 opacity-100 hover:opacity-0 p-4 sm:p-10">
            <div className="items-center">
              <p className="text-black text-md sm:text-lg p-2 sm:p-4 lg:text-xl">
                Want to grow your business, your social media with the right
                advertising and marketing and much more with Keyword Raja?
              </p>
            </div>
          </div>
          <div className="absolute rounded-lg inset-0 flex items-center justify-center bg-orange-500 text-white text-lg transition-opacity duration-500 ease-in-out z-20 opacity-0 hover:opacity-100 p-3 sm:p-10">
            <div className="flex flex-col items-center">
              <h1 className="text-md sm:text-lg text-bold lg:text-2xl">
                Make your account for free
              </h1>
              <button className="bg-white mt-2 text-gray-600 p-2 w-[8rem] sm:w-[12rem] rounded-xl text-center cursor-pointer">
                click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeywordData;

// Add the following CSS to your stylesheet or a CSS-in-JS solution
// @keyframes fade-in {
//   0% { opacity: 0; }
//   100% { opacity: 1; }
// }
// .animate-fade-in {
//   animation: fade-in 1s ease-in-out;
// }
