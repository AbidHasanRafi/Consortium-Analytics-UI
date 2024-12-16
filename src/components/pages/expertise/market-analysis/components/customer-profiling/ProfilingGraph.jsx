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
  {
    year: "2018",
    ageGroup1: 3000, // Age 18-25
    ageGroup2: 5000, // Age 26-40
    ageGroup3: 2000, // Age 41-60
    ageGroup4: 1000, // Age 60+
  },
  {
    year: "2019",
    ageGroup1: 3500,
    ageGroup2: 5500,
    ageGroup3: 2300,
    ageGroup4: 1200,
  },
  {
    year: "2020",
    ageGroup1: 4000,
    ageGroup2: 6000,
    ageGroup3: 2500,
    ageGroup4: 1400,
  },
  {
    year: "2021",
    ageGroup1: 4500,
    ageGroup2: 6500,
    ageGroup3: 2700,
    ageGroup4: 1600,
  },
  {
    year: "2022",
    ageGroup1: 5000,
    ageGroup2: 7000,
    ageGroup3: 2900,
    ageGroup4: 1800,
  },
  {
    year: "2023",
    ageGroup1: 5500,
    ageGroup2: 7500,
    ageGroup3: 3100,
    ageGroup4: 2000,
  },
  {
    year: "2024",
    ageGroup1: 6000,
    ageGroup2: 8000,
    ageGroup3: 3300,
    ageGroup4: 2200,
  },
];

const ProfilingGraph = () => {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Customer Profiling: Age Group Distribution Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ageGroup1"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Age 18-25"
          />
          <Line
            type="monotone"
            dataKey="ageGroup2"
            stroke="#ff0000"
            name="Age 26-40"
          />
          <Line
            type="monotone"
            dataKey="ageGroup3"
            stroke="#82ca9d"
            name="Age 41-60"
          />
          <Line
            type="monotone"
            dataKey="ageGroup4"
            stroke="#ff9800"
            name="Age 60+"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfilingGraph;
