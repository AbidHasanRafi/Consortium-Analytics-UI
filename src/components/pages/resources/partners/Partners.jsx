import React from "react";
import PartnersHeader from "./components/partners-header/AnalyticsHeader";
import LogoGrid from "./components/logo-grid/LogoGrid";
import PartnersCards from "./components/partner-cards/PartnersCards";
import InnovativePartner from "./components/innovative-partner/InnovativePartner";
import StrategyPartners from "./components/strategy-partners/StrategyPartners";
import DataPartner from "./components/data-partner/DataPartner";
import PartnerComparison from "./components/partner-compare/PartnerComparison";
import TestimonialsCarousel from "./components/testimonial/TestimonialsCarousel";
import ContactForm from "../../../contact-form/ContactForm";
import AllResources from "../../../all-resources/AllResources";

const Partners = () => {
  return (
    <div className="font-mont bg-[#F2F6F9] pb-10">
      <PartnersHeader />
      <LogoGrid />
      <PartnersCards />
      <InnovativePartner />
      <StrategyPartners />
      <DataPartner />
      <PartnerComparison />
      <TestimonialsCarousel />
      <ContactForm />
      <AllResources />
    </div>
  );
};

export default Partners;
