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

// Fake data for API development metrics by endpoint
const apiEndpointData = [
  {
    endpoint: "/users",
    requestCount: 1200,
    successRate: 98,
    avgResponseTime: 250,
  },
  {
    endpoint: "/products",
    requestCount: 1500,
    successRate: 95,
    avgResponseTime: 300,
  },
  {
    endpoint: "/orders",
    requestCount: 1800,
    successRate: 90,
    avgResponseTime: 350,
  },
  {
    endpoint: "/payments",
    requestCount: 2000,
    successRate: 99,
    avgResponseTime: 200,
  },
  {
    endpoint: "/reviews",
    requestCount: 800,
    successRate: 85,
    avgResponseTime: 400,
  },
];

// Chart options for API development metrics by endpoint
export default function APIDevGraph() {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        API Development Metrics by Endpoint
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={apiEndpointData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="endpoint" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Bar for Request Count */}
          <Bar
            dataKey="requestCount"
            fill="#3498db"
            name="Request Count"
            barSize={30} // Removed radius to ensure sharp corners
          />

          {/* Bar for Success Rate */}
          <Bar
            dataKey="successRate"
            fill="#2ecc71"
            name="Success Rate (%)"
            barSize={30} // Removed radius to ensure sharp corners
          />

          {/* Bar for Average Response Time */}
          <Bar
            dataKey="avgResponseTime"
            fill="#f39c12"
            name="Avg Response Time (ms)"
            barSize={30} // Removed radius to ensure sharp corners
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
