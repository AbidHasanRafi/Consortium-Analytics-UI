import React from "react";
import HealthHeader from "./components/health-header/HealthHeader";
import HealthAnalytics from "./components/health-analytics/HealthAnalytics";
import SiteSelection from "./components/site-selection/SiteSelection";
import TManagement from "./components/territory-management/TManagement";
import ScManagement from "./components/supply-chain/ScManagement";
import HContents from "./components/related-contents/HContents";
import ContactForm from "../../../contact-form/ContactForm";

const RealEstate = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <HealthHeader />
      <HealthAnalytics />
      <SiteSelection />
      <TManagement />
      <ScManagement />
      <HContents />
      <ContactForm />
    </div>
  );
};

export default RealEstate;
