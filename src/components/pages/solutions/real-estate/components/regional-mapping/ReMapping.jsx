import React from "react";
import { OpportunityMappingGraph } from "./OpportunityMappingGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";

const ReMapping = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Market Analysis Tools",
      description:
        "Use AI-powered tools to map and analyze emerging markets, identifying undervalued or underdeveloped areas with high growth potential.",
    },
    {
      icon: <MdInsights />,
      title: "Dynamic Investment Opportunities",
      description:
        "Provide real-time, interactive maps that highlight market shifts and changing investment landscapes, enabling fast, data-driven decision-making.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Geospatial Visualization",
      description:
        "Visualize key location attributes, such as demand trends, property values, and economic data, to pinpoint high-potential investment opportunities.",
    },
  ];

  return (
    <TempOne
      sectionId="opportunity-mapping"
      headingIcon={<MdTrendingUp />}
      headingText="Opportunity"
      title="Opportunity Mapping"
      description={`Finding investment opportunities requires a strategic understanding of market dynamics. Our opportunity mapping tools use AI and machine learning to identify emerging markets, underdeveloped areas, or undervalued properties. With visualized data, we highlight areas ripe for investment, enabling you to focus on locations with the greatest growth potential.`}
      linkText="Explore More"
      linkHref="#explore"
      chartComponent={OpportunityMappingGraph}
      features={features}
    />
  );
};

export default ReMapping;
