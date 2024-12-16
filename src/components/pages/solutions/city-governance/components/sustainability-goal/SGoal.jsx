import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import GoalGraph from "./GoalGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const SGoal = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Carbon Footprint Tracking",
      description:
        "Monitor and analyze emissions data to track progress toward reducing the city’s carbon footprint, ensuring alignment with global sustainability targets.",
    },
    {
      icon: <MdInsights />,
      title: "Sustainable Urban Planning",
      description:
        "Use data-driven insights to design cities that promote sustainability, optimizing transportation, energy usage, and waste management systems.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Circular Economy Integration",
      description:
        "Implement strategies that reduce waste, encourage recycling, and promote the reuse of materials, contributing to a more sustainable and efficient urban environment.",
    },
  ];

  return (
    <TempOne
      sectionId="sustainability-goal"
      headingIcon={<MdTrendingUp />}
      headingText="Sustainability"
      title="Sustainability Goals"
      description={`Achieving sustainability in urban environments requires data-driven strategies to monitor and meet environmental goals. Our sustainability solutions help cities track and analyze data related to carbon emissions, energy consumption, waste management, and more. With these insights, we support cities in developing strategies to reduce their environmental impact, meet sustainability targets, and improve the overall quality of life for residents.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={GoalGraph}
      features={features}
    />
  );
};

export default SGoal;
