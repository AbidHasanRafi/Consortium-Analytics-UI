import React from "react";
import img from "../../../../../assets/pages/retail/retail.svg";

const RtHeader = () => {
  return (
    <div className="relative h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full bg-slate-950 [&>div]:absolute [&>div]:bottom-[-20%] [&>div]:left-0 [&>div]:right-0 [&>div]:top-auto [&>div]:h-[500px] [&>div]:w-[500px] [&>div]:rounded-full [&>div]:bg-[radial-gradient(circle_farthest-side,rgba(0,128,128,0.2),rgba(255,255,255,0))]">
          <div></div>
        </div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 h-full w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:pl-24 lg:pr-0">
        <div className="grid h-full items-center gap-8 lg:grid-cols-2">
          {/* Text Section */}
          <div className="text-start text-white">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Revolutionizing Retail with Data-Driven Insights
            </h1>
            <p className="mb-4 text-lg text-slate-300">
              In today’s fast-evolving retail landscape, staying ahead requires
              more than intuition—it demands actionable insights. The Retail
              Intelligence Dashboard empowers businesses to harness the power of
              data to monitor performance, optimize logistics, and align
              strategies with customer needs.
            </p>
            <p className="mb-6 text-lg text-slate-300">
              From deal pipeline analysis to regional sales trends, our platform
              is designed to deliver unparalleled value to retail businesses.
            </p>
            <button className="rounded-lg px-6 py-3 font-medium bg-sky-400 text-slate-900 hover:bg-sky-300">
              Request a Demo
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="Retail Intelligence"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RtHeader;
