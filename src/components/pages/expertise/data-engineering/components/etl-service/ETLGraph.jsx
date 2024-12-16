import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data Flow Through ETL Stages
const etlData = [
  { stage: "Source A", extract: 5000, transform: 4500, load: 4000 },
  { stage: "Source B", extract: 4000, transform: 3500, load: 3200 },
  { stage: "Source C", extract: 3000, transform: 2800, load: 2600 },
  { stage: "Source D", extract: 4500, transform: 4200, load: 4000 },
  { stage: "Source E", extract: 3500, transform: 3000, load: 2900 },
];

export default class ETLGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          ETL Services: Data Flow Through Stages
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={etlData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="extract"
              fill="#3498db"
              stackId="etl"
              name="Extract"
            />
            <Bar
              dataKey="transform"
              fill="#1abc9c"
              stackId="etl"
              name="Transform"
            />
            <Bar dataKey="load" fill="#e67e22" stackId="etl" name="Load" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
