import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import DIGraph from "./DIGraph";

const DataIntegration = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Enhance Decision-Making",
      description:
        "Integrate external datasets, such as market trends or demographic information, to enrich your internal data and provide a more comprehensive view of your business environment.",
    },
    {
      icon: <MdInsights />,
      title: "Data-Driven Insights",
      description:
        "Combine multiple data sources to uncover new insights, improve business strategies, and ensure better alignment with external factors like market conditions or customer preferences.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Seamless Connectivity",
      description:
        "Integrate data from various platforms, such as social media, third-party APIs, or industry databases, to ensure consistent and real-time access to valuable information for decision-making.",
    },
  ];

  return (
    <TempOne
      sectionId="external-data-integration"
      headingIcon={<MdTrendingUp />}
      headingText="Integration"
      title="External Data Integration"
      description={`External data integration involves incorporating third-party data into your existing systems to gain a broader perspective. Our team specializes in seamlessly integrating data from various sources such as public datasets, market reports, and social media, making it easier for you to enrich your analytics and optimize business operations. By combining internal and external data, you can uncover hidden insights that drive strategic growth and improve operational efficiency.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={DIGraph}
      features={features}
    />
  );
};

export default DataIntegration;
