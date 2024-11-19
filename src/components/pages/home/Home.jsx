import React from "react";
import Header from "../../header/Header";
import InsightOverview from "../../insights/InsightOverview";
import AllProducts from "../../all-products/AllProducts";
import AllResources from "../../all-resources/AllResources";
import OurLocation from "../../our-location/OurLocation";
import Carousel from "../../logo-carousel/Carousel";
import DataEngineering from "../../data-engineering/DataEngineering";
import ContactForm from "../../contact-form/ContactForm";
import TechNodes from "../../tech-nodes/TechNodes";
import VisualOverview from "../../visualize/VisualOverview";
import MarketAnalysis from "../../market-analysis/MarketAnalysis";

const Home = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <Header />
      <Carousel />
      <TechNodes />
      <InsightOverview />
      <VisualOverview />
      <MarketAnalysis />
      <DataEngineering />
      <AllProducts />
      <AllResources />
      <ContactForm />
      {/* <OurLocation /> */}
    </div>
  );
};

export default Home;
