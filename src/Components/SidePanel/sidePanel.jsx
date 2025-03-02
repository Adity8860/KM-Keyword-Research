import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import LoginPage from "../Login&Registation/loginForm"; // Import LoginPage
import { isAuthenticated } from "../../utils/auth"; // Import isAuthenticated

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const location = useLocation(); // Get the current location

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!isAuthenticated() && location.pathname !== "/") {
      setIsLoginVisible(true); 
    }
  }, [location.pathname]);

  const hideLogin = () => {
    setIsLoginVisible(false);
  };

  return (
    <>
      {!isSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={toggleSidebar} className="bg-transparent border-none">
            <i className={`fas ${isSidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      )}
      <div
        className={`bg-[#12153D] text-white p-6 w-72 lg:min-h-screen fixed md:relative transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0 top-0 rounded-none mt-0" : "-translate-x-full mt-4 rounded-t-md"
        } md:translate-x-0 md:ml-6 md:mr-4 ${isSidebarOpen ? "w-full h-full" : "w-72"}`}
        style={{ height: isSidebarOpen ? "100vh" : "auto" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex justify-center items-center space-x-5.5">
            <i className="fas fa-user-circle text-5xl bg-blue-500 rounded-full mb-6"></i>
            <span className="mb-4 mr-3"> New User</span>
          </div>
          <button onClick={toggleSidebar} className="md:hidden bg-transparent border-none">
            <i className="fas fa-times text-2xl"></i>
          </button>
        </div>

        {[
          { name: "Related Keywords", path: "/related-keywords" },
          { name: "Longtail Keywords", path: "/long-tail-keywords" },
          { name: "Audience volume", path: "/keyword-research" },
          { name: "Competiton", path: "/keyword-difficulty" },
          { name: "Spam Score", path: "/spam-score" },
          { name: "What’s Trending", path: "/trends"},
          { name: "SEO Difficulty", path: "/seo-difficulty" },
        ]. map((option) => (
          <Link to={option.path} key={option.name}>
            <div
              className={`mb-4 p-3 cursor-pointer rounded ${
                selectedOption === option.name ? "bg-orange-700 text-[#12153d] rounded-lg" : ""
              }`}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
          </Link>
        ))}
      </div>
      {isLoginVisible && <LoginPage isVisible={isLoginVisible} onClose={hideLogin} />}
    </>
  );
};

export default Sidebar;
