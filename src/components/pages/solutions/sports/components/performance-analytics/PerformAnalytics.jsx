import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import PerformGraph from "./PerformGraph";

const PerformAnalytics = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Player Performance Tracking",
      description:
        "Use advanced analytics to monitor and evaluate individual and team performance metrics, enhancing coaching strategies and player development.",
    },
    {
      icon: <MdInsights />,
      title: "Game Strategy Optimization",
      description:
        " Analyze past game data to identify patterns and improve team strategies, ensuring better decision-making during matches.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Health and Fitness Monitoring",
      description:
        "Track athletes’ health and fitness data in real-time to optimize training loads, prevent injuries, and improve overall performance.",
    },
  ];

  return (
    <TempOne
      sectionId="performance-analytics"
      headingIcon={<MdTrendingUp />}
      headingText="Analytics"
      title="Performance Analytics"
      description={`Understanding and enhancing player and team performance is key to success in sports. Our performance analytics tools gather and analyze data from games, training sessions, and player metrics to provide actionable insights. By identifying strengths, weaknesses, and areas for improvement, we help teams optimize their performance and gain a competitive edge.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={PerformGraph}
      features={features}
    />
  );
};

export default PerformAnalytics;
