import React from "react";
import FsHeader from "./components/finance-header/FsHeader";
import RiskAnalytics from "./components/risk-analytics/RiskAnalytics";
import PortInsights from "./components/portfolio-insights/PortInsights";
import MarketForcast from "./components/market-forcast/MarketForcast";
import CustomerSegment from "./components/finance-header/customer-segmentation/CustomerSegment";
import FContents from "./components/related-contents/FContents";
import ContactForm from "../../../contact-form/ContactForm";
import FraudDetect from "./components/fraud-detection/FraudDetect";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const FinanceService = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <FsHeader />
      <LogoGrid />
      <RiskAnalytics />
      <PortInsights />
      <MarketForcast />
      <CustomerSegment />
      <FraudDetect />
      <AllProducts />
      <FContents />
      <ContactForm />
    </div>
  );
};

export default FinanceService;
