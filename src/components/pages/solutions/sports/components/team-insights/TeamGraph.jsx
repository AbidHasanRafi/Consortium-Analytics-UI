import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

// Fake data for team insights (relevant to performance and engagement)
const outerData = [
  { name: "Star", value: 400 },
  { name: "Key", value: 300 },
  { name: "Supporting", value: 300 },
  { name: "Bench", value: 200 },
];

const innerData = [
  { name: "Top", value: 100 },
  { name: "Mid", value: 300 },
  { name: "Frequent", value: 100 },
  { name: "Occasional", value: 80 },
  { name: "High Engage", value: 40 },
  { name: "Mid Engage", value: 30 },
  { name: "Returning", value: 50 },
  { name: "New", value: 100 },
  { name: "Loyal", value: 200 },
  { name: "Lost", value: 150 },
  { name: "Re-engaged", value: 50 },
];

// Color palette for the segments
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

export default class TeamGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Team Performance and Engagement Analysis
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Outer ring for team categories (e.g., Star Players, Key Players, etc.) */}
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

            {/* Inner ring for player performance and engagement (e.g., Top Performers, Loyal, etc.) */}
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
