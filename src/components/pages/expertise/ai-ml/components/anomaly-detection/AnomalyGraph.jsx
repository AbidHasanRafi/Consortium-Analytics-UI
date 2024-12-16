import React from "react";
import { Chart } from "react-google-charts";

// Anomaly detection data with outliers (anomalies) introduced
export const data = [
  ["Month", "Normal Data", "Anomalous Data", "Industry Average"],
  ["January", 165, 938, 614.6],
  ["February", 135, 1120, 682],
  ["March", 157, 1167, 623],
  ["April", 139, 5000, 609.4], // Anomaly in April (spike)
  ["May", 136, 691, 569.6],
  ["June", 155, 3000, 700], // Anomaly in June (spike)
  ["July", 160, 650, 600],
  ["August", 150, 1000, 650],
  ["September", 140, 900, 680],
  ["October", 155, 1300, 690],
  ["November", 165, 1300, 710],
  ["December", 170, 5000, 720], // Anomaly in December (spike)
];

export const options = {
  vAxis: { title: "Performance Score" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 2: { type: "line" } }, // Line for Industry Average
  colors: [
    "#3498db", // Normal Data (blue)
    "#e74c3c", // Anomalous Data (red for anomalies)
    "#2980b9", // Industry Average (darker blue for distinction)
  ],
  pointSize: 5, // Customize the point size
  annotations: {
    style: "line", // Annotations to highlight outliers
  },
};

export function AnomalyGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Monthly Anomaly Detection - Irregularities in Performance
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
