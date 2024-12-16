import React from "react";
import { Chart } from "react-google-charts";

const ContextGraph = () => {
  const data = [
    ["Resource", "Allocation (hours per week)"],
    ["Teacher Preparation", 10],
    ["Student Learning", 25],
    ["Administrative Tasks", 5],
    ["Parent-Teacher Meetings", 3],
    ["Extracurricular Activities", 7],
    ["Curriculum Development", 8],
    ["Professional Development", 4],
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
      "#8AD1C2",
      "#FF8A5C",
      "#7F7F7F",
      "#BCD18A",
      "#9F8AD1",
      "#D18A99",
      "#D1B48A",
    ],
    backgroundColor: "transparent",
    slices: {
      0: { offset: 0.1 },
      1: { offset: 0.1 },
      2: { offset: 0.1 },
      3: { offset: 0.1 },
      4: { offset: 0.1 },
      5: { offset: 0.1 },
      6: { offset: 0.1 },
    },
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Contextualized Resource Allocation in Education
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

export default ContextGraph;
