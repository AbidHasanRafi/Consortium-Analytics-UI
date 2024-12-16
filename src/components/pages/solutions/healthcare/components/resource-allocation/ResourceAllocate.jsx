import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import ResourceGraph from "./ResourceGraph";

const ResourceAllocate = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Staffing Optimization",
      description:
        "Analyze patient volume and acuity to allocate healthcare staff effectively, reducing wait times and improving patient care.",
    },
    {
      icon: <MdInsights />,
      title: "Inventory Management",
      description:
        "Use data analytics to monitor and manage healthcare inventories, ensuring that essential supplies and equipment are available when needed.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Operational Efficiency",
      description:
        "Track and optimize the use of hospital resources (e.g., beds, medical equipment) to reduce waste, improve workflow, and enhance patient care.",
    },
  ];

  return (
    <TempOne
      sectionId="resource-allocate"
      headingIcon={<MdTrendingUp />}
      headingText="Resource"
      title="Resource Allocation"
      description={`Effective resource allocation is essential to delivering high-quality care without overburdening staff or facilities. Our data-driven resource allocation tools help optimize staffing, equipment, and space usage, ensuring that resources are utilized where they are needed most. With real-time analytics, you can adjust to changing demands and improve operational efficiency, ultimately leading to better patient outcomes and cost savings.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={ResourceGraph}
      features={features}
    />
  );
};

export default ResourceAllocate;
