import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { CDRGraph } from "./CDRGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const DashboardReport = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Tailored Insights",
      description:
        "Design dashboards and reports customized to meet the unique needs of your business, providing key information in an easily digestible format.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Real-Time Visualization",
      description:
        "Enable real-time monitoring of key metrics and operational data, allowing businesses to track performance and make quick adjustments.",
    },
    {
      icon: <HiOutlineMap />,
      title: "User-Focused Design",
      description:
        "Develop dashboards and reports that cater to different roles within the organization, ensuring that every team member has access to the most relevant data for their needs.",
    },
  ];

  return (
    <TempTwo
      sectionId="custom-dashboards"
      headingIcon={<HiOutlineMap />}
      headingText="Dashboards and Reports"
      title="Custom Dashboards and Reports"
      description={`Custom dashboards and reports are essential for providing tailored insights that match your unique business needs. Our team designs interactive, easy-to-read dashboards and detailed reports that focus on the key metrics that matter most to your business. Whether for internal teams or executives, our custom solutions allow you to track performance, visualize trends, and report on progress with precision and clarity.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={CDRGraph}
      features={features}
    />
  );
};

export default DashboardReport;
