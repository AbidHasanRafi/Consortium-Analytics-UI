import React from "react";
import { motion } from "framer-motion";

const OurLocation = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-abel font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }} // Start position off-screen
        animate={{ opacity: 1, y: 0 }} // End position in place
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        Our Location
      </motion.h1>

      {/* Google Map iframe */}
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.0639689833!2d90.25487663557918!3d23.780753030672756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1730982371082!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default OurLocation;
