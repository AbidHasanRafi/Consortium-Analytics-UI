import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import FraudGraph from "./FraudGraph";

const FraudDetect = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Anomaly Detection Algorithms",
      description:
        "Implement machine learning algorithms to detect unusual transactions or activities, helping to identify and prevent fraud in real-time.",
    },
    {
      icon: <MdInsights />,
      title: "Transaction Monitoring",
      description:
        "Continuously monitor transactions across multiple platforms to identify suspicious patterns and mitigate fraudulent activities.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Risk Scoring",
      description:
        "Develop risk scoring models to assess the likelihood of fraud, enabling more effective fraud prevention strategies and reducing false positives.",
    },
  ];

  return (
    <TempOne
      sectionId="fraud-detect"
      headingIcon={<MdTrendingUp />}
      headingText="Fraud"
      title="Fraud Detection"
      description={`Fraud prevention is critical for maintaining trust and protecting assets. Our fraud detection solutions combine machine learning algorithms and real-time analytics to identify suspicious activities, flagging potential fraud before it impacts your business. With proactive monitoring and automated alerts, we help you safeguard transactions, mitigate risk, and maintain regulatory compliance.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={FraudGraph}
      features={features}
    />
  );
};

export default FraudDetect;
