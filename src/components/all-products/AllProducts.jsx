import React from "react";
import Slider from "./Slider";
import {
  FaStethoscope,
  FaTruckMoving,
  FaUniversity,
  FaShoppingCart,
  FaBriefcase,
} from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { GiMedallist } from "react-icons/gi";

const cards = [
  {
    title: "Real Estate",
    description:
      "Unlock the potential of real estate with data insights for better investments and management.",
    link: "/real-estate",
    icon: <MdRealEstateAgent />,
  },
  {
    title: "Retail",
    description:
      "Transform retail with data-driven insights to enhance customer experience and drive sales.",
    link: "/retail",
    icon: <FaShoppingCart />,
  },
  {
    title: "Financial Services",
    description:
      "Leverage analytics to make data-backed financial decisions and optimize investments.",
    link: "/finance-service",
    icon: <FaBriefcase />,
  },
  {
    title: "Healthcare",
    description:
      "Empower healthcare providers with insights that improve patient outcomes and efficiency.",
    link: "/healthcare",
    icon: <FaStethoscope />,
  },
  {
    title: "Cities and Governance",
    description:
      "Use analytics to build smarter cities and improve public services for citizens.",
    link: "/city-governance",
    icon: <RiGovernmentFill />,
  },
  {
    title: "Transport & Logistics",
    description:
      "Optimize logistics and transportation with data insights for streamlined operations.",
    link: "/transport-logistics",
    icon: <FaTruckMoving />,
  },
  {
    title: "Sports",
    description:
      "Revolutionize sports with performance analytics, talent identification, and audience engagement.",
    link: "/sports",
    icon: <GiMedallist />,
  },
  {
    title: "Education",
    description:
      "Empower education with tools and insights to enhance learning outcomes and accessibility.",
    link: "/education",
    icon: <FaUniversity />,
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
