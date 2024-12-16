import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import PortfolioGraph from "./PortfolioGraph";

const PortInsights = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Performance Analytics",
      description:
        "Analyze portfolio performance using historical data, benchmarking against industry standards to identify opportunities for improvement and growth.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Asset Allocation Optimization",
      description:
        "Utilize advanced analytics to optimize asset allocation, ensuring that portfolios are aligned with the client’s risk tolerance and investment goals.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Investment Strategy Evaluation",
      description:
        "Leverage data-driven insights to assess and adjust investment strategies, improving portfolio diversification and returns over time.",
    },
  ];

  return (
    <TempTwo
      sectionId="portfolio-insights"
      headingIcon={<HiOutlineMap />}
      headingText="Portfolio"
      title="Portfolio Insights"
      description={`Maximizing portfolio performance requires in-depth insights into asset allocation, risk-return tradeoffs, and market dynamics. Our portfolio insights leverage AI and machine learning to provide real-time analytics, helping you optimize your investments. By integrating data from various sources, we give you a clearer picture of portfolio performance, enabling more informed decision-making and better risk management.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={PortfolioGraph}
      features={features}
    />
  );
};

export default PortInsights;
