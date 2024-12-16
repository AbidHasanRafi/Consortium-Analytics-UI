import React from "react";
import AiMlHeader from "./components/ai-ml-header/AiMlHeader";
import PredModel from "./components/predictive-modeling/PredModel";
import NLP from "./components/nlp/NLP";
import RecommendEngine from "./components/recommend-engine/RecommendEngine";
import AnomalyDetection from "./components/anomaly-detection/AnomalyDetection";
import RContents from "./components/related-contents/RContents";
import ContactForm from "../../../contact-form/ContactForm";
import LogoGrid from "./components/logo-grid/LogoGrid";
import AllProducts from "../../../all-products/AllProducts";
import DeepLearning from "./components/deep-learning/DeepLearning";

const AIML = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <AiMlHeader />
      <LogoGrid />
      <PredModel />
      <NLP />
      <RecommendEngine />
      <AnomalyDetection />
      <DeepLearning />
      <AllProducts />
      <RContents />
      <ContactForm />
    </div>
  );
};

export default AIML;
