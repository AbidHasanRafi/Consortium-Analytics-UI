import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import DIGraph from "./DIGraph";

const DataIntegration = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Consolidate Data Sources",
      description:
        "Integrate data from disparate sources—internal systems, third-party platforms, APIs, and cloud services—into a single, unified view to enhance analytics capabilities.",
    },
    {
      icon: <MdInsights />,
      title: "Cross-Platform Connectivity",
      description:
        "Build seamless connections between different data environments (cloud, on-premise, hybrid) to ensure consistent data access and analysis across your organization.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Enhanced Analytics",
      description:
        "Improve your business intelligence efforts by integrating diverse datasets, enabling more powerful and comprehensive data analysis.",
    },
  ];

  return (
    <TempOne
      sectionId="data-integration"
      headingIcon={<MdTrendingUp />}
      headingText="Integration"
      title="Data Integration"
      description={`Data integration involves combining data from various sources to create a unified view for analysis and reporting. Our team integrates data from disparate systems, databases, and third-party sources to ensure a seamless flow of information. Whether it’s integrating structured or unstructured data, we help you create a holistic view of your business, making it easier to derive actionable insights and optimize decision-making processes.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={DIGraph}
      features={features}
    />
  );
};

export default DataIntegration;
