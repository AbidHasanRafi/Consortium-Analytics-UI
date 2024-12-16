import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import { DLGraph } from "./DLGraph";

const DeepLearning = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Advanced Pattern Recognition",
      description:
        "Utilize deep learning models to analyze complex datasets, such as images, audio, and video, enabling the system to learn intricate patterns and features.",
    },
    {
      icon: <MdInsights />,
      title: "Automation of Complex Tasks",
      description:
        "Automate tasks that traditionally required human expertise, such as image recognition, voice recognition, and decision-making processes, improving operational efficiency.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Enhanced Predictions",
      description:
        "Leverage deep learning to make more accurate predictions and classifications, especially in areas such as natural language processing, autonomous systems, and medical diagnostics.",
    },
  ];

  return (
    <TempOne
      sectionId="deep-learning"
      headingIcon={<MdTrendingUp />}
      headingText="Deep Learning"
      title="Deep Learning"
      description={`Deep learning, a subset of machine learning, uses neural networks to model complex patterns in data. We use deep learning techniques to solve problems involving large datasets, unstructured data (like images, audio, and text), and highly complex decision-making processes. By leveraging deep learning, businesses can enhance their capabilities in areas such as image recognition, speech processing, and advanced forecasting.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={DLGraph}
      features={features}
    />
  );
};

export default DeepLearning;
