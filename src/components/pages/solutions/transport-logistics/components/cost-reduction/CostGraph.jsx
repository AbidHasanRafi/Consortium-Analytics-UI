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

const costReductionData = [
  { name: "Jan", costs: 5000, reducedCosts: 2500, reductionPercentage: 50 },
  { name: "Feb", costs: 7000, reducedCosts: 3200, reductionPercentage: 54.3 },
  { name: "Mar", costs: 6000, reducedCosts: 2900, reductionPercentage: 48.3 },
  { name: "Apr", costs: 8000, reducedCosts: 4200, reductionPercentage: 52.5 },
  { name: "May", costs: 7500, reducedCosts: 4000, reductionPercentage: 53.3 },
  { name: "Jun", costs: 8500, reducedCosts: 4500, reductionPercentage: 52.9 },
];

const CostGraph = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Monthly Cost Reduction Insights
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={costReductionData}
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
          {/* Bar chart for costs (cooler blue tone) */}
          <Bar dataKey="costs" barSize={20} fill="#3498db" />
          {/* Line chart for reduced costs (cool green tone) */}
          <Line
            type="monotone"
            dataKey="reducedCosts"
            stroke="#1abc9c"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          {/* Line chart for percentage reduction (cool purple tone) */}
          <Line
            type="monotone"
            dataKey="reductionPercentage"
            stroke="#8e44ad"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostGraph;
