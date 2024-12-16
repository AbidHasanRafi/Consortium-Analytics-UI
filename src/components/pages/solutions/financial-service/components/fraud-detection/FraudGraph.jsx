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

// Example data for fraud detection
const data = [
  {
    name: "Mon",
    uv: 100, // Transaction Amount
    pv: 200, // Fraud Detection Score
    amt: 0.1, // Fraud Probability
  },
  {
    name: "Tue",
    uv: 120,
    pv: 250,
    amt: 0.15,
  },
  {
    name: "Wed",
    uv: 170,
    pv: 300,
    amt: 0.2,
  },
  {
    name: "Thu",
    uv: 140,
    pv: 270,
    amt: 0.3,
  },
  {
    name: "Fri",
    uv: 160,
    pv: 400,
    amt: 0.35,
  },
  {
    name: "Sat",
    uv: 180,
    pv: 450,
    amt: 0.4,
  },
];

export default class FraudGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <YAxis
            label={{ value: "Values", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />

          {/* Transaction Amount - UV (Blue Line) */}
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            name="Transaction Amount (UV)"
          />

          {/* Fraud Detection Score - PV (Green Bar) */}
          <Bar
            dataKey="pv"
            barSize={20}
            fill="#82ca9d"
            name="Fraud Detection Score (PV)"
          />

          {/* Fraud Probability - AMT (Red Area) */}
          <Area
            type="monotone"
            dataKey="amt"
            fill="#ff4d4d"
            stroke="#ff4d4d"
            name="Fraud Probability (AMT)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}
