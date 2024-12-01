import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "AF", uv: 4000, pv: 2400, amt: 2400 }, // Africa
  { name: "AS", uv: 3000, pv: 1398, amt: 2210 }, // Asia
  { name: "EU", uv: 2000, pv: 9800, amt: 2290 }, // Europe
  { name: "NA", uv: 2780, pv: 3908, amt: 2000 }, // North America
  { name: "SA", uv: 1890, pv: 4800, amt: 2181 }, // South America
  { name: "AU", uv: 2390, pv: 3800, amt: 2500 }, // Australia
  { name: "AN", uv: 3490, pv: 4300, amt: 2100 }, // Antarctica
];

const OptimizeGraph = () => {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Location-based Optimization Graph
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OptimizeGraph;
