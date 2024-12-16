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

// Sample recommendation engine data by months
const recommendationData = [
  { month: "Jan", recommendationsMade: 1200, userEngagement: 250 },
  { month: "Feb", recommendationsMade: 1300, userEngagement: 280 },
  { month: "Mar", recommendationsMade: 1250, userEngagement: 270 },
  { month: "Apr", recommendationsMade: 1350, userEngagement: 320 },
  { month: "May", recommendationsMade: 1400, userEngagement: 350 },
  { month: "Jun", recommendationsMade: 1500, userEngagement: 400 },
  { month: "Jul", recommendationsMade: 1450, userEngagement: 380 },
  { month: "Aug", recommendationsMade: 1550, userEngagement: 420 },
  { month: "Sept", recommendationsMade: 1600, userEngagement: 450 },
  { month: "Oct", recommendationsMade: 1650, userEngagement: 470 },
  { month: "Nov", recommendationsMade: 1700, userEngagement: 490 },
  { month: "Dec", recommendationsMade: 1750, userEngagement: 510 },
];

const RecommendGraph = () => {
  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Monthly Recommendation Engine Performance
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={recommendationData}
          margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Render Lines */}
          <Line
            type="monotone"
            dataKey="recommendationsMade"
            stroke="#8884d8"
            dot={false}
            name="Recommendations Made"
          />
          <Line
            type="monotone"
            dataKey="userEngagement"
            stroke="#82ca9d"
            dot={false}
            name="User Engagement"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecommendGraph;
