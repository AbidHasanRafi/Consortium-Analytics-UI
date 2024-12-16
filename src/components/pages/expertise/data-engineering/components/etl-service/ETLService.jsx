import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import ETLGraph from "./ETLGraph";

const ETLService = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Data Transformation",
      description:
        "Extract, clean, and transform data from multiple sources to standardize and prepare it for analysis, improving data consistency and usability.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Efficient Data Loading",
      description:
        "Automate the loading of transformed data into storage systems or data warehouses, ensuring that your datasets are readily accessible for reporting and analysis.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Streamlined Data Processing",
      description:
        "Implement ETL processes that optimize the flow of data, reducing manual work and increasing the speed and efficiency of data operations.",
    },
  ];

  return (
    <TempTwo
      sectionId="etl-service"
      headingIcon={<HiOutlineMap />}
      headingText="ETL"
      title="ETL Services"
      description={`ETL (Extract, Transform, Load) services are key for extracting data from disparate sources, transforming it into a usable format, and loading it into storage systems for analysis. Our team develops comprehensive ETL processes to ensure that your data is properly extracted, cleaned, and prepared for reporting and analytics. By automating and optimizing these processes, we help you reduce manual effort, improve data quality, and ensure that you’re working with accurate and timely data.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={ETLGraph}
      features={features}
    />
  );
};

export default ETLService;
