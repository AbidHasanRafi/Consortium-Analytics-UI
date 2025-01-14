import React from "react";
import img from "../../assets/analytics.svg";

const TechNodes = () => {
  return (
    <section id="expertise" className="bg-gray-900 pb-16 px-6 sm:px-8 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center justify-between">
          <div className="flex-1 space-y-6 pt-4 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-start font-bold font-mont text-white mb-6">
              Innovative Analytics and Development Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 text-start leading-relaxed">
              At Consortium Analytics, we use powerful tools like Google Cloud,
              Azure, AWS, Power BI, Tableau, Snowflake, SAS, Python, and R to
              boost your data analysis and visualization. Our services cover
              everything from data visualization and analytics to data
              enrichment. We also specialize in software, mobile app, and
              website development, including AI-powered applications. With
              technologies like Django, Spring Boot, React, Angular, Flutter,
              Java, and Node.js, we create customized solutions that are
              perfectly suited to your business needs.
            </p>
          </div>
          <div className="w-full md:w-2/3 lg:w-2/3 xl:w-1/2 flex items-center justify-center order-1 md:order-2">
            <img src={img} alt="Data Engineering" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechNodes;
