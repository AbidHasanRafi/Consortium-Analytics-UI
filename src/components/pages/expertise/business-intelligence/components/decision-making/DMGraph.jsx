import React from "react";
import { Chart } from "react-google-charts";

export const decisionData = [
  ["Decision Point", "Source", "Details"],
  [
    {
      v: "Executive Board",
      f: 'Executive Board<div style="color:blue; font-style:italic">Strategic Oversight</div>',
    },
    "",
    "Provides vision, approves major decisions",
  ],
  [
    {
      v: "Operations Manager",
      f: 'Operations Manager<div style="color:green; font-style:italic">Operational Planning</div>',
    },
    "Executive Board",
    "Oversees daily business operations",
  ],
  [
    {
      v: "Marketing Manager",
      f: 'Marketing Manager<div style="color:purple; font-style:italic">Market Insights</div>',
    },
    "Executive Board",
    "Leads campaigns based on market data",
  ],
  [
    {
      v: "Finance Manager",
      f: 'Finance Manager<div style="color:orange; font-style:italic">Budget Oversight</div>',
    },
    "Executive Board",
    "Manages financial planning and budget control",
  ],
  [
    {
      v: "HR Manager",
      f: 'HR Manager<div style="color:teal; font-style:italic">Talent Acquisition</div>',
    },
    "Executive Board",
    "Handles recruitment, training, and employee welfare",
  ],
  [
    {
      v: "Legal Advisor",
      f: 'Legal Advisor<div style="color:skyblue; font-style:italic">Compliance & Policy</div>',
    },
    "Executive Board",
    "Ensures organizational compliance with regulations",
  ],
  [
    {
      v: "Data Scientist",
      f: 'Data Scientist<div style="color:orange; font-style:italic">Analytics & Insights</div>',
    },
    "Operations Manager",
    "Analyzes real-time data to guide decisions",
  ],
  [
    {
      v: "Sales Team Lead",
      f: 'Sales Team Lead<div style="color:teal; font-style:italic">Revenue Strategies</div>',
    },
    "Marketing Manager",
    "Implements strategies for revenue growth",
  ],
  [
    {
      v: "IT Specialist",
      f: 'IT Specialist<div style="color:skyblue; font-style:italic">Infrastructure Support</div>',
    },
    "Operations Manager",
    "Maintains systems for data collection",
  ],
  [
    {
      v: "Marketing Analyst",
      f: 'Marketing Analyst<div style="color:rosybrown; font-style:italic">Campaign Performance</div>',
    },
    "Marketing Manager",
    "Analyzes campaign performance and audience trends",
  ],
];

export const decisionOptions = {
  allowHtml: true, // Enables custom HTML content in the chart
};

export default function DMGraph() {
  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Data-Driven Decision-Making: Organizational Flow
      </h2>
      <Chart
        chartType="OrgChart"
        data={decisionData}
        options={decisionOptions}
        width="100%"
        height="100%"
      />
    </div>
  );
}
