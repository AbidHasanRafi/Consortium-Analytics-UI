import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Year",
    "Preventive Care Adoption (%)",
    "Avg. Wait Time (mins)",
    "Patient Satisfaction (%)",
  ],
  ["2018", 45, 30, 78],
  ["2019", 50, 28, 80],
  ["2020", 55, 35, 82],
  ["2021", 60, 25, 85],
  ["2022", 65, 22, 88],
  ["2023", 70, 20, 90],
];

const options = {
  chart: {
    subtitle: "Tracking Preventive Care, Wait Time, and Patient Satisfaction",
  },
  curveType: "function", // Smoothens the lines
  legend: { position: "top" }, // Positions the legend at the top
  vAxis: {
    title: "Percentage / Minutes",
  },
  hAxis: {
    title: "Year",
  },
  series: {
    0: { targetAxisIndex: 0 }, // Preventive Care Adoption (left axis)
    1: { targetAxisIndex: 1 }, // Avg. Wait Time (right axis)
    2: { targetAxisIndex: 0 }, // Patient Satisfaction (left axis)
  },
  pointSize: 5, // Adds dots to each data point
  backgroundColor: "transparent", // Makes the background transparent
  chartArea: {
    backgroundColor: "transparent", // Ensures the chart area is transparent too
  },
};

function OutcomeGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Healthcare Outcome Optimization
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default OutcomeGraph;
