import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["Russia", 700],
  ["India", 800],
  ["China", 900],
  ["Australia", 650],
  ["Japan", 750],
  ["United Kingdom", 580],
  ["South Africa", 470],
  ["Mexico", 520],
  ["Italy", 430],
  ["Spain", 490],
  ["South Korea", 620],
  ["Argentina", 350],
  ["Saudi Arabia", 400],
  ["Egypt", 300],
  ["Turkey", 380],
  ["Bangladesh", 550],
  ["Czech Republic", 560], // Added Czech Republic
];

export function SiteGraph() {
  return (
    <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Site Selection Map
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
          region: "world", // Displays the whole world
          colorAxis: { colors: ["#e6f2ff", "#003366"] }, // Gradient for popularity
          backgroundColor: "transparent", // Chart background color
          datalessRegionColor: "#f5f5f5", // Color for regions with no data
          defaultColor: "#cccccc", // Default country color
        }}
      />
    </div>
  );
}
