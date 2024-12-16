import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import ContextGraph from "./ContextGraph";

const Contextualization = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Relevance and Clarity",
      description:
        "Add context to raw data by interpreting it against specific business objectives, market trends, or customer behavior, making it more relevant for decision-making.",
    },
    {
      icon: <MdInsights />,
      title: "Enhanced Understanding",
      description:
        "Provide context to data points by incorporating external factors or historical trends, helping businesses understand the 'why' behind the numbers.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Strategic Insights",
      description:
        "Use contextualized data to inform business strategies, ensuring decisions are based on a deeper understanding of the broader business environment.",
    },
  ];

  return (
    <TempOne
      sectionId="contextualization"
      headingIcon={<MdTrendingUp />}
      headingText="Contextualization"
      title="Contextualization"
      description={`Contextualization adds meaning to your data by considering the surrounding circumstances and relationships within it. Our team helps contextualize data by analyzing it in its specific environment, whether it's through geographic, temporal, or business-specific lenses. This process enables you to interpret data more effectively and make decisions that are informed not just by the raw numbers, but also by the context in which they exist.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={ContextGraph}
      features={features}
    />
  );
};

export default Contextualization;
