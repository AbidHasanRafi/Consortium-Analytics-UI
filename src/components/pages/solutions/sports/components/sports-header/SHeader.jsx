import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/sports/sports.svg";

const SHeader = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 flex items-center">
      {/* Header Content */}
      <div className="w-full mx-auto px-4 sm:px-12 lg:pl-32 lg:pr-5 py-10 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="w-full flex justify-center lg:order-2">
            <img
              src={img}
              alt="Real Estate Analytics"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-white lg:order-1">
            <h1 className="text-2xl font-semibold mb-4 lg:text-4xl leading-tight">
              Sports
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              In the competitive world of sports, data-driven insights are
              transforming how teams perform, engage with fans, and optimize
              revenue. Our services leverage performance analytics, AI, and
              machine learning to provide deeper insights into player
              performance, fan behavior, and venue utilization. From forecasting
              revenue to improving fan engagement and team strategies, we help
              sports organizations maximize their potential both on and off the
              field.
            </p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#request-demo"
                  className="flex items-center text-blue-400 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-500 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Request A Demo</p>
                  <HiArrowLongRight className="text-base font-semibold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHeader;
