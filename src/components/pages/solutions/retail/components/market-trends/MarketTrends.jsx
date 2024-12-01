import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import TrendGraph from "./TrendGraph";

const MarketTrends = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Consumer Demand Forecasting",
      description:
        "Monitor shifts in consumer behavior, spending habits, and economic conditions to anticipate demand and adjust inventory and pricing strategies accordingly.",
    },
    {
      icon: <MdInsights />,
      title: "Price and Product Trends",
      description:
        "Analyze changes in product pricing, popular trends, and seasonality to ensure retail strategies align with current market conditions.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Real-Time Insights",
      description:
        "Provide up-to-date market intelligence, ensuring retailers can stay agile and responsive to evolving market conditions and consumer preferences.",
    },
  ];

  return (
    <TempOne
      sectionId="market-trends"
      headingIcon={<MdTrendingUp />}
      headingText="Trends"
      title="Market Trends"
      description={`Stay ahead of the curve with real-time insights into retail market trends. Our market analysis tools track shifts in consumer demand, economic indicators, and industry changes, helping you anticipate market movements and adjust strategies accordingly. Whether you're expanding into new regions or refining product offerings, our data-driven insights keep you informed about emerging opportunities.`}
      linkText="Explore More"
      linkHref="#explore"
      chartComponent={TrendGraph}
      features={features}
    />
  );
};

export default MarketTrends;
