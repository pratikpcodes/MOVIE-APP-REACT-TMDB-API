import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  //bg-gradient-to-r from-cyan-700 to-cyan-900 .... transition-transform transform hover:scale-105

  return (
    <header className="  border-b  border-stone-700 w-screen   p-4 transition-bg  text-white  transition-all bg-slate-900 scale-100">
      <div className="container  ">
        <div className="flex justify-around items-center m-0 p-0">
          <div className="logo">
            <Link to="/">
              <img
                className="h-20 w-20 rounded-full  transition-transform transform hover:scale-75 "
                alt="no"
                src="src\assets\clapperboard.png"
              />
            </Link>
          </div>
          <div>
            <h1 className="text-md font-extrabold leading-tight transition-transform transform hover:scale-125  hover:text-slate-300  ">
              Movie-App
            </h1>
            <p className="mt-0 text-md transition-transform transform hover:scale-90  hover:text-slate-300">
              A single stop for your Movie Reccomendations
            </p>
          </div>
          <nav className="flex items-center space-x-6">
            <Link
              to="/trend"
              className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform "
            >
              Trending
            </Link>
            <Link
              to="/pop"
              className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform "
            >
              Popular
            </Link>

            <Link
              to="/movie"
              className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform "
            >
              Movies
            </Link>
            <Link
              to="/tv"
              className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform "
            >
              TV Shows
            </Link>
            <Link to="/people">
              <button className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform ">
                People
              </button>
            </Link>
          </nav>
          <div className="flex items-center">
            <Link to="/login">
              <button className="text-md p-1 rounded-md font-bold  mr-8  scale-110  hover:bg-slate-600 transition-transform transform">
                About Us
              </button>
            </Link>
            <Link to="/login">
              <button className="text-md p-1 rounded-md font-bold   scale-110  hover:bg-slate-600 transition-transform transform">
                Contact Us
              </button>
            </Link>

            {/* <button className="ml-4 p-2 hover:bg-white hover:text-purple-800 text-md font-bold ">Sign Up</button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// hover: text-gray-300::::leading-tight::line height
