import React from "react";
import { Chart } from "react-google-charts";

export const infrastructureData = [
  ["Destination", "Source", "Details"],
  [
    {
      v: "City Planning Department",
      f: 'City Planning Department<div style="color:blue; font-style:italic">Urban Management</div>',
    },
    "",
    "Oversees urban infrastructure and planning",
  ],
  [
    {
      v: "Transportation Network",
      f: 'Transportation Network<div style="color:green; font-style:italic">Mobility</div>',
    },
    "City Planning Department",
    "Manages roads, public transit, and traffic systems",
  ],
  [
    {
      v: "Utilities Department",
      f: 'Utilities Department<div style="color:purple; font-style:italic">Essential Services</div>',
    },
    "City Planning Department",
    "Handles water, electricity, and waste management",
  ],
  [
    {
      v: "Public Services",
      f: 'Public Services<div style="color:orange; font-style:italic">Community Support</div>',
    },
    "City Planning Department",
    "Coordinates emergency services, education, and healthcare",
  ],
  [
    {
      v: "Public Transit",
      f: 'Public Transit<div style="color:teal; font-style:italic">Mass Transportation</div>',
    },
    "Transportation Network",
    "Operates buses, trains, and subways",
  ],
  [
    {
      v: "Road Maintenance",
      f: 'Road Maintenance<div style="color:skyblue; font-style:italic">Infrastructure Upkeep</div>',
    },
    "Transportation Network",
    "Ensures roads and highways are safe and functional",
  ],
  [
    {
      v: "Water Supply",
      f: 'Water Supply<div style="color:rosybrown; font-style:italic">Utility Management</div>',
    },
    "Utilities Department",
    "Provides clean and reliable water to residents",
  ],
  [
    {
      v: "Power Grid",
      f: 'Power Grid<div style="color:gray; font-style:italic">Energy Distribution</div>',
    },
    "Utilities Department",
    "Manages electricity distribution",
  ],
  [
    "Emergency Services",
    "Public Services",
    "Responds to medical, fire, and safety emergencies",
  ],
  ["Schools", "Public Services", "Provides education and learning resources"],
  [
    "Hospitals",
    "Public Services",
    "Delivers healthcare services to the community",
  ],
];

export const infrastructureOptions = {
  allowHtml: true, // Enables custom HTML content in the chart
};

export default function InfrastructureGraph() {
  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Infrastructure Mapping
      </h2>
      <Chart
        chartType="OrgChart"
        data={infrastructureData}
        options={infrastructureOptions}
        width="100%"
        height="100%"
      />
    </div>
  );
}
