import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import DPGraph from "./DPGraph";

const DataProfile = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Data Quality Assessment",
      description:
        "Evaluate the quality, completeness, and consistency of data by profiling datasets, helping businesses identify issues such as missing or inaccurate data.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Data Cleansing Support",
      description:
        "Use data profiling to highlight areas that need cleansing or correction, ensuring that businesses work with accurate, reliable data.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Insightful Data Analysis",
      description:
        "Gain a deeper understanding of data structures and characteristics, helping to optimize data management and usage across the organization.",
    },
  ];

  return (
    <TempTwo
      sectionId="data-profiling"
      headingIcon={<HiOutlineMap />}
      headingText="Profiling Data"
      title="Data Profiling"
      description={`Data profiling involves analyzing data to ensure its quality, consistency, and completeness. Our team uses data profiling techniques to assess the integrity of your data, identifying issues such as missing values, duplicates, and inaccuracies. By providing insights into the quality of your data, we help ensure that your decisions are based on accurate and reliable information, ultimately improving the efficiency of your data processes.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={DPGraph}
      features={features}
    />
  );
};

export default DataProfile;
