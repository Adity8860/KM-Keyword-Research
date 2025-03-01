import React from "react";
import useKeywordData from "../../../hooks/useKeywordData";

const SearchInput = ({ onSearch }) => {
  const { searchTerm, setSearchTerm } = useKeywordData();

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div className="w-full lg:min-w-[56rem]">
      <div className="w-full max-w-full mt-4 mx-auto shadow-sm p-1 rounded-lg flex items-center border-1 border-gray-500">
        <input
        className="border-none outline-none"
          type="text"
          placeholder="Search keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
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
    </div>
  );
};

export default SearchInput;
