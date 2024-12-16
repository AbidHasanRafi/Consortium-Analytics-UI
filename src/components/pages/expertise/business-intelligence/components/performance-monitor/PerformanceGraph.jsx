import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Year",
    "System Uptime (%)",
    "Avg. Response Time (secs)",
    "Server Efficiency (%)",
  ],
  ["2018", 98, 1.2, 85],
  ["2019", 99, 1.0, 87],
  ["2020", 99.5, 0.9, 90],
  ["2021", 99.7, 0.8, 92],
  ["2022", 99.8, 0.7, 94],
  ["2023", 99.9, 0.6, 96],
];

const options = {
  chart: {
    title: "Performance Monitoring Dashboard",
    subtitle: "Tracking Uptime, Response Time, and Server Efficiency",
  },
  curveType: "function", // Smoothens the lines
  legend: { position: "top" }, // Positions the legend at the top
  vAxis: {
    title: "Percentage / Time",
    gridlines: { count: 6 }, // Adjust gridlines for readability
  },
  hAxis: {
    title: "Year",
    gridlines: { count: 6 },
  },
  series: {
    0: { targetAxisIndex: 0, color: "#4caf50" }, // System Uptime (Green)
    1: { targetAxisIndex: 1, color: "#ff5722" }, // Avg. Response Time (Red)
    2: { targetAxisIndex: 0, color: "#2196f3" }, // Server Efficiency (Blue)
  },
  pointSize: 5, // Adds visible dots for data points
  backgroundColor: "transparent", // Keeps the background transparent
  chartArea: {
    backgroundColor: "transparent", // Ensures the chart area is transparent too
  },
  tooltip: { trigger: "both" }, // Show tooltip for both axes
};

function PerformanceGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Performance Monitoring Dashboard
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default PerformanceGraph;
