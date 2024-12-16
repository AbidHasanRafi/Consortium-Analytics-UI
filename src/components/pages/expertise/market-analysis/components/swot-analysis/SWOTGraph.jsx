import React from "react";
import { Chart } from "react-google-charts";

// Define the data for SWOT Analysis
const data = [
  ["Category", "Score"],
  ["Strengths", 80],
  ["Weaknesses", 50],
  ["Opportunities", 70],
  ["Threats", 40],
];

const options = {
  chartArea: { width: "60%" },
  hAxis: {
    title: "Score",
    minValue: 0,
  },
  vAxis: {
    title: "Category",
  },
  backgroundColor: "transparent", // Set background to transparent
  colors: ["#4caf50", "#f44336", "#ff9800", "#2196f3"], // Custom colors for each category
};

export function SWOTGraph() {
  return (
    <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        SWOT Analysis: Business Evaluation
      </h2>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default SWOTGraph;
