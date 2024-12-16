import React from "react";
import { Chart } from "react-google-charts";

const RouteGraph = () => {
  const data = [
    ["Route Segment", "Time Spent (hours)"],
    ["Pick Up Packages", 1.5],
    ["Route A - Deliver to Customer 1", 2],
    ["Route B - Deliver to Customer 2", 2.5],
    ["Route C - Deliver to Customer 3", 3],
    ["Return to Warehouse", 1.5],
    ["Buffer Time (Traffic, etc.)", 1],
  ];

  const options = {
    pieHole: 0.4,
    is3D: true,
    pieStartAngle: 100,
    sliceVisibilityThreshold: 0.02,
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#FF8A5C", "#7F7F7F", "#BCD18A", "#9F8AD1", "#D18A99"],
    backgroundColor: "transparent",
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 },
      3: { offset: 0.1 },
      4: { offset: 0.1 },
      5: { offset: 0.1 },
    },
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Delivery Route Optimization Analysis
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </div>
  );
};

export default RouteGraph;
