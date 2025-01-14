import React from "react";
import img from "../../../../../../assets/pages/partners/strategy.svg";
import { IoBulbSharp } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

const StrategyPartners = () => {
  return (
    <div
      id="strategy-partners"
      className="max-w-full bg-white mx-2 md:mx-10 rounded-lg"
    >
      <section
        id="expertise"
        className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-14"
      >
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-first md:order-none">
            <img
              className="w-full md:w-3/4"
              src={img}
              alt="Strategic Partner"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 pt-4 text-left">
            <div className="flex items-center gap-1 text-sky-600 justify-start">
              <p className="text-3xl sm:text-4xl">
                <IoBulbSharp />
              </p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partner
            </h2>
            <p className="text-gray-900 text-lg sm:text-xl">
              Our Strategic Partner Program is designed for system integrators
              and consultants who specialize in embedding advanced data and
              spatial intelligence into business operations. By partnering with
              Consortium Analytics, you gain access to powerful platforms like
              Azure, Snowflake, and AWS, enabling you to deliver scalable,
              tailored solutions that elevate customer outcomes in areas like
              supply chain optimization, customer segmentation, and operational
              efficiency.
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="/data-engineering"
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Discover Solutions</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyPartners;
