import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex bg-white h-full p-4 justify-between items-center px-4 md:px-28 text-gray-600">
        <div className="flex items-center">
          <span>LOGO</span>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
        <div className={`absolute top-16 right-0 w-full ${isMenuOpen ? "block" : "hidden"} md:relative md:top-0 md:block`}>
          <ul className="w-full md:px-2 ml-0 md:flex md:space-x-2 justify-end text-right">
            <li className="p-4 relative group cursor-pointer" onClick={toggleDropdown}>
              <span className="text-gray-500 font-semibold">Keyword Research Tools</span>
              <span
                className={`ml-2 text-gray-500 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                <i className={`fas ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </span>{" "}
              <ul
                className={`absolute right-0 top-full transition-all duration-300 ${
                  isDropdownOpen ? "opacity-100 visible max-h-96" : "opacity-0 invisible max-h-0"
                } bg-white overflow-hidden`}
              >
                {["Keyword Volume", "Keyword Difficulty", "Tool 3"].map((option) => (
                  <li
                    key={option}
                    className={`p-4 cursor-pointer ${
                      selectedOption === option ? "bg-orange-100 text-orange-500 rounded-lg" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </li>
            {["Blogs", "Tools", "Contact"].map((option) => (
              <li
                key={option}
                className={`p-4 cursor-pointer font-semibold ${
                  selectedOption === option ? "bg-orange-100 text-orange-500 rounded-lg" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
            <Link to="/login"> <li className="flex items-center justify-center hover:bg-orange-100 cursor-pointer rounded-lg p-2">
              <button className="bg-orange-500 text-white p-2 cursor-pointer rounded-lg">Login</button>
            </li></Link>
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;