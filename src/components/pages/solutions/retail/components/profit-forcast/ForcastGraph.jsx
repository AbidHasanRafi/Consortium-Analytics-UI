import React from "react";
import { Chart } from "react-google-charts";

// Updated data reflecting Competitor Forecasting
export const data = [
  [
    "Competitor",
    "Revenue Growth (%)",
    "Market Share (%)",
    "Region",
    "Forecasted Growth (%)",
    "Color", // Adding color column
  ],
  ["Competitor A", 10.66, 25.67, "North America", 12.4, ""],
  ["Competitor B", 8.84, 18.36, "Europe", 10.5, ""],
  ["Competitor C", 12.6, 15.84, "Europe", 14.8, ""],
  ["Competitor D", 6.73, 8.78, "Middle East", 7.1, ""],
  ["Competitor E", 9.05, 20.0, "Europe", 9.9, ""],
  ["Competitor F", 7.49, 16.7, "Middle East", 8.2, ""],
  ["Competitor G", 5.09, 10.77, "Middle East", 6.4, ""],
  ["Competitor H", 11.55, 25.96, "Middle East", 13.1, ""],
];

// Function to generate color based on values
const getBubbleColor = (growth) => {
  const minGrowth = 5; // minimum value for gradient
  const maxGrowth = 15; // maximum value for gradient

  // Calculate percentage of value in range
  const percentage = (growth - minGrowth) / (maxGrowth - minGrowth);
  const blueValue = Math.round(93 + percentage * 72); // #5dade2 - blue part
  const greenValue = Math.round(172 + percentage * 56); // #48c9b0 - green part

  return `rgb(${blueValue}, ${greenValue}, 176)`; // RGB color in the range
};

export const options = {
  hAxis: { title: "Revenue Growth (%)" },
  vAxis: { title: "Market Share (%)" },
  bubble: { textStyle: { fontSize: 11 } },
  backgroundColor: "transparent", // Set the chart's overall background to transparent
  chartArea: {
    backgroundColor: "transparent", // Ensuring chart area is transparent
  },
};

export function ForecastGraph() {
  // Modify the data by adding color to each row
  const modifiedData = data.map((row, index) => {
    if (index === 0) return row; // Keep the header row intact
    const color = getBubbleColor(row[1]); // Get color for each row based on Revenue Growth
    return [...row.slice(0, 5), color]; // Add the color as the last column
  });

  return (
    <div
      className="w-full h-[400px] p-6"
      style={{ backgroundColor: "transparent" }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Competitor Forecasting
      </h2>
      <Chart
        chartType="BubbleChart"
        width="100%"
        height="100%"
        data={modifiedData}
        options={options}
      />
    </div>
  );
}
