import React from "react";
import { Chart } from "react-google-charts";

export const cleansingProcessData = [
  ["From", "To", "Weight"],
  ["Raw Data", "Identify Errors", 1],
  ["Identify Errors", "Standardize & Remove Dups", 1],
  ["Standardize", "Handle Missing", 1],
  ["Handle Missing & Validate", "Ready for Analysis", 1],
];

export const cleansingProcessOptions = {
  width: "100%",
  height: 400,
  sankey: {
    node: {
      width: 20,
      nodePadding: 50,
    },
    link: {
      colorMode: "gradient",
      colors: ["#76d7c4", "#a9cce3", "#76d7c4", "#a9cce3"],
    },
  },
};

export default function CGraph() {
  return (
    <div style={{ width: "100%", height: "500px", padding: "10px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Data Cleansing Process
      </h2>
      <Chart
        chartType="Sankey"
        data={cleansingProcessData}
        options={cleansingProcessOptions}
        width="100%"
        height="400px"
      />
    </div>
  );
}
