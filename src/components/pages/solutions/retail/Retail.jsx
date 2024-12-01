import React from "react";
import RtHeader from "./components/retail-header/RtHeader";
import OptimizeSales from "./components/optimize-sales/OptimizeSales";
import CustomerInsights from "./components/tailored-strategy/CustomerInsights";
import MarketTrends from "./components/market-trends/MarketTrends";
import CEvaluate from "./components/compete-evaluate/CEvaluate";
import RContents from "./components/related-contents/RContents";
import ContactForm from "../../../contact-form/ContactForm";
import LogoGrid from "./components/logo-grid/LogoGrid";
import AllProducts from "../../../all-products/AllProducts";
import PForcast from "./components/profit-forcast/PForcast";

const Retail = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <RtHeader />
      <LogoGrid />
      <OptimizeSales />
      <CustomerInsights />
      <MarketTrends />
      <CEvaluate />
      <PForcast />
      <AllProducts />
      <RContents />
      <ContactForm />
    </div>
  );
};

export default Retail;
