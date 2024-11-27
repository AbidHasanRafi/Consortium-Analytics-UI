import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    year: "2018",
    marketGrowth: 4000,
    marketDecline: 1200,
    stability: 2000,
  },
  {
    year: "2019",
    marketGrowth: 4500,
    marketDecline: 1300,
    stability: 2100,
  },
  {
    year: "2020",
    marketGrowth: 5000,
    marketDecline: 1500,
    stability: 2200,
  },
  {
    year: "2021",
    marketGrowth: 5500,
    marketDecline: 1600,
    stability: 2300,
  },
  {
    year: "2022",
    marketGrowth: 6000,
    marketDecline: 1700,
    stability: 2400,
  },
  {
    year: "2023",
    marketGrowth: 6500,
    marketDecline: 1800,
    stability: 2500,
  },
  {
    year: "2024",
    marketGrowth: 7000,
    marketDecline: 1900,
    stability: 2600,
  },
];

const MarketTrendsGraph = () => {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Market Trends: Growth, Decline, and Stability
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="marketGrowth"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Market Growth"
          />
          <Line
            type="monotone"
            dataKey="marketDecline"
            stroke="#ff0000"
            name="Market Decline"
          />
          <Line
            type="monotone"
            dataKey="stability"
            stroke="#82ca9d"
            name="Stability"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketTrendsGraph;
