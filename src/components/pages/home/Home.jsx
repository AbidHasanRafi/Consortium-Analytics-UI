import React from "react";
import Header from "../../header/Header";
import InsightOverview from "../../insights/InsightOverview";
import RMapOverview from "../../r-map/RMapOverview";
import AllProducts from "../../all-products/AllProducts";
import AllResources from "../../all-resources/AllResources";
import OurLocation from "../../our-location/OurLocation";
import Carousel from "../../logo-carousel/Carousel";
import RetailAnalysis from "../../retail/RetailAnalysis";
import DataEngineering from "../../data-engineering/DataEngineering";
import ContactForm from "../../contact-form/ContactForm";
import TechNodes from "../../tech-nodes/TechNodes";

const Home = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <Header />
      <Carousel />
      <TechNodes />
      <InsightOverview />
      {/* <RMapOverview /> */}
      {/* <RetailAnalysis /> */}
      {/* <DataEngineering /> */}
      {/* <AllProducts /> */}
      {/* <AllResources /> */}
      {/* <ContactForm /> */}
      {/* <OurLocation /> */}
    </div>
  );
};

export default Home;
