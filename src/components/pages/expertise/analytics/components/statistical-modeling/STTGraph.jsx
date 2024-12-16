import React from "react";
import { Chart } from "react-google-charts";

// Fake Data for Statistical Modeling - Predicting Sales based on Advertising Spend and Customer Satisfaction
export const data = [
  [
    "Year",
    "Advertising Spend (in $1000s)",
    "Customer Satisfaction (%)",
    "Sales (in $1000s)", // Target variable
  ],
  ["2013", 200, 80, 450],
  ["2014", 250, 82, 475],
  ["2015", 300, 85, 500],
  ["2016", 350, 88, 525],
  ["2017", 400, 90, 550],
  ["2018", 450, 92, 575],
  ["2019", 500, 94, 600],
  ["2020", 550, 95, 625],
  ["2021", 600, 96, 650],
  ["2022", 650, 97, 675],
];

// Options for the graph
export const options = {
  isStacked: "relative",
  height: 400,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 100, 200, 300, 400, 500, 600, 700],
    title: "Amount (in $1000s) / Percentage (%)",
  },
  hAxis: {
    title: "Year",
  },
  colors: ["#3498db", "#1abc9c", "#8e44ad"], // Cool tones with one warm color
  backgroundColor: "transparent",
};

export default function STTGraph() {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Statistical Modeling Insights: Predicting Sales
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        legendToggle
      />
    </div>
  );
}
