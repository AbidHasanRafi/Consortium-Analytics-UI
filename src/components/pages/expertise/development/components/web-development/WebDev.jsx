import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import WebDevGraph from "./WebDevGraph";

const WebDev = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Responsive Design",
      description:
        "Create websites that adapt to different devices and screen sizes, providing users with a smooth browsing experience across desktops, tablets, and mobile devices.",
    },
    {
      icon: <MdInsights />,
      title: "SEO-Optimized Sites",
      description:
        "Develop websites with search engine optimization (SEO) best practices in mind to enhance visibility, driving more organic traffic and improving search rankings.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Custom Features and Integrations",
      description:
        "Build web applications with custom functionalities that suit your business needs, integrating with other systems or third-party services for seamless operations.",
    },
  ];

  return (
    <TempOne
      sectionId="web-development"
      headingIcon={<MdTrendingUp />}
      headingText="Web Development"
      title="Web Development"
      description={`Web development services focus on creating responsive, intuitive, and secure websites that offer seamless user experiences. We develop both front-end and back-end solutions using the latest technologies to ensure your website performs optimally across devices. From e-commerce platforms to corporate websites, our web development team ensures that your online presence is functional, engaging, and aligned with your business objectives.`}
      linkText="Discover More"
      linkHref="/blogs"
      chartComponent={WebDevGraph}
      features={features}
    />
  );
};

export default WebDev;
