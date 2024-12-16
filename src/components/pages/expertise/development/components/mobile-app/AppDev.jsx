import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import AppDevGraph from "./AppDevGraph";

const AppDev = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Cross-Platform Solutions",
      description:
        "Develop mobile applications that work seamlessly across multiple platforms, ensuring a consistent experience for users on both iOS and Android devices.",
    },
    {
      icon: <HiOutlineMap />,
      title: "User-Centric Design",
      description:
        "Build mobile apps with a focus on user experience (UX), ensuring fast, responsive, and intuitive interfaces that meet customer expectations.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Performance Optimization",
      description:
        "Ensure that mobile apps perform efficiently, offering quick load times, minimal resource usage, and smooth functionality for a superior user experience.",
    },
  ];

  return (
    <TempTwo
      sectionId="mobile-app"
      headingIcon={<HiOutlineMap />}
      headingText="App Development"
      title="Mobile App Development"
      description={`Mobile app development is crucial for businesses that want to engage users on mobile devices. Our team builds user-friendly and feature-rich mobile apps for both Android and iOS platforms. Whether it's for customer-facing applications, internal tools, or product solutions, we ensure seamless performance, scalability, and a superior user experience to keep your audience connected and engaged.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={AppDevGraph}
      features={features}
    />
  );
};

export default AppDev;
