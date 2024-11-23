import React from "react";
import img from "../../../../../../assets/pages/healthcare/health-analytics.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const HealthAnalytics = () => {
  return (
    <div className="max-w-full mt-5 lg:mt-10">
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
                Simplifying Healthcare Analytics
              </h2>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Making data-driven decisions in healthcare is challenging when
                dealing with siloed data and complex systems. Our healthcare
                analytics solutions help you consolidate data from disparate
                sources, visualize key metrics, and gain actionable insights to
                improve patient outcomes and operational efficiency.
              </p>
              <p className="text-gray-900 text-justify text-lg sm:text-xl">
                Our platform centralizes healthcare data and delivers actionable
                insights through user-friendly dashboards, helping insurers,
                health authorities, and organizations optimize their resources
                for better community outcomes.
              </p>
              <div className="mt-8 sm:mt-12 text-start">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <span className="text-xs sm:text-sm">See Full Demo</span>
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

export default HealthAnalytics;
