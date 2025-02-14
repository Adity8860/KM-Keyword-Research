import React, { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa"; // Import the back arrow icon

const features = [
  {
    name: "keyword volume",
    details:
      "Keyword volume is the estimated  number of times a specific keyword is searched in a given time period.",
  },
  {
    name: "keyword difficulty",
    details:
      "This metric shows how hard it is to rank for a keyword. Higher difficulty means more competition.",
  },
  {
    name: "spam risk score",
    details:
      "This score measures the likelihood of a keyword being associated with spammy content.",
  },
  {
    name: "trend",
    details: "This metric indicates the search trend of a keyword over time.",
  },
  {
    name: "search intent",
    details:
      "This identifies the user's intention behind searching a keyword, like informational, navigational, or transactional.",
  },
];
const HoverFeatures = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleBack = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="w-full p-4">
      {selectedFeature ? (
        <div className="w-full bg-[#12153D] text-white p-4 h-73 rounded-lg">
          <button
            className="bg-[#12153D] rounded-md  mb-4 flex items-center cursor-pointer"
            onClick={handleBack}
          >
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <p>
            {selectedFeature.details.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  ["number", "of", "times", "searched", "keyword","is"].includes(word.toLowerCase())
                    ? "text-red-500"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <>
          <div className="w-full h-full overflow-hidden" id="features">
            <h2 className="text-lg font-bold mb-4">Understand the features</h2>
            <div className="space-y-2 w-full md:w-1/2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border-1 border-gray-500 rounded-md p-2 relative cursor-pointer hover:bg-[#12153D] hover:text-white"
                  onClick={() => handleClick(feature)}
                >
                  {feature.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HoverFeatures;
