import React from "react";
import { Chart } from "react-google-charts";

// Deep Learning training metrics (Loss and Accuracy over Epochs)
export const data = [
  [
    "Epoch",
    "Training Loss",
    "Validation Loss",
    "Training Accuracy (%)",
    "Validation Accuracy (%)",
  ],
  [1, 0.85, 0.9, 72, 70],
  [2, 0.75, 0.8, 75, 73],
  [3, 0.65, 0.75, 78, 76],
  [4, 0.55, 0.7, 82, 79],
  [5, 0.5, 0.6, 85, 83],
  [6, 0.45, 0.55, 87, 85],
  [7, 0.4, 0.5, 90, 88],
  [8, 0.35, 0.45, 92, 90],
  [9, 0.3, 0.4, 94, 92],
  [10, 0.25, 0.35, 95, 93],
];

export const options = {
  hAxis: { title: "Epoch" },
  vAxis: {
    title: "Loss",
    format: "decimal",
  },
  vAxes: {
    0: { title: "Loss" },
    1: { title: "Accuracy" },
  },
  seriesType: "line", // Ensure all series are of line type
  series: {
    0: { type: "line", color: "#3498db" }, // Training Loss (Line)
    1: { type: "line", color: "#e74c3c" }, // Validation Loss (Line)
    2: { type: "line", color: "#2ecc71" }, // Training Accuracy (Line)
    3: { type: "line", color: "#f39c12" }, // Validation Accuracy (Line)
  },
  backgroundColor: "transparent", // Set the chart's overall background to transparent
  chartArea: {
    backgroundColor: "transparent", // Ensuring chart area is transparent
  },
};

export function DLGraph() {
  return (
    <div
      className="w-full h-[400px] p-6"
      style={{ backgroundColor: "transparent" }}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Deep Learning Model Performance (Loss & Accuracy)
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
