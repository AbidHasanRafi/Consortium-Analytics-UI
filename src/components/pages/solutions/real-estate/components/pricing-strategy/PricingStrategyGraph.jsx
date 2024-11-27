import React from "react";
import { Chart } from "react-google-charts";

// Updated data with years from 2020 to 2023
const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  [
    "2020",
    { v: 1500, f: "$1500" },
    { v: 800, f: "$800" },
    { v: 700, f: "$700" },
  ],
  [
    "2021",
    { v: 1600, f: "$1600" },
    { v: 900, f: "$900" },
    { v: 700, f: "$700" },
  ],
  [
    "2022",
    { v: 1700, f: "$1700" },
    { v: 950, f: "$950" },
    { v: 750, f: "$750" },
  ],
  [
    "2023",
    { v: 1800, f: "$1800" },
    { v: 1000, f: "$1000" },
    { v: 800, f: "$800" },
  ],
];

// Chart options with enhanced styling and transparent background
const options = {
  chart: {
    title: "Pricing Strategy: Sales, Expenses, and Profit",
    subtitle: "Impact of Pricing on Sales, Expenses, and Profit over the Years",
    backgroundColor: "transparent", // Set background to transparent
  },
  allowHtml: true,
  showRowNumber: true,
  width: "100%",
  height: "400px",
  // Set deeper font color
  textStyle: {
    color: "#333333", // Darker font color for better readability
  },
};

// Formatter for showing arrows in the table
const formatters = [
  {
    type: "ArrowFormat", // Adds arrows to the table
    column: 2, // Column index for profit
  },
];

function PricingStrategyGraph() {
  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Pricing Strategy: Sales, Expenses, and Profit
      </h2>
      <Chart
        chartType="Table" // Table chart to display values with arrows
        data={data}
        options={options}
        formatters={formatters}
      />
    </div>
  );
}

export default PricingStrategyGraph;
