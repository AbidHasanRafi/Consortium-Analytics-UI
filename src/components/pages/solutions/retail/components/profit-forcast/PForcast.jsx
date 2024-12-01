import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import { ForecastGraph } from "./ForcastGraph";

const PForcast = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Revenue Prediction Models",
      description:
        "Use historical data and predictive analytics to forecast future sales and profitability, providing insights into potential growth and opportunities.",
    },
    {
      icon: <MdInsights />,
      title: "Cost Analysis",
      description:
        "Track and assess costs related to inventory, operations, and marketing efforts to optimize profit margins and improve financial performance.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Scenario Planning",
      description:
        " Model different scenarios (e.g., changes in market conditions or pricing strategies) to understand their impact on profitability and inform business decisions.",
    },
  ];

  return (
    <TempOne
      sectionId="profit-forecasting"
      headingIcon={<MdTrendingUp />}
      headingText="Forecasting"
      title="Profit Forecasting"
      description={`Maximizing profitability requires accurate forecasting. Using historical data, market trends, and predictive modeling, we provide insights into future profit potentials. Our profit forecasting tools help you anticipate sales trends, optimize inventory management, and plan pricing strategies, ensuring your business is well-positioned for long-term growth.`}
      linkText="Explore More"
      linkHref="#explore"
      chartComponent={ForecastGraph}
      features={features}
    />
  );
};

export default PForcast;
