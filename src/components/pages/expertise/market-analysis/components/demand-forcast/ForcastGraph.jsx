import React from "react";
import { Chart } from "react-google-charts";

// Define the data for Demand Forecasting
const data = [
  ["Month", "Demand Forecast", "Actual Demand"],
  ["Jan", 100, 90],
  ["Feb", 150, 130],
  ["Mar", 200, 180],
  ["Apr", 250, 240],
  ["May", 300, 290],
  ["Jun", 350, 340],
  ["Jul", 400, 380],
  ["Aug", 450, 440],
  ["Sep", 500, 480],
  ["Oct", 550, 530],
  ["Nov", 600, 590],
  ["Dec", 650, 630],
];

export function ForecastGraph() {
  return (
    <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Demand Forecasting Graph
      </h2>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          curveType: "function",
          legend: { position: "bottom" },
          hAxis: {
            title: "Month",
            slantedText: true,
            slantedTextAngle: 45,
          },
          vAxis: {
            title: "Demand",
            minValue: 0,
          },
          series: {
            0: { color: "#1f77b4", lineWidth: 3 },
            1: { color: "#ff7f0e", lineWidth: 3 },
          },
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
