import React from "react";
import MktAnalysisHeader from "./components/market-header/MktAnalysisHeader";
import CompeteIntelligence from "./components/competitive-intelligence/CompeteIntelligence";
import MarketSegment from "./components/market-segment/MarketSegment";
import DemandForcast from "./components/demand-forcast/DemandForcast";
import SWOTAnalysis from "./components/swot-analysis/SWOTAnalysis";
import RsContents from "./components/related-contents/RsContents";
import ContactForm from "../../../contact-form/ContactForm";
import CustomerProfile from "./components/customer-profiling/CustomerProfile";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const MktAnalysis = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <MktAnalysisHeader />
      <LogoGrid />
      <CompeteIntelligence />
      <MarketSegment />
      <DemandForcast />
      <SWOTAnalysis />
      <CustomerProfile />
      <AllProducts />
      <RsContents />
      <ContactForm />
    </div>
  );
};

export default MktAnalysis;
