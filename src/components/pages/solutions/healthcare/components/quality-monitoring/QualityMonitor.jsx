import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { QualityGraph } from "./QualityGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const QualityMonitor = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Performance Tracking",
      description:
        "Continuously monitor and assess care quality through data analysis, identifying areas for improvement in clinical practices, patient safety, and satisfaction.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Clinical Outcome Evaluation",
      description:
        "Use real-time data to measure clinical outcomes and ensure care meets the highest standards, enhancing patient safety and treatment effectiveness.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Patient Feedback Integration",
      description:
        "Incorporate patient satisfaction data into care quality assessments to improve the patient experience and drive service improvements.",
    },
  ];

  return (
    <TempTwo
      sectionId="care-quality"
      headingIcon={<HiOutlineMap />}
      headingText="Monitoring"
      title="Care Quality Monitoring"
      description={`Monitoring care quality is vital for patient satisfaction and regulatory compliance. Our care quality monitoring solutions use data analytics to track and measure various quality indicators, such as patient satisfaction, treatment effectiveness, and adherence to best practices. By providing real-time insights into care performance, we help healthcare organizations identify areas for improvement and ensure that the highest standards of care are consistently met.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={QualityGraph}
      features={features}
    />
  );
};

export default QualityMonitor;
