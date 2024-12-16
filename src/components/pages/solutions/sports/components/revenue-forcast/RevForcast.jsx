import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import RevGraph from "./RevGraph";

const RevForcast = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Ticket Sales Forecasting",
      description:
        "Use historical data and predictive models to forecast ticket sales for upcoming games or events, ensuring effective pricing strategies.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Merchandise Revenue Prediction",
      description:
        "Analyze purchasing patterns to forecast merchandise sales, enabling better stock management and promotional planning.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Sponsorship and Partnerships Analytics",
      description:
        "Evaluate potential sponsorships and partnerships based on fan demographics and event attendance to predict revenue growth from these streams.",
    },
  ];

  return (
    <TempTwo
      sectionId="revenue-forecasting"
      headingIcon={<HiOutlineMap />}
      headingText="Forecasting"
      title="Revenue Forecasting"
      description={`Accurate revenue forecasting is essential for budgeting and strategic planning in sports organizations. Using historical data, market trends, and predictive analytics, we help sports teams and event organizers forecast ticket sales, merchandise, sponsorships, and other revenue streams. With these insights, you can make data-driven decisions that maximize profitability and ensure long-term financial success.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={RevGraph}
      features={features}
    />
  );
};

export default RevForcast;
