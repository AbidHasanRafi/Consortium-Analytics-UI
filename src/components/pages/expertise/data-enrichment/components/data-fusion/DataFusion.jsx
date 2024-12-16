import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import DFGraph from "./DFGraph";

const DataFusion = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Comprehensive Insights",
      description:
        "Merge data from various sources—such as internal databases, external APIs, and real-time data streams—to create a unified and more complete dataset.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Holistic View",
      description:
        "Combine different data types (structured, unstructured, geospatial, etc.) to provide a comprehensive view of your business, allowing for more effective decision-making.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Advanced Analytics",
      description:
        "Use data fusion techniques to unlock complex insights by correlating disparate datasets, enhancing predictive models, and improving business intelligence capabilities.",
    },
  ];

  return (
    <TempTwo
      sectionId="data-fusion"
      headingIcon={<HiOutlineMap />}
      headingText="Fusion"
      title="Data Fusion"
      description={`Data fusion combines data from multiple sources, creating a unified dataset that provides a more complete and accurate picture. Our team specializes in merging different datasets whether from internal systems, external sources, or real-time feeds to create richer, more actionable insights. Data fusion ensures that you're working with the most comprehensive information available, improving your ability to make informed, strategic decisions.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={DFGraph}
      features={features}
    />
  );
};

export default DataFusion;
