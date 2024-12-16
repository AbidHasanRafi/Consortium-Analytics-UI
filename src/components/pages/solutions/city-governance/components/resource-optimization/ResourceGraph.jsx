import React from "react";
import { Chart } from "react-google-charts";

const resourceData = [
  ["Resource", "Allocated", "Used"],
  ["Energy", 500, 350],
  ["Water", 300, 200],
  ["Waste Management", 250, 180],
  ["Public Transit", 400, 300],
];

const resourceOptions = {
  chart: {
    subtitle: "Comparison of Allocated vs. Used Urban Resources",
  },
  colors: ["#76d7c4", "#aed6f1"],
};

export default function ResourceGraph() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Resource Optimization
      </h2>
      <Chart
        chartType="Bar"
        data={resourceData}
        options={resourceOptions}
        width="100%"
        height="400px"
      />
    </div>
  );
}
