import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import THeader from "./components/transport-header/THeader";
import RouteOptimize from "./components/route-optimization/RouteOptimize";
import DemandForcast from "./components/demand-forcast/DemandForcast";
import FManage from "./components/fleet-management/FManage";
import CostReduction from "./components/cost-reduction/CostReduction";
import TContents from "./components/related-contents/TContents";
import EfficiencyTrack from "./components/efficiency-track/EfficiencyTrack";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Transport = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <THeader />
      <LogoGrid />
      <RouteOptimize />
      <DemandForcast />
      <FManage />
      <CostReduction />
      <EfficiencyTrack />
      <AllProducts />
      <TContents />
      <ContactForm />
    </div>
  );
};

export default Transport;
