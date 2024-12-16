import React from "react";
import GeoMap from "./GeoMap";
import { MdAnalytics } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { BsCloudCheck } from "react-icons/bs";
import { TiFlowMerge } from "react-icons/ti";
import { IoSparklesOutline } from "react-icons/io5";

const VisualOverview = () => {
  return (
    <div className="max-w-full bg-white mx-2 md:mx-10 rounded-lg">
      <section
        id="expertise"
        className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-14"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
          <div className="w-full md:w-1/2">
            <GeoMap />
          </div>
          <div className="flex-1 space-y-6 pt-4">
            <div className="flex items-center gap-1 text-sky-600">
              <p className="text-3xl sm:text-4xl">
                <MdAnalytics />
              </p>
              <p className="text-xs font-semibold">Analytics</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Advanced Analytics with An Interactive Workflow Tool
            </h2>
            <p className="text-gray-900 text-lg sm:text-xl">
              Effortlessly create and manage sophisticated data processing
              pipelines directly in the cloud using our seamless drag-and-drop
              interface.
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
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <BsCloudCheck />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Fully cloud-integrated
            </h3>
            <p className="text-gray-900 text-sm">
              Build, execute, and scale workflows directly in your data
              warehouse without the need for additional coding or ETL processes.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <TiFlowMerge />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Over 100 pre-configured analysis modules
            </h3>
            <p className="text-gray-900 text-sm">
              Access a comprehensive set of drag-and-drop tools for data
              preparation and analysis, suitable for users of all expertise
              levels.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <IoSparklesOutline />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Integrated GenAI features
            </h3>
            <p className="text-gray-900 text-sm">
              Harness the potential of built-in large language models and
              machine learning tools for faster decision-making and enhanced
              analytics.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default VisualOverview;
