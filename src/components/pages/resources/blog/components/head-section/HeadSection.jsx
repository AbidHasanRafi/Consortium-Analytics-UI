import React from "react";
import img1 from "../../../../../../assets/blogs/header/header.jpg";
import auth01 from "../../../../../../assets/blogs/authors/author01.jpg";

const HeadSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* Main Post Section */}
      <div className="col-span-3 p-10">
        {/* Header Image with zoom effect */}
        <div className="w-full overflow-hidden mb-4">
          <img
            src={img1}
            alt="Featured Post"
            className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Author Info and Date */}
        <div className="text-gray-500 my-5 mb-2 text-base flex items-center">
          <img
            className="w-6 h-6 rounded-full mr-2"
            src={auth01}
            alt="Md. Shohidullah Samrat"
          />
          <p>
            <span className="text-blue-600 font-medium">
              Md. Shohidullah Samrat
            </span>
            <span className="mx-2">&#183;</span>
            <span>Nov 21, 2024</span>
          </p>
        </div>

        {/* Post Title */}
        <h2 className="text-black text-4xl font-medium mb-2">
          How to Interpret Regression Results in Data Analysis
        </h2>

        {/* Meta Title */}
        <p className="text-gray-700 mb-4">
          Understanding how to interpret the results of regression analysis is
          key to making data-driven decisions. In this post, we will walk
          through how to read and interpret regression coefficients, p-values,
          and confidence intervals.
        </p>

        {/* Category */}
        <span className="text-blue-500 font-semibold">News</span>
      </div>

      {/* Recent Posts Section */}
      <div className="p-10">
        <h3 className="text-lg font-semibold mb-3 border-b">Top Posts</h3>
        <ul className="space-y-4">
          <li>
            <span className="block text-blue-500 font-semibold">News</span>
            <h4 className="font-medium text-gray-800">
              What's New in Consortium Analytics - Q3 2024
            </h4>
            <p className="text-sm text-gray-500">
              Javier Pérez Trufero &#183; Helen McKenzie &#183; Oct 9, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">
              Spatial Data Science
            </span>
            <h4 className="font-medium text-gray-800">
              What space-time analysis tells us about the Paris Olympics
            </h4>
            <p className="text-sm text-gray-500">
              Diego Vicente &#183; Helen McKenzie &#183; Sep 19, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">Use cases</span>
            <h4 className="font-medium text-gray-800">
              Urban Mobility Insights with MovingPandas & Consortium Analytics
              in Snowflake
            </h4>
            <p className="text-sm text-gray-500">
              Argyrios Kyrgiazos &#183; Anita Graser &#183; Sep 5, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">Events</span>
            <h4 className="font-medium text-gray-800">
              Discover the Future of Spatial Data Science at SDSC24 New York
            </h4>
            <p className="text-sm text-gray-500">
              Daria Kolarczyk &#183; Aug 29, 2024
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadSection;
