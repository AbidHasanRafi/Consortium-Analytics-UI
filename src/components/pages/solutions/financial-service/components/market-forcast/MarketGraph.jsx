import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const forecastData = [
  { name: "Q1", uv: 590, pv: 800, amt: 1400 },
  { name: "Q2", uv: 868, pv: 967, amt: 1506 },
  { name: "Q3", uv: 1397, pv: 1098, amt: 989 },
  { name: "Q4", uv: 1480, pv: 1200, amt: 1228 },
  { name: "Q5", uv: 1520, pv: 1108, amt: 1100 },
  { name: "Q6", uv: 1400, pv: 680, amt: 1700 },
];

export default class MarketGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Market Forcast Graph
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={forecastData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" barSize={20} fill="#3498db" />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#e74c3c"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="pv"
              fill="#82ca9d"
              stroke="#82ca9d"
              opacity={0.3}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
