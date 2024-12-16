import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import FleetGraph from "./FleetGraph";

const FManage = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Vehicle Performance Monitoring",
      description:
        "Monitor fleet performance through real-time data, tracking vehicle conditions, maintenance needs, and fuel efficiency to optimize operations.",
    },
    {
      icon: <MdInsights />,
      title: "Driver Behavior Analytics",
      description:
        "Use data analytics to track driver performance, ensuring safety, reducing risks, and improving fuel efficiency by monitoring speed, routes, and driving habits.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Maintenance Scheduling",
      description:
        "Implement predictive maintenance systems based on vehicle data to anticipate and schedule maintenance, reducing downtime and extending fleet lifespan.",
    },
  ];

  return (
    <TempOne
      sectionId="fleet-management"
      headingIcon={<MdTrendingUp />}
      headingText="Management"
      title="Fleet Management"
      description={`Managing a fleet efficiently requires real-time insights into vehicle performance, maintenance schedules, and route conditions. Our fleet management solutions offer comprehensive analytics on vehicle health, driver behavior, and fuel consumption. By leveraging this data, we help you optimize fleet utilization, reduce operational costs, and enhance vehicle longevity.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={FleetGraph}
      features={features}
    />
  );
};

export default FManage;
