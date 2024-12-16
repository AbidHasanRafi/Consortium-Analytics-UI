import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import SoftwareGraph from "./SoftwareGraph";

const CustomSoftware = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Tailored Solutions",
      description:
        "Develop bespoke software solutions that meet the unique needs and objectives of your business, ensuring they align with your specific processes and workflows.",
    },
    {
      icon: <MdInsights />,
      title: "Scalable Applications",
      description:
        "Build software that grows with your business, offering scalability to handle increasing users, data, or transactions as your company expands.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Enhanced User Experience",
      description:
        "Focus on creating intuitive and user-friendly interfaces that enhance the overall experience for end-users and improve engagement.",
    },
  ];

  return (
    <TempOne
      sectionId="custom-software"
      headingIcon={<MdTrendingUp />}
      headingText="Software Development"
      title="Custom Software Development"
      description={`Custom software development involves building tailored applications that are designed specifically for your business needs. We specialize in creating scalable and secure software solutions that align with your unique requirements. From enterprise-level applications to specialized tools, our custom development services help you streamline operations, enhance user experience, and improve business performance.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={SoftwareGraph}
      features={features}
    />
  );
};

export default CustomSoftware;
