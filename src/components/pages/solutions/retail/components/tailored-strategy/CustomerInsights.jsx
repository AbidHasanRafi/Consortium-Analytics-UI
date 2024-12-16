import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import CustomerGraph from "./CustomerGraph";

const CustomerInsights = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Behavioral Analytics",
      description:
        "Track and analyze customer behaviors, preferences, and purchasing patterns to personalize marketing strategies and optimize product offerings.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Customer Segmentation",
      description:
        "Segment customers based on demographics, buying habits, and preferences, enabling tailored messaging and promotional efforts.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Sentiment Analysis",
      description:
        "Analyze customer feedback, reviews, and social media interactions to gauge brand perception and enhance customer experience.",
    },
  ];

  return (
    <TempTwo
      sectionId="customer-insights"
      headingIcon={<HiOutlineMap />}
      headingText="Insights"
      title="Customer Insights"
      description={`Understanding your customers is key to staying competitive. We provide deep customer insights through data analytics, helping you identify behavior patterns, preferences, and purchasing trends. Our tools enable you to segment your audience effectively, personalize marketing campaigns, and improve customer satisfaction, ultimately driving higher sales and loyalty.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CustomerGraph}
      features={features}
    />
  );
};

export default CustomerInsights;
