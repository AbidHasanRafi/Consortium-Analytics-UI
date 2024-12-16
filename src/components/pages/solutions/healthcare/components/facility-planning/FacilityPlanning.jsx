import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import FacilityGraph from "./FacilityGraph";

const FacilityPlanning = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Location Optimization",
      description:
        "Use geospatial data and analytics to select optimal locations for healthcare facilities based on population density, accessibility, and healthcare needs.",
    },
    {
      icon: <MdInsights />,
      title: "Capacity Planning",
      description:
        "Analyze patient demand and facility utilization rates to optimize space, staffing, and resources, ensuring maximum efficiency and service availability.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Infrastructure Assessment",
      description:
        "Leverage data to assess the condition and performance of healthcare facilities, guiding investment in upgrades or new facility developments.",
    },
  ];

  return (
    <TempOne
      sectionId="facility-planning"
      headingIcon={<MdTrendingUp />}
      headingText="Planning"
      title="Facility Planning"
      description={`Effective facility planning ensures that healthcare facilities meet both current and future demand. Our facility planning tools use advanced analytics and spatial data to assess factors like patient volume, staffing needs, and infrastructure utilization. By predicting future growth and identifying areas for improvement, we help healthcare organizations optimize facility layouts and ensure resources are allocated efficiently, providing the best care in the most effective environment.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={FacilityGraph}
      features={features}
    />
  );
};

export default FacilityPlanning;
