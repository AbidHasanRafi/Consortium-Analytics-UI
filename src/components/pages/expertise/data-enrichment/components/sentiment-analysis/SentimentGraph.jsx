import React from "react";
import { Chart } from "react-google-charts";

// Sentiment Analysis Data (Positive, Neutral, Negative Sentiment over the years)
export const data = [
  ["Year", "Positive Sentiment", "Neutral Sentiment", "Negative Sentiment"],
  ["2019", 0.7, 0.2, 0.1],
  ["2020", 0.75, 0.18, 0.07],
  ["2021", 0.8, 0.15, 0.05],
  ["2022", 0.85, 0.12, 0.03],
  ["2023", 0.88, 0.1, 0.02],
];

export const options = {
  isStacked: "relative",
  height: 300,
  legend: { position: "top", maxLines: 3 },
  vAxis: {
    minValue: 0,
    ticks: [0, 0.2, 0.4, 0.6, 0.8, 1],
    title: "Sentiment Scores",
  },
  hAxis: {
    title: "Year",
  },
  colors: ["#2ecc71", "#95a5a6", "#e74c3c"], // Green for positive, Gray for neutral, Red for negative
  backgroundColor: "transparent",
};

export default function SentimentGraph() {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Sentiment Analysis Over the Years
      </h2>
      <Chart
        chartType="SteppedAreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
        legendToggle
      />
    </div>
  );
}
