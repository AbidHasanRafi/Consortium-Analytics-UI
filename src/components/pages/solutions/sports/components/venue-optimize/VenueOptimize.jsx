import React from "react";
import { MdTrendingUp, MdInsights, MdOutlineSavings } from "react-icons/md";
import TempOne from "../../../../../templates/temp-01/TempOne";
import VenueGraph from "./VenueGraph";

const VenueOptimize = () => {
  const features = [
    {
      icon: <MdTrendingUp />,
      title: "Seating and Space Utilization",
      description:
        "Analyze venue data to optimize seating arrangements and space usage, maximizing revenue and improving fan experience during events.",
    },
    {
      icon: <MdInsights />,
      title: "Crowd Management",
      description:
        "Use real-time data to monitor crowd movement and optimize logistics for safety and comfort, reducing congestion and enhancing venue flow.",
    },
    {
      icon: <MdOutlineSavings />,
      title: "Event Scheduling and Planning",
      description:
        "Leverage analytics to optimize event scheduling, ensuring that venue space is used efficiently and that events are strategically planned for maximum attendance.",
    },
  ];

  return (
    <TempOne
      sectionId="venue-optimize"
      headingIcon={<MdTrendingUp />}
      headingText="Optimization"
      title="Venue Optimization"
      description={`Maximizing the efficiency of sports venues is crucial for both operational success and fan experience. Our venue optimization tools analyze traffic flow, seating arrangements, crowd behavior, and concession performance to improve venue layouts and operations. By optimizing space utilization and enhancing the guest experience, we help venues run smoothly and create memorable events.`}
      linkText="Explore More"
      linkHref="/case-studies"
      chartComponent={VenueGraph}
      features={features}
    />
  );
};

export default VenueOptimize;
