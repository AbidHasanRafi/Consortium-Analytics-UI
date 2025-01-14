import React from "react";
import CareersHeader from "./components/careers-header/CareersHeader";
import LogoGrid from "./components/logo-grid/LogoGrid";
import OurTeams from "./components/our-teams/OurTeams";

const Careers = () => {
  return (
    <div className="font-mont bg-[#F2F6F9] pb-10">
      <CareersHeader />
      <LogoGrid />
      <OurTeams />
    </div>
  );
};

export default Careers;
