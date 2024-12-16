import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data profiling stats (simulating profiling a dataset)
const dataProfilingData = [
  {
    name: "Column 1",
    missingValues: 2,
    uniqueValues: 100,
    meanValue: 25.6,
    stdDev: 5.4,
  },
  {
    name: "Column 2",
    missingValues: 1,
    uniqueValues: 150,
    meanValue: 30.2,
    stdDev: 4.3,
  },
  {
    name: "Column 3",
    missingValues: 0,
    uniqueValues: 50,
    meanValue: 21.8,
    stdDev: 6.1,
  },
  {
    name: "Column 4",
    missingValues: 3,
    uniqueValues: 75,
    meanValue: 27.4,
    stdDev: 5.9,
  },
  {
    name: "Column 5",
    missingValues: 5,
    uniqueValues: 120,
    meanValue: 32.5,
    stdDev: 4.8,
  },
];

const DPGraph = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Data Profiling Insights
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={dataProfilingData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* Bar chart for missing values (cool red tone) */}
          <Bar dataKey="missingValues" barSize={20} fill="#e74c3c" />
          {/* Line chart for unique values (cool green tone) */}
          <Line
            type="monotone"
            dataKey="uniqueValues"
            stroke="#2ecc71"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          {/* Line chart for mean value (cool blue tone) */}
          <Line
            type="monotone"
            dataKey="meanValue"
            stroke="#3498db"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          {/* Line chart for standard deviation (cool purple tone) */}
          <Line
            type="monotone"
            dataKey="stdDev"
            stroke="#9b59b6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DPGraph;
