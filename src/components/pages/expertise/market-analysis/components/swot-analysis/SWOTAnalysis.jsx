import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import SWOTGraph from "./SWOTGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const SWOTAnalysis = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Evaluate Strengths and Weaknesses",
      description:
        "Assess internal strengths and weaknesses of your business to identify areas of improvement or competitive advantage.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Identify Opportunities and Threats",
      description:
        "Analyze external market conditions to uncover opportunities for growth or threats that may require strategic action.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Strategic Planning",
      description:
        "Use SWOT insights to inform decision-making, enabling the organization to capitalize on its strengths, mitigate risks, and pursue new opportunities.",
    },
  ];

  return (
    <TempTwo
      sectionId="swot-analysis"
      headingIcon={<HiOutlineMap />}
      headingText="Analysis"
      title="SWOT Analysis"
      description={`SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) helps businesses evaluate their internal and external environments. We use data-driven insights to conduct comprehensive SWOT analysis, identifying key factors that influence your business’s success. By understanding your organization's strengths and weaknesses, as well as the opportunities and threats in the market, you can formulate strategies that leverage your competitive advantages while mitigating potential risks.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={SWOTGraph}
      features={features}
    />
  );
};

export default SWOTAnalysis;
