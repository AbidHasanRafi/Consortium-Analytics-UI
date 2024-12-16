import React from "react";
import { HiOutlineMap } from "react-icons/hi";
import { SegementGraph } from "./SegmentGraph";
import TempTwo from "../../../../../templates/temp-02/TempTwo";

const MarketSegment = () => {
  const features = [
    {
      icon: <HiOutlineMap />,
      title: "Identify Target Audiences",
      description:
        "Analyze market data to divide a broad consumer or business market, typically consisting of existing and potential customers, into sub-groups based on shared characteristics.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Customized Marketing Strategies",
      description:
        "Tailor marketing and sales efforts to different segments, improving customer engagement and conversion rates.",
    },
    {
      icon: <HiOutlineMap />,
      title: "Optimized Resource Allocation",
      description:
        "Allocate resources more effectively by focusing efforts on high-potential market segments that offer the best return on investment.",
    },
  ];

  return (
    <TempTwo
      sectionId="market-segment"
      headingIcon={<HiOutlineMap />}
      headingText="Segmentation"
      title="Market Segmentation"
      description={`Market segmentation involves dividing a broad market into smaller, more manageable segments based on characteristics like demographics, behaviors, or needs. Our team uses data analysis techniques to help you identify key market segments, allowing for more targeted and effective marketing strategies. By focusing on high-potential segments, you can improve customer engagement, optimize resources, and increase market share.`}
      linkText="Discover More"
      linkHref="/blogs"
      mapComponent={SegementGraph}
      features={features}
    />
  );
};

export default MarketSegment;
