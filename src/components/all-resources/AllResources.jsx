import React from "react";
import { motion } from "framer-motion";
import gif1 from "../../assets/resources/blog.gif";
import gif2 from "../../assets/resources/case-studies.gif";
import img1 from "../../assets/resources/partners.svg";
import img2 from "../../assets/resources/tutorial.svg";

const AllResources = () => {
  return (
    <div
      id="resources"
      className="bg-gradient-to-b from-gray-900 via-[#002430] to-gray-900 text-white py-16 px-6 md:px-12"
    >
      {/* Heading with Motion */}
      <motion.h1
        className="text-3xl md:text-4xl font-abel font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }} // Start position off-screen
        animate={{ opacity: 1, y: 0 }} // End position in place
        transition={{
          duration: 0.7, // Duration of the animation
          ease: "easeOut",
        }}
      >
        Checkout Our Resources
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Blog Section */}
        <motion.section
          className="bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <img src={gif1} alt="blog" className="w-full md:w-1/2 rounded-lg" />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Blog</h2>
            {/* <p className="text-gray-300 text-sm md:text-base mb-6">
              Our blog dives into current trends and future possibilities,
              providing insights:
            </p> */}
            <ul className="text-gray-400 text-sm md:text-base list-none list-inside space-y-2 mb-4">
              <li>In-depth industry analyses and trend forecasts</li>
              <li>Actionable guides for real-world applications</li>
              <li>Interviews with thought leaders and innovators</li>
            </ul>
            <a
              href="/blog"
              className="inline-block text-center py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-semibold text-white hover:from-green-400 hover:to-blue-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section
          className="bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <img
            src={gif2}
            alt="case study"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Case Studies
            </h2>
            {/* <p className="text-gray-300 text-sm md:text-base mb-6">
              Discover how data-driven insights have transformed businesses
              across sectors:
            </p> */}
            <ul className="text-gray-400 text-sm md:text-base list-none list-inside space-y-2 mb-4">
              <li>Detailed problem-to-solution narratives</li>
              <li>Quantifiable outcomes and improvements</li>
              <li>Challenges, solutions, and key takeaways</li>
            </ul>
            <a
              href="/case-studies"
              className="inline-block text-center py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-semibold text-white hover:from-green-400 hover:to-blue-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          className="bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <img
            src={img1}
            alt="partners"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Partners</h2>
            {/* <p className="text-gray-300 text-sm md:text-base mb-6">
              Collaboration is at the heart of innovation. Learn more about our
              partnerships and joint initiatives:
            </p> */}
            <ul className="text-gray-400 text-sm md:text-base list-none list-inside space-y-2 mb-4">
              <li>Industry-leading technology and service partners</li>
              <li>Collaborative projects driving breakthrough solutions</li>
              <li>Exclusive insights from partner collaborations</li>
            </ul>
            <a
              href="/partners"
              className="inline-block text-center py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-semibold text-white hover:from-green-400 hover:to-blue-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.section>

        {/* Tutorials Section */}
        <motion.section
          className="bg-gray-800 bg-opacity-40 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8"
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 50,
          }}
          viewport={{
            once: false,
            amount: 0.25,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <img
            src={img2}
            alt="tutorials"
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Tutorials
            </h2>
            {/* <p className="text-gray-300 text-sm md:text-base mb-6">
              Our resources cater to all levels, from beginners to seasoned
              professionals:
            </p> */}
            <ul className="text-gray-400 text-sm md:text-base list-none list-inside space-y-2 mb-4">
              <li>Hands-on tutorials for real-world application</li>
              <li>Project-based learning for practical experience</li>
              <li>Tools and resources for continued skill growth</li>
            </ul>
            <a
              href="/tutorials"
              className="inline-block text-center py-2 px-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 font-semibold text-white hover:from-green-400 hover:to-blue-500 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AllResources;
