import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const RealTimeGraph = () => {
  const [data, setData] = useState([
    ["Performance Metric", "Completion (%)"],
    ["Quarterly Revenue Target", 68],
    ["Employee Training Completion", 85],
    ["Customer Satisfaction Score", 74],
    ["Product Launch Milestones", 62],
    ["Website Traffic Goal", 80],
    ["Operational Efficiency", 70],
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = data.map((row, index) => {
        if (index === 0) return row; // Keep header intact
        const progress = Math.max(
          0,
          Math.min(
            100,
            row[1] + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 10
          ) // Larger fluctuation
        );
        return [row[0], Math.round(progress)];
      });
      setData(updatedData);
      setLastUpdated(new Date()); // Update timestamp
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [data]);

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
      <h2 className="text-center mb-4 text-lg sm:text-xl font-semibold text-gray-900">
        Real-Time Key Performance Indicators (KPIs)
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Last Updated: {lastUpdated.toLocaleTimeString()}
      </p>
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

export default RealTimeGraph;
