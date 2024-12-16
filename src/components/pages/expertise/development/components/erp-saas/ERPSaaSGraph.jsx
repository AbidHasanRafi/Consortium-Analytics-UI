import React from "react";
import { Chart } from "react-google-charts";

// Fake data for ERP SaaS metrics
export const saasData = [
  [
    "Year",
    "Customer Growth",
    "Monthly Recurring Revenue (MRR)",
    "Churn Rate (%)",
    "Customer Lifetime Value (CLTV)",
    "User Retention (%)",
  ],
  ["2018", 150, 5000, 10, 1500, 80],
  ["2019", 200, 7000, 8, 1800, 85],
  ["2020", 250, 8500, 12, 1600, 75],
  ["2021", 300, 10000, 5, 2000, 90],
  ["2022", 350, 12000, 6, 2200, 88],
];

// Chart options for ERP SaaS performance analysis
export const saasOptions = {
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { title: "Values" },
  colors: [
    "#1abc9c", // Customer Growth (teal)
    "#3498db", // Monthly Recurring Revenue (MRR) (blue)
    "#e74c3c", // Churn Rate (red)
    "#2ecc71", // Customer Lifetime Value (CLTV) (green)
    "#f39c12", // User Retention (yellow)
  ],
  chartArea: { width: "70%", height: "60%" },
  isStacked: true, // Stacked area chart to show cumulative values
  backgroundColor: { fill: "transparent" }, // Transparent background for integration with other themes
};

export default function ERPSaaSGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        ERP SaaS Performance Analysis
      </h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={saasData}
        options={saasOptions}
      />
    </div>
  );
}
