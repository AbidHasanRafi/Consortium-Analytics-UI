import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RetailGraph } from "./RetailGraph";

const RetailAnalysis = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById("retail-analysis");
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <section
      id="retail-analysis"
      className="bg-gray-50 text-gray-900 py-16 px-6 md:px-12"
    >
      <div className="bg-white rounded-lg p-8 max-w-7xl mx-auto shadow-md">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 py-4">
            Market Analysis
          </h2>
          <p className="text-xl text-gray-700">
            Dive into the trends, sales analytics, and customer insights to
            optimize retail performance.
          </p>
        </motion.div>

        {/* Retail Analysis Content Section */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center justify-between">
          {/* Retail Graph Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <RetailGraph />
          </motion.div>

          {/* Retail Insights Sections */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Sales Analytics Section */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-blue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sales Analytics
                </h3>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  <li>Track monthly sales performance</li>
                  <li>Identify high-performing products</li>
                  <li>Analyze peak sales periods</li>
                  <li>Compare sales across different regions</li>
                </ul>
              </div>
            </motion.div>

            {/* Customer Insights Section */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer Insights
                </h3>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  <li>Understand customer preferences</li>
                  <li>Analyze buying behaviors and trends</li>
                  <li>Identify key customer segments</li>
                  <li>Track customer lifetime value (CLV)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md text-lg font-medium shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
          >
            Explore More
          </a>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.section
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
        >
          <p className="text-gray-900 font-semibold mb-4">
            Unlock the power of data visualization and analysis:
          </p>
          <ul className="text-gray-800 list-disc list-inside space-y-2 mb-3">
            <li>Interactive visualizations for better insights</li>
            <li>Step-by-step model-building guides</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <p className="text-gray-900 font-semibold mb-4">
            Explore documentation for effective data analysis:
          </p>
          <ul className="text-gray-800 list-disc list-inside space-y-2 mb-3">
            <li>Guides for data cleaning and preprocessing</li>
            <li>Advanced statistical analysis methods</li>
          </ul>
        </motion.section>

        <motion.section
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="text-gray-900 font-semibold mb-4">
            Get expert support for your projects:
          </p>
          <ul className="text-gray-800 list-disc list-inside space-y-2 mb-3">
            <li>Personalized analysis tips and advice</li>
            <li>Access to FAQs and troubleshooting</li>
          </ul>
        </motion.section>
      </div>
    </section>
  );
};

export default RetailAnalysis;
