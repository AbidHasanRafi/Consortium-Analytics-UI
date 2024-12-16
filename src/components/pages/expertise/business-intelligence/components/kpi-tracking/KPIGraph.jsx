import React from "react";
import { Chart } from "react-google-charts";

// Define the columns for the KPI tracking graph
const columns = [
  { type: "string", label: "Month" },
  { type: "number", label: "Sales Growth (%)" },
  { type: "number", label: "Customer Retention (%)" },
  { type: "number", label: "Revenue (in $K)" },
];

// Define rows with KPI data over time
const rows = [
  ["January", 5, 90, 120],
  ["February", 10, 92, 130],
  ["March", 15, 89, 140],
  ["April", 20, 88, 160],
  ["May", 25, 91, 180],
  ["June", 30, 93, 200],
  ["July", 35, 94, 220],
];

// Combine columns and rows
export const data = [columns, ...rows];

// KPI Tracking Graph Component
export default function KPIGraph() {
  return (
    <div
      className="p-0 md:p-10 flex flex-col"
      style={{
        width: "100%",
        height: "calc(100vh - 230px)",
        overflow: "hidden",
      }}
    >
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        KPI Tracking: Business Performance Metrics
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={data}
          options={{
            backgroundColor: "transparent",
            hAxis: {
              title: "Month",
            },
            vAxis: {
              title: "Performance Metrics",
            },
            series: {
              0: { color: "#4caf50" }, // Sales Growth
              1: { color: "#2196f3" }, // Customer Retention
              2: { color: "#ff9800" }, // Revenue
            },
            curveType: "function", // Smooth lines
            legend: { position: "bottom" },
          }}
        />
      </div>
    </div>
  );
}
