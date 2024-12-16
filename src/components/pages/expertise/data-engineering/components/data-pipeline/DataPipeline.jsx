import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import DPGraph from "./DPGraph";

const DataPipeline = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Automated Data Flow",
      description:
        "Design and implement data pipelines that automatically extract, transform, and load (ETL) data from various sources, ensuring seamless data movement.",
    },
    {
      icon: <MdInsights />,
      title: "Real-Time Data Processing",
      description:
        "Build real-time data pipelines to process and deliver fresh data, enabling timely and data-driven decision-making across the organization.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Scalable Solutions",
      description:
        "Develop scalable pipelines that grow with your business needs, ensuring that data flows efficiently as data volume and complexity increase.",
    },
  ];

  return (
    <TempOne
      sectionId="data-pipeline"
      headingIcon={<MdTrendingUp />}
      headingText="Development"
      title="Data Pipeline Development"
      description={`Data pipeline development is the process of creating a series of automated steps for collecting, processing, and moving data from various sources to its destination. Our team builds custom data pipelines that efficiently transport data, ensuring it is accurately transformed, cleaned, and loaded into your systems. With optimized data pipelines, we help you streamline your data workflow, enabling faster decision-making and reducing operational bottlenecks.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={DPGraph}
      features={features}
    />
  );
};

export default DataPipeline;
