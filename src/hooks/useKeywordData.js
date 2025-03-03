// src/hooks/useKeywordData.js
import { useState, useEffect } from "react";
import data3 from "../assets/data3.js";

const useKeywordData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData(data3); // Set the data from the local file
  }, []);

  const setKeywordData = (keyword) => {
    setLoading(true);
    const result = data3.find(
      (item) => item.keyword.toLowerCase() === keyword.toLowerCase()
    );
    setData(result ? [result] : []);
    setLoading(false);
  };

  // Filter the data based on the search term
  const filteredData = data.filter((item) =>
    item.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { data: filteredData, searchTerm, setSearchTerm, setKeywordData, loading };
};

export default useKeywordData;