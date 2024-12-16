import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Label } from "recharts";

// Outer layer represents aggregated data categories
const outerData = [
  { name: "Sales Data", value: 400 },
  { name: "Customer Data", value: 300 },
  { name: "Product Data", value: 300 },
  { name: "Logistics Data", value: 200 },
];

// Inner layer represents detailed data categories within the warehouse
const innerData = [
  { name: "Transactions", value: 120 },
  { name: "Customer Profiles", value: 100 },
  { name: "Inventory", value: 80 },
  { name: "Order Details", value: 70 },
  { name: "Shipping Logs", value: 50 },
  { name: "Revenue Trends", value: 90 },
  { name: "Product Catalog", value: 100 },
  { name: "Promotions", value: 60 },
  { name: "Warehouse Status", value: 30 },
  { name: "Delivery Tracking", value: 50 },
];

const COLORS = [
  "#85c1e9", // Light blue
  "#76d7c4", // Light teal
  "#82e0aa", // Light green
  "#f8c471", // Light orange
];

const INNER_COLORS = [
  "#4e8fbc", // Deeper blue
  "#4bbfa0", // Deeper teal
  "#56c46f", // Deeper green
  "#f39c12", // Orange
  "#d35400", // Deeper orange
  "#3498db", // Light navy blue
  "#1abc9c", // Sea green
  "#27ae60", // Forest green
  "#c0392b", // Red-orange
  "#7f8c8d", // Gray
];

export default class DWGraph extends PureComponent {
  render() {
    return (
      <div className="w-full h-[400px] p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Data Warehouse: Centralized Data Representation
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            {/* Outer Pie - Aggregated Data Categories */}
            <Pie
              data={outerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {outerData.map((entry, index) => (
                <Cell
                  key={`outer-cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value="Aggregated Data"
                position="center"
                fontSize={14}
                fill="#555"
              />
            </Pie>

            {/* Inner Pie - Detailed Data Categories */}
            <Pie
              data={innerData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              fill="#82ca9d"
              label={({ name }) => name}
            >
              {innerData.map((entry, index) => (
                <Cell
                  key={`inner-cell-${index}`}
                  fill={INNER_COLORS[index % INNER_COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
