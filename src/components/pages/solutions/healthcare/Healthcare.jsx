import React from "react";
import HealthHeader from "./components/health-header/HealthHeader";
import FacilityPlanning from "./components/facility-planning/FacilityPlanning";
import PatientAnalytics from "./components/patient-analytics/PatientAnalytics";
import ResourceAllocate from "./components/resource-allocation/ResourceAllocate";
import QualityMonitor from "./components/quality-monitoring/QualityMonitor";
import HContents from "./components/related-contents/HContents";
import ContactForm from "../../../contact-form/ContactForm";
import OutcomeOptimize from "./components/outcome-optimize/OutcomeOptimize";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const RealEstate = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <HealthHeader />
      <LogoGrid />
      <FacilityPlanning />
      <PatientAnalytics />
      <ResourceAllocate />
      <QualityMonitor />
      <OutcomeOptimize />
      <AllProducts />
      <HContents />
      <ContactForm />
    </div>
  );
};

export default RealEstate;
