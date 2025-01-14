import React from "react";
import HeadSection from "./components/head-section/HeadSection";
import BlogList from "./components/blog-list/BlogList";
import SubscribeHeader from "./components/subscribe-header/SubscribeHeader";
import DemoReq from "./components/demo-request/DemoReq";

const Blogs = () => {
  return (
    <div className="bg-white min-h-screen mt-16 px-1 lg:px-16">
      <HeadSection />
      <BlogList />
      <div className="space-y-20 pb-20">
        {" "}
        <SubscribeHeader />
        <DemoReq />
      </div>
    </div>
  );
};

export default Blogs;
