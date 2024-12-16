import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import RiskAnalyticsGraph from "./RiskAnalyticsGraph";

const RiskAnalytics = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Risk Assessment Models",
      description:
        "Use data analytics and predictive modeling to identify and assess financial risks, enabling businesses to minimize exposure and optimize decision-making.",
    },
    {
      icon: <MdInsights />,
      title: "Market and Credit Risk Analysis",
      description:
        "Evaluate market volatility, credit risk, and operational risks, providing real-time insights to help mitigate potential losses.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Scenario Analysis and Stress Testing",
      description:
        "Simulate different economic scenarios to assess the resilience of portfolios and investments under varying market conditions.",
    },
  ];

  return (
    <TempOne
      sectionId="risk-analytics"
      headingIcon={<MdTrendingUp />}
      headingText="Analytics"
      title="Risk Analytics"
      description={`Understanding and mitigating risk is crucial in financial services. Our risk analytics tools use advanced data models to assess potential risks across portfolios, investments, and transactions. By analyzing market volatility, credit risks, and liquidity issues, we help you identify vulnerabilities and develop strategies to minimize exposure, ensuring financial stability and compliance.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={RiskAnalyticsGraph}
      features={features}
    />
  );
};

export default RiskAnalytics;
