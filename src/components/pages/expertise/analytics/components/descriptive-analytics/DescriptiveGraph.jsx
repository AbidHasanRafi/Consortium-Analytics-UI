import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Demand", "Supply"],
  ["2018", 1500, 1400],
  ["2019", 1600, 1550],
  ["2020", 1700, 1600],
  ["2021", 1800, 1700],
  ["2022", 1900, 1800],
  ["2023", 2000, 1900],
];

const options = {
  chart: {
    title: "Demand vs Supply Analysis",
    subtitle: "Historical Performance (2018-2023)",
  },
  hAxis: {
    title: "Year",
  },
  vAxis: {
    title: "Units",
  },
  curveType: "none", // Removes smooth curve to show exact values
  legend: { position: "top" },
  pointSize: 5, // Adds dots to each data point for better clarity
  lineWidth: 2, // Sets line thickness for better visibility
  colors: ["#FF8A5C", "#8AD1C2"], // Distinguish between Demand and Supply
  annotations: {
    style: "line", // Adds lines showing key points
  },
};

function DescriptiveGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Demand and Supply Analysis (2018-2023)
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

export default DescriptiveGraph;
