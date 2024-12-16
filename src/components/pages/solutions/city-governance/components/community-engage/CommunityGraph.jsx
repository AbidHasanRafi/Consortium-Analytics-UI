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

// Define rows with community engagement-specific data
const rows = [
  [
    "CommunitySurvey",
    "Conduct community survey",
    new Date(2024, 8, 1),
    new Date(2024, 8, 7),
    null,
    100,
    null,
  ],
  [
    "TownHall",
    "Host town hall meetings",
    new Date(2024, 8, 8),
    new Date(2024, 8, 14),
    null,
    90,
    "CommunitySurvey",
  ],
  [
    "PolicyDrafting",
    "Draft policies based on feedback",
    new Date(2024, 8, 15),
    new Date(2024, 8, 20),
    null,
    70,
    "TownHall",
  ],
  [
    "PublicConsultation",
    "Hold public consultations",
    new Date(2024, 8, 21),
    new Date(2024, 9, 5),
    null,
    50,
    "PolicyDrafting",
  ],
  [
    "FinalApproval",
    "Seek final approval from authorities",
    new Date(2024, 9, 6),
    new Date(2024, 9, 15),
    null,
    30,
    "PublicConsultation",
  ],
  [
    "Implementation",
    "Implement approved policies",
    new Date(2024, 9, 16),
    new Date(2025, 0, 15),
    null,
    20,
    "FinalApproval",
  ],
  [
    "FeedbackLoop",
    "Gather post-implementation feedback",
    new Date(2025, 0, 16),
    new Date(2025, 1, 5),
    null,
    10,
    "Implementation",
  ],
];

// Combine columns and rows
export const data = [columns, ...rows];

// Community Engagement Graph Component
export default function CommunityGraph() {
  return (
    <div
      className="p-0 md:p-10 flex flex-col"
      style={{
        width: "100%",
        height: "calc(100vh - 230px)",
        overflow: "hidden",
      }}
    >
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Community Engagement in Governance
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="Gantt"
          width="100%"
          height="100%"
          data={data}
          options={{
            gantt: {
              trackHeight: 30,
              criticalPathEnabled: true, // Highlight critical tasks
              criticalPathStyle: {
                stroke: "#e64a19", // Red for critical path
                strokeWidth: 2,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
