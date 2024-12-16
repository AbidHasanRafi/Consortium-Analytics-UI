import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import NLPGraph from "./NLPGraph";

const NLP = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Text Analysis",
      description:
        "Use NLP to analyze and understand large volumes of unstructured text data, extracting meaningful insights from customer reviews, social media, emails, and other communication channels.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Sentiment Analysis",
      description:
        "Identify customer sentiment and opinions to gauge brand perception, helping businesses tailor their marketing and customer service strategies.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Automated Text Interaction",
      description:
        "Enhance user experience with automated systems that can understand and respond to human language, such as chatbots and virtual assistants.",
    },
  ];

  return (
    <TempTwo
      sectionId="customer-insights"
      headingIcon={<HiOutlineMap />}
      headingText="Insights"
      title="Natural Language Processing (NLP)"
      description={`Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language. Our team applies NLP to analyze unstructured text data, such as customer feedback, social media, and reviews, to extract valuable insights. NLP helps businesses improve customer sentiment analysis, automate customer support, and enhance content personalization by processing and understanding human language at scale.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={NLPGraph}
      features={features}
    />
  );
};

export default NLP;
