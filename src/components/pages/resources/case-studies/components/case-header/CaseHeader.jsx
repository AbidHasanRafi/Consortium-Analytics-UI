import React from "react";
import img from "../../../../../../assets/case-study.png";

const CaseHeader = () => {
  return (
    <header className="w-full h-auto pt-28 pb-16 px-0 lg:px-6 bg-gray-800">
      <div className="px-8 md:px-32 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left-aligned text */}
        <div className="text-left text-white max-w-full md:max-w-4xl order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-10 lg:mt-0 mb-6">
            Case Studies
          </h2>
          <p className="text-base text-gray-400 sm:text-lg w-full md:w-3/4">
            Download our free Location Intelligence & Spatial Data Science case
            studies to learn more about how spatial analytics can be used in
            different industries.
          </p>
        </div>

        {/* Right-aligned image */}
        <div className="mt-8 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2 lg:w-3/4 order-1 md:order-2">
          <img src={img} alt="Case Study" className="w-3/4 md:w-1/2 h-auto" />
        </div>
      </div>
    </header>
  );
};

export default CaseHeader;
