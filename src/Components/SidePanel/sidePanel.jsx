import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginPage from "../Login&Registation/loginForm";
import { isAuthenticated } from "../../utils/auth";
import Profile from "../../assets/profile.svg";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [username, setUsername] = useState("Guest User"); // Default value
  const location = useLocation();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    if (!isAuthenticated() && location.pathname !== "/") {
      setIsLoginVisible(true);
    }
  }, [location.pathname]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hideLogin = () => {
    setIsLoginVisible(false);
  };

  return (
    <>
      {!isSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button
            onClick={toggleSidebar}
            className="bg-transparent border-none"
          >
            <i
              className={`fas ${
                isSidebarOpen ? "fa-times" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>
      )}
      <div
        className={`bg-[#12153D] text-white p-6 w-72 lg:min-h-screen fixed md:relative transition-transform duration-300 ${
          isSidebarOpen
            ? "translate-x-0 top-0 rounded-none mt-0"
            : "-translate-x-full mt-4 rounded-t-md"
        } md:translate-x-0 md:ml-6 md:mr-4 ${
          isSidebarOpen ? "w-full h-full" : "w-72"
        }`}
        style={{ height: isSidebarOpen ? "100vh" : "auto" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex justify-center items-center space-x-5.5">
            <img src={Profile} alt="" />
            <span className="mr-3">{username}</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="md:hidden bg-transparent border-none"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {[
          { name: "Home", path: "/" },
          { name: "Related Keywords", path: "/related-keywords" },
          { name: "Long-Tail Keywords", path: "/long-tail-keywords" },
          { name: "Search Volume", path: "/search-volume" },
          { name: "Keyword Difficulty", path: "/keyword-difficulty" },
          { name: "Keyword Spam Score", path: "/Keyword-spam-score" },
          { name: "Keyword Trend", path: "/keyword-trend" },
          { name: "CPC (Cost Per Click)", path: "/CPC" },
          {name:"Ad Competitions",path:"/ad-Competition"}
        ].map((option) => (
          <Link to={option.path} key={option.name}>
            <div
              className={`mb-4 p-3 cursor-pointer rounded ${
                selectedOption === option.name
                  ? "bg-orange-700 text-[#12153d] rounded-lg"
                  : ""
              }`}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
          </Link>
        ))}
      </div>
      {isLoginVisible && (
        <LoginPage isVisible={isLoginVisible} onClose={hideLogin} />
      )}
    </>
  );
};
export default Sidebar;
