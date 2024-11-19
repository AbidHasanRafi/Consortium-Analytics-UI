import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-center px-4 md:px-8 lg:px-16">
      {/* Logo */}
      <img
        src="/consortium-analytics.svg"
        alt="Consortium Analytics Logo"
        className="w-24 sm:w-32 md:w-40 lg:w-48 mb-6 md:mb-8 drop-shadow-lg animate-pulse"
      />
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 md:mb-6 animate-bounce">
        OOPS!
      </h1>
      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-6 md:mb-8">
        This page doesn't exist or is under construction.
      </p>
      {/* Button */}
      <Link
        to="/"
        className="btn btn-primary shadow-lg hover:border-slate-100 hover:btn-accent transition-transform transform hover:text-white"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
