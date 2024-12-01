import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { SiteGraph } from "./SiteGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const SSelection = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Geospatial Analysis",
      description:
        "Utilize geospatial data to identify prime locations for investment, factoring in market trends, accessibility, and customer demographics.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Economic Indicators",
      description:
        "Analyze local economic conditions, infrastructure developments, and population growth to identify areas with the greatest investment potential.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Site Performance Visualization",
      description:
        "Create visual dashboards and maps that allow real estate professionals to track and compare site performance across different regions.",
    },
  ];

  return (
    <TempTwo
      sectionId="site-selection"
      headingIcon={<HiOutlineMap />}
      headingText="Expertise"
      title="Site Selection"
      description={`Choosing the right location is critical for any real estate venture. Our data analytics and visualization services provide key insights into site performance by evaluating spatial data, economic trends, and market conditions. Whether you're looking for the next big commercial development or the ideal residential area, our data-driven approach ensures you select sites with the highest potential for success.`}
      linkText="Discover More"
      linkHref="#"
      mapComponent={SiteGraph}
      features={features}
    />
  );
};

export default SSelection;
