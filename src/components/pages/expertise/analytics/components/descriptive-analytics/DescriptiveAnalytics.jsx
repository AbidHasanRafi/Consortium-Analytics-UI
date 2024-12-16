import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import DescriptiveGraph from "./DescriptiveGraph";

const DescriptiveAnalytics = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Data Summarization",
      description:
        "Analyze historical data to summarize trends and patterns, helping businesses understand past performance and behaviors.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Reporting Insights",
      description:
        "Generate clear, visual reports and summaries to provide stakeholders with actionable insights into key metrics and performance indicators.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Trend Identification",
      description:
        "Identify key patterns and trends from past data, providing businesses with a clear picture of what has happened and areas for improvement.",
    },
  ];

  return (
    <TempTwo
      sectionId="descriptive-analytics"
      headingIcon={<HiOutlineMap />}
      headingText="Analytics"
      title="Descriptive Analytics"
      description={`Descriptive analytics focuses on analyzing historical data to understand what has happened in the past and why. By identifying key patterns and trends in your data, our team helps you gain a clearer understanding of past performance. With detailed reports and visualizations, descriptive analytics provides essential insights that inform decision-making and help optimize future strategies.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={DescriptiveGraph}
      features={features}
    />
  );
};

export default DescriptiveAnalytics;
