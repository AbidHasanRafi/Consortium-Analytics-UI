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

// Define rows with healthcare facility planning-specific data
const rows = [
  [
    "NeedsAssessment",
    "Conduct needs assessment",
    new Date(2024, 9, 1),
    new Date(2024, 9, 7),
    null,
    100,
    null,
  ],
  [
    "FeasibilityStudy",
    "Complete feasibility study",
    new Date(2024, 9, 8),
    new Date(2024, 9, 14),
    null,
    90,
    "NeedsAssessment",
  ],
  [
    "BudgetApproval",
    "Secure budget and funding",
    new Date(2024, 9, 15),
    new Date(2024, 9, 20),
    null,
    70,
    "FeasibilityStudy",
  ],
  [
    "DesignPlanning",
    "Develop and finalize facility design",
    new Date(2024, 9, 21),
    new Date(2024, 10, 5),
    null,
    50,
    "BudgetApproval",
  ],
  [
    "RegulatoryApproval",
    "Obtain regulatory approvals",
    new Date(2024, 10, 6),
    new Date(2024, 10, 15),
    null,
    30,
    "DesignPlanning",
  ],
  [
    "Construction",
    "Construct healthcare facility",
    new Date(2024, 10, 16),
    new Date(2025, 0, 15),
    null,
    20,
    "RegulatoryApproval",
  ],
  [
    "EquipmentProcurement",
    "Procure and install medical equipment",
    new Date(2025, 0, 16),
    new Date(2025, 1, 5),
    null,
    10,
    "Construction",
  ],
];

// Combine columns and rows
export const data = [columns, ...rows];

// Facility Planning Graph Component
export default function FacilityGraph() {
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
        Healthcare Facility Planning: Project Timeline
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
