import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Revenue", "Profit"],
  ["2018", 1200, 300],
  ["2019", 1500, 500],
  ["2020", 1100, 200],
  ["2021", 1800, 600],
  ["2022", 2000, 800],
];

export const options = {
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { title: "Values" },
  colors: ["#3498db", "#2ecc71"],
  chartArea: { width: "70%", height: "60%" },
  isStacked: true,
  backgroundColor: { fill: "transparent" },
};

function RiskAnalyticsGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Risk Analytics: Revenue and Profit Trends
      </h2>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}

export default RiskAnalyticsGraph;
