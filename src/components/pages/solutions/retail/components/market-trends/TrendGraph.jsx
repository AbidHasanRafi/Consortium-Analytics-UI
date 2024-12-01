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

// Sample market trend data by months
const sampleMarketData = [
  { month: "Jan", stockPrice: 1200, tradingVolume: 3000 },
  { month: "Feb", stockPrice: 1300, tradingVolume: 3200 },
  { month: "Mar", stockPrice: 1250, tradingVolume: 3100 },
  { month: "Apr", stockPrice: 1350, tradingVolume: 3400 },
  { month: "May", stockPrice: 1400, tradingVolume: 3600 },
  { month: "Jun", stockPrice: 1500, tradingVolume: 4000 },
  { month: "Jul", stockPrice: 1450, tradingVolume: 3800 },
  { month: "Aug", stockPrice: 1550, tradingVolume: 4200 },
  { month: "Sept", stockPrice: 1600, tradingVolume: 4500 },
  { month: "Oct", stockPrice: 1650, tradingVolume: 4700 },
  { month: "Nov", stockPrice: 1700, tradingVolume: 4900 },
  { month: "Dec", stockPrice: 1750, tradingVolume: 5100 },
];

const TrendGraph = () => {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Monthly Stock Market Trends
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={sampleMarketData}
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Render Lines */}
          <Line
            type="monotone"
            dataKey="stockPrice"
            stroke="#8884d8"
            dot={false}
            name="Stock Price ($)"
          />
          <Line
            type="monotone"
            dataKey="tradingVolume"
            stroke="#82ca9d"
            dot={false}
            name="Trading Volume"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendGraph;
