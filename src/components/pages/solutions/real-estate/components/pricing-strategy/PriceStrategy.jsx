import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import PricingStrategyGraph from "./PricingStrategyGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const PriceStrategy = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Market Demand Analysis",
      description:
        "Track shifts in demand, consumer behavior, and economic factors to understand the forces driving the real estate market.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Pricing and Investment Trends",
      description:
        "Monitor changes in property pricing, demand forecasts, and investment flows, helping investors adjust strategies accordingly.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Predictive Market Forecasting",
      description:
        "Use machine learning and AI to predict market trends, allowing real estate professionals to stay ahead of emerging opportunities and risks.",
    },
  ];

  return (
    <TempTwo
      sectionId="market-trends"
      headingIcon={<HiOutlineMap />}
      headingText="Trends"
      title="Market Trends"
      description={`Stay ahead of the curve by understanding the trends that are shaping the real estate market. Our market analytics services track property demand, pricing shifts, and broader economic patterns. By providing real-time data and forecasts, we equip you with the tools to anticipate market changes and adjust your strategies to maximize returns.
`}
      linkText="Discover More"
      linkHref="#"
      mapComponent={PricingStrategyGraph}
      features={features}
    />
  );
};

export default PriceStrategy;
