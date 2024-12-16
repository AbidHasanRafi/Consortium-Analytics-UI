import React from "react";
import { MdDashboard } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

const REstateCases = () => {
  return (
    <section className="w-full bg-white mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
          Real Estate Analytics Use Cases
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore the powerful use cases of real estate analytics to enhance
          investment decisions, market analysis, and property management.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-inter mt-8 sm:mt-12">
        <section className="bg-[#F2F6F9] p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdDashboard />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Property Performance Dashboards
          </h3>
          <p className="text-gray-900 text-sm">
            Create interactive dashboards to visualize property performance in
            real-time, tracking metrics like occupancy, rental income, and
            market trends.
          </p>
        </section>

        <section className="bg-[#F2F6F9] p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdAddchart />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Real Estate Market Analysis
          </h3>
          <p className="text-gray-900 text-sm">
            Leverage advanced analytics to analyze market trends, predict
            property value appreciation, and assess investment opportunities.
          </p>
        </section>

        <section className="bg-[#F2F6F9] p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <BiTransfer />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Location-Based Insights
          </h3>
          <p className="text-gray-900 text-sm">
            Utilize geospatial analytics to gain deep insights into the
            proximity of properties to key amenities, transportation, and
            commercial hubs.
          </p>
        </section>

        <section className="bg-[#F2F6F9] p-6 rounded-lg">
          <p className="text-4xl mb-3 text-blue-600">
            <MdAddchart />
          </p>
          <h3 className="text-gray-900 text-lg font-medium mb-2">
            Investment Portfolio Optimization
          </h3>
          <p className="text-gray-900 text-sm">
            Optimize real estate investment portfolios by analyzing risk,
            return, and diversification strategies across different property
            types.
          </p>
        </section>
      </div>
    </section>
  );
};

export default REstateCases;
