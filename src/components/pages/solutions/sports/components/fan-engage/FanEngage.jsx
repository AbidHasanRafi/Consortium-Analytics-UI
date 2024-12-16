import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import FanGraph from "./FanGraph";

const FanEngage = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Personalized Fan Experiences",
      description:
        " Utilize data to deliver tailored content, offers, and interactions to fans, enhancing their engagement and loyalty.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Social Media Analysis",
      description:
        "Leverage sentiment analysis and engagement metrics from social media platforms to gauge fan sentiment and improve engagement strategies.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Event Interaction Tools",
      description:
        "Create interactive apps and platforms for fans to engage with live events, enhancing their experience and creating opportunities for real-time participation.",
    },
  ];

  return (
    <TempTwo
      sectionId="fan-engage"
      headingIcon={<HiOutlineMap />}
      headingText="Engagement"
      title="Fan Engagement"
      description={`Building and maintaining strong fan relationships is vital for sports organizations. Our fan engagement solutions analyze fan behavior, preferences, and interactions, helping you create personalized experiences that foster loyalty. Whether through targeted marketing, digital platforms, or event activations, we provide insights that boost fan satisfaction, engagement, and retention.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={FanGraph}
      features={features}
    />
  );
};

export default FanEngage;
