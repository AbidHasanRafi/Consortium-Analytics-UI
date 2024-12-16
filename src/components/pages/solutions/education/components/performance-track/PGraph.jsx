import React from "react";
import { Chart } from "react-google-charts";

// Student Performance Data
export const data = [
  [
    "Month",
    "Grades (Average)",
    "Assessments Completed",
    "Class Participation (%)",
    "Progress (Overall Average)",
  ],
  ["January", 85, 12, 78, 82],
  ["February", 88, 14, 80, 84],
  ["March", 90, 13, 85, 86],
  ["April", 92, 15, 88, 89],
  ["May", 95, 16, 90, 91],
];

export const options = {
  vAxis: { title: "Performance Metrics" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 3: { type: "line" } }, // Line for Overall Average Progress
  colors: [
    "#3498db", // Grades (Blue)
    "#3fb7c6", // Assessments Completed (Teal)
    "#47d2a5", // Class Participation (%) (Light Green)
    "#2980b9", // Overall Average Progress (Darker Blue)
  ],
  backgroundColor: "transparent",
};

export default function PGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Student Performance Tracking System
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
