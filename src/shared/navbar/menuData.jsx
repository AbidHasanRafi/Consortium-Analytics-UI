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
  FaNodeJs,
} from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
import { GiMedallist, GiAtom } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { BiLogoDjango } from "react-icons/bi";

export const menuData = [
  { name: "Home", link: "/" },
  {
    name: "Expertise",
    link: "#expertise",
    submenu: [
      { name: "Visualization", link: "/visualize", icon: <FaChartPie /> },
      {
        name: "Analytics",
        link: "/analytics",
        icon: <TbDeviceDesktopAnalytics />,
      },
      { name: "Data Enrichment", link: "/data-enrichment", icon: <FaPython /> },
      {
        name: "Data Engineering",
        link: "/data-engineering",
        icon: <FaLaptopCode />,
      },
      {
        name: "Business Intelligence",
        link: "/business-intelligence",
        icon: <FaIndustry />,
      },
      { name: "Market Analysis", link: "/market-analysis", icon: <FaGlobe /> },
      {
        name: "AI and Machine Learning",
        link: "/ai-and-ml",
        icon: <FaMobileAlt />,
      },
      { name: "Development", link: "/development", icon: <FaLaptopCode /> },
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
      { name: "Healthcare", link: "/healthcare", icon: <FaStethoscope /> },
      {
        name: "Transport & Logistics",
        link: "/transport-logistics",
        icon: <FaTruckMoving />,
      },
      {
        name: "Cities and Governance",
        link: "/city-governance",
        icon: <RiGovernmentFill />,
      },
      { name: "Sports", link: "/sports", icon: <GiMedallist /> },
      { name: "Education", link: "/education", icon: <FaUniversity /> },
    ],
  },
  {
    name: "Resources",
    link: "#resources",
    submenu: [
      { name: "Blog", link: "/blogs", icon: <FaBlog /> },
      { name: "Case Studies", link: "/case-studies", icon: <FaBriefcase /> },
      { name: "Partners", link: "/partners", icon: <FaHandshake /> },
      // { name: "Tutorials", link: "/tutorials", icon: <FaLaptopCode /> },
    ],
    consortium: [
      {
        name: "Google Cloud",
        icon: <FaGoogle />,
        link: "https://cloud.google.com",
      },
      { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com" },
      {
        name: "Azure",
        icon: <FaMicrosoft />,
        link: "https://azure.microsoft.com",
      },
      {
        name: "Power BI",
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
        name: "SAS",
        icon: <TbDeviceDesktopAnalytics />,
        link: "https://www.sas.com",
      },
      { name: "Python", icon: <FaPython />, link: "https://www.python.org" },
      { name: "R", icon: <FaRProject />, link: "https://www.r-project.org" },
      {
        name: "Django",
        icon: <BiLogoDjango />,
        link: "https://www.djangoproject.com",
      },
      {
        name: "React",
        icon: <GiAtom />,
        link: "https://reactjs.org",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        link: "https://nodejs.org",
      },
    ],
  },
  { name: "Careers", link: "/careers" },
];
