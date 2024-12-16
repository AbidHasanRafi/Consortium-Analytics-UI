import React from "react";
import { Chart } from "react-google-charts";

export function TrendGraph() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Trend Analysis: Monthly Revenue Growth
      </h2>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ["Month", "Revenue ($K)", "Profit Margin (%)"],
          ["January", 120, 20],
          ["February", 130, 25],
          ["March", 140, 30],
          ["April", 160, 35],
          ["May", 180, 40],
          ["June", 200, 45],
          ["July", 220, 50],
        ]}
        options={{
          backgroundColor: "transparent",
          legend: { position: "top", alignment: "end" },
          hAxis: {
            title: "Performance Metrics",
            minValue: 0,
          },
          vAxis: {
            title: "Month",
          },
          seriesType: "bars",
          bar: { groupWidth: "75%" },
          isStacked: false, // Set to true for stacked bar chart
          series: {
            0: { color: "#4caf50" }, // Revenue
            1: { color: "#2196f3" }, // Profit Margin
          },
        }}
        rootProps={{ "data-testid": "trend-analysis-bar-graph" }}
      />
    </div>
  );
}
