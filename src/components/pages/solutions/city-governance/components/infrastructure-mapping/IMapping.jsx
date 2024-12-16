import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import InfrastructureGraph from "./InfrastructureGraph";

const IMapping = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Geospatial Data Analysis",
      description:
        "Utilize advanced mapping techniques to visualize and assess the condition of urban infrastructure, identifying areas for improvement or development.",
    },
    {
      icon: <MdInsights />,
      title: "Asset Management",
      description:
        "Track and manage the lifecycle of public assets (e.g., roads, utilities, buildings) using real-time data to improve maintenance schedules and reduce costs.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Urban Planning",
      description:
        "Use infrastructure maps to guide future urban development and redevelopment projects, ensuring that infrastructure meets the growing needs of the population.",
    },
  ];

  return (
    <TempOne
      sectionId="infrastructure-mapping"
      headingIcon={<MdTrendingUp />}
      headingText="Mapping"
      title="Infrastructure Mapping"
      description={`Effective infrastructure planning begins with understanding the existing landscape. Our infrastructure mapping solutions use spatial data and advanced analytics to visualize and assess key urban assets, such as transportation networks, utilities, and public services. With detailed maps and data visualizations, we help governments and urban planners identify gaps, prioritize investments, and make informed decisions about infrastructure development and maintenance.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={InfrastructureGraph}
      features={features}
    />
  );
};

export default IMapping;
