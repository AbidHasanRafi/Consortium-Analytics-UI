import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import DEnchHeader from "./components/data-ench-header/DEnchHeader";
import DataIntegration from "./components/data-integration/DataIntegration";
import DataCleansing from "./components/data-cleansing/DataCleansing";
import Contextualization from "./components/context/Contextualization";
import DataFusion from "./components/data-fusion/DataFusion";
import EContents from "./components/related-contents/EContents";
import SentimentAnalysis from "./components/sentiment-analysis/SentimentAnalysis";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const DataEnch = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <DEnchHeader />
      <LogoGrid />
      <DataIntegration />
      <DataCleansing />
      <Contextualization />
      <DataFusion />
      <SentimentAnalysis />
      <AllProducts />
      <EContents />
      <ContactForm />
    </div>
  );
};

export default DataEnch;
