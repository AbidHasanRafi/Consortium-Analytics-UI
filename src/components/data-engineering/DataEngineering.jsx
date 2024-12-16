import React from "react";
import img from "../../assets/data-engineering.svg";
import { BsDatabaseFillGear } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { LiaCloudscale } from "react-icons/lia";
import { MdNetworkCheck } from "react-icons/md";
import { PiWarehouseFill } from "react-icons/pi";

const DataEngineering = () => {
  return (
    <div className="max-w-full bg-white mx-2 md:mx-10 rounded-lg">
      <section
        id="expertise"
        className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-14"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-full md:w-3/4" src={img} alt="Data Engineering" />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 pt-4 text-left">
            <div className="flex items-center gap-1 text-sky-600 justify-start">
              <p className="text-3xl sm:text-4xl">
                <BsDatabaseFillGear />
              </p>
              <p className="text-xs font-semibold">Data Engineering</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Efficient Data Pipelines with Modern Engineering Tools
            </h2>
            <p className="text-gray-900 text-lg sm:text-xl">
              Build and automate reliable data pipelines to transform and
              integrate raw data into actionable insights. Our tools ensure
              scalability and simplicity for all your data engineering needs.
            </p>
            <div className="mt-8 sm:mt-12">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <LiaCloudscale />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Scalable Data Pipelines
            </h3>
            <p className="text-gray-900 text-sm">
              Build robust pipelines to process and transform terabytes of data
              with scalability in mind. Ensure seamless integration with modern
              platforms.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <MdNetworkCheck />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Real-time Data Streaming
            </h3>
            <p className="text-gray-900 text-sm">
              Process real-time data streams for use cases like monitoring,
              analytics, and alerting, ensuring low-latency and high-throughput
              workflows.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <PiWarehouseFill />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Data Warehouse Optimization
            </h3>
            <p className="text-gray-900 text-sm">
              Design and optimize schemas, queries, and storage in data
              warehouses for high performance and cost-efficiency.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;
