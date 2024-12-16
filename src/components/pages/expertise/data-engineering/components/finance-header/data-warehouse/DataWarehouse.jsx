import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import DWGraph from "./DWGraph";
import TempTwo from "../../../../../../templates/temp-02/TempTwo";

const DataWarehouse = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Centralized Data Repository",
      description:
        "Develop and manage a centralized data warehouse to store large volumes of structured and unstructured data, ensuring easy access and management.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Optimized Query Performance",
      description:
        "Build efficient data warehouses that allow for fast querying and data retrieval, enhancing decision-making and reporting capabilities.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Scalable Storage Solutions",
      description:
        "Implement scalable data warehousing solutions to accommodate growing data volumes, ensuring that data storage needs are met as your business expands.",
    },
  ];

  return (
    <TempTwo
      sectionId="data-warehouse"
      headingIcon={<HiOutlineMap />}
      headingText="Warehouse"
      title="Data Warehouse"
      description={`Data warehousing involves the storage and management of large volumes of data in a centralized repository. Our team helps design and build data warehouses that efficiently store your data in an organized manner, making it easily accessible for analysis and reporting. We ensure that your data warehouse is optimized for performance and scalability, enabling faster query processing and improved data-driven insights.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={DWGraph}
      features={features}
    />
  );
};

export default DataWarehouse;
