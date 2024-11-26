import React from "react";
import Chart from "./Chart";
import { VscGraph } from "react-icons/vsc";
import { HiArrowLongRight } from "react-icons/hi2";
import { MdDashboard } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

const VisualizationAnalytics = () => {
  return (
    <section
      id="expertise"
      className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
        <div className="flex-1 space-y-6 pt-4">
          <div className="flex items-center gap-1 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <VscGraph />
            </p>
            <p className="text-xs font-semibold">Visualization</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advanced Visualization with An Easy-to-use Design Interface
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Effortlessly create and manage complex data workflows with a highly
            visual platform that integrates seamlessly with top cloud
            technologies.
          </p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href="#"
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

        <div className="w-full md:w-1/2">
          <Chart />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdDashboard />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Interactive Visual Dashboards
          </h3>
          <p className="text-gray-900 text-sm">
            Create dynamic and interactive dashboards that provide real-time
            visual insights into your data, enhancing decision-making and
            operational efficiency.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdAddchart />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Seamless Data Integration
          </h3>
          <p className="text-gray-900 text-sm">
            Effortlessly combine and visualize data from multiple sources,
            making it easier to analyze trends and patterns across your
            business.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <BiTransfer />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Real-Time Data Visualization
          </h3>
          <p className="text-gray-900 text-sm">
            Visualize data as it flows in real-time, enabling rapid response to
            events and driving faster insights and actions for your
            organization.
          </p>
        </section>
      </div>
    </section>
  );
};

export default VisualizationAnalytics;
