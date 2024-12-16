import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import KPIGraph from "./KPIGraph";

const KPITrack = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Measure Key Metrics",
      description:
        "Track essential Key Performance Indicators (KPIs) to evaluate business performance and ensure alignment with strategic goals.",
    },
    {
      icon: <MdInsights />,
      title: "Real-Time Insights",
      description:
        "Monitor KPIs in real-time to quickly identify areas of improvement and respond to changes in business conditions.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Data-Driven Decisions",
      description:
        "Leverage KPI tracking to make data-informed decisions, enabling teams to focus on critical metrics that impact business outcomes.",
    },
  ];

  return (
    <TempOne
      sectionId="kpi-track"
      headingIcon={<MdTrendingUp />}
      headingText="Tracking"
      title="KPI Tracking"
      description={`Tracking Key Performance Indicators (KPIs) is essential for measuring progress toward strategic goals. We help businesses define and monitor their KPIs using automated tracking systems that provide real-time visibility into critical metrics. Our solutions allow you to stay on top of your objectives, assess performance accurately, and adjust strategies as needed to achieve success.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={KPIGraph}
      features={features}
    />
  );
};

export default KPITrack;
