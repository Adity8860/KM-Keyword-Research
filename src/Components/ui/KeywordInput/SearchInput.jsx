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
       <div><i className="fa-solid fa-magnifying-glass cursor-pointer" onClick={handleSearch}></i></div>
      </div>
    </div>
  );
};

export default SearchInput;
