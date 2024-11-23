import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import EHeader from "./components/education-header/EHeader";
import PerformInsights from "./components/performance-insights/PerformInsights";
import ReAllocation from "./components/resource-allocation/ReAllocation";
import RAnalytics from "./components/re-analytics/RAnalytics";
import EffectiveEval from "./components/effective-evaluation/EffectiveEval";
import EContents from "./components/related-contents/EContents";

const Education = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <EHeader />
      <PerformInsights />
      <ReAllocation />
      <RAnalytics />
      <EffectiveEval />
      <EContents />
      <ContactForm />
    </div>
  );
};

export default Education;
