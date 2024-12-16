import React from "react";
import { Chart } from "react-google-charts";

// Fake data on fan engagement over the years
const data = [
  ["Year", "Fan Interactions", "Fan Satisfaction", "Fan Growth"],
  ["2018", 1200, 1100, 500],
  ["2019", 1300, 1150, 600],
  ["2020", 1400, 1200, 700],
  ["2021", 1500, 1250, 800],
  ["2022", 1600, 1300, 900],
  ["2023", 1700, 1350, 1000],
];

// Chart options for fan engagement analysis
const options = {
  chart: {
    title: "Fan Engagement Analytics",
    subtitle: "Fan Interactions, Satisfaction, and Growth over the Years",
  },
  hAxis: {
    title: "Year",
  },
  vAxis: {
    title: "Units",
  },
  curveType: "function", // Smooths the line
  legend: { position: "top" }, // Places the legend at the top
  pointSize: 5, // Adds dots to each data point
};

function FanGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Fan Engagement Analytics
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

export default FanGraph;
