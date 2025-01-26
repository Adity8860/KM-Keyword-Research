import React from 'react';
import './registation.css';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-gradient-to-r from-orange-300 to-blue-400 flex flex-col justify-center items-center">
        <h1 className="text-2xl mb-4">Join Us!</h1>
        <div className="flex items-center">
          <span className="text-6xl font-bold">W.</span>
          <div className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" stroke="blue" strokeWidth="2" fill="lightgreen" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="blue" strokeWidth="2" strokeLinecap="round" />
              <circle cx="9" cy="9" r="1" fill="blue" />
              <circle cx="15" cy="9" r="1" fill="blue" />
            </svg>
          </div>
        </div>
        <p className="mt-4">
          Already a member? <Link to="/login" className="text-blue-500">Log in here</Link>
        </p>
      </div>
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center rounded-sm shadow-md">
        <h2 className="text-3xl mb-6">Register</h2>
        <form className="w-3/4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="mb-4">
            <button
              className="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Register now
            </button>
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500">Forgot your password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
