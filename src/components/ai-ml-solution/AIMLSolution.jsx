import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdOnlinePrediction } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import img from "../../assets/ai-ml.svg";

const AIMLSolution = () => {
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
              <LuBrainCircuit />
            </p>
            <p className="text-xs font-semibold">AI and Machine Learning</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            AI and Machine Learning Solutions for Predictive Analytics
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Unlock the potential of AI and machine learning to predict future
            trends, enhance operations, and inform strategic decisions. Our
            advanced solutions help you stay ahead by leveraging sophisticated
            algorithms and data insights.
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
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-full md:w-3/4" src={img} alt="AI ML Solution" />
        </div>
      </div>

      {/* Three Key Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdOnlinePrediction />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Predictive Sales Analytics
          </h3>
          <p className="text-gray-900 text-sm">
            Forecast future sales by analyzing historical data, identifying
            trends, and making data-driven decisions to increase revenue.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <GrOptimize />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Operational Efficiency Optimization
          </h3>
          <p className="text-gray-900 text-sm">
            Streamline your processes, reduce costs, and boost efficiency using
            machine learning techniques.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <FaArrowTrendUp />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Market Trend Forecasting
          </h3>
          <p className="text-gray-900 text-sm">
            Stay ahead of market changes and seize emerging opportunities with
            predictive models that inform proactive strategy adjustments.
          </p>
        </section>
      </div>
    </section>
  );
};

export default AIMLSolution;
