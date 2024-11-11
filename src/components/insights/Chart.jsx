import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Prod 1", sales: 590, reviews: 800, rating: 1400 },
  { name: "Prod 2", sales: 868, reviews: 967, rating: 1506 },
  { name: "Prod 3", sales: 1397, reviews: 1098, rating: 989 },
  { name: "Prod 4", sales: 1480, reviews: 1200, rating: 1228 },
  { name: "Prod 5", sales: 1520, reviews: 1108, rating: 1100 },
  { name: "Prod 6", sales: 1400, reviews: 680, rating: 1700 },
];

const Chart = () => {
  return (
    <div style={{ width: "100%", height: 380 }}>
      <h2
        style={{ textAlign: "center", marginBottom: "10px", fontWeight: "600" }}
      >
        Product Performance Analytics Sample
      </h2>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="gradientArea" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2980B9" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#2980B9" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="rating"
            fill="url(#gradientArea)"
            stroke="url(#gradientArea)"
          />
          <defs>
            <linearGradient id="gradientBar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16A085" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#1ABC9C" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Bar dataKey="reviews" barSize={20} fill="url(#gradientBar)" />
          <defs>
            <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8E44AD" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#9B59B6" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Line type="monotone" dataKey="sales" stroke="url(#gradientLine)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;