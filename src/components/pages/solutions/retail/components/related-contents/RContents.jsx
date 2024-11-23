import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from "../../../../../../assets/resources/blog.png";
import img2 from "../../../../../../assets/resources/case.jpeg";
import img3 from "../../../../../../assets/resources/partner.png";

const RContents = () => {
  return (
    <div
      id="resources"
      className="text-black w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-mont font-bold mb-8 md:mb-16 text-center">
        Related Contents
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Blog Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <img src={img1} alt="blog" className="w-full rounded-t-lg" />
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-xs font-semibold uppercase text-blue-600 my-4">
              Blog
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Insights and Expertise
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Explore expert opinions, insights, and actionable guides that
              delve deep into the latest industry trends and innovations.
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#"
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Explore More</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <img src={img2} alt="case study" className="w-full rounded-t-lg" />
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-xs font-semibold uppercase text-blue-600 my-4">
              Case Studies
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Real-World Applications
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Learn from real-world scenarios detailing challenges, innovative
              solutions, and measurable results that drive success.
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#"
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Explore More</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white rounded-lg hover:shadow-lg transition-shadow max-w-3xl mx-auto flex flex-col items-center">
          <img src={img3} alt="partners" className="w-full rounded-t-lg" />
          <div className="flex-1 px-6 py-4 flex flex-col">
            <h2 className="text-xs font-semibold uppercase text-blue-600 my-4">
              Partners
            </h2>
            <h3 className="text-lg font-mont font-semibold text-gray-800 mb-4">
              Collaborations That Drive Impact
            </h3>
            <p className="text-gray-900 text-sm md:text-base flex-1">
              Discover how we collaborate with leading partners to deliver
              cutting-edge solutions and achieve remarkable breakthroughs.
            </p>
            <div className="mt-4 text-start">
              <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
                <a
                  href="#"
                  className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
                >
                  <p className="text-xs sm:text-sm">Explore More</p>
                  <p className="text-base font-semibold">
                    <HiArrowLongRight />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RContents;
