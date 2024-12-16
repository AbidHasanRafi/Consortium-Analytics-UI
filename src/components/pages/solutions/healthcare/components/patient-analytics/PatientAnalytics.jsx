import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { PatientGraph } from "./PatientGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const PatientAnalytics = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Patient Health Insights",
      description:
        "Analyze patient data to identify trends, health risks, and treatment patterns, helping healthcare providers offer personalized care and improve outcomes.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Predictive Health Models",
      description:
        "Use machine learning and AI to predict patient conditions, enabling early intervention and better management of chronic diseases.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Patient Behavior Analysis",
      description:
        "Segment patients based on behavior, treatment adherence, and risk factors, allowing healthcare providers to tailor interventions and improve patient engagement.",
    },
  ];

  return (
    <TempTwo
      sectionId="patient-analytics"
      headingIcon={<HiOutlineMap />}
      headingText="Analytics"
      title="Patient Analytics"
      description={`Understanding patient needs and behavior is crucial for improving care delivery. Our patient analytics services leverage data to provide insights into patient demographics, treatment histories, and health trends. By identifying patterns and predicting patient needs, we enable healthcare providers to personalize care plans, improve patient outcomes, and streamline the patient experience from admission to recovery.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={PatientGraph}
      features={features}
    />
  );
};

export default PatientAnalytics;
