import React from "react";
import Chart from "./Chart";
import { MdAnalytics } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsCloudCheck } from "react-icons/bs";
import { TiFlowMerge } from "react-icons/ti";
import { IoSparklesOutline } from "react-icons/io5";

const VisualizationAnalytics = () => {
  return (
    <section
      id="expertise"
      className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-24 px-6 md:px-0"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
        <div className="flex-1 space-y-6 pt-4">
          <div className="flex items-center gap-1 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <MdAnalytics />
            </p>
            <p className="text-xs font-semibold">Analytics</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful analytics with a visual workflow design tool
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Easily design and automate advanced data processing and analysis
            pipelines natively on the leading cloud platforms using our
            intuitive drag-and-drop interface.
          </p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href="#"
                className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
              >
                <p className="text-xs sm:text-sm">Explore More</p>
                <p className="text-base font-semibold">
                  <HiArrowLongRight />
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Chart />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <BsCloudCheck />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Fully cloud native
          </h3>
          <p className="text-gray-900 text-sm">
            Design, run and scale workflows natively in your data warehouse. No
            code, no data duplication, or complex ETLs.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <TiFlowMerge />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            100+ ready-to-go analysis components
          </h3>
          <p className="text-gray-900 text-sm">
            Intuitive analytics for any skill level. From data preparation to
            analysis functions in a complete suite of drag-and-drop components.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <IoSparklesOutline />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Built-in GenAI capabilities
          </h3>
          <p className="text-gray-900 text-sm">
            Unleash the power of cloud native LLMs and Machine Learning models
            for improved productivity & quicker insights.
          </p>
        </section>
      </div>
    </section>
  );
};

export default VisualizationAnalytics;
