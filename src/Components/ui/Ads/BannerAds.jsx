import React from 'react';

const BannerAds = () => {
  return (
    <div className="w-full h-[340px] sm:w-[895px] sm:h-[340px]">
      <div
        className="grid bg-[url('/src/assets/bgimage.png')] bg-cover bg-center p-4 sm:p-15 rounded-lg text-white mx-auto w-full h-[340px]"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        <div className="p-4">
          <div className="flex justify-center items-center p-4 min-w-12">
            <h1 className="text-lg text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-wantedSans">
              ADS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAds;
