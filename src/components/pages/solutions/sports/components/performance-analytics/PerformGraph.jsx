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
} from "recharts";

// Define custom deeper colors between the specified shades
const colors = [
  "#7fb3d5",
  "#7bedab",
  "#82e0aa",
  "#bfc9ca",
  "#7fb3d5",
  "#7bedab",
];

// Fake performance data representing player/team stats
const data = [
  {
    name: "Player 1",
    points: 30,
    assists: 5,
    rebounds: 8,
  },
  {
    name: "Player 2",
    points: 20,
    assists: 7,
    rebounds: 10,
  },
  {
    name: "Player 3",
    points: 25,
    assists: 6,
    rebounds: 6,
  },
  {
    name: "Player 4",
    points: 15,
    assists: 9,
    rebounds: 4,
  },
  {
    name: "Player 5",
    points: 18,
    assists: 8,
    rebounds: 9,
  },
  {
    name: "Player 6",
    points: 28,
    assists: 4,
    rebounds: 5,
  },
];

// Create a custom bar shape for a more visually engaging chart
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Performance Analytics Chart Component
export default function PerformGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Player & Team Performance Analytics
      </h2>
      <BarChart
        width={600}
        height={350}
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
        <Bar
          dataKey="points"
          fill="#7fb3d5"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 6]} />
          ))}
        </Bar>
        <Bar
          dataKey="assists"
          fill="#7bedab"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[(index + 1) % 6]} />
          ))}
        </Bar>
        <Bar
          dataKey="rebounds"
          fill="#82e0aa"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[(index + 2) % 6]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}
