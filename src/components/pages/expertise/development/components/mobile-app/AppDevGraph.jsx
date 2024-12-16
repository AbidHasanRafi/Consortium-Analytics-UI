import React from "react";
import { Chart } from "react-google-charts";

// Fake data on app development metrics over the years
const data = [
  ["Year", "User Retention", "App Performance", "New Features Released"],
  ["2018", 75, 80, 5],
  ["2019", 78, 85, 7],
  ["2020", 82, 88, 9],
  ["2021", 85, 90, 12],
  ["2022", 90, 92, 15],
  ["2023", 92, 95, 20],
];

// Chart options for app development analysis
const options = {
  chart: {
    title: "App Development Analytics",
    subtitle:
      "User Retention, Performance, and New Features Released over the Years",
  },
  hAxis: {
    title: "Year",
  },
  vAxis: {
    title: "Percentage / Count",
  },
  curveType: "function", // Smooths the line
  legend: { position: "top" }, // Places the legend at the top
  pointSize: 5, // Adds dots to each data point
};

function AppDevGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        App Development Analytics
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
}

export default AppDevGraph;
