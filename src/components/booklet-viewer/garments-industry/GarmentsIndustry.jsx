import React from "react";
import { FaFileDownload } from "react-icons/fa";

const GarmentsIndustry = () => {
  const openPDF = () => {
    window.open(
      "https://raw.githubusercontent.com/consortium-analytics/Consortium-Analytics-Assets/main/pdf-assets/Garments%20Manufacturing%20Industry%20Analytics%20Dashboard.pdf",
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 text-center text-white">
      {/* Header Text */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
        Elevating the Garments Industry
      </h1>
      <p className="text-base sm:text-lg mb-6 text-gray-300 max-w-2xl px-4">
        Explore key analytics and insights into the garments manufacturing
        industry. Click the button below to download the PDF for detailed
        information.
      </p>

      {/* Download Button */}
      <button
        onClick={openPDF}
        className="flex items-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm sm:text-lg font-semibold rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        <FaFileDownload className="text-lg sm:text-2xl" />
        <span>Click Here to Download the PDF</span>
      </button>
    </div>
  );
};

export default GarmentsIndustry;
