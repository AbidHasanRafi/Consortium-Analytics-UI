import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import EHeader from "./components/education-header/EHeader";
import StudentInsights from "./components/student-insights/StudentInsights";
import CPlanning from "./components/curriculum-planning/CPlanning";
import RAllocation from "./components/resource-allocation/RAllocation";
import PTrack from "./components/performance-track/PTrack";
import EContents from "./components/related-contents/EContents";
import LOutcome from "./components/learning-outcome/LOutcome";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Education = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <EHeader />
      <LogoGrid />
      <StudentInsights />
      <CPlanning />
      <RAllocation />
      <PTrack />
      <LOutcome />
      <AllProducts />
      <EContents />
      <ContactForm />
    </div>
  );
};

export default Education;
