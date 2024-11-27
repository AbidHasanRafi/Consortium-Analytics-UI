import React from "react";
import { Chart } from "react-google-charts";

// Define the columns for the Gantt chart
const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

// Define rows with expanded fake data for Trade Area Insights
const rows = [
  [
    "MarketResearch",
    "Conduct market research",
    new Date(2024, 10, 1),
    new Date(2024, 10, 10),
    null,
    80,
    null,
  ],
  [
    "CompetitorAnalysis",
    "Analyze competitors",
    new Date(2024, 10, 11),
    new Date(2024, 10, 15),
    null,
    60,
    "MarketResearch",
  ],
  [
    "StrategyDevelopment",
    "Develop growth strategy",
    new Date(2024, 10, 16),
    new Date(2024, 10, 20),
    null,
    40,
    "MarketResearch,CompetitorAnalysis",
  ],
  [
    "FinancialPlanning",
    "Create financial plan",
    new Date(2024, 10, 21),
    new Date(2024, 10, 25),
    null,
    20,
    "StrategyDevelopment",
  ],
  [
    "Execution",
    "Execute expansion plan",
    new Date(2024, 10, 26),
    new Date(2024, 11, 5),
    null,
    10,
    "FinancialPlanning",
  ],
  [
    "Survey",
    "Conduct on-ground surveys",
    new Date(2024, 11, 6),
    new Date(2024, 11, 10),
    null,
    50,
    "MarketResearch",
  ],
  [
    "StakeholderConsult",
    "Consult stakeholders",
    new Date(2024, 11, 11),
    new Date(2024, 11, 15),
    null,
    30,
    "StrategyDevelopment",
  ],
  [
    "DataValidation",
    "Validate market data",
    new Date(2024, 11, 16),
    new Date(2024, 11, 20),
    null,
    40,
    "Survey,CompetitorAnalysis",
  ],
  [
    "LegalReview",
    "Review legal requirements",
    new Date(2024, 11, 21),
    new Date(2024, 11, 25),
    null,
    10,
    "FinancialPlanning",
  ],
  [
    "TeamSetup",
    "Set up operational team",
    new Date(2024, 11, 26),
    new Date(2024, 11, 30),
    null,
    20,
    "Execution,StakeholderConsult",
  ],
];

// Combine columns and rows
export const data = [columns, ...rows];

// Opportunity Mapping Graph Component
export function OpportunityMappingGraph() {
  return (
    <div
      className="p-0 md:p-10 flex flex-col"
      style={{
        width: "100%",
        height: "calc(100vh - 230px)", // Adjust the height to allow space for other components and avoid scrollbar
        overflow: "hidden", // Prevent overflow
      }}
    >
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Opportunity Mapping: Trade Area Insights
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="Gantt"
          width="100%"
          height="100%" // Now the height should take up the remaining space within the parent
          data={data}
          options={{
            gantt: {
              trackHeight: 30,
              criticalPathEnabled: true, // Highlights critical tasks
              criticalPathStyle: {
                stroke: "#e64a19",
                strokeWidth: 2,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
