import React, { useState } from "react";
import { Chart } from "react-google-charts";

// Fake data for infrastructure metrics
const data = [
  [
    "Region",
    "Roads Built (km)",
    "Bridges Constructed",
    "Renewable Energy Projects",
  ],
  ["North", 150, 20, 5],
  ["South", 200, 25, 8],
  ["East", 180, 22, 7],
  ["West", 170, 18, 6],
  ["Central", 190, 24, 9],
];

// Chart options for different chart types
const chartOptions = {
  bar: {
    title: "Infrastructure Development by Region (Bar Chart)",
    backgroundColor: "#f9fafb",
    colors: ["#4285F4", "#EA4335", "#34A853"],
  },
  line: {
    title: "Infrastructure Development Trends (Line Chart)",
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#34A853", "#EA4335", "#4285F4"],
  },
  table: {
    allowHtml: true,
    showRowNumber: true,
    width: "100%",
    height: "300px", // Reduced height for the table
  },
};

function InfrastructureGraph() {
  const [chartType, setChartType] = useState("bar"); // Default chart type
  const [selectedRegion, setSelectedRegion] = useState("All");

  // Filter data based on selected region
  const filteredData =
    selectedRegion === "All"
      ? data
      : [data[0], ...data.filter((row) => row[0] === selectedRegion)];

  return (
    <div className="p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Infrastructure Development Dashboard
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        {/* Region Filter Dropdown */}
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="border rounded px-4 py-2 bg-white shadow"
        >
          <option value="All">All Regions</option>
          {data.slice(1).map(([region]) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        {/* Chart Type Selector */}
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="border rounded px-4 py-2 bg-white shadow"
        >
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="table">Table</option>
        </select>
      </div>

      <div className="bg-white p-4 shadow rounded">
        {/* Render dynamic chart */}
        <Chart
          chartType={
            chartType === "bar"
              ? "Bar"
              : chartType === "line"
              ? "LineChart"
              : "Table"
          }
          width="100%"
          height="300px" // Reduced height for bar and line charts
          data={filteredData}
          options={chartOptions[chartType]}
        />
      </div>
    </div>
  );
}

export default InfrastructureGraph;
