import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import STTGraph from "./STTGraph";

const STTModel = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Quantitative Analysis",
      description:
        "Build statistical models to analyze relationships between variables, providing insights into factors affecting business performance, customer behavior, and market trends.",
    },
    {
      icon: <MdInsights />,
      title: "Hypothesis Testing",
      description:
        "Use statistical methods to test hypotheses and validate assumptions, helping businesses make data-backed decisions with greater confidence.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Predictive Power",
      description:
        "Leverage advanced statistical models to predict outcomes, allowing businesses to anticipate market shifts, customer needs, or potential issues before they arise.",
    },
  ];

  return (
    <TempOne
      sectionId="statistical-modeling"
      headingIcon={<MdTrendingUp />}
      headingText="Modeling"
      title="Statistical Modeling"
      description={`Statistical modeling uses mathematical models to analyze data and uncover relationships between variables. Our team leverages advanced statistical techniques to create models that predict outcomes and test hypotheses. Whether you're analyzing customer behavior, market trends, or operational performance, statistical modeling provides a rigorous approach to understanding complex data and making informed decisions.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={STTGraph}
      features={features}
    />
  );
};

export default STTModel;
