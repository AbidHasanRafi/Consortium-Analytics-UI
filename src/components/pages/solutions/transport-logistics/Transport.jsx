import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import THeader from "./components/transport-header/THeader";
import LogAnalytics from "./components/logistics-analytics/LogAnalytics";
import RouteOptimize from "./components/route-optimize/RouteOptimize";
import EnhancedSc from "./components/supply-chain/EnhancedSc";
import MonitorForcast from "./components/monitor-forcast/MonitorForcast";
import TContents from "./components/related-contents/TContents";

const Transport = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <THeader />
      <LogAnalytics />
      <RouteOptimize />
      <EnhancedSc />
      <MonitorForcast />
      <TContents />
      <ContactForm />
    </div>
  );
};

export default Transport;
