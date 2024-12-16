import React, { PureComponent } from "react";
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

// Data for cloud data management
const data = [
  {
    name: "Mon",
    storage: 500, // Storage Usage in GB
    requests: 800, // Data Requests
    latency: 0.05, // Latency in seconds
  },
  {
    name: "Tue",
    storage: 520,
    requests: 850,
    latency: 0.06,
  },
  {
    name: "Wed",
    storage: 550,
    requests: 900,
    latency: 0.07,
  },
  {
    name: "Thu",
    storage: 580,
    requests: 950,
    latency: 0.08,
  },
  {
    name: "Fri",
    storage: 600,
    requests: 1000,
    latency: 0.09,
  },
  {
    name: "Sat",
    storage: 620,
    requests: 1100,
    latency: 0.1,
  },
];

export default class CloudLineGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Cloud Data Management Trends
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "Days", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              label={{
                value: "Usage (GB & Requests)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Legend />

            {/* Line for Storage Usage */}
            <Line
              type="monotone"
              dataKey="storage"
              stroke="#4e91ff"
              name="Storage Usage (GB)"
              strokeWidth={2}
            />

            {/* Line for Data Requests */}
            <Line
              type="monotone"
              dataKey="requests"
              stroke="#82ca9d"
              name="Data Requests"
              strokeWidth={2}
            />

            {/* Line for Latency */}
            <Line
              type="monotone"
              dataKey="latency"
              stroke="#ff4d4d"
              name="Latency (Seconds)"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
