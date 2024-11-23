import React from "react";
import img from "../../../../../../assets/pages/real-estate/smart-location.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const SSelection = () => {
  return (
    <div className="max-w-full">
      <section id="expertise" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-9 items-center justify-between">
          {/* Left Section with White Background (Text) */}
          <div className="bg-[#F2F6F9] col-span-4 flex justify-center items-center">
            <img
              className="w-full h-auto"
              src={img}
              alt="Property Investment Insights"
            />
          </div>

          {/* Right Section with Image */}
          <div className="bg-white col-span-5 flex flex-col justify-center px-6 sm:px-8 lg:px-14 py-8 sm:py-12">
            <section className="mx-0 lg:mx-16 my-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-left">
                Strategic Site Selection
              </h2>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Smart site planning is critical for commercial real estate
                developers. Leverage multiple data streams to make precise site
                selection decisions, understand trade areas, and evaluate
                catchment zones.
              </p>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Whether planning for retail outlets, corporate offices, or
                industrial facilities, Consortium Analytics empowers you to
                justify pricing, optimize layouts, and meet client needs. With
                insights into consumer behavior and human mobility patterns,
                your projects will stand out in a competitive market.
              </p>
              <div className="mt-8 sm:mt-12 text-start">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <span className="text-xs sm:text-sm">Discover More</span>
                  <HiArrowLongRight className="text-base font-semibold" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSelection;
