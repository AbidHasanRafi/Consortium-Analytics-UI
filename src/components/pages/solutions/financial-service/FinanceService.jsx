import React from "react";
import FsHeader from "./components/finance-header/FsHeader";
import FinanceMetrics from "./components/finance-metrics/FinanceMetrics";
import OptimizeProfit from "./components/optimize-profit/OptimizeProfit";
import MaxEfficiency from "./components/max-efficiency/MaxEfficiency";
import FinanceData from "./components/finance-header/finance-data/FinanceData";
import FContents from "./components/related-contents/FContents";
import ContactForm from "../../../contact-form/ContactForm";

const FinanceService = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <FsHeader />
      <FinanceMetrics />
      <OptimizeProfit />
      <MaxEfficiency />
      <FinanceData />
      <FContents />
      <ContactForm />
    </div>
  );
};

export default FinanceService;
