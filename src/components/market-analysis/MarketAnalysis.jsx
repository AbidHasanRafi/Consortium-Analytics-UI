import React from "react";
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiFileUserFill } from "react-icons/ri";
import { SiTestcafe } from "react-icons/si";
import { MdOnlinePrediction } from "react-icons/md";
import { RetailGraph } from "./RetailGraph";

const MarketAnalysis = () => {
  return (
    <section
      id="expertise"
      className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      {/* Main Content Section */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start">
        <div className="flex-1 space-y-6 pt-4">
          <div className="flex items-center gap-2 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <TbDeviceAnalytics />
            </p>
            <p className="text-xs font-semibold">Market Analysis</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Data-Driven Insights to Stay Ahead in Competitive Markets
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Unlock actionable insights by analyzing market trends, customer
            behaviors, and competitive dynamics to drive growth and optimize
            strategies.
          </p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href="/blogs"
                className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
              >
                <p className="text-xs sm:text-sm">Learn More</p>
                <p className="text-base font-semibold">
                  <HiArrowLongRight />
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Retail Graph Section */}
        <div className="w-full md:w-1/2">
          <RetailGraph />
        </div>
      </div>

      {/* Three Key Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <RiFileUserFill />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Consumer Behavior Insights
          </h3>
          <p className="text-gray-900 text-sm">
            Analyze customer trends, preferences, and purchasing habits to
            uncover growth opportunities and tailor market strategies
            effectively.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <SiTestcafe />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Competitor Benchmarking
          </h3>
          <p className="text-gray-900 text-sm">
            Evaluate your market position by comparing key performance
            indicators with competitors to refine and improve strategies.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdOnlinePrediction />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Predictive Market Trends
          </h3>
          <p className="text-gray-900 text-sm">
            Use predictive analytics to anticipate market shifts, adapt to
            changes, and stay ahead of emerging opportunities.
          </p>
        </section>
      </div>
    </section>
  );
};

export default MarketAnalysis;
