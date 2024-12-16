import React from "react";
import { Chart } from "react-google-charts";

export default function ExternalDataIntegrationGraph() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        External Data Integration Analytics
      </h2>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ["Category", "Percentage"],
          ["Public Datasets", 45],
          ["Market Reports", 30],
          ["Social Media Insights", 25],
          ["Third-Party APIs", 50],
          ["Customer Feedback Platforms", 35],
          ["IoT Sensor Data", 40],
          ["News and Articles", 20],
        ]}
        options={{
          backgroundColor: "transparent",
          legend: { position: "right" },
          pieHole: 0.4, // For a donut chart
          slices: {
            0: { color: "#7FB3D5" },
            1: { color: "#76D7C4" },
            2: { color: "#82E0AA" },
            3: { color: "#7DCEA0" },
            4: { color: "#73C6B6" },
            5: { color: "#85C1E9" },
            6: { color: "#7FB3D5" },
          },
        }}
        rootProps={{ "data-testid": "external-data-graph" }}
      />
    </div>
  );
}
