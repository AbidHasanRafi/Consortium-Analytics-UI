import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/real-estate/estate.png";

const REstateHeader = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 flex items-center">
      {/* Header Content */}
      <div className="w-full mx-auto px-4 sm:px-12 lg:pl-32 lg:pr-5 py-10 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="w-full flex justify-center lg:order-2">
            <img
              src={img}
              alt="Real Estate Analytics"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-white lg:order-1">
            <h1 className="text-2xl font-semibold mb-4 lg:text-4xl leading-tight">
              Real Estate
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              Whether it's commercial or residential, real estate firms, funds,
              and consultants are taking their market analysis to new heights
              with advanced technologies. By leveraging data visualization,
              analytics, data enrichment, and data engineering, we help you
              explore deeper insights and trends. Our business intelligence
              solutions, combined with AI and machine learning, provide powerful
              tools to predict future performance. We also offer custom website
              and mobile application development, ERP systems, and SaaS products
              that make real-time market data and insights easily accessible,
              helping you stay ahead in a competitive market.
            </p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#"
                  className="flex items-center text-blue-400 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-500 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Discover More</p>
                  <HiArrowLongRight className="text-base font-semibold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default REstateHeader;
