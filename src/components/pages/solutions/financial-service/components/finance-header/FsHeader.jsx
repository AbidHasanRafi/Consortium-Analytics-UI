import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/finance-services/f-services.svg";

const FsHeader = () => {
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
              Financial Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              In the fast-paced financial sector, data-driven insights are
              essential for managing risk, optimizing portfolios, and staying
              ahead of market shifts. We provide a comprehensive suite of
              services, including risk analytics, market forecasts, and
              portfolio insights, to help financial institutions and advisors
              make informed decisions. Our customer segmentation tools enable
              you to personalize offerings, while our fraud detection solutions
              ensure the security of transactions. Leveraging AI, machine
              learning, and business intelligence, we empower financial services
              firms to navigate complexities and drive growth with confidence.
            </p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#request-demo"
                  className="flex items-center text-blue-400 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-500 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Request A Demo</p>
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

export default FsHeader;
