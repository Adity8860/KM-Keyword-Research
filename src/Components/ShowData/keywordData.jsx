import React, { useState } from "react";
import data2 from "../../assets/data2.js";
// import { Bar } from 'react-chartjs-2'; // Added Bar import

const keywordData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [keywordData, setKeywordData] = useState(null);
  const [hover, setHover] = useState(false);

  const handleSearch = () => {
    const result = data2.find(
      (item) => item.keyword.toLowerCase() === searchTerm.toLowerCase()
    );
    setKeywordData(result);
  };

  const getChartData = () => {
    // Define your chart data here
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Search Volume",
          data: keywordData.trend_data, // Assuming trend_data is an array of values
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    };
  };

  const options = {
    // Define your chart options here
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="w-full bg-white mt-2 grid grid-cols-1 p-6 rounded-lg">
        <div className="grid bg-gradient-to-r mt-4 shadow-md from-orange-500 to-blue-600 p-5 rounded-lg text-white mx-auto w-full max-w-[65rem]">
          <div className="p-9 pl-30">
            <h1 className="text-4xl md:text-6xl mb-4 font-sans font-extrabold">
              Why does you need SEO?
            </h1>
            <ul className="list-disc list-inside mt-2">
              <li>Guaranteed consistent growth</li>
              <li>Leads for ideas and content</li>
              <li>Insights on marketing trends</li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-[65rem] mt-4 mx-auto bg-blue-50 shadow-sm p-1 rounded-lg flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Keyword"
            className="w-full p-2"
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
        <div className="w-full max-w-[65rem] mx-auto p-1 mt-2 rounded-lg flex items-center">
          {keywordData && (
            <div className="grid grid-cols-1 mt-4 bg-white md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md grid justify-center items-evenly">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Volume
                </h2>
                <p className="text-blue-500 text-md md:text-lg">
                  {keywordData.search_volume} (US)
                </p>
                <p className="text-red-600 font-bold">
                  {keywordData.competition_index}% (Very hard)
                </p>
                <p className="text-gray-600 text-sm">
                  The hardest keyword to compete for...
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Global Volume
                </h2>
                <p className="text-blue-500 text-md md:text-lg">
                  {keywordData.search_volume}
                </p>
                <ul className="text-gray-600 text-sm">
                  {/* Example data, replace with actual global volume data */}
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  Intent
                </h2>
                <p className="text-green-500">Informational</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1">
                <h2 className="text-lg md:text-xl font-semibold mb-2">Trend</h2>
                <div className="bg-white h-24">
                  {/* {keywordData && (
                    <Bar data={getChartData()} options={options} />
                  )} */}
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  CPC (Cost Per Click)
                </h2>
                <p className="text-blue-500 text-md md:text-lg">
                  ${keywordData.cpc}
                </p>
                <p className="text-gray-600 text-sm">Competitive Density: 0</p>
                <p className="text-gray-600 text-sm">PLA: 0</p>
                <p className="text-gray-600 text-sm">Ads: 0</p>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-full max-w-[65rem] mx-auto p-1 mt-2 rounded-lg flex items-center">  
          <div
            className={`w-full h-full text-center p-3 rounded-lg shadow-lg transition-all duration-300 ${
              hover ? "bg-blue-500 text-white" : "bg-white text-gray-800"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ height: "100px", width: "100%" }} // Set fixed height and width
          >
            <h2 className="text-md font-light mb-2 p-4 sm:text-lg md:text-xl">
              {hover
                ? "Keyword research is finding out what words people search for online, so businesses can use them to create content, get noticed, and attract the right audience"
                : "Try our Keyword Research tool right now!"}
            </h2>
            <p className="text-lg">{hover ? "" : ""}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default keywordData;
