import React from "react";
import REstateHeader from "./components/restate-header/REstateHeader";
import InvestInsights from "./components/investment-insights/InvestInsights";
import SSelection from "./components/strategic-selection/SSelection";
import ReMapping from "./components/regional-mapping/ReMapping";
import PriceStrategy from "./components/pricing-strategy/PriceStrategy";
import RsContents from "./components/related-contents/RsContents";
import ContactForm from "../../../contact-form/ContactForm";
import MTrends from "./components/market-trends/MTrends";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const RealEstate = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <REstateHeader />
      <LogoGrid />
      <InvestInsights />
      <SSelection />
      <ReMapping />
      <PriceStrategy />
      <MTrends />
      <AllProducts />
      <RsContents />
      <ContactForm />
    </div>
  );
};

export default RealEstate;
