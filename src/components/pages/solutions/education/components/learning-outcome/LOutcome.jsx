import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import LGraph from "./LGraph";
import TempOne from "../../../../../templates/temp-01/TempOne";

const LOutcome = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Curriculum Effectiveness Evaluation",
      description:
        "Use data to assess whether students are meeting desired learning outcomes, ensuring that the curriculum is achieving its educational goals.",
    },
    {
      icon: <MdInsights />,
      title: "Skill Development Tracking",
      description:
        "Measure the development of key skills (e.g., critical thinking, problem-solving) and competencies, ensuring that students are prepared for future academic and career success.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Outcome-Based Education",
      description:
        "Leverage analytics to design outcome-based education programs, aligning teaching methods with measurable, long-term learning outcomes.",
    },
  ];

  return (
    <TempOne
      sectionId="learning-outcome"
      headingIcon={<MdTrendingUp />}
      headingText="Learning"
      title="Learning Outcomes"
      description={`Improving learning outcomes is the ultimate goal of education. Our solutions help measure and optimize learning outcomes by analyzing academic data, standardized test results, and student feedback. By identifying effective teaching strategies and areas for improvement, we enable educators to refine their approaches and ensure that students are achieving the best possible academic results.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={LGraph}
      features={features}
    />
  );
};

export default LOutcome;
