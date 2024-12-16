import React from "react";
import { Chart } from "react-google-charts";

export const healthcareData = [
  ["Destination", "Source", "Details"],
  [
    {
      v: "Hospital Director",
      f: 'Hospital Director<div style="color:blue; font-style:italic">Leadership</div>',
    },
    "",
    "Oversees all hospital operations",
  ],
  [
    {
      v: "Chief Physician",
      f: 'Chief Physician<div style="color:green; font-style:italic">Medical Leadership</div>',
    },
    "Hospital Director",
    "Manages medical staff and departments",
  ],
  [
    {
      v: "Nursing Manager",
      f: 'Nursing Manager<div style="color:purple; font-style:italic">Nursing Administration</div>',
    },
    "Hospital Director",
    "Oversees nursing staff and patient care",
  ],
  [
    {
      v: "Surgeon",
      f: 'Surgeon<div style="color:orange; font-style:italic">Surgical Specialist</div>',
    },
    "Chief Physician",
    "Performs surgeries and consults on medical cases",
  ],
  [
    {
      v: "General Practitioner",
      f: 'General Practitioner<div style="color:teal; font-style:italic">Primary Care</div>',
    },
    "Chief Physician",
    "Provides general medical care to patients",
  ],
  [
    {
      v: "Pediatrician",
      f: 'Pediatrician<div style="color:skyblue; font-style:italic">Child Care</div>',
    },
    "General Practitioner",
    "Specializes in child healthcare",
  ],
  [
    {
      v: "Obstetrician",
      f: 'Obstetrician<div style="color:rosybrown; font-style:italic">Maternity Care</div>',
    },
    "General Practitioner",
    "Provides maternal and prenatal care",
  ],
  [
    "Registered Nurse",
    "Nursing Manager",
    "Delivers patient care and assistance",
  ],
  ["Medical Assistant", "Registered Nurse", "Supports nurses and physicians"],
  [
    "Technician",
    "Chief Physician",
    "Operates medical equipment and performs tests",
  ],
  ["Radiologist", "Chief Physician", "Performs diagnostic imaging procedures"],
];

export const healthcareOptions = {
  allowHtml: true, // Enables custom HTML content in the chart
};

export default function ResourceGraph() {
  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Healthcare Resource Allocation
      </h2>
      <Chart
        chartType="OrgChart"
        data={healthcareData}
        options={healthcareOptions}
        width="100%"
        height="100%"
      />
    </div>
  );
}
