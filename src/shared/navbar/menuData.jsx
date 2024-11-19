import {
  FaGoogle,
  FaAws,
  FaMicrosoft,
  FaPython,
  FaChartPie,
  FaRProject,
  FaMobileAlt,
  FaLaptopCode,
  FaGlobe,
  FaIndustry,
  FaStethoscope,
  FaTruckMoving,
  FaUniversity,
  FaShoppingCart,
  FaBlog,
  FaBriefcase,
  FaHandshake,
} from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { GiMedallist } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiCsharp } from "react-icons/si";

export const menuData = [
  { name: "Home", link: "/" },
  {
    name: "Expertise",
    link: "#expertise",
    submenu: [
      { name: "Visualization", link: "#visualization", icon: <FaChartPie /> },
      {
        name: "Analytics",
        link: "#analytics",
        icon: <TbDeviceDesktopAnalytics />,
      },
      { name: "Data Enrichment", link: "#data-enrichment", icon: <FaPython /> },
      {
        name: "Data Engineering",
        link: "#data-engineering",
        icon: <FaLaptopCode />,
      },
      {
        name: "Business Intelligence",
        link: "#business-intelligence",
        icon: <FaIndustry />,
      },
      { name: "Market Analysis", link: "#market-analysis", icon: <FaGlobe /> },
      {
        name: "AI and Machine Learning",
        link: "#ai-ml",
        icon: <FaMobileAlt />,
      },
      { name: "Development", link: "#development", icon: <FaLaptopCode /> },
    ],
  },
  {
    name: "Solutions",
    link: "#products",
    submenu: [
      {
        name: "Real Estate",
        link: "/real-estate",
        icon: <MdRealEstateAgent />,
      },
      { name: "Retail", link: "/retail", icon: <FaShoppingCart /> },
      {
        name: "Financial Services",
        link: "/finance-service",
        icon: <FaBriefcase />,
      },
      { name: "Healthcare", link: "#", icon: <FaStethoscope /> },
      { name: "Transport & Logistics", link: "#", icon: <FaTruckMoving /> },
      { name: "Cities and Governance", link: "#", icon: <RiGovernmentFill /> },
      { name: "Sports", link: "#", icon: <GiMedallist /> },
      { name: "Education", link: "#", icon: <FaUniversity /> },
    ],
  },
  {
    name: "Resources",
    link: "#resources",
    submenu: [
      { name: "Blog", link: "#", icon: <FaBlog /> },
      { name: "Case Studies", link: "#", icon: <FaBriefcase /> },
      { name: "Partners", link: "#", icon: <FaHandshake /> },
      { name: "Tutorials", link: "#", icon: <FaLaptopCode /> },
    ],
    consortium: [
      {
        name: "Google Cloud",
        icon: <FaGoogle />,
        link: "https://cloud.google.com",
      },
      {
        name: "Azure",
        icon: <FaMicrosoft />,
        link: "https://azure.microsoft.com",
      },
      { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com" },
      {
        name: "Microsoft Power BI",
        icon: <FaMicrosoft />,
        link: "https://powerbi.microsoft.com",
      },
      {
        name: "Tableau",
        icon: <FaChartPie />,
        link: "https://www.tableau.com",
      },
      { name: "Snowflake", icon: <FaAws />, link: "https://www.snowflake.com" },
      {
        name: "Google Analytics",
        icon: <FaGoogle />,
        link: "https://analytics.google.com",
      },
      {
        name: "SAS",
        icon: <TbDeviceDesktopAnalytics />,
        link: "https://www.sas.com",
      },
      { name: "Python", icon: <FaPython />, link: "https://www.python.org" },
      { name: "R", icon: <FaRProject />, link: "https://www.r-project.org" },
      {
        name: "C#",
        icon: <SiCsharp />,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
    ],
  },
  { name: "Careers", link: "/careers" },
];
