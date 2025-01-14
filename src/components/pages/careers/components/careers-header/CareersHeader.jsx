import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "../../../../../assets/careers.svg";

const CareersHeader = () => {
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
            <p className="text-xs">Shape Your Future</p>
            <h1 className="text-2xl font-semibold my-4 lg:text-4xl leading-tight">
              Careers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-4 leading-relaxed">
              Join our dynamic startup with a global presence in Bangladesh, the
              Czech Republic, and China, where we leverage data-driven solutions
              and cutting-edge technology to drive business growth. Specializing
              in AI products, web development, custom software, and mobile
              applications, we deliver innovative solutions tailored to client
              needs. We follow EU working standards, offering comprehensive
              benefits, a collaborative environment, and opportunities to work
              on impactful projects. If you’re passionate about data,
              technology, and making a difference, we’d love to have you on our
              team.
            </p>
            <div className="mt-8 sm:mt-12 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="mailto:post.consortium@gmail.com"
                  className="flex items-center text-blue-400 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-500 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Contact Us</p>
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

export default CareersHeader;