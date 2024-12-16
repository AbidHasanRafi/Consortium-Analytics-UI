import React from "react";
import { Chart } from "react-google-charts";

// Fleet Management data
export const data = [
  [
    "Month",
    "Vehicle 1 (Performance)",
    "Vehicle 2 (Performance)",
    "Vehicle 3 (Performance)",
    "Vehicle 4 (Performance)",
    "Vehicle 5 (Performance)",
    "Fleet Average (Performance)",
  ],
  ["January", 85, 78, 90, 92, 88, 86.6],
  ["February", 80, 82, 88, 85, 90, 85],
  ["March", 87, 89, 85, 91, 86, 87.6],
  ["April", 83, 84, 91, 87, 88, 86.6],
  ["May", 90, 85, 86, 89, 92, 88.4],
];

export const options = {
  vAxis: { title: "Performance Score" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } }, // Line for Fleet Average (Performance)
  colors: [
    "#3498db", // Vehicle 1 (Blue)
    "#3fb7c6", // Vehicle 2 (Teal)
    "#47d2a5", // Vehicle 3 (Light Green)
    "#52be80", // Vehicle 4 (Green)
    "#41ab93", // Vehicle 5 (Green-Teal)
    "#2980b9", // Fleet Average (Darker Blue)
  ],
  backgroundColor: "transparent", // Set the background to transparent
};

export default function FleetGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Fleet Management Performance Analysis
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
