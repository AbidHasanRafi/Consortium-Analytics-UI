import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import DMGraph from "./DMGraph";

const DecisionMaking = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Informed Choices",
      description:
        "Base decisions on data insights rather than intuition, ensuring more accurate and reliable business outcomes.",
    },
    {
      icon: <MdInsights />,
      title: "Improved Efficiency",
      description:
        "Speed up decision-making processes with automated data insights, reducing reliance on guesswork and enabling faster responses to challenges.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Strategic Direction",
      description:
        "Empower leaders with insights that help guide strategic direction, optimize operations, and enhance overall organizational effectiveness.",
    },
  ];

  return (
    <TempOne
      sectionId="decision-making"
      headingIcon={<MdTrendingUp />}
      headingText="Decision Making"
      title="Data-Driven Decision Making"
      description={`Data-driven decision-making relies on real-time, accurate data to inform strategic choices. We empower businesses to base their decisions on factual insights derived from your data, eliminating guesswork and intuition. With advanced analytics and business intelligence solutions, our services provide you with the tools and frameworks to make smarter decisions that are backed by concrete data.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={DMGraph}
      features={features}
    />
  );
};

export default DecisionMaking;
