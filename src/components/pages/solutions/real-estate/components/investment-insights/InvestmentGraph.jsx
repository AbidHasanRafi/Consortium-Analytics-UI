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

const investmentData = [
  { name: "Jan", investments: 5000, returns: 2500, growth: 15 },
  { name: "Feb", investments: 7000, returns: 3200, growth: 20 },
  { name: "Mar", investments: 6000, returns: 2900, growth: 18 },
  { name: "Apr", investments: 8000, returns: 4200, growth: 25 },
  { name: "May", investments: 7500, returns: 4000, growth: 22 },
  { name: "Jun", investments: 8500, returns: 4500, growth: 28 },
];

const InvestmentGraph = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Monthly Investment Insights
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={investmentData}
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
          {/* Bar chart for investments */}
          <Bar dataKey="investments" barSize={20} fill="#413ea0" />
          {/* Line chart for returns */}
          <Line
            type="monotone"
            dataKey="returns"
            stroke="#32CD32"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          {/* Line chart for growth */}
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#FF6347"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentGraph;
