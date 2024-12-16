import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import TempTwo from "../../../../../templates/temp-02/TempTwo";
import CGraph from "./CGraph";

const CPlanning = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Data-Driven Curriculum Design",
      description:
        "Utilize performance data and student feedback to design curricula that align with student needs, learning styles, and academic goals.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Gap Analysis",
      description:
        "Identify gaps in students’ knowledge and skills through data analysis, allowing for targeted curriculum adjustments to address these deficiencies.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Curriculum Effectiveness Assessment",
      description:
        "Continuously evaluate the effectiveness of curricula using student performance data, ensuring that teaching methods and materials meet learning objectives.",
    },
  ];

  return (
    <TempTwo
      sectionId="curriculum-planning"
      headingIcon={<HiOutlineMap />}
      headingText="Planning"
      title="Curriculum Planning"
      description={`Effective curriculum planning is foundational to student success. Our analytics tools help educational institutions design curricula based on data-driven insights into student needs, performance trends, and industry requirements. By aligning curriculum content with learning objectives and evolving educational standards, we ensure that students are equipped with the skills and knowledge they need to excel in their academic and professional lives.`}
      linkText="Explore More"
      linkHref="/case-studies"
      mapComponent={CGraph}
      features={features}
    />
  );
};

export default CPlanning;
