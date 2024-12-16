import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import RecommendGraph from "./RecommendGraph";

const RecommendEngine = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Personalized Recommendations",
      description:
        "Use machine learning algorithms to recommend products, services, or content based on individual customer preferences and behaviors.",
    },
    {
      icon: <MdInsights />,
      title: "Increase Engagement",
      description:
        "Drive higher customer engagement and satisfaction by offering tailored recommendations that are relevant and aligned with user interests.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Boost Sales and Conversions",
      description:
        "Improve sales and conversion rates by suggesting the right products to the right customers at the right time, increasing the likelihood of purchase.",
    },
  ];

  return (
    <TempOne
      sectionId="recommend-engine"
      headingIcon={<MdTrendingUp />}
      headingText="Engines"
      title="Recommendation Engines"
      description={`Recommendation engines use machine learning algorithms to analyze user behavior and preferences, offering personalized product or service recommendations. We develop customized recommendation systems that enhance customer experience and increase engagement by delivering tailored suggestions based on past interactions and similar users’ behaviors. This helps boost sales, improve user retention, and drive higher conversion rates.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={RecommendGraph}
      features={features}
    />
  );
};

export default RecommendEngine;
