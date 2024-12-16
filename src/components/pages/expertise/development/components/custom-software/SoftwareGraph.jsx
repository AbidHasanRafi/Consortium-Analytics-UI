import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define custom colors for a software performance graph
const colors = [
  "#1e90ff", // For performance data (e.g., points, speed, etc.)
  "#32cd32", // For system load (e.g., CPU usage, memory)
  "#ff6347", // For error rates (e.g., failure counts, bugs)
  "#ffb6c1", // For response times (e.g., server or API latency)
  "#d3d3d3", // For uptime (e.g., system uptime)
  "#98fb98", // For data throughput (e.g., download/upload speeds)
];

// Example software performance data
const data = [
  {
    name: "Server 1",
    performance: 92,
    systemLoad: 65,
    errorRate: 2.5,
    responseTime: 300,
    uptime: 99.9,
    throughput: 80,
  },
  {
    name: "Server 2",
    performance: 85,
    systemLoad: 72,
    errorRate: 1.2,
    responseTime: 250,
    uptime: 99.8,
    throughput: 78,
  },
  {
    name: "Server 3",
    performance: 88,
    systemLoad: 60,
    errorRate: 3.0,
    responseTime: 320,
    uptime: 99.7,
    throughput: 82,
  },
  {
    name: "Server 4",
    performance: 95,
    systemLoad: 50,
    errorRate: 0.5,
    responseTime: 280,
    uptime: 99.95,
    throughput: 85,
  },
];

// Create custom bar shape (can be adjusted for better aesthetics)
const getPath = (x, y, width, height) => {
  return `M${x},${y + height} C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3}
  ${x + width / 2},${y} C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width},${y + height} Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Software performance analytics graph component
export default function SoftwareGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Software Performance & Analytics
      </h2>
      <ResponsiveContainer width="100%" height={400}>
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
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Performance Metrics Bar (Custom Shape) */}
          <Bar
            dataKey="performance"
            fill="#1e90ff"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-performance-${index}`}
                fill={colors[index % 6]}
              />
            ))}
          </Bar>

          {/* System Load Bar (Custom Shape) */}
          <Bar
            dataKey="systemLoad"
            fill="#32cd32"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-load-${index}`} fill={colors[(index + 1) % 6]} />
            ))}
          </Bar>

          {/* Error Rate Bar (Custom Shape) */}
          <Bar
            dataKey="errorRate"
            fill="#ff6347"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-error-${index}`}
                fill={colors[(index + 2) % 6]}
              />
            ))}
          </Bar>

          {/* Response Time Bar (Custom Shape) */}
          <Bar
            dataKey="responseTime"
            fill="#ffb6c1"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-response-${index}`}
                fill={colors[(index + 3) % 6]}
              />
            ))}
          </Bar>

          {/* Uptime Bar (Custom Shape) */}
          <Bar
            dataKey="uptime"
            fill="#d3d3d3"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-uptime-${index}`}
                fill={colors[(index + 4) % 6]}
              />
            ))}
          </Bar>

          {/* Throughput Bar (Custom Shape) */}
          <Bar
            dataKey="throughput"
            fill="#98fb98"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-throughput-${index}`}
                fill={colors[(index + 5) % 6]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
