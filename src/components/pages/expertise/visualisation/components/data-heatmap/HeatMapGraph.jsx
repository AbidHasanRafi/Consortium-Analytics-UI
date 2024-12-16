import React from "react";
import { Chart } from "react-google-charts";

// Function to generate random progress data for a given month
const generateRandomProgressData = (year, month) => {
  const numDays = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
  const data = [];
  for (let day = 1; day <= numDays; day++) {
    // Push a new entry with a random progress value between 0 and 100
    data.push([new Date(year, month, day), Math.floor(Math.random() * 101)]);
  }
  return data;
};

const HeatMapGraph = () => {
  // Generate random progress data for each month in 2024
  const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // Months of the year (0 = January, 11 = December)
  let data = [["Date", "Progress (%)"]];
  months.forEach((month) => {
    data = data.concat(generateRandomProgressData(2024, month)); // Add data for each month
  });

  const options = {
    title: "",
    calendar: {
      cellSize: 20,
      cellColor: "#ffffff", // Default color for cells
      focusedCellColor: "#a1c4fd", // Color for focused cells
    },
    colorAxis: {
      minValue: 0,
      maxValue: 100,
      colors: [
        "#e6f7e6", // Lightest green (Low progress)
        "#cce6cc", // Very light green
        "#99e699", // Light green
        "#66cc66", // Medium green
        "#33cc33", // Dark green
        "#009900", // Deep green (High progress)
      ], // Gradient representing progress in green
    },
    backgroundColor: "transparent",
    tooltip: { isHtml: true }, // Enable tooltips
  };

  return (
    <div>
      <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
        Sustainability Goals Progress (Daily)
      </h2>
      <div className="flex-grow">
        <Chart
          chartType="Calendar"
          data={data}
          options={options}
          width={"100%"}
          height={"350px"} // Increased height for better view
        />
      </div>
    </div>
  );
};

export default HeatMapGraph;
