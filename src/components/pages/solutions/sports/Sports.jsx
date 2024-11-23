import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import SHeader from "./components/sports-header/SHeader";
import PerformAnalytics from "./components/performance-analytics/PerformAnalytics";
import AudienceEngage from "./components/audience-engage/AudienceEngage";
import RevOptimize from "./components/revenue-optimize/RevOptimize";
import EInsights from "./components/event-insights/EInsights";
import SContents from "./components/related-contents/SContents";

const Sports = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <SHeader />
      <PerformAnalytics />
      <AudienceEngage />
      <RevOptimize />
      <EInsights />
      <SContents />
      <ContactForm />
    </div>
  );
};

export default Sports;
