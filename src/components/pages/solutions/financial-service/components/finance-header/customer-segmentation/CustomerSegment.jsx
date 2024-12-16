import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import CustomerGraph from "./CustomerGraph";
import TempTwo from "../../../../../../templates/temp-02/TempTwo";

const CustomerSegment = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Behavioral Analysis",
      description:
        "Use data analytics to segment customers based on behavioral patterns, preferences, and financial activities, enabling personalized marketing and offerings.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Risk-Based Segmentation",
      description:
        "Classify customers into distinct risk categories, allowing for tailored financial products and services that match their risk profiles.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Lifetime Value Prediction",
      description:
        "Predict the lifetime value of customers using data-driven insights, helping businesses optimize customer acquisition and retention strategies.",
    },
  ];

  return (
    <TempTwo
      sectionId="customer-segmentation"
      headingIcon={<HiOutlineMap />}
      headingText="Segmentation"
      title="Customer Segmentation"
      description={`Personalizing financial products and services begins with understanding your customers. Our customer segmentation tools analyze transactional data, demographics, and behavior patterns to identify distinct customer groups. This enables you to tailor offerings, improve marketing efforts, and enhance client satisfaction, leading to stronger customer relationships and increased profitability.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CustomerGraph}
      features={features}
    />
  );
};

export default CustomerSegment;
