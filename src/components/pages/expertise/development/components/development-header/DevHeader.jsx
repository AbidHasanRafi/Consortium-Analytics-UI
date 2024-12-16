import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../../assets/pages/development/development.svg";

const SHeader = () => {
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
              Development
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              Our development services cover the entire software development
              lifecycle, from initial consultation to the deployment and
              maintenance of custom solutions. Whether you're building a new
              product or enhancing an existing system, we focus on delivering
              scalable, secure, and high-performance solutions tailored to your
              business needs. Our expert team works with cutting-edge
              technologies to create robust applications that drive business
              growth and improve operational efficiency.
            </p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="/blogs"
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

export default SHeader;
