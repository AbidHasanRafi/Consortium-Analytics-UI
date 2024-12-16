import React from "react";
import { Chart } from "react-google-charts";

export const policyData = [
  [
    "Category",
    "Economic Factors",
    "Demographic Trends",
    "Environmental Impact",
    "Public Sentiment",
    "Policy Effectiveness",
  ],
  ["Urban", 85, 75, 90, 80, 88],
  ["Healthcare", 78, 82, 70, 85, 80],
  ["Education", 88, 79, 65, 92, 86],
  ["Transport", 72, 68, 95, 78, 84],
  ["Energy", 90, 74, 98, 87, 91],
];

export const policyOptions = {
  backgroundColor: "transparent",
  vAxis: { title: "Score" },
  hAxis: { title: "Policy Category" },
  seriesType: "bars",
  series: { 4: { type: "line" } }, // Line for Policy Effectiveness
  colors: [
    "#abebc6", // Economic Factors (light green)
    "#aed6f1", // Demographic Trends (light blue)
    "#5dade2", // Environmental Impact (medium blue)
    "#85c1e9", // Public Sentiment (soft blue)
    "#76d7c4", // Policy Effectiveness (green-blue blend)
  ],
};

export default function PolicyGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Policy Insights and Analysis
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={policyData}
        options={policyOptions}
      />
    </div>
  );
}
