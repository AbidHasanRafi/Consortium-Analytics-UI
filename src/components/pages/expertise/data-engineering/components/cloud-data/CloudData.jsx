import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import CloudGraph from "./CloudGraph";

const CloudData = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Cloud-Based Solutions",
      description:
        "Leverage cloud infrastructure to manage data storage, processing, and analysis, offering scalability, flexibility, and cost efficiency.",
    },
    {
      icon: <MdInsights />,
      title: "Data Security and Compliance",
      description:
        "Ensure data is securely stored and managed in the cloud while adhering to regulatory compliance standards, offering peace of mind for sensitive information.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Seamless Cloud Integration",
      description:
        "Facilitate integration with cloud platforms (AWS, Azure, Google Cloud) to create an environment where data can be efficiently managed and analyzed with minimal overhead.",
    },
  ];

  return (
    <TempOne
      sectionId="cloud-data-management"
      headingIcon={<MdTrendingUp />}
      headingText="Management"
      title="Cloud Data Management"
      description={`Cloud data management refers to the use of cloud platforms to store, manage, and analyze data in a secure, scalable environment. Our team specializes in cloud-based data management solutions that enable you to take advantage of the flexibility, cost-effectiveness, and scalability of the cloud. Whether you're migrating your existing data infrastructure to the cloud or building a cloud-first solution, we ensure that your data is secure, accessible, and well-organized to support your business objectives.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={CloudGraph}
      features={features}
    />
  );
};

export default CloudData;
