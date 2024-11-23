import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/retail/retail.svg";

const RtHeader = () => {
  return (
    <div className="w-full min-h-screen bg-slate-950 flex items-center">
      {/* Header Content */}
      <div className="w-full mx-auto px-4 sm:px-12 lg:px-24 py-10 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="w-full flex justify-center lg:order-2">
            <img
              src={img}
              alt="Real Estate Analytics"
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[500px] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="text-white text-justify lg:order-1">
            <h1 className="text-2xl font-semibold mb-4 lg:text-4xl leading-tight">
              Revolutionizing Retail with Data-Driven Insights
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              In today’s fast-evolving retail landscape, staying ahead requires
              more than intuition—it demands actionable insights. The{" "}
              <span className="font-semibold text-sky-400">
                Retail Intelligence Dashboard
              </span>{" "}
              empowers businesses to harness the power of data to monitor
              performance, optimize logistics, and align strategies with
              customer needs. From deal pipeline analysis to regional sales
              trends, our platform is designed to deliver unparalleled value to
              retail businesses.
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

export default RtHeader;
