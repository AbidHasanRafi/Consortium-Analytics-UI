import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import AnalyticsHeader from "./components/analytics-header/AnalyticsHeader";
import PredAnalytics from "./components/predictive-analytics/PredAnalytics";
import DescriptiveAnalytics from "./components/descriptive-analytics/DescriptiveAnalytics";
import RTAnalytics from "./components/real-time-analytics/RTAnalytics";
import DataProfile from "./components/data-profiling/DataProfile";
import TContents from "./components/related-contents/TContents";
import STTModel from "./components/statistical-modeling/STTModel";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Analytics = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <AnalyticsHeader />
      <LogoGrid />
      <PredAnalytics />
      <DescriptiveAnalytics />
      <RTAnalytics />
      <DataProfile />
      <STTModel />
      <AllProducts />
      <TContents />
      <ContactForm />
    </div>
  );
};

export default Analytics;
