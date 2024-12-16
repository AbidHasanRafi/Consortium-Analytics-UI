import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import CIGraph from "./CIGraph";

const CompeteIntelligence = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Monitor Competitor Strategies",
      description:
        "Track and analyze the strategies, pricing, and product offerings of competitors to identify opportunities and threats in the market.",
    },
    {
      icon: <MdInsights />,
      title: "Benchmarking",
      description:
        "Compare your company's performance against competitors to identify strengths, weaknesses, and areas for improvement.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Market Positioning",
      description:
        "Use competitive intelligence to inform strategic decisions, ensuring your organization stays competitive and responsive to industry shifts.",
    },
  ];

  return (
    <TempOne
      sectionId="compete-intelligence"
      headingIcon={<MdTrendingUp />}
      headingText="Intelligence"
      title="Competitive Intelligence"
      description={`Competitive intelligence focuses on gathering, analyzing, and interpreting information about your competitors to gain a strategic advantage. We help you track competitor activities, market positioning, and product strategies using advanced analytics tools. By understanding your competitors’ strengths and weaknesses, we provide insights that allow you to refine your strategies, identify gaps in the market, and enhance your competitive edge.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={CIGraph}
      features={features}
    />
  );
};

export default CompeteIntelligence;
