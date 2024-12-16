import React from "react";
import { Chart } from "react-google-charts";

export const curriculumData = [
  ["Destination", "Source", "Details"],
  [
    {
      v: "Education Board",
      f: 'Education Board<div style="color:blue; font-style:italic">Policy & Guidelines</div>',
    },
    "",
    "Defines national education policies",
  ],
  [
    {
      v: "Curriculum Committee",
      f: 'Curriculum Committee<div style="color:green; font-style:italic">Content Development</div>',
    },
    "Education Board",
    "Designs and updates curriculum frameworks",
  ],
  [
    {
      v: "Subject Specialist",
      f: 'Subject Specialist<div style="color:purple; font-style:italic">Expert Content</div>',
    },
    "Curriculum Committee",
    "Creates subject-specific content and guidelines",
  ],
  [
    {
      v: "School Administration",
      f: 'School Administration<div style="color:orange; font-style:italic">Implementation</div>',
    },
    "Education Board",
    "Implements policies and curriculum at the school level",
  ],
  [
    {
      v: "Teacher",
      f: 'Teacher<div style="color:teal; font-style:italic">Instruction</div>',
    },
    "School Administration",
    "Delivers lessons and evaluates student performance",
  ],
  [
    {
      v: "Students",
      f: 'Students<div style="color:skyblue; font-style:italic">Learning</div>',
    },
    "Teacher",
    "Participates in learning and assessments",
  ],
  [
    {
      v: "Parent",
      f: 'Parent<div style="color:rosybrown; font-style:italic">Support</div>',
    },
    "Teacher",
    "Supports students in their education journey",
  ],
  [
    {
      v: "Evaluation Committee",
      f: 'Evaluation Committee<div style="color:crimson; font-style:italic">Assessment</div>',
    },
    "Curriculum Committee",
    "Evaluates the curriculum's effectiveness",
  ],
  [
    "External Examiner",
    "Evaluation Committee",
    "Conducts assessments and ensures standards",
  ],
  [
    "Academic Counselor",
    "School Administration",
    "Guides students in academic planning",
  ],
];

export const curriculumOptions = {
  allowHtml: true, // Enables custom HTML content in the chart
};

export default function CGraph() {
  return (
    <div style={{ width: "100%", height: "500px", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Curriculum Planning in Education System
      </h2>
      <Chart
        chartType="OrgChart"
        data={curriculumData}
        options={curriculumOptions}
        width="100%"
        height="100%"
      />
    </div>
  );
}
