import React from "react";
import img from "../../../../../../assets/pages/education/retention-analytics.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const RAnalytics = () => {
  return (
    <div className="max-w-full">
      <section id="expertise" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-9 items-center justify-between">
          {/* Right Section with Image (Image on top for small screens, right for larger ones) */}
          <div className="bg-[#F2F6F9] col-span-1 lg:col-span-4 flex justify-center items-center order-1 lg:order-2">
            <img
              className="w-full h-auto"
              src={img}
              alt="Property Investment Insights"
            />
          </div>

          {/* Left Section with White Background (Text) */}
          <div className="bg-white col-span-1 lg:col-span-5 flex flex-col justify-center px-6 sm:px-8 lg:px-14 py-8 sm:py-12 order-2 lg:order-1">
            <section className="mx-0 lg:mx-16 my-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-left">
                Enrollment and Retention Analytics
              </h2>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Track enrollment trends and identify retention challenges with
                actionable insights. Our analytics tools help you understand the
                factors that influence student enrollment and retention, so you
                can make data-driven decisions to improve student outcomes.
              </p>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Our services provide a clear understanding of demographic
                shifts, dropout patterns, and effective recruitment strategies
                to grow and sustain student populations.
              </p>
              <div className="mt-8 sm:mt-12 text-start">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <span className="text-xs sm:text-sm">Learn More</span>
                  <HiArrowLongRight className="text-base font-semibold" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RAnalytics;
