import React, { useState } from "react";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center p-6">
        <button onClick={toggleSidebar}>
          <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>
      </div>
      <div
        className={`bg-white text-black ml-6 p-6 w-72 mt-4 rounded-lg mr-4 fixed md:relative transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-around mb-6">
          <div>
            <i className="fas fa-user-circle text-5xl bg-blue-500 rounded-full mb-6"></i>
          </div>

          <div className="mb-4 mr-3">
            <span className="mb-4 mr-3"> New User</span>
          </div>
        </div>
        {[
          "Keyword volume",
          "Competetive Research",
          "Keyword Research",
          "Keyword Difficulty",
          "On page & Tech SEO",
          "Local",
          "Advertising",
          "Social Media",
        ].map((option) => (
          <div
            key={option}
            className={`mb-4 p-3 cursor-pointer rounded ${
              selectedOption === option
                ? "bg-blue-100 text-blue-500 rounded-lg"
                : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
