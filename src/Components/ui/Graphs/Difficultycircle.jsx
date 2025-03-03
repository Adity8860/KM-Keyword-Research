import React from "react";

const Difficultycircle = ({ percentage, description }) => {
  const radius = 50; // adjusted radius
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      <div className="relative flex items-center justify-center ">
        <svg
          className="transform -rotate-90"
          width="200"
          height="200"
          viewBox="0 0 120 120" // added viewBox to ensure proper scaling
        >
          <circle
            strokeWidth="20" // increased border width
            stroke="#FFC5A6"
            fill="transparent"
            r="50" // adjusted radius
            cx="60"
            cy="60"
          />
          <circle
            strokeWidth="20" // increased border width
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            // strokeLinecap="round"
            stroke="#E5590F"
            fill="transparent"
            r="50" // adjusted radius
            cx="60"
            cy="60"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          {/* <span className="text-gray-500">Conversion</span> */}
          <span className="text-2xl font-bold hidden">{percentage}</span>
          <p className="text-md font-bold p-8 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Difficultycircle;
