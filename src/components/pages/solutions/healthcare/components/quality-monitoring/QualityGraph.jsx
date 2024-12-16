import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    patientSatisfaction: 75,
    readmissionRate: 10,
    treatmentSuccess: 85,
  },
  {
    name: "Week 2",
    patientSatisfaction: 80,
    readmissionRate: 8,
    treatmentSuccess: 90,
  },
  {
    name: "Week 3",
    patientSatisfaction: 78,
    readmissionRate: 9,
    treatmentSuccess: 87,
  },
  {
    name: "Week 4",
    patientSatisfaction: 82,
    readmissionRate: 7,
    treatmentSuccess: 92,
  },
  {
    name: "Week 5",
    patientSatisfaction: 85,
    readmissionRate: 6,
    treatmentSuccess: 93,
  },
  {
    name: "Week 6",
    patientSatisfaction: 88,
    readmissionRate: 5,
    treatmentSuccess: 95,
  },
  {
    name: "Week 7",
    patientSatisfaction: 90,
    readmissionRate: 4,
    treatmentSuccess: 96,
  },
];

// Customized label component for Line chart points
class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;
    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

// Customized X Axis tick component
class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export class QualityGraph extends PureComponent {
  render() {
    return (
      <div className="p-0 md:p-10" style={{ width: "100%", height: "500px" }}>
        <h2 className="text-center mb-6 text-lg sm:text-xl font-semibold text-gray-900">
          Quality Monitoring Map
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          {" "}
          {/* Fixed height for better rendering */}
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="patientSatisfaction"
              stroke="#8884d8"
              label={<CustomizedLabel />}
              name="Patient Satisfaction (%)"
            />
            <Line
              type="monotone"
              dataKey="readmissionRate"
              stroke="#82ca9d"
              name="Readmission Rate (%)"
            />
            <Line
              type="monotone"
              dataKey="treatmentSuccess"
              stroke="#ff7300"
              label={<CustomizedLabel />}
              name="Treatment Success Rate (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
