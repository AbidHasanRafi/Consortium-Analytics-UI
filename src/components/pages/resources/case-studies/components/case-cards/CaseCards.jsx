import React, { useState } from "react";
import {
  FaPython,
  FaChartPie,
  FaMobileAlt,
  FaLaptopCode,
  FaGlobe,
  FaIndustry,
} from "react-icons/fa";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import img1 from "../../../../../../assets/case-studies/1.png";
import img2 from "../../../../../../assets/case-studies/2.png";
import img3 from "../../../../../../assets/case-studies/3.png";
import img4 from "../../../../../../assets/case-studies/4.png";
import img5 from "../../../../../../assets/case-studies/5.png";
import img6 from "../../../../../../assets/case-studies/6.png";
import Card from "./Card";

const CaseCards = () => {
  const cardData = [
    {
      id: 1,
      image: img1,
      title:
        "The Revaluation of .com Domains and Its Impact on the Digital Landscape",
      description:
        "The dot-com domain has long been considered the gold standard of the internet.",
      category: "Development",
      link: "/rev-in-dot-com",
    },
    {
      id: 2,
      image: img2,
      title:
        "The Evolution and Impact of Artificial Intelligence (AI) on Global Markets",
      description:
        "Artificial Intelligence (AI) has evolved significantly over the past few decades, revolutionizing industries, economies, and societies.",
      category: "Artificial Intelligence",
      link: "/evolution-and-impact",
    },
    {
      id: 3,
      image: img3,
      title:
        "The Garments Industry and Its Transformational Role in Bangladesh’s Economy",
      description:
        "The independence of Bangladesh in 1971 marked the beginning of a new chapter for a nation devastated by war and struggling with poverty, famine, and infrastructural collapse.",
      category: "Garments & Textiles",
      link: "/garments-industry",
    },
    {
      id: 4,
      image: img4,
      title: "The Impact of Spreadsheets on Business and the Economy",
      description:
        "Spreadsheets have become one of the most critical tools in the modern business landscape, transforming how organizations process data, make decisions, and drive growth.",
      category: "Business Tools",
      link: "/impact-of-spreadsheet",
    },
    {
      id: 5,
      image: img5,
      title:
        "The Impact of Business Intelligence (BI) Tools on Business and the Economy",
      description:
        "In today’s data-driven world, Business Intelligence (BI) tools have emerged as one of the most significant advancements for organizations aiming to harness the power of data.",
      category: "Data Analytics",
      link: "/impact-of-bus-intelligence",
    },
    {
      id: 6,
      image: img6,
      title: "The Evolution and Impact of Computer Operating Systems (OS)",
      description:
        "The computer operating system (OS) has been the cornerstone of technological evolution since the inception of modern computing.",
      category: "Artificial Intelligence",
      link: "/impact-of-os",
    },
    {
      id: 7,
      image: img6,
      title: "Data Analysis for Business Success",
      description:
        "In the digital era, data has become one of the most valuable assets for businesses. The ability to collect, analyze, and interpret data effectively can significantly enhance decision-making.",
      category: "Artificial Intelligence",
      link: "/data-analysis-for-business-success",
    },
    {
      id: 8,
      image: img6,
      title: "The Power of Google Analytics for Business",
      description:
        "In the modern digital landscape, data is the lifeblood of successful businesses. Google Analytics, one of the most powerful and widely used analytics tools.",
      category: "Artificial Intelligence",
      link: "/power-of-google-analytics",
    },
    {
      id: 9,
      image: img6,
      title: "Data Engineering: The Backbone of Modern Data Ecosystems",
      description:
        "In today’s data-driven world, businesses are increasingly relying on vast volumes of data to make informed decisions, optimize operations, and gain a competitive edge.",
      category: "Artificial Intelligence",
      link: "/backbone-of-data-ecosystems",
    },
    {
      id: 10,
      image: img6,
      title: "Data Preprocessing – The Key to Business Success",
      description:
        "In today’s data-driven world, businesses have access to vast amounts of data from various sources—customer interactions, transaction histories, website behavior, social media, IoT devices, and more.",
      category: "Artificial Intelligence",
      link: "/key-to-business-success",
    },
    {
      id: 11,
      image: img6,
      title: "The Importance of Business Data and How It Drives Growth",
      description:
        "In today’s fast-paced digital economy, data has become one of the most valuable assets a business can possess. From small startups to global enterprises, businesses are now leveraging data to make informed decisions.",
      category: "Artificial Intelligence",
      link: "/importance-of-business-data",
    },
    {
      id: 12,
      image: img6,
      title: "The Importance of Data Collection for Businesses",
      description:
        "In the modern business landscape, data is considered the most valuable asset. Companies that collect, analyze, and utilize data effectively are positioned to outperform competitors, make informed decisions, and optimize their operations.",
      category: "Artificial Intelligence",
      link: "/importance-of-data-collection",
    },
    {
      id: 13,
      image: img6,
      title:
        "Data Enrichment: Unlocking the Full Potential of Your Business Data",
      description:
        "In today’s competitive and fast-paced business environment, having access to high-quality data is a significant differentiator. However, raw data often lacks depth and context, which limits its usability.",
      category: "Artificial Intelligence",
      link: "/unlocking-full-potential",
    },
    {
      id: 14,
      image: img6,
      title:
        "The Evolution and Impact of Mobile Operating Systems - Android and iOS",
      description:
        "Mobile operating systems (OS) have revolutionized the way we communicate, work, and engage with technology. Among the myriad of systems, Android and iOS dominate the global market, shaping technological innovations and economic trends.",
      category: "Artificial Intelligence",
      link: "/evolution-of-mobile-os",
    },
    {
      id: 15,
      image: img6,
      title: "The Power of Having a Website for a Business or Company",
      description:
        "In the modern digital era, having a professional website is not just a luxury—it's an essential tool for business growth and branding. Whether a small startup or an established corporation, businesses across the globe.",
      category: "Artificial Intelligence",
      link: "/power-of-website",
    },
    {
      id: 16,
      image: img6,
      title: "Facebook Marketing for Business",
      description:
        "Facebook has more than 2.9 billion monthly active users globally, making it the largest social media platform. This immense scale allows businesses to reach a vast, diverse audience.",
      category: "Artificial Intelligence",
      link: "/facebook-marketing",
    },
    {
      id: 17,
      image: img6,
      title: "LinkedIn Marketing for Business",
      description:
        "LinkedIn is often regarded as the premier platform for business professionals, with over 900 million users worldwide. Unlike other social media platforms, LinkedIn is specifically designed for networking.",
      category: "Artificial Intelligence",
      link: "/linkedin-marketing",
    },
    {
      id: 18,
      image: img6,
      title: "Social Media Marketing for Businesses",
      description:
        "In the current digital era, social media marketing has emerged as one of the most effective tools for business growth and branding. With billions of people active on social platforms, businesses can harness social media.",
      category: "Artificial Intelligence",
      link: "/social-media-marketing",
    },
    {
      id: 19,
      image: img6,
      title: "The Power of Social Media Marketing for Business",
      description:
        "In today's digital-first world, social media marketing (SMM) has become an essential component of any business strategy. With billions of active users on platforms like Facebook, Instagram, Twitter, LinkedIn, and TikTok.",
      category: "Artificial Intelligence",
      link: "/the-power-of-social-media-marketing",
    },
    {
      id: 20,
      image: img6,
      title: "Digital Marketing: Transforming the Modern Business Landscape",
      description:
        "In the past few decades, digital marketing has emerged as a cornerstone of modern business strategy. Its evolution, fueled by technological advancements and shifting consumer behaviorg.",
      category: "Artificial Intelligence",
      link: "/transforming-business-landscape",
    },
    {
      id: 21,
      image: img6,
      title: "Marketing: The Engine of Business Success",
      description:
        "Marketing has been the cornerstone of successful businesses for centuries. From simple word-of-mouth strategies in ancient marketplaces to data-driven digital campaigns in today's interconnected world.",
      category: "Artificial Intelligence",
      link: "/the-engine-of-business-success",
    },
  ];

  const [filteredCategory, setFilteredCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Adjust the number of cards per page

  const categoryIcons = {
    All: null,
    Development: <FaGlobe />,
    "Artificial Intelligence": <FaMobileAlt />,
    "Garments & Textiles": <FaIndustry />,
    "Business Tools": <FaChartPie />,
    "Data Analytics": <TbDeviceDesktopAnalytics />,
    "Technology Evolution": <FaLaptopCode />,
  };

  const categories = ["All", ...new Set(cardData.map((card) => card.category))];

  const filteredCards =
    filteredCategory === "All"
      ? cardData
      : cardData.filter((card) => card.category === filteredCategory);

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-3 py-10 max-w-screen-xl space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilteredCategory(category)}
            className={`flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-normal transition-all shadow-lg transform ${
              filteredCategory === category
                ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white scale-105 border-b-4 border-blue-400"
                : "bg-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-blue-200 hover:to-blue-300 hover:scale-105"
            }`}
          >
            {categoryIcons[category]}
            {category}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            category={card.category}
            link={card.link}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseCards;
