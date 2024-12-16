import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import EfficiencyGraph from "./EfficiencyGraph";

const EfficiencyTrack = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Real-Time Performance Dashboards",
      description:
        "Provide interactive dashboards that track key performance metrics like delivery times, fleet usage, and fuel consumption, driving efficiency improvements.",
    },
    {
      icon: <MdInsights />,
      title: "Key Metrics Monitoring",
      description:
        "Track critical logistics metrics such as on-time deliveries, order accuracy, and route effectiveness to ensure optimal performance and operational success.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Continuous Improvement",
      description:
        "Use data analysis to continuously assess logistics operations, identifying areas of improvement and implementing data-driven solutions for long-term efficiency gains.",
    },
  ];

  return (
    <TempOne
      sectionId="efficiency-track"
      headingIcon={<MdTrendingUp />}
      headingText="Efficiency"
      title="Efficiency Tracking"
      description={`Tracking operational efficiency is essential for continuous improvement in logistics. Our efficiency tracking tools monitor key performance indicators such as delivery times, resource utilization, and cost per mile. With real-time data and comprehensive analytics, you can identify bottlenecks, optimize workflows, and make data-driven decisions to improve efficiency across your logistics network.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={EfficiencyGraph}
      features={features}
    />
  );
};

export default EfficiencyTrack;
