import React from "react";
import TempOne from "../../../../../templates/temp-01/TempOne";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import { ForecastGraph } from "./ForcastGraph";

const DemandForcast = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Predict Future Trends",
      description:
        "Leverage historical data and statistical models to predict future market demand, helping businesses plan inventory, production, and sales strategies.",
    },
    {
      icon: <MdInsights />,
      title: "Data-Driven Insights",
      description:
        "Make informed predictions using real-time data, reducing risks associated with underproduction or overstocking.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Optimized Operations",
      description:
        "Align supply chain, staffing, and marketing efforts with predicted demand, ensuring maximum efficiency and minimizing waste.",
    },
  ];

  return (
    <TempOne
      sectionId="demand-forcast"
      headingIcon={<MdTrendingUp />}
      headingText="Forecasting"
      title="Demand Forecasting"
      description={`Demand forecasting predicts future customer demand based on historical data, market conditions, and emerging trends. Using advanced machine learning and statistical models, we help you accurately forecast demand for products or services. This enables you to optimize inventory, reduce costs, and ensure that you meet customer needs without overstocking or understocking, thus improving overall operational efficiency.
`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={ForecastGraph}
      features={features}
    />
  );
};

export default DemandForcast;
