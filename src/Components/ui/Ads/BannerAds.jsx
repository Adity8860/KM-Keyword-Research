import React from 'react';

const BannerAds = () => {
  return (
    <div className="w-full lg:min-w-[56rem]">
      <div
        className="grid bg-[url('/src/assets/bgimage.png')] bg-cover bg-center p-15 rounded-lg text-white mx-auto w-full"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        <div className="p-4 sm:p-2 md:p-4 lg:p-4 xl:p-4">
          <div className="flex justify-center items-center p-8 sm:p-4 md:p-8 lg:p-12 xl:p-16 min-w-12">
            <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-wantedSans">
              ADS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAds;
