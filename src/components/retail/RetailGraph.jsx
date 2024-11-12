import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

// Retail sales data with Projected Sales and Actual Sales for each year
const data = [
  { year: "2015", Projected: 4000, Actual: 5000, fullMark: 8000 },
  { year: "2016", Projected: 4500, Actual: 4200, fullMark: 8000 },
  { year: "2017", Projected: 5000, Actual: 5500, fullMark: 8000 },
  { year: "2018", Projected: 5300, Actual: 4800, fullMark: 8000 },
  { year: "2019", Projected: 5800, Actual: 6200, fullMark: 8000 },
  { year: "2020", Projected: 6000, Actual: 3500, fullMark: 8000 },
  { year: "2021", Projected: 6700, Actual: 7000, fullMark: 8000 },
  { year: "2022", Projected: 7200, Actual: 4000, fullMark: 8000 },
  { year: "2023", Projected: 7500, Actual: 5500, fullMark: 8000 },
];

export class RetailGraph extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="year" />
          <PolarRadiusAxis angle={30} domain={[0, 8000]} />
          <Radar
            name="Projected Sales"
            dataKey="Projected"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Actual Sales"
            dataKey="Actual"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
