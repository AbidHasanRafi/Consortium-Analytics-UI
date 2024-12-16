import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import CommunityGraph from "./CommunityGraph";

const CommunityEngage = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Public Feedback Systems",
      description:
        "Implement platforms that allow citizens to provide real-time feedback, helping to shape policies and development projects based on community input.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Community Sentiment Analysis",
      description:
        " Use sentiment analysis tools to gauge public opinion on local government initiatives, ensuring that policies are aligned with the community's needs.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Collaborative Decision-Making",
      description:
        "Facilitate collaboration between governments, residents, and stakeholders to co-create solutions that benefit the local community and enhance civic participation.",
    },
  ];

  return (
    <TempTwo
      sectionId="community-engage"
      headingIcon={<HiOutlineMap />}
      headingText="Engagement"
      title="Community Engagement"
      description={`Engaging the community in governance is essential for building trust and ensuring that policies reflect the needs of citizens. Our community engagement tools enable cities to collect feedback through surveys, social media, and public consultations, transforming this data into actionable insights. By leveraging these insights, governments can foster collaboration, address citizen concerns, and create policies that are more responsive to the community’s needs.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CommunityGraph}
      features={features}
    />
  );
};

export default CommunityEngage;
