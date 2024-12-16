import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import StudentGraph from "./StudentGraph";

const StudentInsights = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Academic Progress Monitoring",
      description:
        "Use data analytics to track individual student performance, identifying areas of improvement and tailoring interventions for better outcomes.",
    },
    {
      icon: <MdInsights />,
      title: "Behavioral and Engagement Analysis",
      description:
        "Analyze student behavior and engagement patterns to offer personalized learning experiences that enhance motivation and academic success.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Predictive Analytics for Retention",
      description:
        "Leverage predictive models to identify students at risk of dropping out, allowing for early intervention and support to improve retention rates.",
    },
  ];

  return (
    <TempOne
      sectionId="student-insights"
      headingIcon={<MdTrendingUp />}
      headingText="Insights"
      title="Student Insights"
      description={`Understanding student needs and behavior is essential for providing personalized education. Our student insights tools analyze academic performance, attendance, and engagement data to help institutions identify at-risk students, personalize learning paths, and improve support strategies. By recognizing trends in student behavior and performance, we empower educators to make timely interventions and improve student outcomes.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={StudentGraph}
      features={features}
    />
  );
};

export default StudentInsights;
