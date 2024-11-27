import React from "react";
import img from "../../../../../../assets/pages/real-estate/regional-mapping.jpg";
import { HiArrowLongRight } from "react-icons/hi2";
import MarketTrendsGraph from "./MarketTrendsGraph";

const MTrends = () => {
  return (
    <div className="max-w-full">
      <section id="expertise" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-9 items-center justify-between">
          {/* Right Section with Image (Image on top for small screens, right for larger ones) */}
          <div className="bg-[#F2F6F9] col-span-1 lg:col-span-4 flex justify-center items-center order-1 lg:order-2">
            {/* <img
              className="w-full h-auto"
              src={img}
              alt="Property Investment Insights"
            /> */}
            <MarketTrendsGraph />
          </div>

          {/* Left Section with White Background (Text) */}
          <div className="bg-white col-span-1 lg:col-span-5 flex flex-col justify-center px-6 sm:px-8 lg:px-14 py-8 sm:py-12 order-2 lg:order-1">
            <section className="mx-0 lg:mx-16 my-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-left">
                Market Trends
              </h2>
              <p className="text-gray-900 text-lg sm:text-xl">
                Take the guesswork out of collecting and analyzing spatial data.
                With Consortium Analytics, access a comprehensive suite of
                curated geospatial datasets through our Data Observatory.
              </p>
              <p className="text-gray-900 text-lg sm:text-xl">
                From foot traffic patterns to consumer behavior, our data-driven
                insights help you understand market trends and make informed
                decisions.
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

export default MTrends;
