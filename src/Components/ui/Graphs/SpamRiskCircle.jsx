import React from "react";

const SpamRiskCircle = ({ percentage, description }) => {
  // Extract only the first digit if percentage is a string or number
  const firstDigit = percentage ? String(percentage).charAt(0) : '0';
  
  // Convert to number for calculations (between 0-9)
  const displayPercentage = parseInt(firstDigit, 10);
  
  // Scale the single digit to a percentage for the circle (0-9 to 0-100%)
  const scaledPercentage = displayPercentage * 10; // 0-90%
  
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scaledPercentage / 100) * circumference;

  return (
    <div>
      <div className="relative flex items-center justify-center">
        <svg
          className="transform -rotate-90"
          width="200"
          height="200"
          viewBox="0 0 120 120"
        >
          <circle
            strokeWidth="20"
            stroke="#FFC5A6"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
          <circle
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            stroke="#E5590F"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          {/* Now showing just the first digit */}
          <span className="text-4xl font-bold">{firstDigit}</span>
          <p className="text-md font-bold p-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpamRiskCircle;
