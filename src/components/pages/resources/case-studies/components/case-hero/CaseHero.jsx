import React from "react";
import img from "../../../../../../assets/case-studies/6.png";

const CaseHero = () => {
  return (
    <div className="flex flex-col md:flex-row mx-6 md:mx-32 mt-10 bg-gray-100 rounded-lg overflow-hidden">
      <figure className="w-full md:w-1/2">
        <img
          src={img}
          alt="Case Studies"
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="flex flex-col justify-center p-6 md:p-8 space-y-4 md:w-1/2">
        <p className="text-sm font-semibold text-gray-500 uppercase">
          Most Recent
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          The Evolution and Impact of Computer Operating Systems (OS)
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
          Read our new edition of Spatial Indexes 101 - your guide to faster
          queries and reduced storage without the heavy coding.
        </p>
        <a href="/impact-of-os">
          <button className="btn btn-info self-start px-6 py-3 text-sm font-medium">
            Read More
          </button>
        </a>
      </div>
    </div>
  );
};

export default CaseHero;
