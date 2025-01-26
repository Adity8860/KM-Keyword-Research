import React from "react";
import { Link } from "react-router-dom"; // Correct import statement
import './registation.css';

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-300 to-blue-400 flex flex-col justify-center items-center opacity-0 md:opacity-100">
        <div className="opacity-90">
          <h1 className="text-2xl mb-4 text-white">Welcome!</h1>
          <div className="flex items-center">
            <span className="text-6xl font-bold text-white">W.</span>
            <div className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <circle cx="9" cy="9" r="1" />
                <circle cx="15" cy="9" r="1" />
              </svg>
            </div>
          </div>
          <p className="mt-4 text-white">
            Not a member yet?
            <Link to="/register" className="text-blue-500 opacity-100">
              Register now
            </Link>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col bg-white justify-center items-center rounded-sm shadow-md">
        <h2 className="text-3xl mb-6">Log in</h2>
        <form className="w-3/4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email or Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email or Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Keep me logged in</span>
            </label>
          </div>
          <div className="mb-4">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Log in now
            </button>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500">
              Forgot your password?
            </a>
          </div>
          <div className="mt-6">
            <p className="text-center">Or sign in with</p>
            <div className="flex justify-center mt-4">
              <button className="bg-white border cursor-pointer border-gray-300 text-gray-700 font-bold py-2 px-4 rounded mx-2 relative group">
                <span className="group-hover:scale-125 transition-transform">
                  <i className="fa-brands fa-google"></i>
                </span>
              </button>
              <button className="bg-white border cursor-pointer border-gray-300 text-gray-700 font-bold py-2 px-4 rounded mx-2 relative group">
                <span className="group-hover:scale-125 transition-transform">
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </button>
              <button className="bg-white border cursor-pointer border-gray-300 text-gray-700 font-bold py-2 px-4 rounded mx-2 relative group">
                <span className="group-hover:scale-125 transition-transform">
                  <i className="fa-brands fa-microsoft"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
