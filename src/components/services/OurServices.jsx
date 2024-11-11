import React from "react";

const OurServices = () => {
  return (
    <section className="bg-gray-800 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* DATA API SERVICES */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              📊 DATA API SERVICES
            </h3>
            <p className="text-gray-600 mb-4">
              Fetch real-time segmented real estate data with REIDIN’s API,
              tailored to your business needs.
            </p>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>📈 Real Estate Market Trends</li>
              <li>🏠 Automated Property Valuation</li>
              <li>🧠 Special Algorithms</li>
              <li>📍 Location Based Indicators</li>
              <li>📊 Demographics & Socio-Economic Datasets</li>
            </ul>
          </div>

          {/* CUSTOM RESEARCH REPORTS */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              📝 CUSTOM RESEARCH REPORTS
            </h3>
            <p className="text-gray-600 mb-4">
              Access REIDIN’s custom research report services on demand for deep
              insights.
            </p>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>📍 Location Analysis</li>
              <li>📊 Market Trend Analysis</li>
              <li>📉 Competitor Analysis</li>
              <li>📍 Branch Location Optimizations</li>
            </ul>
          </div>

          {/* DASHBOARD/DATA VISUALIZATION SOLUTIONS */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              📊 DASHBOARD/DATA VISUALIZATION SOLUTIONS
            </h3>
            <p className="text-gray-600 mb-4">
              Use REIDIN’s proprietary data and your own to create interactive
              dashboards for market analysis.
            </p>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>📊 BI Charts & Graphs</li>
              <li>📑 Segmented Datasets</li>
              <li>🗺️ Chart & Map Imaginaries</li>
              <li>🔍 Advanced Filters & Interactive Visuals</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
