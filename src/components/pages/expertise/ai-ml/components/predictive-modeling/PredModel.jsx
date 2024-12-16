import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import PredModelGraph from "./PredModelGraph";

const PredModel = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Forecast Future Outcomes",
      description:
        "Use historical data and machine learning algorithms to predict future trends, sales, customer behavior, and other key metrics.",
    },
    {
      icon: <MdInsights />,
      title: "Optimize Decision-Making",
      description:
        "Enable more accurate decision-making by forecasting potential risks, opportunities, and outcomes based on data-driven predictions.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Improve Business Strategy",
      description:
        "Leverage predictive insights to adjust business strategies proactively, ensuring the organization stays competitive and responsive to market changes.",
    },
  ];

  return (
    <TempOne
      sectionId="predictive-modeling"
      headingIcon={<MdTrendingUp />}
      headingText="Modeling"
      title="Predictive Modeling"
      description={`Predictive modeling uses statistical algorithms and machine learning techniques to forecast future outcomes based on historical data. Our team builds and refines predictive models that help you anticipate customer behavior, market trends, and operational needs. By leveraging predictive analytics, you can proactively address challenges, optimize strategies, and make more informed, forward-looking decisions.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={PredModelGraph}
      features={features}
    />
  );
};

export default PredModel;
