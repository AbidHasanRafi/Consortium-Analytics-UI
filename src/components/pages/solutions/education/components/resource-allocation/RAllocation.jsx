import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import ResourceGraph from "./ResourceGraph";

const RAllocation = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Optimizing Resource Distribution",
      description:
        "Use data to allocate educational resources (teachers, classrooms, materials) efficiently, ensuring that students receive the support they need.",
    },
    {
      icon: <MdInsights />,
      title: "Budget Planning",
      description:
        "Analyze historical data to predict future resource needs and create budget forecasts that maximize impact on student outcomes.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Teacher and Staff Utilization",
      description:
        "Track teacher workloads, student-teacher ratios, and class sizes to optimize staff allocation and improve educational delivery.",
    },
  ];

  return (
    <TempOne
      sectionId="resource-allocate"
      headingIcon={<MdTrendingUp />}
      headingText="Resource"
      title="Resource Allocation"
      description={`Efficient use of resources is essential for maximizing the impact of education. Our resource allocation tools use data analytics to help schools and universities optimize the distribution of financial, human, and physical resources. By assessing class sizes, faculty utilization, and material needs, we ensure that educational resources are allocated effectively to improve learning outcomes and operational efficiency.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={ResourceGraph}
      features={features}
    />
  );
};

export default RAllocation;
