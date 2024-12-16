import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import CityHeader from "./components/city-header/CityHeader";
import IMapping from "./components/infrastructure-mapping/IMapping";
import ResourceOptimize from "./components/resource-optimization/ResourceOptimize";
import PInsights from "./components/policy-insights/PInsights";
import CommunityEngage from "./components/community-engage/CommunityEngage";
import CContents from "./components/related-contents/CContents";
import SGoal from "./components/sustainability-goal/SGoal";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Retail = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <CityHeader />
      <LogoGrid />
      <IMapping />
      <ResourceOptimize />
      <PInsights />
      <CommunityEngage />
      <SGoal />
      <AllProducts />
      <CContents />
      <ContactForm />
    </div>
  );
};

export default Retail;
