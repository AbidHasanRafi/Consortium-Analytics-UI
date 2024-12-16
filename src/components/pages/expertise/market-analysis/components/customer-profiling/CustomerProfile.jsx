import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import ProfilingGraph from "./ProfilingGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const CustomerProfile = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Understand Customer Behavior",
      description:
        "Collect and analyze customer data to create detailed profiles that help businesses understand buying patterns, preferences, and needs.",
    },
    {
      icon: <MdInsights />,
      title: "Personalized Marketing",
      description:
        "Use customer profiles to develop targeted marketing campaigns that resonate with specific customer groups, driving engagement and loyalty.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Improved Product Development",
      description:
        "Tailor product offerings based on customer profiles to ensure that products and services align with customer demands and expectations.",
    },
  ];

  return (
    <TempOne
      sectionId="customer-profiling"
      headingIcon={<MdTrendingUp />}
      headingText="Profiling"
      title="Customer Profiling"
      description={`Customer profiling involves creating detailed profiles of your customers based on data-driven insights into their behaviors, preferences, and demographics. Our team uses advanced analytics to build accurate customer profiles, helping you better understand your audience and tailor marketing efforts to meet their specific needs. By improving customer targeting and engagement, customer profiling leads to higher conversion rates and enhanced customer loyalty.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={ProfilingGraph}
      features={features}
    />
  );
};

export default CustomerProfile;
