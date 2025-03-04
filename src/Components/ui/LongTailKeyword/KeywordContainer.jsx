import React, { useState } from "react";

const KeywordContainer = ({ keywordData }) => {
  const [selectedEngine, setSelectedEngine] = useState("Google");

  const handleEngineChange = (event) => {
    setSelectedEngine(event.target.value);
  };

  return (
    <>
      <div>
        <div className="w-full lg:w-[26rem]">
          {/* <div className="bg-[#12153d] p-4 flex flex-col justify-between items-center rounded-xl mb-4 ">
            <h2 className="text-xl text-white font-bold font-wanted-normals  ">your search engine</h2>
            <select className="p-2 bg-[#12153d] rounded-full mt-2 text-white  w-[21rem] border-1 border-gray-300" value={selectedEngine} onChange={handleEngineChange}>
              <option value="Google">Google</option>
              <option value="Bing">Bing</option>
              <option value="Yahoo">Yahoo</option>
            </select>
          </div> */}
          <div
            className="w-full h-full sm:h-[20rem] lg:h-auto border-1 border-gray-500 p-3 sm:p-4 rounded-lg"
            id="longTail"
          >
            <div className="p-2 sm:p-4 shadow-lg rounded-lg">
              <h1 className="text-base sm:text-lg font-bold">
                {keywordData.relatedKeywordsCount} Result for{" "}
                {keywordData.keyword}
              </h1>
            </div>
            <ol className="p-2 sm:p-4 max-h-126.5 overflow-y-auto">
              {keywordData.relatedKeywords.map((item, index) => (
                <li key={index} className="p-1.5 text-xs sm:text-sm md:text-base">
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeywordContainer;
