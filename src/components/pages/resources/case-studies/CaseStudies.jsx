import React from "react";
import CaseHeader from "./components/case-header/CaseHeader";
import CaseHero from "./components/case-hero/CaseHero";
import CaseCards from "./components/case-cards/CaseCards";

const CaseStudies = () => {
  return (
    <div className="min-h-screen pb-10 bg-white">
      <CaseHeader />
      <CaseHero />
      <CaseCards />
    </div>
  );
};

export default CaseStudies;
