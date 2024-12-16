import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import { CompeteGraph } from "./CompeteGraph";

const CEvaluate = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Competitive Benchmarking",
      description:
        "Compare your retail performance against competitors by analyzing market share, pricing, promotions, and product offerings.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Market Positioning",
      description:
        "Evaluate competitors' strengths and weaknesses to identify opportunities for differentiation and growth in a competitive market.",
    },
    {
      icon: <HiOutlineMap />,
      title: "SWOT Analysis",
      description:
        "Perform comprehensive competitor assessments using SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis to better position your business in the market.",
    },
  ];

  return (
    <TempTwo
      sectionId="competitor-evaluation"
      headingIcon={<HiOutlineMap />}
      headingText="Evaluation"
      title="Competitor Evaluation"
      description={`Understanding your competition is crucial for strategic positioning. Our competitor evaluation tools use market data and AI-driven analysis to give you a clear picture of your competitors' strengths and weaknesses. By monitoring their pricing strategies, promotions, and market share, we provide actionable insights that help you refine your approach and maintain a competitive advantage.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CompeteGraph}
      features={features}
    />
  );
};

export default CEvaluate;
