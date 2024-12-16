import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import PredGraph from "./PredGraph";

const PredAnalytics = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Forecast Future Trends",
      description:
        "Leverage historical data and machine learning models to predict future outcomes, such as customer behavior, sales trends, or market movements.",
    },
    {
      icon: <MdInsights />,
      title: "Risk Assessment",
      description:
        "Identify potential risks and opportunities by forecasting future scenarios, allowing businesses to make proactive decisions and mitigate risks.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Optimized Strategy",
      description:
        "Use predictive insights to guide decision-making, optimize resource allocation, and refine business strategies for better long-term results.",
    },
  ];

  return (
    <TempOne
      sectionId="predictive-analytics"
      headingIcon={<MdTrendingUp />}
      headingText="Analytics"
      title="Predictive Analytics"
      description={`Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to forecast future outcomes. Our team applies predictive models to identify trends, risks, and opportunities before they happen, enabling you to take proactive measures. Whether you're predicting customer behavior, market shifts, or operational challenges, our predictive analytics empower you to plan and act with confidence.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={PredGraph}
      features={features}
    />
  );
};

export default PredAnalytics;
