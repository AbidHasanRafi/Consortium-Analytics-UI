import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/real-estate/estate.gif";

const REstateHeader = () => {
  return (
    <div className="w-full min-h-screen bg-[#212A31] flex items-center">
      {/* Header Content */}
      <div className="w-full mx-auto px-4 sm:px-12 lg:px-24 py-10 sm:py-16 lg:py-20">
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
              Real Estate Intelligence
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              Unlock the full potential of real estate investments and
              operations with cutting-edge spatial analytics. Whether you're
              focused on commercial or residential properties, Consortium
              Analytics empowers real estate firms, investors, and consultants
              to gain deeper insights into the why behind the where.
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-6 leading-relaxed">
              With our advanced tools and data-driven solutions, we help you
              optimize your market analysis, make informed decisions, and stay
              ahead in an evolving industry.
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
