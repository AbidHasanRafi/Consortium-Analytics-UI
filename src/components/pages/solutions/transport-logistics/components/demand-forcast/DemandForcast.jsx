import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import DemandGraph from "./DemandGraph";

const DemandForcast = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Predictive Analytics",
      description:
        "Utilize historical data and machine learning models to predict demand fluctuations, allowing businesses to adjust inventory and staffing levels proactively.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Seasonal Trends Analysis",
      description:
        "Analyze seasonal patterns and market trends to forecast demand, ensuring that resources are allocated effectively during peak times.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Real-Time Adjustment",
      description:
        "Implement systems that continuously track demand changes, providing real-time insights to optimize logistics operations and resource allocation.",
    },
  ];

  return (
    <TempTwo
      sectionId="demand-forcast"
      headingIcon={<HiOutlineMap />}
      headingText="Forecasting"
      title="Demand Forecasting"
      description={`Accurately predicting demand is critical for effective resource management in transport and logistics. Our demand forecasting tools analyze historical data, seasonal trends, and external factors to predict future demand. This enables you to plan routes, allocate resources, and adjust capacities to meet changing market conditions, ensuring timely deliveries and avoiding over or underutilization of assets.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={DemandGraph}
      features={features}
    />
  );
};

export default DemandForcast;
