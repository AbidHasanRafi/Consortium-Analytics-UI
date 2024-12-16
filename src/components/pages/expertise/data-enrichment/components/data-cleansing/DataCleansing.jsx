import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import CGraph from "./CGraph";

const DataCleansing = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Improved Data Quality",
      description:
        "Cleanse data by removing inaccuracies, duplicates, or incomplete entries, ensuring that the data used for analysis is accurate and reliable.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Consistency and Accuracy",
      description:
        "Standardize datasets to remove inconsistencies, enabling businesses to rely on clean data for improved decision-making and analysis.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Error Reduction",
      description:
        "Identify and correct errors or anomalies in your data, helping to improve the overall integrity of your datasets and reducing the potential for faulty conclusions.",
    },
  ];

  return (
    <TempTwo
      sectionId="data-cleansing"
      headingIcon={<HiOutlineMap />}
      headingText="Cleanse"
      title="Data Cleansing"
      description={`Data cleansing is the process of identifying and correcting inaccuracies, inconsistencies, and missing values in your datasets. Our team ensures that your data is accurate, complete, and ready for analysis by removing duplicates, standardizing formats, and addressing errors. Clean data ensures that your insights are reliable, empowering your organization to make data-driven decisions with confidence and avoid costly mistakes.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={CGraph}
      features={features}
    />
  );
};

export default DataCleansing;
