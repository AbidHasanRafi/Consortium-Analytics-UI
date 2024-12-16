import React from "react";
import { Chart } from "react-google-charts";

// Fake data about web development performance metrics
export const webDevData = [
  [
    "Metric",
    "Page Load Time (s)",
    "User Engagement (min)",
    "Conversion Rate (%)",
    "Bounce Rate (%)",
    "SEO Performance (score)",
  ],
  ["Site A", 3.2, 4.5, 2.3, 60, 80],
  ["Site B", 2.5, 5.0, 3.1, 55, 85],
  ["Site C", 4.0, 3.5, 1.8, 65, 75],
  ["Site D", 2.8, 6.0, 4.0, 50, 90],
  ["Site E", 3.5, 4.0, 2.5, 62, 78],
];

// Options for web development analysis chart
export const webDevOptions = {
  backgroundColor: "transparent",
  vAxis: { title: "Score / Percentage" },
  hAxis: { title: "Websites" },
  seriesType: "bars",
  series: { 4: { type: "line" } }, // Line for SEO Performance
  colors: [
    "#ffcccb", // Page Load Time (light red)
    "#ffeb3b", // User Engagement (yellow)
    "#66bb6a", // Conversion Rate (green)
    "#ff7043", // Bounce Rate (orange)
    "#42a5f5", // SEO Performance (blue)
  ],
};

export default function WebDevGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Web Development Performance Analytics
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={webDevData}
        options={webDevOptions}
      />
    </div>
  );
}
