import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const cardVariants = {
    center: {
      x: 0,
      scale: 1.15,
      opacity: 1,
      zIndex: 2,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
    left: {
      x: "-120%",
      scale: 0.9,
      opacity: 0.5,
      zIndex: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
    right: {
      x: "120%",
      scale: 0.9,
      opacity: 0.5,
      zIndex: 1,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
    hidden: {
      x: "200%",
      scale: 0.8,
      opacity: 0,
      zIndex: 0,
    },
  };

  return (
    <div className="relative w-full h-96 flex items-center justify-center overflow-hidden">
      {/* Left arrow button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 rounded-full"
      >
        <SlArrowLeft />
      </button>

      {/* Slider content */}
      <AnimatePresence>
        {cards.map((card, index) => {
          const position =
            index === currentIndex
              ? "center"
              : index === (currentIndex - 1 + cards.length) % cards.length
              ? "left"
              : index === (currentIndex + 1) % cards.length
              ? "right"
              : "hidden";

          return (
            <motion.div
              key={card.title}
              variants={cardVariants}
              initial={position}
              animate={position}
              exit="hidden"
              className="absolute w-64 h-80 rounded-lg shadow-lg p-6 flex flex-col justify-between sm:w-72 md:w-80 lg:w-96 xl:w-1/4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Card Title with Icon */}
              <div className="text-center">
                <div className="text-3xl text-gradient mb-2">{card.icon}</div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-200 text-sm mt-2 text-center">
                {card.description}
              </p>

              {/* Button */}
              <div
                className="inline-block rounded-lg border-2 p-[2px] border-transparent bg-clip-padding mt-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #16a34a, #3b82f6)",
                }}
              >
                <a
                  href={card.link}
                  className="inline-block text-center w-full text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-lg bg-clip-text hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  Explore More
                </a>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Right arrow button */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10 rounded-full"
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Slider;
