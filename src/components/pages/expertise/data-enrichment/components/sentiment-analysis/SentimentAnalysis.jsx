import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import SentimentGraph from "./SentimentGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const SentimentAnalysis = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Understand Customer Perceptions",
      description:
        "Use sentiment analysis to interpret customer opinions and feedback from social media, reviews, and surveys, helping businesses gauge public sentiment toward products or services.",
    },
    {
      icon: <MdInsights />,
      title: "Real-Time Insights",
      description:
        "Monitor and analyze real-time sentiment trends to quickly respond to changes in customer satisfaction, addressing concerns and capitalizing on positive feedback.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Data-Driven Marketing",
      description:
        "Leverage sentiment analysis to inform marketing strategies, content creation, and product development by understanding how customers feel and what they value most.",
    },
  ];

  return (
    <TempOne
      sectionId="sentiment-analysis"
      headingIcon={<MdTrendingUp />}
      headingText="Analysis"
      title="Sentiment Analysis"
      description={`Sentiment analysis uses natural language processing (NLP) to analyze and interpret the emotions or opinions expressed in text data. Whether it’s feedback from customers, social media posts, or product reviews, our team applies sentiment analysis techniques to help you gauge public sentiment, customer satisfaction, and market perceptions. This valuable tool helps businesses understand how their customers feel, allowing them to make adjustments to products, services, or marketing strategies accordingly.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={SentimentGraph}
      features={features}
    />
  );
};

export default SentimentAnalysis;
