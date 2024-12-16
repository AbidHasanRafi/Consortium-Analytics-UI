import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Projected Demand", "Projected Supply"],
  ["2018", 1500, 1400],
  ["2019", 1600, 1550],
  ["2020", 1700, 1600],
  ["2021", 1800, 1700],
  ["2022", 1900, 1800],
  ["2023", 2000, 1900],
];

const options = {
  chart: {
    title: "Demand Forecasting",
    subtitle: "Projected Demand vs Supply over the Years",
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

function DemandGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Demand Forecasting Analysis
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

export default DemandGraph;
