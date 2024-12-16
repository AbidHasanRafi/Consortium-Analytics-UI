import React from "react";
import { Chart } from "react-google-charts";

export default function StudentGraph() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Student Analytics
      </h2>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ["Category", "Percentage"],
          ["High Performers", 40],
          ["Average Performers", 35],
          ["Low Performers", 15],
          ["Consistently Attending", 60],
          ["Irregular Attendance", 25],
          ["Highly Engaged", 30],
          ["Low Engagement", 20],
        ]}
        options={{
          backgroundColor: "transparent",
          legend: { position: "top" },
          hAxis: {
            title: "Percentage",
            minValue: 0,
          },
          vAxis: {
            title: "Category",
          },
          bar: { groupWidth: "75%" },
          colors: ["#76c7c0"], // Customize color for bars
        }}
        rootProps={{ "data-testid": "student-graph" }}
        chartPackages={["corechart", "controls"]}
        render={({ renderControl, renderChart }) => {
          return (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
              }}
            >
              <div>{renderControl(() => true)}</div>
              <div>{renderChart()}</div>
            </div>
          );
        }}
        controls={[
          {
            controlType: "StringFilter",
            options: {
              filterColumnIndex: 0,
              matchType: "any",
              ui: {
                label: "Search by Category",
              },
            },
          },
          {
            controlType: "NumberRangeFilter",
            controlID: "percentage-filter",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical",
                label: "Filter by Percentage Range",
                allowTyping: false,
                allowMultiple: false,
              },
            },
          },
        ]}
      />
    </div>
  );
}
