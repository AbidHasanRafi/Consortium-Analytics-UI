import React from "react";
import { Chart } from "react-google-charts";

const PredGraph = () => {
  // Simulated historical data (in hours)
  const historicalData = [
    [
      "Route Segment",
      "Historical Time Spent (hours)",
      "Predicted Time Spent (hours)",
    ],
    ["Pick Up Packages", 1.5, 1.6],
    ["Route A - Deliver to Customer 1", 2, 2.1],
    ["Route B - Deliver to Customer 2", 2.5, 2.4],
    ["Route C - Deliver to Customer 3", 3, 3.1],
    ["Return to Warehouse", 1.5, 1.6],
    ["Buffer Time (Traffic, etc.)", 1, 1.1],
  ];

  const options = {
    title: "Predictive Delivery Route Optimization Analysis",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Time Spent (hours)",
      minValue: 0,
    },
    vAxis: {
      title: "Route Segment",
    },
    colors: ["#FF8A5C", "#8AD1C2"], // Distinguish between Historical and Predicted
    bars: "grouped", // Group the bars for comparison
    backgroundColor: "transparent",
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Predictive Delivery Route Optimization Analysis
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="BarChart"
          data={historicalData}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default PredGraph;
