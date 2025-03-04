import React from "react";
import useKeywordData from "../../../hooks/useKeywordData";
import CountrySelect from "./CountrySelect";
import ServerSelect from "./ServerSelect";

const SearchInput = ({ onSearch, onCountryChange, onServerChange }) => {
  const { searchTerm, setSearchTerm } = useKeywordData();

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="flex flex-col justify-around lg:flex-row items-center w-full lg:min-w-[56rem] space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-1/2 max-w-full shadow-sm p-1 rounded-xl flex items-center border border-gray-400" id="one">
        <input
          className="border-none outline-none flex-grow p-[6.5px]"
          type="text"
          placeholder="Search keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="">
          <i
            className="fa-solid fa-magnifying-glass cursor-pointer  text-2xl p-1 text-gray-500 hover:text-gray-700"
            onClick={handleSearch}
          ></i>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center sm:flex-row border border-gray-400 p-1 rounded-xl space-y-14 sm:space-y-0 sm:space-x-4" id="two">
        <CountrySelect onCountryChange={onCountryChange} />
        <ServerSelect onServerChange={onServerChange} />
      </div>
    </div>
  );
};

export default SearchInput;
