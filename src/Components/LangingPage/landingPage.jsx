// import React, { useState } from "react";
// import { Bar, BarChart } from "recharts";
// import HoverFeatures from "../Components/HoverFeatures.jsx";
// import useKeywordData from "../hooks/useKeywordData.js";
// import BannerAds from "../Components/BannerAds/BannerAds.jsx";
// import SearchInput from "../Components/KeywordInput/SearchInput.jsx";

// export const KeywordResearch = () => {
//   const [keywordData, setKeywordData] = useState(null);
//   const { data: data3, loading } = useKeywordData();
//   const [spamData, setSpamData] = useState(getSpamRiskData("apple", data3));

//   const normalizedScore = Math.max(0, Math.min(100, spamData.spamRisk));
//   const level =
//     normalizedScore < 33 ? "low" : normalizedScore < 66 ? "medium" : "high";

//   const handleSearch = (searchTerm) => {
//     console.log("Searching for:", searchTerm);
//     const result = data3.find(
//       (item) => item.keyword.toLowerCase() === searchTerm.toLowerCase()
//     );
//     console.log("Search result:", result);
//     setKeywordData(result);
//     if (reasult) {
//       setSpamData(getSpamRiskData(result.keyword, data3));
//     }
//   };

//   function getSpamRiskData(searchKeyword, data) {
//     const exactMatch = data.find(
//       (item) => item.keyword.toLowerCase() === searchKeyword.toLowerCase()
//     );
//     return (
//       exactMatch || {
//         keyword: searchKeyword,
//         spamRisk: Math.floor(Math.random() * 100),
//       }
//     );
//   }

//   return (
//     <div className="w-full bg-white grid p-5 rounded-lg">
//       <BannerAds />
//       <SearchInput onSearch={handleSearch} />
//       <div className="w-full max-w-[52rem] mx-auto p-1 mt-2 rounded-lg flex flex-col sm:flex-row items-center">
//         {loading ? (
//           <div className="w-full flex justify-center items-center">
//             <div className="loader">Loading...</div>
//           </div>
//         ) : (
//           keywordData && (
//             <>
//               <div className="w-full flex flex-col">
//                 <div className="flex flex-col sm:flex-row w-full h-full">
//                   <div className="w-full h-full border-1 border-gray-500 p-3 rounded-lg">
//                     <div className="p-4 shadow-lg rounded-lg">
//                       <h1 className="text-lg sm:text-xl text-bold">
//                         {keywordData.relatedKeywordsCount} result for {keywordData.keyword}
//                       </h1>
//                     </div>
//                     <ol className="p-4 max-h-130 overflow-y-auto">
//                       {keywordData.relatedKeywords.map((item, index) => (
//                         <li
//                           key={index}
//                           className="text-xs sm:text-sm md:text-base"
//                         >
//                           {item}
//                         </li>
//                       ))}
//                     </ol>
//                   </div>
//                   <div className="w-full sm:pl-3 mt-4 sm:mt-0">
//                     <div className="flex min-h-[14.5rem] border-none rounded-lg justify-between items-center bg-gray-300 p-3">
//                       <h1 className="flex justify-center items-center text-center text-xl sm:text-sm md:text-base">
//                         ADS
//                       </h1>
//                     </div>
//                     <div className="p-4 border-1 border-gray-500 mt-4 rounded-lg">
//                      <HoverFeatures />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-col sm:flex-row mt-4">
//                   <div className="flex flex-col w-full h-full p-3 rounded-lg">
//                     <div className="bg-[#12153D] p-4 rounded-lg text-white flex flex-col justify-center items-center">
//                       <h3 className="text-xl font-sans font-bold">
//                         Keyword Volume
//                       </h3>
//                       <p className="text-3xl mt-2 font-sans font-bold">{keywordData.volume}</p>
//                     </div>
//                     <div className="p-3 border-1 border-gray-500 rounded-lg mt-4 flex flex-col justify-center items-center">
//                       <h3 className="text-xl font-sans font-bold">
//                         Keyword Difficulty
//                       </h3>
//                       <p className="text-3xl mt-2 font-sans font-semibold">{keywordData.difficulty}%</p>
//                       <p className="text-sm text-center mt-2 font-sans font-semibold">
//                         This keyword will demand 119 high-authority referring
//                         domains and well-optimized content to start ranking for
//                         it.
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col w-full h-full p-3 rounded-lg mt-4 sm:mt-0 sm:ml-4">
//                     <div className="p-2 rounded-lg border-1 border-gray-500 flex flex-col justify-center items-center">
//                       <div className="max-w-2xl mx-auto">
                        
//                           <div className="w-full">
//                             <div className="text-center mb-6">
//                               <h2 className="text-xl font-semibold mb-2">
//                                 Spam Risk Score
//                               </h2>
//                               <div>
//                                 <span className="text-4xl font-bold">
//                                   {normalizedScore}%
//                                 </span>
//                                 <span className="text-gray-500 ml-2">
//                                   {level} risk
//                                 </span>
//                               </div>
//                             </div>
//                             <div className="relative h-2 rounded-full overflow-hidden mt-4">
//                               <div className="absolute inset-0 flex">
//                                 <div className="w-1/3 bg-green-500" />
//                                 <div className="w-1/3 bg-yellow-400" />
//                                 <div className="w-1/3 bg-red-500" />
//                               </div>
//                               <div
//                                 className="absolute top-0 h-full w-0.5 bg-black transform -translate-x-1/2 transition-all duration-500"
//                                 style={{ left: `${normalizedScore}%` }}
//                               />
//                             </div>
//                           </div>
                         
//                       </div>
//                     </div>
//                     <div className="mt-4 bg-[#12153D] flex flex-col justify-center items-center rounded-lg">
//                       <h3 className="text-xl mt-3 font-sans font-bold text-white bg-[#12153D]">
//                         Trends
//                       </h3>
//                       <BarChart
//                         className="bg-[#12153D] p-4 rounded-lg"
//                         width={240}
//                         height={129}
//                         data={keywordData.graphData}
//                       >
//                         <Bar dataKey="value" fill="white" radius={[5, 5, 5, 5]} />
//                       </BarChart>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center items-center w-full h-full p-3 rounded-lg mt-4 sm:mt-0 sm:ml-4">
//                     <div className="flex flex-col justify-center items-center bg-[#12153D] text-white p-3 rounded-lg">
//                       <h1 className="text-xl font-sans font-semibold">
//                         Search intent
//                       </h1>
//                       <div className="flex justify-between items-center mt-4 space-x-2">
//                         <span className="p-1.5 rounded-full text-[#12153D] bg-white text-sm">
//                           informational
//                         </span>
//                         <span className="p-1.5 rounded-full text-[#12153D] bg-white text-sm">
//                           commercial
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex bg-gray-500 flex-col justify-center items-center p-3 rounded-lg mt-4 w-full h-50">
//                       <h1 className="text-[#12153D] font-sans font-bold text-2xl">
//                         AD
//                       </h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default KeywordResearch;
