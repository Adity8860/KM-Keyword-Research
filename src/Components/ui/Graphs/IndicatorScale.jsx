import React from "react";

const IndicatorScale = ({ value = 0 }) => {
  const clampedValue = Math.min(Math.max(0, value), 1);
  const percentage = clampedValue * 100;

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative flex items-center mt-8">
        {/* Base dotted line */}
        <div className="w-full h-[2px] border-t-2 border-dashed border-orange-500/50" />

        {/* Solid progress line */}
        <div
          className="absolute left-0 h-[2px] bg-orange-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />

        {/* Start point */}
        <div className="absolute left-0 -translate-x-1/2">
          <span className="absolute -top-8 text-2xl font-bold  text-white">
            0
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-full" />
        </div>

        {/* End point */}
        <div className="absolute right-0 translate-x-1/2">
          <span className="absolute -top-8 text-2xl font-bold text-white">
            1
          </span>
          <div className="w-4 h-4 bg-orange-500 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default IndicatorScale;
