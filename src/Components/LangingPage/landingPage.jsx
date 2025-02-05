import React, { useState } from "react";
import axios from "axios";

const countries = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "uk", name: "United Kingdom" },
  { code: "au", name: "Australia" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "in", name: "India" },
  { code: "jp", name: "Japan" },
  { code: "cn", name: "China" },
  { code: "br", name: "Brazil" },
];

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
  { code: "hi", name: "Hindi" },
  { code: "pt", name: "Portuguese" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
];

const LandingPage = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [keywordResults, setKeywordResults] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFindKeyword = async () => {
    if (keyword.trim() === "") return;
  
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/scraper/scrape", {
        params: {
          query: keyword,
          location_code: selectedCountry || "us",
          language_code: selectedLanguage || "en",
          limit: 200,
        },
      });
  
      setKeywordResults(response.data.keywords || []);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching keywords:", error);
      setKeywordResults([]);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto w-full h-screen bg-[#edf3e8] flex flex-col items-center min-w-[320px] mb-20">
      <div className="mt-32">
        <h1 className="text-center text-5xl font-bold text-gray-700">Keyword Generator</h1>
        <h4 className="text-center text-gray-500 mt-4">Find thousands of keywords here</h4>

        <div className="flex text-gray-700 text-2xl flex-wrap justify-center my-6">
          {["Google", "Bing", "Yahoo", "YouTube", "Yandex"].map((tab) => (
            <h1
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`cursor-pointer mx-2 ${
                selectedTab === tab ? "text-[#8bc63f] font-bold" : "text-gray-500"
              }`}
            >
              {tab}
            </h1>
          ))}
        </div>

        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="w-96 p-3 border-2 border-[#abd37c] rounded-full focus:outline-none"
            placeholder="Enter your keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="bg-[#8bc63f] p-3 rounded-r-full ml-[-40px] hover:bg-[#79b62a]"
            onClick={handleFindKeyword}
            disabled={loading}
          >
            {loading ? "Loading..." : <i className="fa-solid fa-magnifying-glass text-white"></i>}
          </button>
        </div>

        <div className="flex space-x-4 justify-center">
          <select
            className="p-3 border-[#9cb78b] rounded-full text-[#82ab53]"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code.toUpperCase()} - {country.name}
              </option>
            ))}
          </select>

                  <select className="p-3 border-1 border-[#9cb78b] text-sm   rounded-full  focus:outline-none   text-[#8dbe57]">
                    <option>Select Language</option>
                    {languages.map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.code.toUpperCase()} - {language.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-lg font-bold text-[#8193a6]">
                  Keyword Results
                </h2>
                <p>
                  Your keyword results for "{keywordResults}" will be displayed
                  here.
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 p-2 bg-[#0074b1] text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default LandingPage;
