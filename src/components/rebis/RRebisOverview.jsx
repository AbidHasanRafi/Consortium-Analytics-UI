import React from "react";
import { motion } from "framer-motion";

const RRebisOverview = () => {
  // Animation variants for smooth, visible effects
  const imageVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const listVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const buttonVariant = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(75, 85, 99, 0.3)", // Adjusted color for this section
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Smooth Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-100"
            variants={textVariant}
          >
            R-Rebis: Granular Real Estate Data at Your Fingertips
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-300"
            variants={textVariant}
          >
            Access and download detailed real estate data to support informed
            decision-making. R-Rebis offers a comprehensive summary of data in
            each section, making it easy to analyze market trends and property
            information.
          </motion.p>
        </motion.div>

        {/* Animated Feature List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={textVariant}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Comprehensive Data Access
            </h3>
            <p className="mt-4 text-gray-600">
              View, analyze, and download data sets across various categories,
              including property, transaction, and listing data. R-Rebis
              presents real estate data in a structured, easy-to-navigate format
              for actionable insights.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            variants={textVariant}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Key Features and Tools
            </h3>
            <motion.ul className="mt-4 space-y-2 text-gray-600">
              {[
                "🏠 Property/Projects Data",
                "🔄 Transaction Data",
                "📋 Listing Data",
                "📈 Market Trends",
                "📊 Supply Analysis",
                "⚖️ Comparison Tools",
                "📰 Market Reports",
              ].map((feature, i) => (
                <motion.li key={feature} custom={i} variants={listVariant}>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Button with Hover Effect */}
        <motion.div className="mt-12 text-center">
          <motion.a
            href="#"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            Discover R-Rebis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RRebisOverview;
