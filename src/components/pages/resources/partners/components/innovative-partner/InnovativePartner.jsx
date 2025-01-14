import React from "react";
import { IoSparklesSharp } from "react-icons/io5";
import img from "../../../../../../assets/pages/partners/innovative.svg";
import { HiArrowLongRight } from "react-icons/hi2";

const InnovativePartner = () => {
  return (
    <section
      id="innovative-partner"
      className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 lg:gap-16 items-center md:items-start justify-between">
        <div className="flex-1 space-y-6 pt-4 lg:pt-8">
          <div className="flex items-center gap-1 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <IoSparklesSharp />
            </p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            Innovation Partner
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">
            Consortium Analytics Innovation Partner Program brings together
            technology leaders from across industries to co-create and deliver
            transformative analytics and visualization solutions. Our partners
            leverage cutting-edge tools like Tableau, Power BI, and Google Cloud
            to design intuitive and impactful solutions for data visualization,
            predictive modeling, and actionable insights. Together, we empower
            businesses to harness the full potential of advanced analytics for
            smarter decision-making.
          </p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href="/analytics"
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
            alt="Innovative Partner"
          />
        </div>
      </div>
    </section>
  );
};

export default InnovativePartner;
