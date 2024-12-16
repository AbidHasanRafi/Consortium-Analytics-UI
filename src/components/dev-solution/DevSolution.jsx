import React from "react";
import img from "../../assets/development.svg";
import { FaLaptopCode } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";

const DevSolution = () => {
  return (
    <div className="max-w-full bg-white mx-2 md:mx-10 rounded-lg">
      <section
        id="expertise"
        className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-14"
      >
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-center justify-between">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img className="w-full md:w-3/4" src={img} alt="Data Engineering" />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 pt-4 text-left">
            <div className="flex items-center gap-1 text-sky-600 justify-start">
              <p className="text-3xl sm:text-4xl">
                <FaLaptopCode />
              </p>
              <p className="text-xs font-semibold">Development Service</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Development Services
            </h2>
            <p className="text-gray-900 text-lg sm:text-xl">
              Transform your ideas into reality with our expert development
              services. From websites to mobile apps and custom software, we
              deliver solutions that drive business success.
            </p>
            <div className="mt-8 sm:mt-12">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="/blogs"
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Learn More</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <CgWebsite />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Website Development
            </h3>
            <p className="text-gray-900 text-sm">
              Create a professional and engaging online presence with our custom
              website development services. We build responsive, user-friendly
              websites that reflect your brand and meet your business needs.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <MdOutlineAppSettingsAlt />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Mobile App Development
            </h3>
            <p className="text-gray-900 text-sm">
              Develop mobile applications that captivate users and enhance their
              experience. Our team designs and builds apps for both iOS and
              Android platforms, ensuring seamless performance and intuitive
              interfaces.
            </p>
          </section>

          <section className="bg-[#F2F6F9] p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">
              <GrTechnology />
            </p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              Custom Software Development
            </h3>
            <p className="text-gray-900 text-sm">
              Address your unique business challenges with our custom software
              development services. We create bespoke software solutions that
              streamline operations, improve efficiency, and support your
              strategic goals.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DevSolution;
