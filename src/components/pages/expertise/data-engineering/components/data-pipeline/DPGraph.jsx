import React from "react";
import { Chart } from "react-google-charts";

// Data Pipeline Process Data
export const data = [
  [
    "Year",
    "Raw Data",
    "Data Cleaning",
    "Data Transformation",
    "Processed Data",
  ],
  ["2018", 800, 600, 400, 200],
  ["2019", 900, 650, 450, 250],
  ["2020", 700, 500, 350, 150],
  ["2021", 1000, 700, 500, 300],
  ["2022", 1100, 750, 550, 350],
];

export const options = {
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { title: "Data Flow (in units)" },
  colors: ["#3498db", "#2ecc71", "#f39c12", "#e74c3c"],
  chartArea: { width: "70%", height: "60%" },
  isStacked: true,
  backgroundColor: { fill: "transparent" },
};

function DPGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Data Pipeline Process Over Time
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

export default DPGraph;
