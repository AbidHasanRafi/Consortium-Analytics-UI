import React from "react";
import REstateHeader from "./components/restate-header/REstateHeader";
import InvestInsights from "./components/investment-insights/InvestInsights";
import SSelection from "./components/strategic-selection/SSelection";
import ReMapping from "./components/regional-mapping/ReMapping";
import PriceStrategy from "./components/pricing-strategy/PriceStrategy";
import RsContents from "./components/related-contents/RsContents";
import ContactForm from "../../../contact-form/ContactForm";
import REstateCases from "./components/restate-cases/REstateCases";
import MTrends from "./components/market-trends/MTrends";

const RealEstate = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <REstateHeader />
      <InvestInsights />
      {/* <REstateCases /> */}
      <SSelection />
      <ReMapping />
      <PriceStrategy />
      <MTrends />
      <RsContents />
      <ContactForm />
    </div>
  );
};

export default RealEstate;
