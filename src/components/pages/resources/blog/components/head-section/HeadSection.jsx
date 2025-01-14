import React from "react";
import img1 from "../../../../../../assets/blogs/header/1.png";
import auth01 from "../../../../../../assets/blogs/authors/author01.jpg";

const HeadSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 sm:p-2">
      {/* Main Post Section */}
      <div className="col-span-1 md:col-span-3 p-4 md:p-10">
        {/* Header Image with zoom effect */}
        <div className="w-full overflow-hidden mb-3 md:mb-4">
          <img
            src={img1}
            alt="Featured Post"
            className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Author Info and Date */}
        <div className="text-gray-500 my-3 md:my-5 text-sm md:text-base flex items-center">
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
            <span>Dec 01, 2024</span>
          </p>
        </div>

        {/* Post Title */}
        <a href="/bar-charts">
          <h2 className="text-black hover:text-blue-700 text-3xl sm:text-4xl font-medium mb-2">
            Bar Charts: An Effective Data Visualization Tool
          </h2>
        </a>

        {/* Meta Title */}
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Data visualization is an essential step in data analysis, transforming
          raw data into insights that are both actionable and easy to
          understand. Among the wide variety of visualization techniques
          available, one of the most versatile and widely used tools is the bar
          chart.
        </p>

        {/* Category */}
        <span className="text-blue-500 font-semibold">News</span>
      </div>

      {/* Top Posts Section */}
      <div className="p-4 md:p-10 mt-6 md:mt-0">
        <h3 className="text-lg font-semibold mb-3 border-b">Top Posts</h3>
        <ul className="space-y-3 md:space-y-4">
          <li>
            <span className="block text-blue-500 font-semibold">Insights</span>
            <a href="/dashboard-for-business-analytics">
              <h4 className="hover:underline font-medium text-gray-800">
                The Power of Dashboards in Business Analytics: Unlocking
                Actionable Insights
              </h4>
            </a>
            <p className="text-sm text-gray-500">
              Md. Shohidullah Samrat &#183; 05 Dec, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">
              Business Data
            </span>
            <a href="/data-storytelling">
              <h4 className="hover:underline font-medium text-gray-800">
                Data Storytelling: Unlocking the Full Potential of Your Business
                Data
              </h4>
            </a>
            <p className="text-sm text-gray-500">
              Md. Shohidullah Samrat &#183; 10 Dec, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">Tools</span>
            <a href="/data-visualisation-tool">
              <h4 className="hover:underline font-medium text-gray-800">
                Unlocking Insights with Data Visualization Tools: Power BI,
                Tableau, and Google Looker Studio
              </h4>
            </a>
            <p className="text-sm text-gray-500">
              Md. Shohidullah Samrat &#183; 12 Dec, 2024
            </p>
          </li>
          <li>
            <span className="block text-blue-500 font-semibold">Solutions</span>
            <a href="/empowering-business">
              <h4 className="hover:underline font-medium text-gray-800">
                Empowering Businesses with Data-Driven Insights and Innovative
                Solutions
              </h4>
            </a>
            <p className="text-sm text-gray-500">
              Md. Shohidullah Samrat &#183; 15 Dec, 2024
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadSection;
