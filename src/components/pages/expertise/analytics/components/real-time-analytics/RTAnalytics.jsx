import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import RTGraph from "./RTGraph";

const RTAnalytics = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Immediate Decision-Making",
      description:
        "Enable businesses to analyze data in real time, allowing them to respond instantly to market changes, customer actions, or operational shifts.",
    },
    {
      icon: <MdInsights />,
      title: "Live Monitoring",
      description:
        "Track ongoing activities like sales, web traffic, or supply chain performance to detect anomalies or optimize processes as they occur.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Operational Efficiency",
      description:
        "Improve response time and operational agility by analyzing live data, ensuring that decisions are based on the most current information available.",
    },
  ];

  return (
    <TempOne
      sectionId="real-time-analytics"
      headingIcon={<MdTrendingUp />}
      headingText="Analytics"
      title="Real-Time Analytics"
      description={`Real-time analytics allows organizations to analyze data as it is generated, providing immediate insights into ongoing events. Our team develops real-time analytics solutions that enable businesses to make fast, informed decisions in the moment. Whether it's monitoring sales performance, website traffic, or supply chain status, real-time analytics ensures you're always working with the latest data to drive agile, responsive actions.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={RTGraph}
      features={features}
    />
  );
};

export default RTAnalytics;
