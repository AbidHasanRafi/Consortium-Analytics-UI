import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/data-engineering.svg";

const DataEngineering = () => {
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
            Data Engineering Solutions
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
          <motion.div
            className="flex-1 space-y-6 pt-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 text-xl">
              Transform raw data into actionable insights with these powerful
              tools and practices:
            </p>
            <ul className="list-disc pl-6 text-gray-200 text-lg">
              <li>
                Data Ingestion Pipelines: Seamlessly collect data from multiple
                sources.
              </li>
              <li>
                ETL Processes: Extract, transform, and load data for optimized
                performance.
              </li>
              <li>
                Data Warehousing: Organize and manage large volumes of
                structured data.
              </li>
              <li>
                Data Quality Assurance: Ensure accuracy and consistency across
                datasets.
              </li>
              <li>
                Real-Time Data Processing: Process and analyze data in real
                time.
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
                  Learn More
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <img src={img} alt="Data Engineering" />
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
              Build reliable data infrastructure:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Pipeline automation for seamless data flow</li>
              <li>Data lake and warehouse architecture</li>
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
              Data processing and transformation:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Data cleansing and normalization techniques</li>
              <li>Batch and streaming processing options</li>
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
              Scalability and performance optimization:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
              <li>Optimize storage and compute resources</li>
              <li>Implement data caching and indexing</li>
            </ul>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default DataEngineering;
