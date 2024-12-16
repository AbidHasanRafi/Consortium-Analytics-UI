import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

// Initial sensor data
const initialData = [
  [
    "Month",
    "Sensor 1 (Temperature)",
    "Sensor 2 (Temperature)",
    "Sensor 3 (Temperature)",
    "Sensor 4 (Temperature)",
    "Sensor 5 (Temperature)",
    "Average Temperature",
  ],
  ["January", 21, 23, 22, 21.5, 22.3, 21.8],
  ["February", 20.5, 22.1, 22.5, 21, 21.8, 21.58],
  ["March", 21.2, 22.3, 21.8, 22, 22.1, 21.88],
  ["April", 22, 23, 22.6, 22.1, 22.5, 22.24],
  ["May", 23, 22.8, 23.1, 22.9, 23, 22.96],
];

export const options = {
  vAxis: { title: "Temperature (°C)" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } }, // Line for Average Temperature
  colors: [
    "#3498db", // Sensor 1 (Blue)
    "#3fb7c6", // Sensor 2 (Teal)
    "#47d2a5", // Sensor 3 (Light Green)
    "#52be80", // Sensor 4 (Green)
    "#41ab93", // Sensor 5 (Green-Teal)
    "#2980b9", // Average Temperature (Darker Blue)
  ],
  backgroundColor: "transparent", // Set the background to transparent
};

function SensorGraph() {
  const [data, setData] = useState(initialData);

  // Simulate real-time data updates
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate random temperature values for sensors
      const updatedData = data.map((row, index) => {
        if (index === 0) return row; // Skip header row
        // Simulate new random temperature values for each sensor (within a range)
        const updatedRow = [...row];
        for (let i = 1; i <= 5; i++) {
          updatedRow[i] = Math.floor(Math.random() * (30 - 15 + 1)) + 15; // Random temperature between 15°C and 30°C
        }
        // Update Average Temperature (calculated from the sensors' temperatures)
        updatedRow[6] = updatedRow.slice(1, 6).reduce((a, b) => a + b, 0) / 5;
        return updatedRow;
      });

      setData(updatedData);
    }, 2000); // Update every 2 seconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
        Sensor Data Analysis (Real-Time)
      </h2>
      <Chart
        chartType="ComboChart"
        width="100%"
        height="100%"
        data={data}
        options={options}
      />
    </div>
  );
}

export default SensorGraph;
