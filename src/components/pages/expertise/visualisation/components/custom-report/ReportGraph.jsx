import React from "react";
import { Chart } from "react-google-charts";

// Data for custom reporting on organizational KPIs and outcomes
export const customData = [
  [
    "Category",
    "Budget Utilization (%)",
    "Project Completion (%)",
    "Stakeholder Satisfaction",
    "Environmental Compliance",
    "Overall Effectiveness",
  ],
  ["Infrastructure Projects", 78, 85, 74, 90, 82],
  ["Health Programs", 85, 80, 88, 72, 84],
  ["Educational Reforms", 92, 89, 80, 76, 88],
  ["Transport Modernization", 80, 75, 79, 83, 81],
  ["Renewable Energy Initiatives", 88, 92, 85, 95, 90],
];

// Chart configuration
export const policyOptions = {
  backgroundColor: "transparent",
  vAxis: { title: "Performance Metrics" },
  hAxis: { title: "Initiatives" },
  seriesType: "bars", // Bar chart for most metrics
  series: { 4: { type: "line" } }, // Line chart for Overall Effectiveness
  colors: [
    "#a29bfe", // Budget Utilization (light purple)
    "#55efc4", // Project Completion (mint green)
    "#74b9ff", // Stakeholder Satisfaction (light blue)
    "#fdcb6e", // Environmental Compliance (orange)
    "#00cec9", // Overall Effectiveness (teal)
  ],
};

export default function ReportGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Organizational Performance Dashboard
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={customData}
        options={policyOptions}
      />
    </div>
  );
}
