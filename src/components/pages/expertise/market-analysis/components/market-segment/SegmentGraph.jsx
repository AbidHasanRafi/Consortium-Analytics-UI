import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Market Segment", "Market Value"],
  ["North America", 1200],
  ["Europe", 950],
  ["Asia", 1400],
  ["South America", 800],
  ["Africa", 600],
  ["Australia", 700],
];

export function SegementGraph() {
  return (
    <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Market Segmentation Analysis
      </h2>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          chartArea: { width: "50%" },
          hAxis: {
            title: "Market Value",
            minValue: 0,
          },
          vAxis: {
            title: "Market Segment",
          },
          backgroundColor: "transparent",
          colors: ["#1f77b4"], // You can customize colors as needed
        }}
      />
    </div>
  );
}
