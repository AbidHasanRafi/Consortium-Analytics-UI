import React from "react";
import Header from "../../header/Header";
import InsightOverview from "../../insights/InsightOverview";
import AllProducts from "../../all-products/AllProducts";
import AllResources from "../../all-resources/AllResources";
import Carousel from "../../logo-carousel/Carousel";
import DataEngineering from "../../data-engineering/DataEngineering";
import ContactForm from "../../contact-form/ContactForm";
import TechNodes from "../../tech-nodes/TechNodes";
import VisualOverview from "../../visualize/VisualOverview";
import MarketAnalysis from "../../market-analysis/MarketAnalysis";
import AIMLSolution from "../../ai-ml-solution/AIMLSolution";
import DevSolution from "../../dev-solution/DevSolution";

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
      <AIMLSolution />
      <DevSolution />
      <AllProducts />
      <AllResources />
      <ContactForm />
    </div>
  );
};

export default Home;
