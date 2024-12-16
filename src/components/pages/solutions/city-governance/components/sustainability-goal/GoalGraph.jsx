import React from "react";
import { Chart } from "react-google-charts";

const GoalGraph = () => {
  const data = [
    ["Sustainability Goal", "Progress (%)"],
    ["Increase Green Spaces", 75],
    ["Reduce Carbon Emissions", 60],
    ["Improve Water Efficiency", 50],
    ["Increase Renewable Energy Use", 80],
    ["Waste Management & Recycling", 65],
    ["Promote Sustainable Mobility", 55],
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
    colors: [
      "#aed6f1", // Light blue
      "#76d7c4", // Light teal
      "#abebc6", // Light green
      "#7ec8b3", // Medium teal
      "#b3e0d1", // Soft light blue-green
      "#9de5c7", // Soft green-teal
    ],
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
        Sustainability Goals in Urban Environments
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

export default GoalGraph;
