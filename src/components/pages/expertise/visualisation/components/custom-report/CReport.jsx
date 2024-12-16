import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import ReportGraph from "./ReportGraph";

const CReport = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Tailored Reports",
      description:
        "Develop customized reports that meet the specific needs of stakeholders, providing a focused view of key performance indicators (KPIs) and other critical metrics.",
    },
    {
      icon: <MdInsights />,
      title: "Automated Report Generation",
      description:
        "Automate the creation of regular reports to save time, ensuring that up-to-date insights are always available without manual intervention.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "In-Depth Analysis",
      description:
        "Create reports that offer detailed analysis, visualizations, and data-driven insights, helping businesses make informed decisions based on comprehensive data evaluation.",
    },
  ];

  return (
    <TempOne
      sectionId="custom-report"
      headingIcon={<MdTrendingUp />}
      headingText="Reporting"
      title="Custom Reporting"
      description={`Custom reporting is vital for organizations looking to track performance and gain insights specific to their business needs. Our team creates tailored reports that highlight the most important metrics, trends, and data points relevant to your objectives. These reports are designed to be easily understandable and actionable, ensuring that decision-makers have the information they need at the right time to adjust strategies and make informed decisions.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={ReportGraph}
      features={features}
    />
  );
};

export default CReport;
