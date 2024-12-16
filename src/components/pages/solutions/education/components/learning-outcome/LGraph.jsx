import React from "react";
import { Chart } from "react-google-charts";

// Learning Outcomes Data
export const data = [
  [
    "Year",
    "Comprehension",
    "Practical Application",
    "Critical Thinking",
    "Teamwork",
  ],
  ["2019", 0.7, 0.6, 0.65, 0.55],
  ["2020", 0.75, 0.7, 0.7, 0.6],
  ["2021", 0.8, 0.75, 0.75, 0.7],
  ["2022", 0.85, 0.8, 0.78, 0.75],
  ["2023", 0.88, 0.85, 0.82, 0.8],
];

export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1],
    title: "Learning Outcomes (Normalized)",
  },
  hAxis: {
    title: "Year",
  },
  colors: ["#3498db", "#1abc9c", "#9b59b6", "#e67e22"], // Colors representing diverse skills
  backgroundColor: "transparent",
};

export default function LGraph() {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Learning Outcomes Progress Over the Years
      </h2>
      <Chart
        chartType="SteppedAreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        legendToggle
      />
    </div>
  );
}
