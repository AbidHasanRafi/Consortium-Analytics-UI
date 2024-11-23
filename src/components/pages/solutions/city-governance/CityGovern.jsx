import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import CityHeader from "./components/city-header/CityHeader";
import UManagement from "./components/urban-management/UManagement";
import IPlanning from "./components/infrastructure-planning/IPlanning";
import PTrack from "./components/performance-track/PTrack";
import EngageCitizen from "./components/engage-citizen/EngageCitizen";
import CContents from "./components/related-contents/CContents";

const Retail = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <CityHeader />
      <UManagement />
      <IPlanning />
      <PTrack />
      <EngageCitizen />
      <CContents />
      <ContactForm />
    </div>
  );
};

export default Retail;
