import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleSidebar} className="bg-transparent border-none">
          <i
            className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}
          ></i>
        </button>
      </div>
      <div
        className={`bg-[#12153D] text-white p-6 w-72 h-screen mt-4 rounded-lg fixed md:relative transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:ml-6 md:mr-4 ${
          isSidebarOpen ? "w-full h-full" : "w-72"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex justify-center items-center space-x-5.5">
            <i className="fas fa-user-circle text-5xl bg-blue-500 rounded-full mb-6"></i>
            <span className="mb-4 mr-3"> New User</span>
          </div>
        </div>

        {[
          { name: "Keyword volume", path: "/keyword-volume" },
          { name: "Competetive Research", path: "/competetive-research" },
          { name: "Keyword Research", path: "/keyword-research" },
          { name: "Keyword Difficulty", path: "/keyword-difficulty" },
          { name: "On page & Tech SEO", path: "/on-page-tech-seo" },
          { name: "Local", path: "/local" },
          { name: "Advertising", path: "/advertising" },
          { name: "Social Media", path: "/social-media" },
        ].map((option) => (
          <Link to={option.path} key={option.name}>
            {" "}
            {/* Add Link component */}
            <div
              className={`mb-4 p-3 text-white cursor-pointer rounded ${
                selectedOption === option.name
                  ? "bg-orange-700 text-orange-500 rounded-lg"
                  : ""
              }`}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
