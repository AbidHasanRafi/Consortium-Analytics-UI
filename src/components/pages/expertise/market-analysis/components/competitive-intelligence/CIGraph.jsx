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

// Sample Competitive Intelligence data: Market share, Product launches, Competitor growth
const competitiveData = [
  { name: "Jan", marketShare: 30, productLaunches: 3, growth: 10 },
  { name: "Feb", marketShare: 32, productLaunches: 4, growth: 12 },
  { name: "Mar", marketShare: 35, productLaunches: 5, growth: 15 },
  { name: "Apr", marketShare: 38, productLaunches: 3, growth: 18 },
  { name: "May", marketShare: 40, productLaunches: 6, growth: 20 },
  { name: "Jun", marketShare: 42, productLaunches: 7, growth: 22 },
];

const CIGraph = () => {
  return (
    <div className="w-full mx-auto p-6">
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Competitive Intelligence Insights
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={competitiveData}
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
          {/* Bar chart for Market Share */}
          <Bar
            dataKey="marketShare"
            barSize={20}
            fill="#17a589"
            name="Market Share (%)"
          />
          {/* Line chart for Product Launches */}
          <Line
            type="monotone"
            dataKey="productLaunches"
            stroke="#FF6347"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Product Launches"
          />
          {/* Line chart for Competitor Growth */}
          <Line
            type="monotone"
            dataKey="growth"
            stroke="#32CD32"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Competitor Growth (%)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CIGraph;
