import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import PolicyGraph from "./PolicyGraph";

const PInsights = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Data-Driven Policy Development",
      description:
        "Analyze large datasets to provide actionable insights that inform policy decisions, ensuring that governance is based on evidence and real-world data.",
    },
    {
      icon: <MdInsights />,
      title: "Impact Assessment",
      description:
        "Evaluate the impact of existing policies on communities and resources, identifying areas for improvement or changes needed to align with sustainability goals.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Public Health and Safety Trends",
      description:
        "Monitor data on health, safety, and crime to develop targeted policies that improve the quality of life for residents and reduce risks.",
    },
  ];

  return (
    <TempOne
      sectionId="policy-insights"
      headingIcon={<MdTrendingUp />}
      headingText="Insights"
      title="Policy Insights"
      description={`Data is a powerful tool for shaping effective policies. Our policy insights solutions analyze socio-economic data, demographic trends, and environmental factors to inform public policy decisions. By providing real-time analytics and predictive models, we help policymakers understand the potential impact of their decisions, ensuring policies are both effective and aligned with the needs of the community.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={PolicyGraph}
      features={features}
    />
  );
};

export default PInsights;
