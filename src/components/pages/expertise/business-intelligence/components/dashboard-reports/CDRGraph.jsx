import React, { PureComponent } from "react";
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
  {
    name: "Week 1",
    salesGrowth: 50,
    customerRetention: 85,
    revenueIncrease: 60,
  },
  {
    name: "Week 2",
    salesGrowth: 55,
    customerRetention: 87,
    revenueIncrease: 65,
  },
  {
    name: "Week 3",
    salesGrowth: 60,
    customerRetention: 86,
    revenueIncrease: 70,
  },
  {
    name: "Week 4",
    salesGrowth: 62,
    customerRetention: 88,
    revenueIncrease: 72,
  },
  {
    name: "Week 5",
    salesGrowth: 65,
    customerRetention: 90,
    revenueIncrease: 75,
  },
  {
    name: "Week 6",
    salesGrowth: 70,
    customerRetention: 92,
    revenueIncrease: 80,
  },
  {
    name: "Week 7",
    salesGrowth: 75,
    customerRetention: 93,
    revenueIncrease: 85,
  },
];

// Customized label component for Line chart points
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    return (
      <text
        x={x}
        y={y}
        dy={-10}
        fill={stroke}
        fontSize={12}
        textAnchor="middle"
      >
        {value}%
      </text>
    );
  }
}

// Customized X Axis tick component
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export class CDRGraph extends PureComponent {
  render() {
    return (
      <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
        <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
          Custom Dashboards and Reports
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 40,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip
              wrapperStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ fontWeight: "500", color: "#333" }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              wrapperStyle={{
                padding: "10px 0",
                fontSize: "14px",
                fontWeight: "400",
                color: "#333",
              }}
            />
            <Line
              type="monotone"
              dataKey="salesGrowth"
              stroke="#8884d8"
              label={<CustomizedLabel />}
              name="Sales Growth (%)"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="customerRetention"
              stroke="#82ca9d"
              label={<CustomizedLabel />}
              name="Customer Retention (%)"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="revenueIncrease"
              stroke="#ff7300"
              label={<CustomizedLabel />}
              name="Revenue Increase (%)"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
