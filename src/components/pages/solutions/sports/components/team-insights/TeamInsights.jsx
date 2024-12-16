import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TeamGraph from "./TeamGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const TeamInsights = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Talent Scouting",
      description:
        "Use performance and behavioral data to identify emerging talent and enhance recruitment strategies for building stronger teams.",
    },
    {
      icon: <MdInsights />,
      title: "Player Efficiency Metrics",
      description:
        "Evaluate players’ efficiency and contributions to the team, helping coaches make data-driven decisions regarding lineup and strategy.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Team Dynamics Analysis",
      description:
        "Analyze team performance and interactions to uncover insights into team chemistry, helping improve collaboration and overall team success.",
    },
  ];

  return (
    <TempOne
      sectionId="team-insights"
      headingIcon={<MdTrendingUp />}
      headingText="Insights"
      title="Team Insights"
      description={`Optimizing team strategies requires in-depth insights into both individual player performance and team dynamics. Our team insights solutions combine data from multiple sources, including player statistics, injury reports, and game analysis, to help coaches and managers make informed decisions about tactics, training, and team composition. By understanding both the individual and collective strengths, we enable teams to perform at their best.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={TeamGraph}
      features={features}
    />
  );
};

export default TeamInsights;
