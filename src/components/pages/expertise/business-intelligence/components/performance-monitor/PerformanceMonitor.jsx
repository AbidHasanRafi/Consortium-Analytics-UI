import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import PerformanceGraph from "./PerformanceGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const PerformanceMonitor = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Continuous Monitoring",
      description:
        "Track the ongoing performance of teams, departments, and business operations to ensure objectives are being met and resources are being utilized efficiently.",
    },
    {
      icon: <MdInsights />,
      title: "Early Issue Detection",
      description:
        "Quickly identify performance bottlenecks or issues, allowing businesses to take corrective actions before they escalate.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Data-Driven Improvements",
      description:
        "Use performance data to implement improvements, enhance operational efficiency, and maintain high levels of productivity across the organization.",
    },
  ];

  return (
    <TempOne
      sectionId="performance-monitor"
      headingIcon={<MdTrendingUp />}
      headingText="Monitoring"
      title="Performance Monitoring"
      description={`Performance monitoring is key to evaluating business operations and ensuring alignment with objectives. We develop solutions that continuously track the performance of various business functions, such as sales, marketing, and operations. With automated reporting and real-time updates, you can spot areas for improvement, optimize processes, and ensure that your organization is consistently performing at its best.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={PerformanceGraph}
      features={features}
    />
  );
};

export default PerformanceMonitor;
