import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import CostGraph from "./CostGraph";

const CostReduction = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Operational Efficiency Optimization",
      description:
        "Analyze logistics processes to identify inefficiencies and recommend changes that reduce operational costs, including fuel usage and labor expenses.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Automation and Process Streamlining",
      description:
        "Implement automation in warehouse management, inventory tracking, and delivery systems to minimize manual errors and reduce overhead costs.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Supply Chain Optimization",
      description:
        "Use data-driven insights to optimize the supply chain, minimizing excess inventory and reducing storage and transportation costs.",
    },
  ];

  return (
    <TempTwo
      sectionId="cost-reduction"
      headingIcon={<HiOutlineMap />}
      headingText="Reduction"
      title="Cost Reduction"
      description={`In the transport and logistics industry, controlling costs is vital for profitability. Our cost reduction strategies use data analytics to identify inefficiencies in operations, from fuel consumption to route planning. By providing actionable insights, we help you reduce unnecessary expenses, improve asset utilization, and enhance overall profitability.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CostGraph}
      features={features}
    />
  );
};

export default CostReduction;
