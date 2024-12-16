import React from "react";
import BIHeader from "./components/bi-header/BIHeader";
import KPITrack from "./components/kpi-tracking/KPITrack";
import TrendAnalysis from "./components/trend-analysis/TrendAnalysis";
import DecisionMaking from "./components/decision-making/DecisionMaking";
import DashboardReport from "./components/dashboard-reports/DashboardReport";
import HContents from "./components/related-contents/HContents";
import ContactForm from "../../../contact-form/ContactForm";
import PerformanceMonitor from "./components/performance-monitor/PerformanceMonitor";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const BIntelligence = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <BIHeader />
      <LogoGrid />
      <KPITrack />
      <TrendAnalysis />
      <DecisionMaking />
      <DashboardReport />
      <PerformanceMonitor />
      <AllProducts />
      <HContents />
      <ContactForm />
    </div>
  );
};

export default BIntelligence;
