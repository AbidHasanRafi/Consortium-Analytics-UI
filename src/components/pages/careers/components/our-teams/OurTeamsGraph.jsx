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

const data = [
  { year: "2018", contributions: 70, goalsAchieved: 65 },
  { year: "2019", contributions: 80, goalsAchieved: 75 },
  { year: "2020", contributions: 85, goalsAchieved: 80 },
  { year: "2021", contributions: 90, goalsAchieved: 85 },
  { year: "2022", contributions: 95, goalsAchieved: 92 },
  { year: "2023", contributions: 98, goalsAchieved: 96 },
  { year: "2024", contributions: 100, goalsAchieved: 98 },
];

const OurTeamsGraph = () => {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Team Collaboration Over the Years
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[50, 100]} tickFormatter={(value) => `${value}%`} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="contributions"
            stroke="#4A90E2"
            activeDot={{ r: 8 }}
            name="Team Contributions"
          />
          <Line
            type="monotone"
            dataKey="goalsAchieved"
            stroke="#50E3C2"
            name="Goals Achieved"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OurTeamsGraph;
