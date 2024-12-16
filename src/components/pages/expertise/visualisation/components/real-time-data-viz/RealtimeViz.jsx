import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import RealTimeGraph from "./RealTimeGraph";

const CommunityEngage = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Live Data Feed",
      description:
        "Visualize data as it streams in, enabling businesses to respond to events as they happen, ensuring swift actions and informed decisions.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Up-to-the-Minute Insights",
      description:
        "Provide real-time access to key metrics, helping teams monitor performance, track sales, or assess operational efficiency in real time.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Interactive Real-Time Dashboards",
      description:
        "Enable users to interact with real-time data through dynamic dashboards, enhancing situational awareness and operational agility.",
    },
  ];

  return (
    <TempTwo
      sectionId="real-time"
      headingIcon={<HiOutlineMap />}
      headingText="Real-Time"
      title="Real-Time Data Visualization"
      description={`Real-time data visualization ensures businesses are always working with the most up-to-date information. Our team develops live data visualization solutions that continuously refresh to reflect the latest data, enabling businesses to monitor ongoing changes and react quickly to emerging trends. Whether it's tracking inventory, sales, or website traffic, real-time data visualization keeps your decision-making agile and informed, ensuring that you stay ahead in dynamic, fast-paced environments.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={RealTimeGraph}
      features={features}
    />
  );
};

export default CommunityEngage;
