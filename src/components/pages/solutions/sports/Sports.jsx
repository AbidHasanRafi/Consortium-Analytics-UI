import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import SHeader from "./components/sports-header/SHeader";
import PerformAnalytics from "./components/performance-analytics/PerformAnalytics";
import FanEngage from "./components/fan-engage/FanEngage";
import VenueOptimize from "./components/venue-optimize/VenueOptimize";
import RevForcast from "./components/revenue-forcast/RevForcast";
import SContents from "./components/related-contents/SContents";
import TeamInsights from "./components/team-insights/TeamInsights";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Sports = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <SHeader />
      <LogoGrid />
      <PerformAnalytics />
      <FanEngage />
      <VenueOptimize />
      <RevForcast />
      <TeamInsights />
      <AllProducts />
      <SContents />
      <ContactForm />
    </div>
  );
};

export default Sports;
