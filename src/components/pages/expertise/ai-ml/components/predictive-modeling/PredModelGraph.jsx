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
  { year: "2018", actual: 4000, predicted: 3800 },
  { year: "2019", actual: 4500, predicted: 4200 },
  { year: "2020", actual: 5000, predicted: 4800 },
  { year: "2021", actual: 5500, predicted: 5300 },
  { year: "2022", actual: 6000, predicted: 5900 },
  { year: "2023", actual: 6500, predicted: 6300 },
  { year: "2024", actual: 7000, predicted: 6800 },
];

const PredModelGraph = () => {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Predictive Modeling: Actual vs. Predicted Sales
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Actual Sales"
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#82ca9d"
            name="Predicted Sales"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredModelGraph;
