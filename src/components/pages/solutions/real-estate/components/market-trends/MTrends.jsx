import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import MarketTrendsGraph from "./MarketTrendsGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const MTrends = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Price Optimization Models",
      description:
        "Leverage advanced analytics to develop data-driven pricing models that ensure properties are priced competitively in line with current market conditions.",
    },
    {
      icon: <MdInsights />,
      title: "Comparable Market Analysis",
      description:
        "Use market data and comparable sales information to assess the fair value of properties, helping to establish optimal pricing strategies.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Dynamic Pricing Tools",
      description:
        "Integrate dynamic pricing solutions that adjust property prices in real-time based on market conditions, competitor pricing, and consumer demand.",
    },
  ];

  return (
    <TempOne
      sectionId="price-strategy"
      headingIcon={<MdTrendingUp />}
      headingText="Strategy"
      title="Pricing Strategy"
      description={`Setting the right price is crucial for success in real estate investment. Our data enrichment and business intelligence tools analyze market demand, comparable sales, and future price projections to help you determine the optimal pricing strategy. Whether you're pricing individual properties or an entire portfolio, our data-driven approach ensures your pricing aligns with market realities and maximizes returns.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={MarketTrendsGraph}
      features={features}
    />
  );
};

export default MTrends;
