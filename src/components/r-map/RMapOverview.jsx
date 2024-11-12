import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import GeoMap from "./GeoMap";

const RMapOverview = () => {
  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setInView(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="products"
      className="bg-white text-gray-900 py-16 px-6 md:px-12"
    >
      <div className="rounded-md p-8 max-w-7xl mx-auto shadow-sm">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          ref={headerRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Analytics and Insights
          </h2>
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* GeoMap Visualization */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <GeoMap />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1 space-y-6 pt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-800 font-semibold text-lg">
              Harness the power of data with these advanced analytics features:
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
              <li>
                Interactive Geo Maps: Explore state-level demand insights.
              </li>
              <li>
                Real-Time Analytics: Monitor key market trends and dynamics.
              </li>
              <li>
                Customizable Filters: Focus on specific areas and metrics.
              </li>
              <li>
                Heatmaps & Graphs: Uncover valuable data patterns visually.
              </li>
              <li>Zoom & Hover: Interact to reveal deeper data insights.</li>
            </ul>
            <motion.div
              className="mt-16 text-start"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #16a34a, #3b82f6)",
                }}
              >
                <a
                  href="#"
                  className="inline-block text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  Explore More
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* New Section with Grid Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <motion.section
          className="bg-neutral-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
          className="bg-neutral-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
          className="bg-neutral-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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

export default RMapOverview;
