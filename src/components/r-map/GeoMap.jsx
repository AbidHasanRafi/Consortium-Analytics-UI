import React from "react";
import { Chart } from "react-google-charts";

// Fake real estate data analytics for all 50 U.S. states
export const realEstateData = [
  ["State", "Property Demand"],
  ["Alabama", 320],
  ["Alaska", 220],
  ["Arizona", 530],
  ["Arkansas", 290],
  ["California", 720],
  ["Colorado", 510],
  ["Connecticut", 340],
  ["Delaware", 270],
  ["Florida", 580],
  ["Georgia", 480],
  ["Hawaii", 370],
  ["Idaho", 360],
  ["Illinois", 500],
  ["Indiana", 390],
  ["Iowa", 280],
  ["Kansas", 310],
  ["Kentucky", 330],
  ["Louisiana", 350],
  ["Maine", 250],
  ["Maryland", 440],
  ["Massachusetts", 420],
  ["Michigan", 400],
  ["Minnesota", 380],
  ["Mississippi", 260],
  ["Missouri", 410],
  ["Montana", 230],
  ["Nebraska", 270],
  ["Nevada", 450],
  ["New Hampshire", 240],
  ["New Jersey", 460],
  ["New Mexico", 290],
  ["New York", 610],
  ["North Carolina", 430],
  ["North Dakota", 210],
  ["Ohio", 450],
  ["Oklahoma", 300],
  ["Oregon", 460],
  ["Pennsylvania", 470],
  ["Rhode Island", 280],
  ["South Carolina", 420],
  ["South Dakota", 220],
  ["Tennessee", 430],
  ["Texas", 650],
  ["Utah", 360],
  ["Vermont", 200],
  ["Virginia", 440],
  ["Washington", 490],
  ["West Virginia", 210],
  ["Wisconsin", 350],
  ["Wyoming", 180],
];

const GeoMap = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const stateData = realEstateData[selection[0].row + 1];
              alert(`State: ${stateData[0]}, Demand: ${stateData[1]}`);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={realEstateData}
        options={{
          region: "US",
          resolution: "provinces",
          colorAxis: { colors: ["#e0f7fa", "#004d40"] },
          backgroundColor: "transparent",
          datalessRegionColor: "#f5f5f5",
          defaultColor: "#c0c0c0",
        }}
      />
    </div>
  );
};

export default GeoMap;
