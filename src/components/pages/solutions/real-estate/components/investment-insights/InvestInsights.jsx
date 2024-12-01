import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import InvestmentGraph from "./InvestmentGraph";

const InvestInsights = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Data-Driven Decision Making",
      description:
        "Use advanced data analytics to evaluate investment opportunities, uncovering hidden value in both residential and commercial real estate.",
    },
    {
      icon: <MdInsights />,
      title: "Risk Assessment",
      description:
        "Assess potential risks associated with properties and markets, helping investors identify the best opportunities with the highest return potential.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Predictive Analytics",
      description:
        "Leverage predictive models to forecast property values, demand, and investment outcomes, empowering investors to make informed, strategic decisions.",
    },
  ];

  return (
    <TempOne
      sectionId="invest-insights"
      headingIcon={<MdTrendingUp />}
      headingText="Insights"
      title="Investment Insights"
      description={`In real estate, investment opportunities go beyond location. Identifying high-potential assets means understanding the "why" behind the value of properties. Our data-driven insights leverage spatial analysis, market trends, and predictive models to help you assess risk and uncover hidden opportunities. With our advanced tools, you can make informed, strategic decisions about where and how to invest in a rapidly evolving market.`}
      linkText="Explore More"
      linkHref="#explore"
      chartComponent={InvestmentGraph}
      features={features}
    />
  );
};

export default InvestInsights;
