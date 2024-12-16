import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["France", 300],
  ["Italy", 250],
  ["Spain", 280],
  ["United Kingdom", 320],
  ["Netherlands", 180],
  ["Belgium", 150],
  ["Sweden", 220],
  ["Norway", 190],
  ["Denmark", 210],
  ["Poland", 260],
  ["Austria", 230],
  ["Switzerland", 240],
  ["Ireland", 200],
  ["Portugal", 170],
  ["Finland", 190],
  ["Czech Republic", 200],
  ["Hungary", 180],
  ["Greece", 210],
  ["Slovakia", 170],
  ["Croatia", 150],
];

export default function GeoGraph() {
  return (
    <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Geospatial Map - Europe
      </h2>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              alert(`Selected Region: ${region[0]}, Popularity: ${region[1]}`);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          region: "150", // Focus on Europe
          colorAxis: { colors: ["#e6f2ff", "#003366"] }, // Gradient for popularity
          backgroundColor: "transparent", // Chart background color
          datalessRegionColor: "#f5f5f5", // Color for regions with no data
          defaultColor: "#cccccc", // Default country color
        }}
      />
    </div>
  );
}
