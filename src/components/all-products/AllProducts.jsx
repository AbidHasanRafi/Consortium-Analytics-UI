import React from "react";
import Slider from "./Slider";
import {
  MdOutlineAnalytics,
  MdOutlineAttachMoney,
  MdOutlineHealthAndSafety,
  MdOutlineLocationCity,
  MdOutlineLocalShipping,
} from "react-icons/md";

const cards = [
  {
    title: "Retail",
    description:
      "Transform retail with data-driven insights to enhance customer experience and drive sales.",
    link: "https://example.com/retail",
    icon: <MdOutlineAnalytics />,
  },
  {
    title: "Finance",
    description:
      "Leverage analytics to make data-backed financial decisions and optimize investments.",
    link: "https://example.com/finance",
    icon: <MdOutlineAttachMoney />,
  },
  {
    title: "Healthcare",
    description:
      "Empower healthcare providers with insights that improve patient outcomes and efficiency.",
    link: "https://example.com/healthcare",
    icon: <MdOutlineHealthAndSafety />,
  },
  {
    title: "Cities and Government",
    description:
      "Use analytics to build smarter cities and improve public services for citizens.",
    link: "https://example.com/cities-government",
    icon: <MdOutlineLocationCity />,
  },
  {
    title: "Transport & Logistics",
    description:
      "Optimize logistics and transportation with data insights for streamlined operations.",
    link: "https://example.com/transport-logistics",
    icon: <MdOutlineLocalShipping />,
  },
];

function AllProducts() {
  return (
    <div className="w-full bg-gray-900 py-16 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24 mt-10 lg:mt-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold font-mont text-white mb-4 py-5">
          Available Solutions
        </h2>
      </div>
      <Slider cards={cards} />
    </div>
  );
}

export default AllProducts;
