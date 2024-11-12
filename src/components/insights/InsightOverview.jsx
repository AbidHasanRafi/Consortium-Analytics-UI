import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Chart from "./Chart";

const VisualizationAnalytics = () => {
  const headerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

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
    <section id="expertise" className="bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          ref={headerRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold font-abel text-white mb-4 py-5">
            Visualization of Data
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
          <motion.div
            className="flex-1 space-y-6 pt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 text-xl">
              Harness the power of data with these advanced analytics features:
            </p>
            <ul className="list-disc pl-6 text-gray-200 text-lg">
              <li>
                Interactive Charts: Visualize trends and explore data
                dynamically.
              </li>
              <li>
                Real-Time Analytics: Monitor key metrics and live performance.
              </li>
              <li>
                Customizable Filters: Focus on specific datasets with advanced
                filtering options.
              </li>
              <li>
                Heatmaps & Graphs: Gain deeper insights into your data with
                visual heatmaps.
              </li>
              <li>
                Zoom & Hover: Engage with data directly to uncover more detailed
                patterns.
              </li>
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
                  className="inline-block text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg bg-clip-text hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  Explore More
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <Chart />
          </motion.div>
        </div>

        {/* New Section with Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.section
            className="bg-gray-800 bg-opacity-40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            <p className="text-gray-300 font-semibold mb-4">
              Unlock the power of data visualization and analysis:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Interactive visualizations for better insights</li>
              <li>Step-by-step model-building guides</li>
            </ul>
          </motion.section>

          <motion.section
            className="bg-gray-800 bg-opacity-40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-gray-300 font-semibold mb-4">
              Explore documentation for effective data analysis:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Guides for data cleaning and preprocessing</li>
              <li>Advanced statistical analysis methods</li>
            </ul>
          </motion.section>

          <motion.section
            className="bg-gray-800 bg-opacity-40 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-gray-300 font-semibold mb-4">
              Get expert support for your projects:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Personalized analysis tips and advice</li>
              <li>Access to FAQs and troubleshooting</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default VisualizationAnalytics;
