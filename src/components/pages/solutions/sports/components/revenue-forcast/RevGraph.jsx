import React from "react";
import { Chart } from "react-google-charts";

// Fake data for revenue and profit forecasting
export const revenueData = [
  ["Year", "Revenue", "Profit"],
  ["2018", 1200, 300],
  ["2019", 1500, 500],
  ["2020", 1100, 200],
  ["2021", 1800, 600],
  ["2022", 2000, 800],
];

// Chart options for revenue forecasting analysis
export const revenueOptions = {
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { title: "Values" },
  colors: ["#3498db", "#2ecc71"], // Blue for revenue, green for profit
  chartArea: { width: "70%", height: "60%" },
  isStacked: true, // Stacked area chart to show cumulative values
  backgroundColor: { fill: "transparent" }, // Transparent background for integration with other themes
};

export default function RevGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Revenue Forecasting Analysis
      </h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={revenueData}
        options={revenueOptions}
      />
    </div>
  );
}
