import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import HeatMapGraph from "./HeatMapGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const DataHeatmap = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Visualize Density and Intensity",
      description:
        "Use heatmaps to represent data density or intensity in a visual format, highlighting areas of high or low activity, such as customer interactions, sales trends, or operational issues.",
    },
    {
      icon: <MdInsights />,
      title: "Enhanced Decision Making",
      description:
        "Leverage heatmaps to identify key trends and anomalies, allowing businesses to prioritize resources, optimize processes, and make strategic decisions.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Location-Based Analysis",
      description:
        "Use geospatial heatmaps to visualize geographic patterns, helping businesses understand regional demand, customer behavior, or resource allocation based on location.",
    },
  ];

  return (
    <TempOne
      sectionId="data-heatmap"
      headingIcon={<MdTrendingUp />}
      headingText="Heatmaps"
      title="Data Heatmaps"
      description={`Data heatmaps are an effective way to visualize intensity and density across different regions or variables. Our team creates heatmaps that help businesses quickly identify high- and low-performance areas, uncover patterns, and prioritize focus areas. Whether it’s customer activity, sales performance, or market demand, heatmaps provide a clear, color-coded view of your data, allowing for more informed and strategic decision-making.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={HeatMapGraph}
      features={features}
    />
  );
};

export default DataHeatmap;
