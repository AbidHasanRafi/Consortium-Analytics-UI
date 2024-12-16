import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import OptimizeGraph from "./OptimizeGraph";

const OptimizeSales = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Optimal Site Selection",
      description:
        "Use geospatial data and advanced analytics to identify high-potential retail locations based on customer demographics, foot traffic, and market conditions.",
    },
    {
      icon: <MdInsights />,
      title: "Market Penetration Analysis",
      description:
        "Evaluate existing retail networks and assess new areas for expansion to maximize market coverage and growth potential.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Location Performance Tracking",
      description:
        "Monitor and visualize site performance over time, helping retailers make data-driven decisions on store openings, closures, or relocations.",
    },
  ];

  return (
    <TempOne
      sectionId="location-analytics"
      headingIcon={<MdTrendingUp />}
      headingText="Location"
      title="Location Analytics"
      description={`The success of a retail business is often tied to location. Our location analytics service combines geographic data with market trends to identify the best places to open new stores or optimize existing ones. By considering factors like foot traffic, local demographics, and competitive landscape, we help you select the most strategic locations for growth.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={OptimizeGraph}
      features={features}
    />
  );
};

export default OptimizeSales;
