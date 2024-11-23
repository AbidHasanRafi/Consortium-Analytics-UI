import React from "react";
import img from "../../../../../../assets/pages/sports/event-management.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const EInsights = () => {
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
                Event Management Insights
              </h2>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Plan and execute sports events seamlessly with data-driven
                insights. Our platform provides real-time analytics and
                actionable intelligence to help you optimize event management,
                enhance fan experiences, and drive revenue growth.
              </p>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                From attendance forecasts to resource allocation, our analytics
                enable efficient management and elevate the fan experience for
                every event.
              </p>
              <div className="mt-8 sm:mt-12 text-start">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <span className="text-xs sm:text-sm">Read More</span>
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

export default EInsights;