import React, { PureComponent } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data showing integration from different systems
const integrationData = [
  { stage: "System A", ingested: 500, transformed: 400, unified: 350 },
  { stage: "System B", ingested: 600, transformed: 450, unified: 400 },
  { stage: "System C", ingested: 700, transformed: 600, unified: 550 },
  { stage: "System D", ingested: 800, transformed: 750, unified: 700 },
  { stage: "System E", ingested: 900, transformed: 850, unified: 800 },
];

export default class DIGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Data Integration: Unified View Creation
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={integrationData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="ingested"
              barSize={20}
              fill="#3498db"
              name="Ingested"
            />
            <Area
              type="monotone"
              dataKey="transformed"
              fill="#1abc9c"
              stroke="#1abc9c"
              name="Transformed"
              opacity={0.3}
            />
            <Line
              type="monotone"
              dataKey="unified"
              stroke="#e74c3c"
              strokeWidth={2}
              name="Unified"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
