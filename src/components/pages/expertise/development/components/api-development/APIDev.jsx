import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import APIDevGraph from "./APIDevGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const APIDev = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Integration of Systems",
      description:
        "Develop application programming interfaces (APIs) that enable smooth integration between different software systems, ensuring seamless communication and data exchange.",
    },
    {
      icon: <MdInsights />,
      title: "Enhance Functionality",
      description:
        "Create APIs that allow third-party applications to interact with your system, expanding the functionality of your platform and enabling new features.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Secure Data Exchange",
      description:
        "Ensure that your APIs are secure, offering robust authentication and encryption mechanisms to protect data during transmission between systems and services.",
    },
  ];

  return (
    <TempOne
      sectionId="api-development"
      headingIcon={<MdTrendingUp />}
      headingText="API Development"
      title="API Development"
      description={`API (Application Programming Interface) development enables seamless integration between different systems, allowing for data exchange and automation. Our team develops secure and scalable APIs that connect your existing platforms, third-party services, and mobile applications. By providing custom API solutions, we ensure that your systems work together efficiently, improving overall functionality and expanding the capabilities of your digital ecosystem.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={APIDevGraph}
      features={features}
    />
  );
};

export default APIDev;
