import React from "react";
import { Chart } from "react-google-charts";

// Operational Efficiency Tracking Data (fake data for illustration)
export const data = [
  [
    "Year",
    "Delivery Time",
    "Fuel Consumption",
    "Order Accuracy",
    "Warehouse Efficiency",
  ],
  ["2013", 0.6, 0.8, 0.7, 0.5],
  ["2014", 0.7, 0.75, 0.72, 0.6],
  ["2015", 0.8, 0.7, 0.75, 0.65],
  ["2016", 0.85, 0.65, 0.8, 0.7],
  ["2017", 0.9, 0.6, 0.85, 0.75],
  ["2018", 0.92, 0.58, 0.88, 0.8],
];

// Options for the graph
export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1],
    title: "Operational Efficiency",
  },
  hAxis: {
    title: "Year",
  },
  colors: ["#3498db", "#1abc9c", "#8e44ad", "#f39c12"], // Cool tones with one warm color
  backgroundColor: "transparent",
};

export default function EfficiencyGraph() {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Operational Efficiency Tracking in Logistics
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
