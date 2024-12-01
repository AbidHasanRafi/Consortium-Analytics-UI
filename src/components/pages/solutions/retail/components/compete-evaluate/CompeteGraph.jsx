import React from "react";
import { Chart } from "react-google-charts";

// Competitor performance data
export const data = [
  [
    "Month",
    "Competitor A",
    "Competitor B",
    "Competitor C",
    "Competitor D",
    "Competitor E",
    "Industry Average",
  ],
  ["January", 165, 938, 522, 998, 450, 614.6],
  ["February", 135, 1120, 599, 1268, 288, 682],
  ["March", 157, 1167, 587, 807, 397, 623],
  ["April", 139, 1110, 615, 968, 215, 609.4],
  ["May", 136, 691, 629, 1026, 366, 569.6],
];

export const options = {
  vAxis: { title: "Performance Score" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } }, // Line for Industry Average
  colors: [
    "#3498db", // Competitor A
    "#3fb7c6", // Competitor B (blend of blue and green)
    "#47d2a5", // Competitor C (closer to green)
    "#52be80", // Competitor D (green)
    "#41ab93", // Competitor E (mid-point between blue and green)
    "#2980b9", // Industry Average (darker blue for distinction)
  ],
};

export function CompeteGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Competitor Performance Evaluation
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}
