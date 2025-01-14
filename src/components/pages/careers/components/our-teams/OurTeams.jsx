import React from "react";
import { MdTrendingUp, MdOutlineBusinessCenter } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { BsDatabaseCheck } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { RiTeamFill, RiComputerLine } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import OurTeamsGraph from "./OurTeamsGraph";

const OurTeams = () => {
  // Placeholder variables (replace with actual data as needed)
  const sectionId = "our-teams";
  const headingText = "Team";
  const title = "Our Teams";
  const description =
    "At Consortium Analytics, we bring together expertise in Data Intelligence, Marketing, Business Intelligence, Development, AI & Machine Learning, and Data Enrichment. Each team works with great effort and synergy to deliver innovative, data-driven solutions. We collaborate closely to ensure our services are tailored to the unique needs of our clients. Together, we strive to create impactful outcomes that drive growth and success.";
  const linkHref = "/blogs";
  const linkText = "Explore More";

  const features = [
    {
      icon: <BsDatabaseCheck />,
      title: "Data Intelligence",
      description:
        "Our team specializes in creating insightful visualizations and analytics using tools like Power BI and Tableau, enabling businesses to make data-driven decisions.",
    },
    {
      icon: <MdOutlineBusinessCenter />,
      title: "Marketing",
      description:
        "We craft data-backed marketing strategies to help businesses effectively reach their target audience and achieve measurable growth.",
    },
    {
      icon: <IoMdBusiness />,
      title: "Business Intelligence",
      description:
        "We provide comprehensive BI solutions, turning raw data into actionable insights to optimize operations and strategy.",
    },
    {
      icon: <RiComputerLine />,
      title: "Development",
      description:
        "Our development team builds robust websites, custom software, mobile applications, and ERP systems tailored to client needs.",
    },
    {
      icon: <LuBrainCircuit />,
      title: "AI & Machine Learning",
      description:
        "We harness the power of AI and machine learning to deliver intelligent, automated solutions that solve complex challenges.",
    },
    {
      icon: <MdTrendingUp />,
      title: "Data Enrichment",
      description:
        "Our expertise in data enrichment ensures that businesses work with accurate, detailed, and meaningful data for better decision-making.",
    },
  ];

  return (
    <section
      id={sectionId}
      className="w-full mx-auto py-12 sm:py-16 lg:py-24 px-6 sm:px-8 lg:px-24"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start justify-between">
        <div className="flex-1 space-y-6 pt-4">
          <div className="flex items-center gap-1 text-sky-600">
            <p className="text-3xl sm:text-4xl">
              <RiTeamFill />
            </p>
            <p className="text-xs font-semibold">{headingText}</p>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-900 text-lg sm:text-xl">{description}</p>
          <div className="mt-8 sm:mt-12 text-start">
            <div className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding">
              <a
                href={linkHref}
                className="flex items-center text-blue-600 text-sm font-semibold py-2 gap-2 bg-clip-text hover:border-b hover:border-b-blue-600 transition duration-300 transform"
              >
                <p className="text-xs sm:text-sm">{linkText}</p>
                <p className="text-base font-semibold">
                  <HiArrowLongRight />
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <OurTeamsGraph />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-inter mt-8 sm:mt-12">
        {features.map((feature, index) => (
          <section key={index} className="bg-white p-6 rounded-lg">
            <p className="text-4xl mb-3 text-blue-600">{feature.icon}</p>
            <h3 className="text-gray-900 text-lg font-medium mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-900 text-sm">{feature.description}</p>
          </section>
        ))}
      </div>
    </section>
  );
};

export default OurTeams;
