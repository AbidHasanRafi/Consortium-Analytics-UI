import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import GeoGraph from "./GeoGraph";

const GeoMap = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Location-Based Insights",
      description:
        "Visualize geographic data to uncover patterns, trends, and opportunities based on location, enhancing decision-making in industries like real estate, retail, and logistics.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Interactive Map Exploration",
      description:
        "Allow users to explore spatial data interactively, zooming in and out on maps to view data at different levels of granularity for deeper insights.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Advanced Spatial Analytics",
      description:
        "Integrate geospatial data with other datasets to analyze and visualize correlations between location and key business metrics, such as sales performance or market demand.",
    },
  ];

  return (
    <TempTwo
      sectionId="geospatial-mapping"
      headingIcon={<HiOutlineMap />}
      headingText="Mapping"
      title="Geospatial Mapping"
      description={`Geospatial mapping is a powerful tool for visualizing data with a geographic component, allowing businesses to make location-based decisions. Our team prepares geospatial mapping solutions that integrate spatial data with business intelligence, providing a deeper understanding of market trends, customer behaviors, and site performance. By mapping your data geographically, you gain insights into key factors like regional performance, growth opportunities, and site selection, empowering smarter decisions and strategic planning.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={GeoGraph}
      features={features}
    />
  );
};

export default GeoMap;
