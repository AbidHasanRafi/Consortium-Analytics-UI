import React from "react";
import img from "../../assets/analytics.svg";

const TechNodes = () => {
  return (
    <section id="expertise" className="bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1 space-y-6 pt-4 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold font-mont text-white mb-4">
              Data-driven analytics with no limits
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 text-justify">
              Consortium Analytics leverages powerful tools like Google Cloud,
              Azure, AWS, Microsoft Power BI, Tableau, Snowflake, Google
              Analytics, SAS, Python, and R to enhance your data analysis and
              visualization capabilities. We offer comprehensive services in
              visualization, analytics, data enrichment, and engineering, along
              with development services for software, mobile applications, and
              websites tailored to user requirements. Our solutions span various
              industries, including real estate, retail, financial services,
              healthcare, transport & logistics, cities and governance, sports,
              and education.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2">
            <img src={img} alt="Data Engineering" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechNodes;
