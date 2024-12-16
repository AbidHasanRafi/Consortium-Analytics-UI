import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const portfolioData = [
  { name: "Tech", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Finance", uv: -3000, pv: 1398, amt: 2210 },
  { name: "Energy", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Retail", uv: -1890, pv: 4800, amt: 2181 },
  { name: "Real Estate", uv: 2390, pv: -3800, amt: 2500 },
];

export default class PortfolioGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Portfolio Insights
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={portfolioData}
            stackOffset="sign"
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
            <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
