import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import ResourceGraph from "./ResourceGraph";

const ResourceOptimize = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Energy Management",
      description:
        "Monitor energy consumption across cities, optimizing distribution and reducing waste through smart grid technologies and data analysis.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Waste Management Optimization",
      description:
        "Use data-driven solutions to streamline waste collection and recycling efforts, improving operational efficiency and reducing environmental impact.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Water and Resource Conservation",
      description:
        " Leverage IoT and data analytics to track and optimize water usage, ensuring sustainable resource management across urban areas.",
    },
  ];

  return (
    <TempTwo
      sectionId="resource-optimize"
      headingIcon={<HiOutlineMap />}
      headingText="Optimization"
      title="Resource Optimization"
      description={`Efficient resource allocation is crucial for sustainable city development. Our resource optimization tools use data analytics to assess and manage urban resources like energy, water, and waste. By identifying inefficiencies and providing actionable insights, we help cities reduce consumption, minimize waste, and optimize the use of available resources, ensuring long-term sustainability and cost savings.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={ResourceGraph}
      features={features}
    />
  );
};

export default ResourceOptimize;
