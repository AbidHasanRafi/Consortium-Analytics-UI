import React from "react";
import { FaDatabase } from "react-icons/fa6";
import img from "../../../../../../assets/pages/partners/data.svg";
import { HiArrowLongRight } from "react-icons/hi2";

const DataPartner = () => {
  return (
    <section
      id="data-partner"
      className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 lg:gap-16 items-center md:items-start justify-between">
        <div className="flex-1 space-y-6 pt-4 lg:pt-8">
          <div className="flex items-center gap-1 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <FaDatabase />
            </p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Data Partner
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Consortium Analytics' Data Partner Program connects data providers
            with a global audience, enabling them to showcase and distribute
            their insights to businesses worldwide. As a data partner, you can
            enhance decision-making for organizations across industries by
            contributing enriched data for geospatial analysis, market research,
            and trend forecasting, all while expanding your market reach.
          </p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href="/data-enrichment"
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

        <div className="w-full md:w-1/2 lg:w-5/12 flex justify-end">
          <img
            className="w-full md:w-3/4 lg:w-full"
            src={img}
            alt="Data Partner"
          />
        </div>
      </div>
    </section>
  );
};

export default DataPartner;
