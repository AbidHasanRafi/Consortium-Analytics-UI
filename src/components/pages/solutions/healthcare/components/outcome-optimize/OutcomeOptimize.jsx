import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import OutcomeGraph from "./OutcomeGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const OutcomeOptimize = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Clinical Pathway Optimization",
      description:
        "Use data analytics to refine clinical pathways, ensuring that patients receive the most effective treatments with the best possible outcomes.",
    },
    {
      icon: <MdInsights />,
      title: "Health Outcome Predictions",
      description:
        "Leverage AI and machine learning to predict patient outcomes, enabling early interventions and personalized treatment plans to improve recovery rates.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Cost-Effectiveness Analysis",
      description:
        "Analyze treatment costs versus patient outcomes to identify the most cost-effective interventions and ensure that healthcare resources are spent wisely.",
    },
  ];

  return (
    <TempOne
      sectionId="outcomes-optimization"
      headingIcon={<MdTrendingUp />}
      headingText="Optimization"
      title="Outcomes Optimization"
      description={`Improving patient outcomes is the ultimate goal of any healthcare organization. Our outcomes optimization services leverage advanced analytics and AI to predict and enhance treatment outcomes. By analyzing clinical data and patient histories, we provide actionable insights that help optimize treatment protocols, reduce readmission rates, and improve overall patient health, ensuring the best possible outcomes across your entire patient population.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={OutcomeGraph}
      features={features}
    />
  );
};

export default OutcomeOptimize;
