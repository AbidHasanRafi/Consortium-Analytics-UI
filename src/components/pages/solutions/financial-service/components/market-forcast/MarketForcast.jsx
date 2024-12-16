import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import MarketGraph from "./MarketGraph";

const MarketForcast = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Economic Trend Analysis",
      description:
        "Track macroeconomic indicators and market shifts to forecast future market conditions, helping businesses and investors anticipate changes and stay ahead of trends.",
    },
    {
      icon: <MdInsights />,
      title: "Predictive Modeling",
      description:
        "Use AI and machine learning to build predictive models that forecast market movements, guiding strategic investment and business decisions.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Industry and Sector Forecasts",
      description:
        "Provide in-depth forecasts for specific industries and sectors, enabling financial institutions to make informed decisions about asset allocation and market entry.",
    },
  ];

  return (
    <TempOne
      sectionId="market-forcast"
      headingIcon={<MdTrendingUp />}
      headingText="Forcast"
      title="Market Forecasts"
      description={`Accurate market forecasting is vital for staying ahead of economic shifts. Our market forecasting tools use advanced analytics to predict trends in interest rates, stock performance, and other critical financial indicators. With these insights, you can anticipate market movements, adjust investment strategies, and capitalize on emerging opportunities.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={MarketGraph}
      features={features}
    />
  );
};

export default MarketForcast;
