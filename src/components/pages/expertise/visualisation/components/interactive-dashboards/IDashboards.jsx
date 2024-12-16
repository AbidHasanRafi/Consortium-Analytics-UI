import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import InfrastructureGraph from "./InfrastructureGraph";

const IDashboards = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Dynamic Data Representation",
      description:
        "Create interactive dashboards that allow users to explore data through customizable views, enhancing decision-making by providing real-time visual insights.",
    },
    {
      icon: <MdInsights />,
      title: "User-Centric Design",
      description:
        "Design dashboards tailored to specific user needs, ensuring that decision-makers can easily access the most relevant information and insights.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Real-Time Data Interaction",
      description:
        " Enable users to interact with live data, adjusting parameters or filters to uncover trends and make informed decisions instantly.",
    },
  ];

  return (
    <TempOne
      sectionId="interactive-dashboards"
      headingIcon={<MdTrendingUp />}
      headingText="Dashboards"
      title="Interactive Dashboards"
      description={`Interactive dashboards are essential for businesses looking to monitor and explore their data in real-time. Our team develops fully customizable dashboards that allow users to drill down into key metrics, apply filters, and visualize critical performance indicators with ease. With these interactive tools, your team can track business performance, adjust strategies on the fly, and engage with data in a way that makes it easy to understand and act upon.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={InfrastructureGraph}
      features={features}
    />
  );
};

export default IDashboards;
