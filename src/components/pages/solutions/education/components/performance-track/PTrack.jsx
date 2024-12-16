import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import PGraph from "./PGraph";

const PTrack = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Real-Time Performance Dashboards",
      description:
        "Monitor student progress and performance through interactive dashboards, providing teachers and administrators with actionable insights.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Assessment Analytics",
      description:
        "Analyze student assessments to evaluate academic performance at both individual and cohort levels, identifying strengths and weaknesses.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Goal Setting and Tracking",
      description:
        "Help students and educators set performance goals and track progress towards achieving them, enhancing accountability and learning outcomes.",
    },
  ];

  return (
    <TempTwo
      sectionId="performance-track"
      headingIcon={<HiOutlineMap />}
      headingText="Performance"
      title="Performance Tracking"
      description={`Tracking and evaluating student performance is crucial for understanding academic progress. Our performance tracking tools monitor key metrics like grades, assessments, and participation to provide a comprehensive view of student progress. With real-time analytics, educators can identify learning gaps, adjust teaching methods, and provide timely support to help every student succeed.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={PGraph}
      features={features}
    />
  );
};

export default PTrack;
