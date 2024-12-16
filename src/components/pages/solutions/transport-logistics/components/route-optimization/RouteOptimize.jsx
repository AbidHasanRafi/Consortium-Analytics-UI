import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import RouteGraph from "./RouteGraph";

const RouteOptimize = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Dynamic Route Planning",
      description:
        "Use real-time data and algorithms to optimize delivery routes, reducing fuel consumption, travel time, and operational costs.",
    },
    {
      icon: <MdInsights />,
      title: "Traffic and Weather Integration",
      description:
        "Integrate live traffic and weather data to dynamically adjust routes, ensuring timely deliveries and minimizing delays.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Geospatial Mapping",
      description:
        "Leverage geospatial data to analyze and choose the most efficient routes, factoring in road conditions, distances, and congestion patterns.",
    },
  ];

  return (
    <TempOne
      sectionId="route-optimize"
      headingIcon={<MdTrendingUp />}
      headingText="Optimization"
      title="Route Optimization"
      description={`Optimizing delivery routes is key to minimizing fuel costs, reducing travel time, and improving customer satisfaction. Our route optimization tools use real-time traffic data, historical patterns, and predictive analytics to design the most efficient routes. This ensures faster deliveries, lower transportation costs, and a better experience for your customers.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={RouteGraph}
      features={features}
    />
  );
};

export default RouteOptimize;
