import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoSparklesSharp, IoBulbSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";

const PartnersCards = () => {
  return (
    <div
      id="resources"
      className="text-black w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-mont font-semibold mb-8 md:mb-16 text-center">
        What type of partner are you?
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Innovation Partner Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-lg font-semibold uppercase text-blue-600 my-4">
              <IoSparklesSharp />
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Innovation Partner
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Are you a technology leader ready to create and deliver
              transformative analytics and visualization solutions?
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#innovative-partner"
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
        </section>

        {/* Strategic Partner Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-lg font-semibold uppercase text-blue-600 my-4">
              <IoBulbSharp />
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Strategic Partner
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Do you integrate cutting-edge data and spatial intelligence into
              systems to elevate customer outcomes?
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#strategy-partners"
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
        </section>

        {/* Data Partner Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-lg font-semibold uppercase text-blue-600 my-4">
              <FaDatabase />
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Data Partner
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Are you a data provider looking to reach a global audience and
              empower smarter decision-making?
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#data-partner"
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
        </section>
      </div>
    </div>
  );
};

export default PartnersCards;
