import React from "react";
import { Chart } from "react-google-charts";

export function PatientGraph() {
  return (
    <div style={{ width: "100%", height: "100%", padding: "20px" }}>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Patient Age Distribution
      </h2>
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="BarChart"
        loader={<div>Loading Chart...</div>}
        data={[
          ["Name", "Age"],
          ["Michael", 12],
          ["Elisa", 20],
          ["Robert", 7],
          ["John", 54],
          ["Jessica", 22],
          ["Aaron", 3],
        ]}
        options={{
          backgroundColor: "transparent",
          legend: { position: "top" },
          hAxis: {
            title: "Age",
            minValue: 0,
          },
          vAxis: {
            title: "Name",
          },
        }}
        rootProps={{ "data-testid": "patient-graph" }}
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
                label: "Search by Name",
              },
            },
          },
          {
            controlType: "NumberRangeFilter",
            controlID: "age-filter",
            options: {
              filterColumnIndex: 1,
              ui: {
                labelStacking: "vertical",
                label: "Filter by Age Range",
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
