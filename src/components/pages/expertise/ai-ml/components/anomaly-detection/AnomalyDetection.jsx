import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import { AnomalyGraph } from "./AnomalyGraph";

const AnomalyDetection = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Identify Irregular Patterns",
      description:
        "Use AI algorithms to detect anomalies and outliers in data, enabling early identification of potential issues such as fraud, operational disruptions, or system failures.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Risk Mitigation",
      description:
        "Prevent fraud and reduce risks by spotting unusual patterns that could indicate fraudulent activity, data breaches, or security threats.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Improve Operational Efficiency",
      description:
        "Enhance business operations by automatically flagging abnormal activities, allowing teams to focus on resolving issues before they escalate.",
    },
  ];

  return (
    <TempTwo
      sectionId="anomaly-detection"
      headingIcon={<HiOutlineMap />}
      headingText="Detection"
      title="Anomaly Detection"
      description={`Anomaly detection identifies unusual patterns or outliers in data that may indicate potential issues, fraud, or operational inefficiencies. Our team builds anomaly detection systems that can automatically flag irregularities across various business functions, such as transactions, inventory levels, or user activity. By detecting anomalies early, businesses can take corrective actions, mitigate risks, and ensure smooth operations.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={AnomalyGraph}
      features={features}
    />
  );
};

export default AnomalyDetection;
