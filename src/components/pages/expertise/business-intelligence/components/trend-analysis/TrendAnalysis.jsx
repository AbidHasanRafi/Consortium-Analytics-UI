import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { TrendGraph } from "./TrendGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const TrendAnalysis = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Identify Market Movements",
      description:
        "Analyze historical data to uncover patterns and predict future trends, helping businesses stay ahead of market changes.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Actionable Insights",
      description:
        "Use trend analysis to understand shifting consumer behavior, economic conditions, or market demands, driving strategic initiatives.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Long-Term Strategy",
      description:
        " Leverage trend data to develop long-term strategies that align with projected market conditions and business needs.",
    },
  ];

  return (
    <TempTwo
      sectionId="trend-analysis"
      headingIcon={<HiOutlineMap />}
      headingText="Analysis"
      title="Trend Analysis"
      description={`Trend analysis helps organizations identify patterns and shifts in data over time. Our team uses historical data and advanced analytical tools to uncover long-term trends, emerging behaviors, and market changes. By analyzing these trends, we provide actionable insights that allow you to make proactive decisions, anticipate future challenges, and capitalize on new opportunities.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={TrendGraph}
      features={features}
    />
  );
};

export default TrendAnalysis;
