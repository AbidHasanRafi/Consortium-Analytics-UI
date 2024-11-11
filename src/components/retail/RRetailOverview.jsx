import React from "react";
import { motion } from "framer-motion";

const RRetailOverview = () => {
  // Smooth animation variants for minimal motion
  const imageVariant = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const listVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  const buttonVariant = {
    hover: {
      scale: 1.02,
      boxShadow: "0px 2px 8px rgba(0, 123, 255, 0.2)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="bg-gradient-to-r from-white to-blue-50 text-gray-800 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Image and Header with Smooth Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center"
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900"
            variants={textVariant}
          >
            R-Retail: Intelligent Location-Based Analytics
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            variants={textVariant}
          >
            R-Retail empowers you to layer and analyze location-based data on a
            smart map tool, helping you identify the potential of specific
            locations or points with advanced analytics.
          </motion.p>
        </motion.div>

        {/* Animated Feature List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            variants={textVariant}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Discover Location Potential
            </h3>
            <p className="mt-4 text-gray-600">
              With R-Retail’s smart map tool, you can overlay multiple data
              layers to assess the value of a location. From footfall to
              proximity and competition analysis, R-Retail provides all the
              insights needed for strategic location decisions.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md"
            variants={textVariant}
          >
            <h3 className="text-xl font-semibold text-gray-700">
              Core Analytics Tools
            </h3>
            <motion.ul className="mt-4 space-y-2 text-gray-600">
              {[
                "👥 Footfall Analytics",
                "🗺️ Catchment Analysis",
                "📍 Proximity Analysis",
                "⚖️ Competition Comparison",
                "💵 Revenue Projection",
                "📈 Branch Expansion Planning",
                "🌟 Location Scorings",
                "🔧 Custom Data Analytics",
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
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md"
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            Explore R-Retail
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default RRetailOverview;
