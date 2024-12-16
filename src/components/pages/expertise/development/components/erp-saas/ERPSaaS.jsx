import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import ERPSaaSGraph from "./ERPSaaSGraph";

const ERPSaaS = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Streamlined Business Operations",
      description:
        "Implement enterprise resource planning (ERP) and software-as-a-service (SaaS) solutions that centralize and automate key business functions, improving operational efficiency.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Cloud-Based Flexibility",
      description:
        "Offer cloud-based ERP and SaaS solutions that provide flexibility, accessibility, and scalability, enabling businesses to manage operations from anywhere.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Real-Time Collaboration",
      description:
        "Develop platforms that enhance real-time collaboration among teams, departments, or locations, ensuring seamless workflows and data sharing.",
    },
  ];

  return (
    <TempTwo
      sectionId="erp-saas"
      headingIcon={<HiOutlineMap />}
      headingText="Solutions"
      title="ERP and SaaS Solutions"
      description={`ERP (Enterprise Resource Planning) and SaaS (Software as a Service) solutions help businesses streamline processes, improve efficiency, and gain better control over resources. We specialize in building custom ERP systems and SaaS applications that address your unique operational needs. Our solutions integrate various business functions like accounting, HR, inventory, and sales into a single platform, enhancing collaboration and providing real-time insights.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={ERPSaaSGraph}
      features={features}
    />
  );
};

export default ERPSaaS;
