import React from "react";
import RtHeader from "./components/retail-header/RtHeader";
import OptimizeSales from "./components/optimize-sales/OptimizeSales";
import TailoredStrategy from "./components/tailored-strategy/TailoredStrategy";
import CustomerDecision from "./components/customer-decision/CustomerDecision";
import StreamLog from "./components/streamline-logistics/StreamLog";
import RContents from "./components/related-contents/RContents";
import ContactForm from "../../../contact-form/ContactForm";

const Retail = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <RtHeader />
      <OptimizeSales />
      <TailoredStrategy />
      <CustomerDecision />
      <StreamLog />
      <RContents />
      <ContactForm />
    </div>
  );
};

export default Retail;
