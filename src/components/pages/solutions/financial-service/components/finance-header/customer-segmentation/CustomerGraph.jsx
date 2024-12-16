import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

const outerData = [
  { name: "Premium", value: 400 },
  { name: "Basic", value: 300 },
  { name: "Active", value: 300 },
  { name: "Inactive", value: 200 },
];

const innerData = [
  { name: "High-Spend", value: 100 },
  { name: "Mid-Spend", value: 300 },
  { name: "Frequent", value: 100 },
  { name: "Occasional", value: 80 },
  { name: "Low Engage", value: 40 },
  { name: "High Engage", value: 30 },
  { name: "Returning", value: 50 },
  { name: "New", value: 100 },
  { name: "Loyal", value: 200 },
  { name: "Lost", value: 150 },
  { name: "Re-engaged", value: 50 },
];

const COLORS = [
  "#85c1e9", // Light blue
  "#76d7c4", // Light teal
  "#82e0aa", // Light green
  "#76d7c4", // Repeating teal for balance
];

const INNER_COLORS = [
  "#4e8fbc", // Deeper blue
  "#4bbfa0", // Deeper teal
  "#56c46f", // Deeper green
  "#4bbfa0", // Deeper teal
  "#4e8fbc", // Deeper blue
  "#56c46f", // Deeper green
  "#4bbfa0", // Deeper teal
  "#4e8fbc", // Deeper blue
  "#56c46f", // Deeper green
  "#4bbfa0", // Deeper teal
  "#4e8fbc", // Deeper blue
];

export default class CustomerGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Customer Segmentation Graph
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={outerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={innerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              fill="#82ca9d"
              label={({ value, name }) =>
                `${name} (${((value / 1000) * 100).toFixed(2)}%)`
              }
            >
              {innerData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={INNER_COLORS[index % INNER_COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
