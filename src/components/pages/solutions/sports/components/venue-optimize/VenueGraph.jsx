import React from "react";
import { Chart } from "react-google-charts";

// Fake data about venue optimization
export const venueData = [
  [
    "Venue Category",
    "Seating Capacity",
    "Event Frequency",
    "Revenue Generated",
    "Fan Satisfaction",
    "Operational Efficiency",
  ],
  ["Stadium", 500, 100, 150, 85, 90],
  ["Arena", 200, 120, 800, 88, 92],
  ["Outdoor Field", 300, 50, 300, 75, 80],
  ["Indoor Court", 150, 90, 500, 80, 85],
  ["Convention Hall", 100, 40, 200, 70, 78],
];

// Options for venue optimization analysis chart
export const venueOptions = {
  backgroundColor: "transparent",
  vAxis: { title: "Score / Amount" },
  hAxis: { title: "Venue Category" },
  seriesType: "bars",
  series: { 4: { type: "line" } }, // Line for Operational Efficiency
  colors: [
    "#abebc6", // Seating Capacity (light green)
    "#aed6f1", // Event Frequency (light blue)
    "#5dade2", // Revenue Generated (medium blue)
    "#85c1e9", // Fan Satisfaction (soft blue)
    "#76d7c4", // Operational Efficiency (green-blue blend)
  ],
};

export default function VenueGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Venue Optimization Insights
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={venueData}
        options={venueOptions}
      />
    </div>
  );
}
