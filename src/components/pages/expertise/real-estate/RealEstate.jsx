import React from "react";

const RealEstate = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 text-white py-20 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-4xl font-abel font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Real Estate Data Analytics Services
      </h1>

      {/* Introduction */}
      <p className="text-base md:text-lg text-gray-300 mb-12 text-center">
        Unlock the full potential of your real estate investments with our
        comprehensive data analytics services. We help you make informed
        decisions that maximize value, mitigate risks, and optimize growth
        opportunities in a dynamic real estate market.
      </p>

      {/* Our Recent Works (Grid Layout with 4 Work Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Work 1 */}
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            Market Trends Visualization
          </h3>
          <p className="text-gray-300 mb-4">
            We recently completed a detailed analysis of property price
            fluctuations over the last five years. Our visualizations provide
            clear insights into market trends, helping investors identify
            lucrative opportunities and plan for future growth.
          </p>
          <div className="text-right">
            <a href="/market-trends" className="text-green-500 hover:underline">
              View Project
            </a>
          </div>
        </div>

        {/* Work 2 */}
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Predictive Pricing Models
          </h3>
          <p className="text-gray-300 mb-4">
            Using machine learning models, we developed a predictive pricing
            model for real estate properties. This tool assists in determining
            optimal sale prices based on location, condition, and market
            conditions.
          </p>
          <div className="text-right">
            <a
              href="/predictive-pricing"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Work 3 */}
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
            Risk & Investment Analysis
          </h3>
          <p className="text-gray-300 mb-4">
            We performed risk assessments for real estate portfolios, analyzing
            factors such as market volatility, economic indicators, and
            property-specific risk factors to help clients make informed
            investment decisions.
          </p>
          <div className="text-right">
            <a
              href="/investment-analysis"
              className="text-yellow-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Work 4 */}
        <div className="bg-gray-800 bg-opacity-60 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Customer Segmentation & Targeting
          </h3>
          <p className="text-gray-300 mb-4">
            Our team developed a customer segmentation strategy based on
            behavioral data, allowing our clients to target specific buyer
            personas. This approach has proven successful in increasing
            conversion rates for real estate agents.
          </p>
          <div className="text-right">
            <a
              href="/customer-segmentation"
              className="text-purple-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Power BI Embedded Analytics */}
      <div className="my-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-500">
          Our Power BI Analytics Dashboard
        </h2>
        <div className="relative w-full max-w-5xl mx-auto pb-[56.25%]">
          <iframe
            src="https://app.powerbi.com/view?r=eyJrIjoiNzNlZDIyYzAtODMyMy00Nzg3LWJlZTAtM2QwNWQ5MTZjMTE3IiwidCI6IjQ2NTRiNmYxLTBlNDctNDU3OS1hOGExLTAyZmU5ZDk0M2M3YiIsImMiOjl9"
            width="100%"
            height="100%"
            style={{
              border: "none",
              position: "absolute",
              top: 0,
              left: 0,
              borderRadius: "10px",
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-12">
        <p className="text-xl text-gray-300 mb-4">
          At Consortium Analytics, we aim to empower you with data-driven
          insights that foster smarter decision-making. Leverage our analytics
          services to enhance your real estate strategies.
        </p>
        <a
          href="/contact"
          className="inline-block py-3 px-6 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-semibold text-white hover:from-green-400 hover:to-blue-500 transition duration-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default RealEstate;
